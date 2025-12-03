import { kv } from '@vercel/kv'
import { USAGE_LIMITS, PRICING_TIERS } from '@/lib/constants'

const MONTHLY_LIMIT = USAGE_LIMITS[PRICING_TIERS.ANONYMOUS].minutesPerMonth // 20

export interface GuestUsage {
  minutesUsed: number
  firstSeen: string
  lastSeen: string
}

/**
 * Generate a unique guest ID for cookie storage
 */
export function generateGuestId(): string {
  return `guest_${crypto.randomUUID()}`
}

/**
 * Get seconds until end of current month (for TTL expiration)
 */
function getSecondsUntilMonthEnd(): number {
  const now = new Date()
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
  return Math.floor((endOfMonth.getTime() - now.getTime()) / 1000)
}

/**
 * Get guest usage from Vercel KV
 */
export async function getGuestUsage(guestId: string): Promise<GuestUsage | null> {
  try {
    return await kv.get<GuestUsage>(`guest:${guestId}`)
  } catch (error) {
    console.warn('KV read failed for guest usage:', error)
    return null
  }
}

/**
 * Create a new guest record in KV with IP linkage
 */
export async function createGuestRecord(guestId: string, hashedIP?: string): Promise<void> {
  try {
    const ttl = getSecondsUntilMonthEnd()
    const now = new Date().toISOString()

    const promises: Promise<unknown>[] = [
      kv.set(`guest:${guestId}`, { minutesUsed: 0, firstSeen: now, lastSeen: now }, { ex: ttl })
    ]

    // Also link IP to guest ID for fallback lookup
    if (hashedIP) {
      promises.push(kv.set(`ip:${hashedIP}`, guestId, { ex: ttl }))
    }

    await Promise.all(promises)
  } catch (error) {
    console.warn('KV write failed for guest record:', error)
  }
}

/**
 * Increment usage for a guest and return new total
 */
export async function incrementGuestUsage(guestId: string, minutes: number): Promise<number> {
  try {
    const key = `guest:${guestId}`
    const current = await kv.get<GuestUsage>(key)
    const ttl = getSecondsUntilMonthEnd()
    const now = new Date().toISOString()

    if (!current) {
      // Record doesn't exist (expired or new) - create fresh
      await kv.set(key, { minutesUsed: minutes, firstSeen: now, lastSeen: now }, { ex: ttl })
      return minutes
    }

    const newUsage = current.minutesUsed + minutes
    await kv.set(key, { ...current, minutesUsed: newUsage, lastSeen: now }, { ex: ttl })
    return newUsage
  } catch (error) {
    console.warn('KV increment failed for guest usage:', error)
    return 0
  }
}

/**
 * Check if guest can transcribe based on monthly limit
 */
export async function canGuestTranscribe(guestId: string, requestedMinutes: number = 0): Promise<{
  allowed: boolean
  minutesUsed: number
  minutesRemaining: number
  limit: number
}> {
  try {
    const usage = await getGuestUsage(guestId)
    const minutesUsed = usage?.minutesUsed || 0
    const minutesRemaining = Math.max(0, MONTHLY_LIMIT - minutesUsed)

    return {
      allowed: minutesUsed + requestedMinutes <= MONTHLY_LIMIT,
      minutesUsed,
      minutesRemaining,
      limit: MONTHLY_LIMIT
    }
  } catch (error) {
    console.warn('KV check failed for guest quota:', error)
    // On error, allow the request (fail open)
    return {
      allowed: true,
      minutesUsed: 0,
      minutesRemaining: MONTHLY_LIMIT,
      limit: MONTHLY_LIMIT
    }
  }
}

/**
 * Try to find existing guest ID by IP hash (fallback for cleared cookies)
 */
export async function findGuestByIP(hashedIP: string): Promise<string | null> {
  try {
    return await kv.get<string>(`ip:${hashedIP}`)
  } catch (error) {
    console.warn('KV lookup failed for IP-to-guest mapping:', error)
    return null
  }
}
