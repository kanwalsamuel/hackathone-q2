import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
        unit_amount: item.product.price * 100, // Amount is in cents
      },
      quantity: item.quantity,
    }));

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error('Stripe Checkout Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}


