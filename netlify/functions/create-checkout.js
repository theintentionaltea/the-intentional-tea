const Stripe = require('stripe');

const ALLOWED_PRICES = [
  'price_1Te2pf9B8x1wR8APP38jKqR4', // Clarity & Audit $400 (book.html)
  'price_1TkMQD9B8x1wR8APYxruPtTA', // Infrastructure Build Deposit (book.html + Digital Business Foundation)
  'price_1TkMQD9B8x1wR8APn0lTDyS3', // Multi-Entity Build Deposit (book.html + Operations & Systems)
  'price_1Twvnq9B8x1wR8APSwpGarOt', // Business Clarity Intensive
  'price_1Twvzo9B8x1wR8APp8dXR4TX', // Strategic Operations Partnership
];

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let priceId;
  try {
    ({ priceId } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: 'Invalid request body' };
  }

  if (!priceId || !ALLOWED_PRICES.includes(priceId)) {
    return { statusCode: 400, body: 'Invalid price ID' };
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const siteUrl = process.env.URL || 'https://theintentionaltea.com';

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      return_url: `${siteUrl}/thank-you-booking.html?session_id={CHECKOUT_SESSION_ID}`,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientSecret: session.client_secret }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
