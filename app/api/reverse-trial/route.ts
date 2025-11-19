import { NextResponse } from 'next/server'
import { getCurrentUserId } from '@/lib/auth'
import { startReverseTrial, isEligibleForReverseTrial } from '@/lib/usage'

export async function POST() {
  try {
    const userId = await getCurrentUserId()

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Check if user is eligible for reverse trial
    const eligible = await isEligibleForReverseTrial(userId)

    if (!eligible) {
      return NextResponse.json(
        {
          error: 'You are not eligible for a trial. You may have already used a trial or have an active subscription.'
        },
        { status: 400 }
      )
    }

    // Start the reverse trial
    const trialInfo = await startReverseTrial(userId)

    return NextResponse.json({
      success: true,
      trial: trialInfo
    })
  } catch (error) {
    console.error('Error starting reverse trial:', error)
    return NextResponse.json(
      { error: 'Failed to start trial. Please try again.' },
      { status: 500 }
    )
  }
}
