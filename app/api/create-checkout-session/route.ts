import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// 環境変数からシークレットキーを取得
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

export async function POST() {
  try {
    console.log('Creating checkout session...');
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Nippon Snack Box Subscription',
              description: 'Monthly Japanese snack box subscription',
            },
            unit_amount: 4799, // $47.99
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    console.log('Checkout session created:', session.id);
    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { 
        error: 'Error creating checkout session',
        message: error.message,
        type: error.type,
        code: error.code
      },
      { status: 500 }
    );
  }
} 