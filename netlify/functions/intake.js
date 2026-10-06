// intake.js — receives Business Operations quote requests and onboarding intakes.
// 1. Creates a row in Notion (Client Intake for quotes, Client Onboarding for onboarding),
//    answers written into the page body so the database needs only a few properties.
// 2. Emails Tiara a copy of the answers through Brevo.
// 3. Emails the client the confirmation (quote) or the book-your-call email (onboarding).
// Notion is optional: if NOTION_TOKEN or the database id is missing, the emails still go out
// and the response says notion:false. Nothing is lost.
//
// Env vars (Netlify → Site configuration → Environment variables):
//   BREVO_API_KEY            already set (newsletter uses it)
//   INTAKE_FROM_EMAIL        verified Brevo sender, default theintentionaltea@gmail.com
//   INTAKE_TO_EMAIL          where Tiara's copy goes, default theintentionaltea@gmail.com
//   NOTION_TOKEN             internal integration token (secret_...)
//   NOTION_QUOTE_DB          Client Intake database id
//   NOTION_ONBOARDING_DB     Client Onboarding database id

const SERVICES = {
  clarity: 'Business Clarity Call',
  operations: 'Custom Operations & Systems Hub',
  build: 'Full Business Build',
};

const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const nl = (s) => esc(s).replace(/\n/g, '<br>');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  let data;
  try { data = JSON.parse(event.body); } catch { return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) }; }

  // Honeypot: bots fill the hidden "website" field.
  if (data.website) return { statusCode: 200, body: JSON.stringify({ success: true }) };

  const kind = data.kind === 'onboarding' ? 'onboarding' : 'quote';
  const service = SERVICES[data.service] ? data.service : 'clarity';
  const serviceName = SERVICES[service];
  const name = String(data.name || '').trim().slice(0, 200);
  const business = String(data.business || '').trim().slice(0, 200);
  const email = String(data.email || '').trim().slice(0, 200);
  const answers = Array.isArray(data.answers) ? data.answers.slice(0, 40).map((a) => ({ q: String(a.q || '').slice(0, 300), a: String(a.a || '').slice(0, 5000) })) : [];

  if (!name || !business || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name, business and a valid email are required' }) };
  }

  const result = { success: false, notion: false, emailed: false };
  const submitted = new Date();

  // ---- 1. Notion -------------------------------------------------------------------------
  const token = process.env.NOTION_TOKEN;
  const dbId = kind === 'quote' ? process.env.NOTION_QUOTE_DB : process.env.NOTION_ONBOARDING_DB;
  if (token && dbId) {
    try {
      const children = [];
      for (const { q, a } of answers) {
        children.push({ object: 'block', type: 'heading_3', heading_3: { rich_text: [{ type: 'text', text: { content: q } }] } });
        const text = a || '(left blank)';
        for (let i = 0; i < text.length; i += 1900) {
          children.push({ object: 'block', type: 'paragraph', paragraph: { rich_text: [{ type: 'text', text: { content: text.slice(i, i + 1900) } }] } });
        }
      }
      const body = {
        parent: { database_id: dbId },
        properties: {
          Name: { title: [{ type: 'text', text: { content: `${business} · ${name}` } }] },
          Email: { email },
          Service: { select: { name: serviceName } },
          Status: { select: { name: 'New' } },
          Submitted: { date: { start: submitted.toISOString() } },
        },
        children: children.slice(0, 100),
      };
      const r = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Notion-Version': '2022-06-28', 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      result.notion = r.ok;
      if (!r.ok) result.notionError = (await r.text()).slice(0, 300);
    } catch (err) {
      result.notionError = err.message;
    }
  }

  // ---- 2 + 3. Brevo emails ------------------------------------------------------------------
  const apiKey = process.env.BREVO_API_KEY;
  const from = { name: 'The Intentional Tea', email: process.env.INTAKE_FROM_EMAIL || 'theintentionaltea@gmail.com' };
  const toTiara = process.env.INTAKE_TO_EMAIL || 'theintentionaltea@gmail.com';
  // INTAKE_BOOKING_LINK is no longer read: the onboarding booking button lives in Brevo template 38
  // and is edited there, which also means changing it needs no deploy. The env var can be removed
  // from Netlify once this is live.

  const answersHtml = answers.map(({ q, a }) =>
    `<p style="margin:18px 0 4px;font-family:'Lora',Georgia,serif;font-style:italic;font-size:17px;color:#1A1A1A;">${esc(q)}</p>` +
    `<p style="margin:0;font-family:'Instrument Sans',Arial,sans-serif;font-size:14.5px;line-height:1.7;color:#2D2826;">${a ? nl(a) : '<span style="color:#9B4F4A;">(left blank)</span>'}</p>`
  ).join('');

  // The layout below is the CURRENT email design: Lora + Instrument Sans, #FAF7F2 ground, white
  // card, blush pill eyebrow, dark footer band. It is a deliberate copy of the layout in
  // EMAILS/_build/build-emails.mjs, because this function lives in the website repo and cannot
  // import from the IntentionalTeaHQ folder.
  //
  // EMAILS/ IS THE SOURCE OF TRUTH FOR THE DESIGN. If that layout changes, this has to be brought
  // across by hand. It is used for ONE email only: Tiara's internal notification, which carries a
  // variable-length list of the client's answers and so cannot be a fixed Brevo template. Every
  // client-facing email is a real Brevo template (16 for quotes, 38 for onboarding intakes).
  //
  // This replaced an older design (Georgia, #EDE3DD) that was frozen here on 2026-09-19 and never
  // migrated, so these emails arrived visibly off-brand next to the templated ones.
  const SERIF = "'Lora',Georgia,'Times New Roman',serif";
  const SANS = "'Instrument Sans',Arial,Helvetica,sans-serif";

  const shell = (inner) => `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Instrument+Sans:wght@400;700&display=swap" rel="stylesheet"></head>
<body style="margin:0;padding:0;background:#FAF7F2;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#FAF7F2;"><tr><td align="center" style="padding:36px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
<tr><td align="center" style="padding:0 0 22px;"><a href="https://theintentionaltea.com" style="font-family:${SERIF};font-size:15px;letter-spacing:0.28em;text-transform:uppercase;color:#1A1A1A;text-decoration:none;">The Intentional Tea</a></td></tr>
<tr><td style="background:#FFFFFF;border-radius:14px;padding:40px 44px;">${inner}</td></tr>
<tr><td align="center" style="background:#1A1A1A;border-radius:14px;margin-top:18px;padding:26px 40px;">
  <p style="margin:0 0 8px;font-family:${SERIF};font-style:italic;font-size:20px;color:#FFFFFF;">The Intentional Tea</p>
  <p style="margin:0;font-family:${SANS};font-size:9px;font-weight:700;letter-spacing:0.35em;text-transform:uppercase;color:#E2C0B9;">Business Operations &middot; <a href="https://theintentionaltea.com/services" style="color:#E2C0B9;">theintentionaltea.com</a></p>
</td></tr>
</table></td></tr></table></body></html>`;

  const eyebrow = (t) => `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;"><tr><td style="background:rgba(226,192,185,0.18);border:1px solid rgba(226,192,185,0.45);border-radius:100px;padding:6px 14px;font-family:${SANS};font-size:9px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;color:#9B4F4A;">${esc(t)}</td></tr></table>`;
  const h1 = (t) => `<h1 style="margin:0 0 22px;font-family:${SERIF};font-style:italic;font-weight:400;font-size:34px;line-height:1.15;letter-spacing:0.02em;color:#1A1A1A;">${t}</h1>`;
  const p = (t) => `<p style="margin:0 0 18px;font-family:${SANS};font-size:15px;line-height:1.75;color:#2D2826;">${t}</p>`;

  const tiaraHtml = shell(eyebrow(kind === 'quote' ? 'New quote request' : 'New onboarding intake') +
    h1(`${esc(business)}<br><span style="color:#9B4F4A;">${esc(serviceName)}</span>`) +
    p(`<strong>${esc(name)}</strong> · <a href="mailto:${esc(email)}" style="color:#9B4F4A;">${esc(email)}</a><br><span style="font-size:12px;color:#6b625c;">${submitted.toUTCString()} · ${result.notion ? 'Saved to Notion' : 'Not saved to Notion (' + esc(result.notionError || 'not configured') + ')'}</span>`) +
    answersHtml);

  // ---- 2. Brevo contact ---------------------------------------------------------------------
  // Written BEFORE anything is sent, and the ordering is load-bearing. The branded quote
  // confirmation (template 16) merges {{ contact.FIRSTNAME }} and {{ contact.BUSINESS }} — contact
  // ATTRIBUTES, not send params — so if the contact does not exist yet, those fields render empty
  // and the email still reports as sent. Nothing looks broken; the client just gets "Hi ,".
  // quote-02-your-quote, the quote Tiara sends by hand afterwards, merges the same two, so the
  // contact has to exist for that as well.
  //
  // A quote request is a lead, not a client, so it goes to "Business Operations — Leads" (10).
  // An onboarding intake is someone already working with Tiara, so that goes to Clients (9).
  const LIST_LEADS = 10;
  const LIST_CLIENTS = 9;
  const parts = name.split(/\s+/);

  if (apiKey) {
    try {
      const r = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: { accept: 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: parts[0] || '',
            LASTNAME: parts.slice(1).join(' '),
            BUSINESS: business,
            PHASE: kind === 'quote' ? 'Quote requested' : 'Onboarding intake received',
          },
          listIds: [kind === 'quote' ? LIST_LEADS : LIST_CLIENTS],
          updateEnabled: true,
        }),
      });
      // 201 created, 204 updated. Anything else must not read as success.
      result.contact = r.status === 201 || r.status === 204;
      if (!result.contact) {
        const detail = await r.text();
        result.contactError = r.status + ' ' + detail.slice(0, 200);
      }
    } catch (err) {
      result.contactError = err.message;
    }
  }

  // ---- 3. Brevo emails ----------------------------------------------------------------------
  // Tiara's own copy stays inline: it is an internal notification, it carries the full answer set,
  // and no designed template exists for it.
  //
  // The client's copy differs by kind:
  //   quote      -> Brevo template 16 (quote-01-request-received): the designed email that lives in
  //                 EMAILS/ and can be edited in Brevo without a deploy. This replaced a hardcoded
  //                 inline version that had drifted from it — two versions of one email, and only
  //                 the undesigned one was actually sending.
  //   onboarding -> still inline. [THIN — no designed onboarding-intake template exists in EMAILS/.
  //                 astrology-01-intake-received is a different flow. Not invented here.]
  if (apiKey) {
    const post = (body) => fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { accept: 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const subjectForTiara = (kind === 'quote' ? 'Quote request' : 'Onboarding intake')
      + ': ' + business + ' · ' + serviceName;
    try {
      const [a, b] = await Promise.all([
        post({
          sender: from,
          to: [{ email: toTiara, name: 'Tiara' }],
          subject: subjectForTiara,
          htmlContent: tiaraHtml,
          replyTo: { email, name },
        }),
        // Both client emails are now Brevo templates, so subject, sender and copy are all editable
        // in Brevo without a deploy, and both render in the current design.
        //   quote      -> 16 (quote-01-request-received)
        //   onboarding -> 38 (intake-01-received). SERVICE is a send param: the eyebrow shows which
        //                 service the intake was for, and that is per-submission, not a lasting fact
        //                 about the person, so it does not belong on the contact record.
        kind === 'quote'
          ? post({ to: [{ email, name }], templateId: 16, replyTo: { email: toTiara, name: 'Tiara' } })
          : post({ to: [{ email, name }], templateId: 38, params: { SERVICE: serviceName }, replyTo: { email: toTiara, name: 'Tiara' } }),
      ]);
      result.emailed = a.ok && b.ok;
      if (!result.emailed) result.emailError = 'tiara=' + a.status + ' client=' + b.status;
    } catch (err) {
      result.emailError = err.message;
    }
  }

  result.success = result.notion || result.emailed;
  return { statusCode: result.success ? 200 : 500, body: JSON.stringify(result) };
};
