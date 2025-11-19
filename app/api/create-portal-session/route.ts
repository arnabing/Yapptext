import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import Stripe from 'stripe'

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-10-29.clover',
    })
  : null

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // In a real implementation, you would:
    // 1. Look up the user's Stripe customer ID from your database
    // 2. Create a portal session for that customer
    //
    // For now, we'll return an error since billing is not fully set up
    // TODO: Implement proper Stripe customer lookup from database

    // Example of what the full implementation would look like:
    // const user = await prisma.user.findUnique({
    //   where: { clerkUserId: userId },
    //   select: { stripeCustomerId: true }
    // })
    //
    // if (!user?.stripeCustomerId) {
    //   return NextResponse.json(
    //     { error: 'No billing account found' },
    //     { status: 404 }
    //   )
    // }
    //
    // const session = await stripe.billingPortal.sessions.create({
    //   customer: user.stripeCustomerId,
    //   return_url: `${request.headers.get('origin')}/settings`,
    // })
    //
    // return NextResponse.json({ url: session.url })

    return NextResponse.json(
      { error: 'Billing portal not yet configured. Please upgrade Stripe integration.' },
      { status: 501 }
    )
  } catch (error) {
    console.error('Portal session error:', error)
    return NextResponse.json(
      { error: 'Failed to create portal session' },
      { status: 500 }
    )
  }
}
