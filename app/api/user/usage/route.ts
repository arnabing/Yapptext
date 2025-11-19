import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { USAGE_LIMITS, PRICING_TIERS } from '@/lib/constants'

export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (!user) {
      // User signed in but not in DB yet - return zero usage
      return NextResponse.json({
        minutesUsed: 0,
        minutesLimit: USAGE_LIMITS.FREE.minutesPerMonth,
        percentUsed: 0,
        tier: PRICING_TIERS.FREE
      })
    }

    // Calculate current month usage
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    startOfMonth.setHours(0, 0, 0, 0)

    const monthlyUsage = await prisma.usageLog.aggregate({
      where: {
        userId: user.id,
        createdAt: { gte: startOfMonth }
      },
      _sum: { minutes: true }
    })

    const minutesUsed = monthlyUsage._sum.minutes || 0
    const tier = user.subscriptionTier || PRICING_TIERS.FREE
    const limit = USAGE_LIMITS[tier].minutesPerMonth

    return NextResponse.json({
      minutesUsed,
      minutesLimit: limit,
      percentUsed: limit > 0 ? (minutesUsed / limit) * 100 : 0,
      tier
    })
  } catch (error) {
    console.error('Error fetching user usage:', error)
    return NextResponse.json(
      { error: 'Failed to fetch usage data' },
      { status: 500 }
    )
  }
}
