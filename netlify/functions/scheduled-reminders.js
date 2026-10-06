// scheduled-reminders.js — the one thing that can send an email on a delay.
//
// THE GAP THIS FILLS. Every other email on this site is sent by a function reacting to something
// happening right now: a booking, a form submission. Fifteen templates in Brevo are written, active
// and unreachable, because they are meant to go out LATER — the reminder the day before a call, the
// follow-up two weeks after a report, the check-in thirty days after handoff. Nothing could send them.
// This runs once a day and does.
//
// WHY NOT A BREVO AUTOMATION. Brevo exposes automations to no API at all, so one could never be built,
// tested or corrected from the repo — and the account is on the free plan, which caps them anyway.
// This keeps every send in one place, in version control, beside the emails it sends.
//
// WHY NEW DATE FIELDS. CALL_DATE and CHECK_IN_DATE are deliberately TEXT, because the emails print
// them exactly as written ("Tuesday 14 October, 10:00 CT"). Nothing can be scheduled against that, so
// the booking function now also writes CALL_AT, a plain YYYY-MM-DD, purely for this job to read.
//
// IDEMPOTENCY. The job may run more than once a day, and a retry must never send twice. Each rule
// writes a "done" date on the contact and refuses to act when that date is already set.

const BREVO = 'https://api.brevo.com/v3';
const CLIENTS_LIST = 9;

// Brevo template ids, matching EMAILS/_build/content.mjs.
const T = {
  clarityReminder: 20, // clarity-03-call-confirmation — "Your call is tomorrow"
  clarityFollowUp: 22, // clarity-05-follow-up — "Checking in, two weeks on"
  hubCheckIn: 29,      // ops-07-30-day-check-in
};

const iso = (d) => d.toISOString().slice(0, 10);
// A contact attribute is free text and can be anything — blank, a typo, a half-typed date. An invalid
// Date throws on toISOString, which would end the whole run and stop every other contact's email, so
// every date read from a contact goes through here first.
const parseDay = (v) => {
  if (typeof v !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(v.trim())) return null;
  const d = new Date(v.trim() + 'T00:00:00Z');
  return Number.isNaN(d.getTime()) ? null : d;
};
const addDays = (d, n) => { const x = new Date(d); x.setUTCDate(x.getUTCDate() + n); return x; };

const api = (key) => async (method, path, body) => {
  const r = await fetch(`${BREVO}/${path}`, {
    method,
    headers: { 'api-key': key, accept: 'application/json', 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  let parsed; try { parsed = text ? JSON.parse(text) : null; } catch { parsed = text; }
  return { status: r.status, ok: r.ok, body: parsed };
};

// Every contact on the Clients list, paged. The list is small and this runs once a day.
async function allClients(call) {
  const out = [];
  for (let offset = 0; ; offset += 100) {
    const r = await call('GET', `contacts/lists/${CLIENTS_LIST}/contacts?limit=100&offset=${offset}`);
    if (!r.ok) break;
    const batch = (r.body && r.body.contacts) || [];
    out.push(...batch);
    if (batch.length < 100) break;
  }
  return out;
}

exports.handler = async () => {
  const key = process.env.BREVO_API_KEY;
  if (!key) return { statusCode: 500, body: JSON.stringify({ error: 'BREVO_API_KEY not set' }) };
  const call = api(key);

  const today = iso(new Date());
  const tomorrow = iso(addDays(new Date(), 1));
  const sent = [];
  const skipped = [];
  const failed = [];

  const contacts = await allClients(call);

  for (const c of contacts) {
    const a = c.attributes || {};
    const email = c.email;
    if (!email || c.emailBlacklisted) { skipped.push(`${email || c.id}: blacklisted or no address`); continue; }

    // A contact can qualify for at most one of these on a given day; they are different stages.
    const rules = [
      {
        name: 'clarity call reminder',
        due: a.CALL_AT === tomorrow && !a.REMINDED_AT,
        templateId: T.clarityReminder,
        mark: { REMINDED_AT: today },
      },
      {
        name: 'two-week follow-up',
        due: (() => { const d = parseDay(a.REPORT_SENT_AT); return !!d && iso(addDays(d, 14)) === today && !a.FOLLOWED_UP_AT; })(),
        templateId: T.clarityFollowUp,
        mark: { FOLLOWED_UP_AT: today },
      },
      {
        name: 'thirty-day hub check-in',
        due: a.CHECK_IN_AT === today && !a.CHECKED_IN_AT,
        templateId: T.hubCheckIn,
        mark: { CHECKED_IN_AT: today },
      },
    ];

    for (const rule of rules) {
      if (!rule.due) continue;

      const send = await call('POST', 'smtp/email', {
        to: [{ email, name: [a.FIRSTNAME, a.LASTNAME].filter(Boolean).join(' ') || undefined }],
        templateId: rule.templateId,
        params: { FIRSTNAME: a.FIRSTNAME || '', CALL_DATE: a.CALL_DATE || '' },
      });

      if (send.status !== 201) {
        failed.push(`${email}: ${rule.name} -> ${send.status} ${JSON.stringify(send.body).slice(0, 120)}`);
        continue;
      }

      // Mark BEFORE counting it sent, so a crash here cannot cause a second send tomorrow.
      const mark = await call('PUT', `contacts/${encodeURIComponent(email)}`, { attributes: rule.mark });
      if (![200, 204].includes(mark.status)) {
        failed.push(`${email}: ${rule.name} SENT but not marked (${mark.status}) — will resend unless fixed by hand`);
        continue;
      }
      sent.push(`${email}: ${rule.name}`);
    }
  }

  const summary = { date: today, scanned: contacts.length, sent, failed, skipped: skipped.length };
  console.log('scheduled-reminders', JSON.stringify(summary));
  return { statusCode: failed.length ? 207 : 200, body: JSON.stringify(summary) };
};

// Once a day at 14:00 UTC — 9am in Austin on standard time, 10am on daylight time. Early enough that
// a "your call is tomorrow" email lands the morning before, not the night before.
exports.config = { schedule: '0 14 * * *' };
