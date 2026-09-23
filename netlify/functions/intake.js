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
//   INTAKE_BOOKING_LINK      booking link for onboarding replies, default the Cal.com 30min event

const SERVICES = {
  clarity: 'Business Clarity Call',
  operations: 'Custom Operations & Systems Hub',
  build: 'Brand & Systems Build',
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
  const booking = process.env.INTAKE_BOOKING_LINK || 'https://cal.com/tiara-stewart-k2odux/30min';

  const answersHtml = answers.map(({ q, a }) =>
    `<p style="margin:18px 0 4px;font-family:Georgia,serif;font-style:italic;font-size:16px;color:#1A1A1A;">${esc(q)}</p>` +
    `<p style="margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#2D2826;">${a ? nl(a) : '<span style="color:#9B4F4A;">(left blank)</span>'}</p>`
  ).join('');

  const shell = (inner) => `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#EDE3DD;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EDE3DD;"><tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FAF7F2;">
<tr><td align="center" style="background:#1A1A1A;padding:16px 40px;"><p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.4em;text-transform:uppercase;color:#E2C0B9;font-weight:bold;">The Intentional Tea</p></td></tr>
<tr><td style="padding:44px 44px 40px;">${inner}</td></tr>
<tr><td align="center" style="padding:18px 40px;border-top:1px solid rgba(26,26,26,0.08);"><p style="margin:0;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(26,26,26,0.45);">Business Operations · theintentionaltea.com</p></td></tr>
</table></td></tr></table></body></html>`;

  const eyebrow = (t) => `<p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.35em;text-transform:uppercase;color:#9B4F4A;font-weight:bold;">${esc(t)}</p>`;
  const h1 = (t) => `<h1 style="margin:0 0 18px;font-family:Georgia,serif;font-style:italic;font-weight:normal;font-size:32px;line-height:1.15;color:#1A1A1A;">${t}</h1>`;
  const p = (t) => `<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#2D2826;">${t}</p>`;
  const button = (href, label) => `<p style="margin:26px 0 8px;"><a href="${esc(href)}" style="display:inline-block;background:#1A1A1A;color:#FFFFFF;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;font-weight:bold;padding:14px 28px;border-radius:8px;text-decoration:none;">${esc(label)}</a></p>`;

  const clientHtml = kind === 'quote'
    ? shell(eyebrow(serviceName) + h1('Got it.') +
        p(`I'll review your answers and follow up within 48 hours with a recommendation and next steps. If you have anything to add in the meantime, reply to this email.`) +
        p(`Tiara<br>The Intentional Tea`))
    : shell(eyebrow(serviceName) + h1('Your intake is in.<br><span style="color:#9B4F4A;">Book your call.</span>') +
        p(`Thank you for the detail. I read every answer before we talk, so the call starts from what you wrote, not from zero.`) +
        p(`Next step: pick a time that works for you.`) +
        button(booking, 'Book your call') +
        p(`<span style="font-size:13px;color:#6b625c;">If you want to add anything before we talk, reply to this email.</span>`) +
        p(`Tiara<br>The Intentional Tea`));

  const tiaraHtml = shell(eyebrow(kind === 'quote' ? 'New quote request' : 'New onboarding intake') +
    h1(`${esc(business)}<br><span style="color:#9B4F4A;">${esc(serviceName)}</span>`) +
    p(`<strong>${esc(name)}</strong> · <a href="mailto:${esc(email)}" style="color:#9B4F4A;">${esc(email)}</a><br><span style="font-size:12px;color:#6b625c;">${submitted.toUTCString()} · ${result.notion ? 'Saved to Notion' : 'Not saved to Notion (' + esc(result.notionError || 'not configured') + ')'}</span>`) +
    answersHtml);

  if (apiKey) {
    const send = (to, subject, htmlContent, replyTo) => fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { accept: 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify({ sender: from, to: [to], subject, htmlContent, replyTo }),
    });
    try {
      const [a, b] = await Promise.all([
        send({ email: toTiara, name: 'Tiara' }, `${kind === 'quote' ? 'Quote request' : 'Onboarding intake'}: ${business} · ${serviceName}`, tiaraHtml, { email, name }),
        send({ email, name }, kind === 'quote' ? `Got your request · ${serviceName}` : `Your intake is in · book your call`, clientHtml, { email: toTiara, name: 'Tiara' }),
      ]);
      result.emailed = a.ok && b.ok;
      if (!result.emailed) result.emailError = `${a.status}/${b.status}`;
    } catch (err) {
      result.emailError = err.message;
    }
  }

  result.success = result.notion || result.emailed;
  return { statusCode: result.success ? 200 : 500, body: JSON.stringify(result) };
};
