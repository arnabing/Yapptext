import { NextRequest, NextResponse } from 'next/server'
import { getGuestUsage, createGuestRecord, findGuestByIP } from '@/lib/guest-usage'
import { hashIP, getClientIP } from '@/lib/auth'
import { USAGE_LIMITS, PRICING_TIERS } from '@/lib/constants'

const MONTHLY_LIMIT = USAGE_LIMITS[PRICING_TIERS.ANONYMOUS].minutesPerMonth // 20

export async function GET(request: NextRequest) {
  try {
    let guestId = request.cookies.get('yapp_guest_id')?.value

    // If no cookie, try to find by IP (fallback for cleared cookies)
    if (!guestId) {
      const clientIP = getClientIP(request)
      if (clientIP) {
        const hashedIP = await hashIP(clientIP)
        const linkedGuestId = await findGuestByIP(hashedIP)

        if (linkedGuestId) {
          // Found existing guest by IP - use that ID
          guestId = linkedGuestId
          console.log(`Guest found by IP fallback: ${guestId}`)
        }
      }
    }

    // If still no guest ID, return fresh quota (0 used)
    if (!guestId) {
      return NextResponse.json({
        minutesUsed: 0,
        minutesRemaining: MONTHLY_LIMIT,
        limit: MONTHLY_LIMIT,
        isGuest: true
      })
    }

    // Get usage from KV
    const usage = await getGuestUsage(guestId)

    // If no usage record exists yet, return fresh quota
    if (!usage) {
      // Create the record for future tracking
      const clientIP = getClientIP(request)
      if (clientIP) {
        const hashedIP = await hashIP(clientIP)
        await createGuestRecord(guestId, hashedIP)
      }

      return NextResponse.json({
        minutesUsed: 0,
        minutesRemaining: MONTHLY_LIMIT,
        limit: MONTHLY_LIMIT,
        isGuest: true
      })
    }

    return NextResponse.json({
      minutesUsed: usage.minutesUsed,
      minutesRemaining: Math.max(0, MONTHLY_LIMIT - usage.minutesUsed),
      limit: MONTHLY_LIMIT,
      isGuest: true
    })
  } catch (error) {
    console.error('Error fetching guest usage:', error)

    // On error, return defaults (fail open for UX)
    return NextResponse.json({
      minutesUsed: 0,
      minutesRemaining: MONTHLY_LIMIT,
      limit: MONTHLY_LIMIT,
      isGuest: true,
      error: 'Failed to fetch usage'
    })
  }
}
