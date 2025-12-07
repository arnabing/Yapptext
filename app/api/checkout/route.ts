import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import Stripe from 'stripe'
import { db } from '@/lib/db'
import { PRICING_TIERS } from '@/lib/constants'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-10-29.clover',
})

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }

    const tier = request.nextUrl.searchParams.get('tier')

    if (tier !== PRICING_TIERS.PRO) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
    }

    // Get or create Stripe customer
    let user = await db.user.findUnique({ where: { clerkId: userId } })
    let customerId = user?.stripeCustomerId

    if (!customerId) {
      const customer = await stripe.customers.create({
        metadata: { clerkId: userId }
      })
      customerId = customer.id

      if (user) {
        await db.user.update({
          where: { clerkId: userId },
          data: { stripeCustomerId: customerId }
        })
      }
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [{
        price: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        quantity: 1,
      }],
      success_url: `${request.nextUrl.origin}/new?upgrade=success`,
      cancel_url: `${request.nextUrl.origin}/new?upgrade=cancelled`,
      metadata: { clerkId: userId, tier: PRICING_TIERS.PRO }
    })

    return NextResponse.redirect(session.url!)
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
