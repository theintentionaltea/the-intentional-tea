// Newsletter / freebie signup -> Brevo contact.
//
// Called by handleNewsletterSubmit and handleDownloadSubmit. Both send { email, listId: 7 },
// where 7 is the "Intentional Tea — Digital Products" list the welcome automation watches.
//
// This used to return 200 whenever Brevo was reached, even if Brevo rejected the call, and the
// browser swallows every error and shows the thank-you page regardless. A signup could fail
// completely and look identical to a success. It now reports what actually happened.

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let email, listId;
  try {
    ({ email, listId } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: 'Invalid request body' };
  }

  if (!email) {
    return { statusCode: 400, body: 'Email is required' };
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    // Names only, never values. Enough to tell "not set at all" apart from "set under a different
    // name" or "set but not scoped to functions".
    const seen = Object.keys(process.env).filter((k) => /BREVO|SENDINBLUE/i.test(k));
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        error: 'BREVO_API_KEY is not visible to this function',
        matchingEnvNames: seen,
        envCount: Object.keys(process.env).length,
      }),
    };
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [listId || 7],
        updateEnabled: true,
      }),
    });

    // 201 = created, 204 = updated. Anything else is a real failure and must not read as success.
    if (res.status === 201 || res.status === 204) {
      return { statusCode: 200, body: JSON.stringify({ success: true }) };
    }

    const detail = await res.text();
    return {
      statusCode: 502,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: 'Brevo rejected the request', status: res.status, detail: detail.slice(0, 300) }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
