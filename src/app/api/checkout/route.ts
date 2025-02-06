

import Stripe from 'stripe';

// Ensure the environment variables are set correctly
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not defined in the environment variables.');
}

if (!siteUrl) {
  throw new Error('NEXT_PUBLIC_SITE_URL is not defined in the environment variables.');
}

const stripe = new Stripe(stripeSecretKey);

export async function POST(req: Request) {
  try {
    const { cartItems } = await req.json(); // Parse the JSON body of the request

    // Prepare the line items for Stripe
    const lineItems = cartItems.map((item: any) => ({
      price_data: {
        currency: 'eur', // Change currency if needed
        product_data: {
          name: item.product.name,
          description: item.product.description,
          images: [item.product.image.asset.url], // Ensure correct image URL
        },
        unit_amount: Math.round(item.product.price * 100), // Amount is in cents
      },
      quantity: item.quantity,
    }));

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/cancel`,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error('Stripe Checkout Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
}


