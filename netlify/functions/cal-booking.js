// Cal.com booking webhook -> Brevo contact + branded confirmation email.
//
// WHAT THIS CLOSES. Cal.com sends its own plain confirmation when someone books. Nothing sent the
// branded sequence written in EMAILS/, and nothing put the person into Brevo, so every client email
// after a booking was a by-hand send with the merge fields typed in manually.
//
// WHY A WEBHOOK RATHER THAN ZAPIER. This runs on the site's own hosting, is versioned with the rest
// of the code, and can be tested. The Zapier route needs field mapping through a drag-and-drop
// editor that has defeated several scripted attempts.
//
// SET UP
//   1. Cal.com -> event type -> Webhooks -> new webhook
//      URL:    https://theintentionaltea.com/.netlify/functions/cal-booking
//      Events: Booking created, Booking cancelled
//      Secret: set one, and put the same value in Netlify as CAL_WEBHOOK_SECRET
//   2. Netlify env: BREVO_API_KEY (already set), CAL_WEBHOOK_SECRET (new)
//
// Without CAL_WEBHOOK_SECRET the signature check is skipped and a warning is returned in the
// response body, so an unsigned setup is obvious rather than silent.

const crypto = require('crypto');

const CLIENTS_LIST = 9;

// Cal.com event slug -> the Brevo template that should go out on a new booking.
// Ids confirmed against the live account; names come from EMAILS/_build/content.mjs.
const TEMPLATE_BY_SLUG = {
  'business-clarity-call': 18,   // clarity-01-welcome — "Your Business Clarity Call is confirmed"
  'hub-check-in': 24,            // ops-02-call-confirmation — "Your planning call is confirmed"
  'planning-call': 24,           // ops-02-call-confirmation
};
// Deliberately absent: 30min (Discovery Call). RETIRED 2026-09-28 -- the free intro call is no
// longer offered; the paid Business Clarity Call replaces it. The slug is left unmapped rather than
// deleted so any straggler booking on an old link still lands here without throwing.

const brevo = (path, body, key, method = 'POST') =>
  fetch(`https://api.brevo.com/v3${path}`, {
    method,
    headers: { accept: 'application/json', 'api-key': key, 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return { statusCode: 500, body: JSON.stringify({ error: 'BREVO_API_KEY not set' }) };

  const raw = event.body || '';
  const notes = [];

  // Cal.com signs the body with the webhook secret. Verify when one is configured.
  const secret = process.env.CAL_WEBHOOK_SECRET;
  if (secret) {
    const sent = event.headers['x-cal-signature-256'] || event.headers['X-Cal-Signature-256'] || '';
    const expected = crypto.createHmac('sha256', secret).update(raw).digest('hex');
    const ok = sent.length === expected.length &&
      crypto.timingSafeEqual(Buffer.from(sent), Buffer.from(expected));
    if (!ok) return { statusCode: 401, body: JSON.stringify({ error: 'bad signature' }) };
  } else {
    notes.push('CAL_WEBHOOK_SECRET is not set, so the signature was not verified');
  }

  let body;
  try { body = JSON.parse(raw); } catch { return { statusCode: 400, body: 'Invalid JSON' }; }

  const trigger = body.triggerEvent || '';
  const p = body.payload || {};
  if (trigger !== 'BOOKING_CREATED') {
    return { statusCode: 200, body: JSON.stringify({ skipped: `trigger ${trigger}`, notes }) };
  }

  const attendee = (p.attendees && p.attendees[0]) || {};
  const email = (attendee.email || '').trim().toLowerCase();
  const name = attendee.name || '';
  if (!email) return { statusCode: 400, body: JSON.stringify({ error: 'no attendee email', notes }) };

  const slug = (p.eventType && p.eventType.slug) || p.type || '';
  const templateId = TEMPLATE_BY_SLUG[slug];

  // A readable date in the attendee's own timezone, because CALL_DATE is printed as written.
  let callDate = '';
  try {
    callDate = new Date(p.startTime).toLocaleString('en-US', {
      weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit',
      timeZone: attendee.timeZone || p.organizer?.timeZone || 'America/Chicago',
    });
  } catch { callDate = String(p.startTime || ''); }

  // 1. Contact first, so the merge fields exist before anything is sent.
  const contact = await brevo('/contacts', {
    email,
    attributes: {
      FIRSTNAME: name.trim().split(/\s+/)[0] || '',
      LASTNAME: name.trim().split(/\s+/).slice(1).join(' ') || '',
      CALL_DATE: callDate,
      PHASE: 'Call booked',
    },
    listIds: [CLIENTS_LIST],
    updateEnabled: true,
  }, apiKey);

  if (![201, 204].includes(contact.status)) {
    const detail = await contact.text();
    return { statusCode: 502, body: JSON.stringify({ error: 'brevo contact failed', status: contact.status, detail: detail.slice(0, 300), notes }) };
  }

  // 2. The branded confirmation, if this event type has one.
  if (!templateId) {
    return { statusCode: 200, body: JSON.stringify({ ok: true, contact: 'saved', email: 'none for ' + slug, notes }) };
  }

  const send = await brevo('/smtp/email', {
    to: [{ email, name: name || undefined }],
    templateId,
    // MEETING_LINK feeds the "Google Meet link:" line in ops-02-call-confirmation, which used to read
    // "[paste link]" — a hand-fill placeholder that went out raw once this function began sending the
    // template automatically. Cal.com reports the video URL in different places depending on the
    // integration, so take the first that is actually a URL and leave it empty otherwise: the
    // template's own default filter then prints a true sentence rather than a blank or a placeholder.
    params: {
      FIRSTNAME: name.trim().split(/\s+/)[0] || '',
      CALL_DATE: callDate,
      MEETING_LINK: [
        p.metadata && p.metadata.videoCallUrl,
        p.videoCallData && p.videoCallData.url,
        p.location,
      ].find((v) => typeof v === 'string' && /^https?:\/\//.test(v)) || '',
    },
  }, apiKey);

  if (send.status !== 201) {
    const detail = await send.text();
    return { statusCode: 502, body: JSON.stringify({ error: 'brevo send failed', status: send.status, detail: detail.slice(0, 300), notes }) };
  }

  const { messageId } = await send.json().catch(() => ({}));
  return { statusCode: 200, body: JSON.stringify({ ok: true, slug, templateId, messageId, callDate, notes }) };
};
