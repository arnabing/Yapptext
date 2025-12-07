import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { db } from '@/lib/db'
import { PRICING_TIERS } from '@/lib/constants'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
})

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  console.log('Stripe webhook received:', event.type)

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const clerkId = session.metadata?.clerkId

        if (clerkId) {
          await db.user.update({
            where: { clerkId },
            data: {
              subscriptionTier: PRICING_TIERS.PRO,
              subscriptionStatus: 'active',
              stripeCustomerId: session.customer as string,
            }
          })
          console.log(`User ${clerkId} upgraded to Pro`)
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        const status = subscription.status
        const isActive = status === 'active' || status === 'trialing'

        await db.user.updateMany({
          where: { stripeCustomerId: customerId },
          data: {
            subscriptionTier: isActive ? PRICING_TIERS.PRO : PRICING_TIERS.FREE,
            subscriptionStatus: status,
          }
        })
        console.log(`Subscription updated for customer ${customerId}: ${status}`)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        await db.user.updateMany({
          where: { stripeCustomerId: customerId },
          data: {
            subscriptionTier: PRICING_TIERS.FREE,
            subscriptionStatus: 'cancelled',
          }
        })
        console.log(`Subscription cancelled for customer ${customerId}`)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = invoice.customer as string

        await db.user.updateMany({
          where: { stripeCustomerId: customerId },
          data: {
            subscriptionStatus: 'past_due',
          }
        })
        console.log(`Payment failed for customer ${customerId}`)
        break
      }
    }
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
