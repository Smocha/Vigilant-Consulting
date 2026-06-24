import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { error: "Stripe secret key is missing" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://vigilantechusa.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Vigilant Cybersecurity Consultation",
              description: "Initial cybersecurity and AI consulting session.",
            },
            unit_amount: 14900,
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/payment-success`,
      cancel_url: `${siteUrl}/payment-canceled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}