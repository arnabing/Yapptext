import { db } from '@/lib/db'
import {
  PRICING_TIERS,
  USAGE_LIMITS,
  REVERSE_TRIAL,
  type PricingTier,
  type TranscriptionMode,
  isSampleFile,
} from '@/lib/constants'

/**
 * Get user's current pricing tier
 */
export async function getUserTier(userId: string): Promise<PricingTier> {
  const user = await db.user.findUnique({
    where: { clerkId: userId },
    select: {
      subscriptionTier: true,
      subscriptionStatus: true,
      trialEndsAt: true,
      currentPeriodEnd: true,
    },
  })

  if (!user) {
    return PRICING_TIERS.FREE // Default for new users
  }

  // Check if user is in reverse trial
  if (user.trialEndsAt && user.trialEndsAt > new Date()) {
    return PRICING_TIERS.PRO // Reverse trial gets pro tier access
  }

  // Check if subscription is active
  if (
    user.subscriptionStatus === 'active' &&
    user.subscriptionTier &&
    user.currentPeriodEnd &&
    user.currentPeriodEnd > new Date()
  ) {
    return user.subscriptionTier as PricingTier
  }

  return PRICING_TIERS.FREE
}

/**
 * Get usage for current billing period (month)
 */
export async function getCurrentUsage(userId: string) {
  const startOfMonth = new Date()
  startOfMonth.setDate(1)
  startOfMonth.setHours(0, 0, 0, 0)

  const usage = await db.usageLog.aggregate({
    where: {
      userId,
      createdAt: {
        gte: startOfMonth,
      },
    },
    _sum: {
      minutes: true,
    },
  })

  return {
    minutesUsed: usage._sum.minutes || 0,
    periodStart: startOfMonth,
    periodEnd: new Date(startOfMonth.getFullYear(), startOfMonth.getMonth() + 1, 0),
  }
}

/**
 * Check if user can transcribe (has not exceeded limits)
 */
export async function canUserTranscribe(
  userId: string | null,
  audioMinutes: number,
  filePath?: string
): Promise<{
  allowed: boolean
  reason?: string
  tier: PricingTier
  minutesRemaining?: number
}> {
  // Sample files are always allowed
  if (filePath && isSampleFile(filePath)) {
    return {
      allowed: true,
      tier: PRICING_TIERS.FREE,
      reason: 'Sample file - unlimited usage',
    }
  }

  // Anonymous users (no userId)
  if (!userId) {
    const limits = USAGE_LIMITS[PRICING_TIERS.ANONYMOUS]

    if (audioMinutes > limits.minutesPerMonth) {
      return {
        allowed: false,
        tier: PRICING_TIERS.ANONYMOUS,
        reason: `File exceeds ${limits.minutesPerMonth} minute limit for anonymous users. Sign in for up to ${USAGE_LIMITS[PRICING_TIERS.FREE].minutesPerMonth} minutes per month.`,
      }
    }

    return {
      allowed: true,
      tier: PRICING_TIERS.ANONYMOUS,
      minutesRemaining: limits.minutesPerMonth - audioMinutes,
    }
  }

  // Authenticated users
  const tier = await getUserTier(userId)
  const limits = USAGE_LIMITS[tier]

  // Check current usage against limit
  const currentUsage = await getCurrentUsage(userId)
  const minutesRemaining = limits.minutesPerMonth - currentUsage.minutesUsed

  if (currentUsage.minutesUsed + audioMinutes > limits.minutesPerMonth) {
    return {
      allowed: false,
      tier,
      reason: `Exceeds your monthly limit of ${limits.minutesPerMonth} minutes. You've used ${currentUsage.minutesUsed} minutes this month.`,
      minutesRemaining: Math.max(0, minutesRemaining),
    }
  }

  return {
    allowed: true,
    tier,
    minutesRemaining: minutesRemaining - audioMinutes,
  }
}

/**
 * Log transcription usage
 * @param clerkId - The Clerk user ID
 * @param audioMinutes - Duration of audio in minutes
 * @param mode - Transcription mode used
 */
export async function logUsage(
  clerkId: string,
  audioMinutes: number,
  mode: TranscriptionMode
): Promise<void> {
  // Get the database user record to get the internal ID
  const user = await db.user.findUnique({
    where: { clerkId },
    select: { id: true },
  })

  if (!user) {
    throw new Error(`User not found for clerkId: ${clerkId}`)
  }

  await db.usageLog.create({
    data: {
      userId: user.id, // Use internal database ID, not clerkId
      minutes: Math.ceil(audioMinutes), // Round up to nearest minute
      mode,
    },
  })
}

/**
 * Create or update user record from Clerk user
 */
export async function ensureUserExists(clerkId: string, email: string) {
  return await db.user.upsert({
    where: { clerkId },
    update: { email },
    create: {
      clerkId,
      email,
    },
  })
}

/**
 * Start reverse trial for user
 * Called when user closes paywall modal
 */
export async function startReverseTrial(userId: string) {
  const trialEndsAt = new Date()
  trialEndsAt.setDate(trialEndsAt.getDate() + REVERSE_TRIAL.durationDays)

  await db.user.update({
    where: { clerkId: userId },
    data: {
      trialEndsAt,
    },
  })

  return {
    trialEndsAt,
    minutesAllowed: REVERSE_TRIAL.minutesAllowed,
    model: REVERSE_TRIAL.model,
  }
}

/**
 * Check if user is eligible for reverse trial
 * Only eligible if they've never had a trial or subscription
 */
export async function isEligibleForReverseTrial(userId: string): Promise<boolean> {
  const user = await db.user.findUnique({
    where: { clerkId: userId },
    select: {
      subscriptionId: true,
      trialEndsAt: true,
    },
  })

  if (!user) {
    return true // New users are eligible
  }

  // Not eligible if they've ever had a subscription or trial
  return !user.subscriptionId && !user.trialEndsAt
}

/**
 * Get transcription mode for user's tier
 */
export function getModeForTier(tier: PricingTier): TranscriptionMode {
  return USAGE_LIMITS[tier].defaultModel
}

/**
 * Check if user can download transcripts
 */
export async function canUserDownload(userId: string | null): Promise<boolean> {
  if (!userId) {
    return USAGE_LIMITS[PRICING_TIERS.ANONYMOUS].allowDownload
  }

  const tier = await getUserTier(userId)
  return USAGE_LIMITS[tier].allowDownload
}

/**
 * Get usage summary for dashboard
 */
export async function getUserUsageSummary(userId: string) {
  const tier = await getUserTier(userId)
  const currentUsage = await getCurrentUsage(userId)
  const limits = USAGE_LIMITS[tier]

  // Get user info for trial status
  const user = await db.user.findUnique({
    where: { clerkId: userId },
    select: {
      trialEndsAt: true,
      currentPeriodEnd: true,
      subscriptionStatus: true,
    },
  })

  return {
    tier,
    minutesUsed: currentUsage.minutesUsed,
    minutesLimit: limits.minutesPerMonth,
    periodStart: currentUsage.periodStart,
    periodEnd: currentUsage.periodEnd,
    isUnlimited: false, // No tiers have unlimited minutes
    mode: limits.defaultModel,
    canDownload: limits.allowDownload,
    isInTrial: user?.trialEndsAt ? user.trialEndsAt > new Date() : false,
    trialEndsAt: user?.trialEndsAt,
    subscriptionEndsAt: user?.currentPeriodEnd,
    subscriptionStatus: user?.subscriptionStatus,
  }
}

/**
 * Track anonymous usage by IP (stored in-memory/cache)
 * Note: For production, consider Redis or similar
 */
const anonymousUsageCache = new Map<string, { count: number; lastUsed: Date }>()

/**
 * Check if anonymous IP has used their free transcript
 */
export function hasAnonymousIPUsedFreeTier(ip: string): boolean {
  const usage = anonymousUsageCache.get(ip)
  if (!usage) {
    return false
  }

  // Reset if more than 24 hours ago
  const hoursSinceLastUse = (Date.now() - usage.lastUsed.getTime()) / (1000 * 60 * 60)
  if (hoursSinceLastUse > 24) {
    anonymousUsageCache.delete(ip)
    return false
  }

  return usage.count >= USAGE_LIMITS[PRICING_TIERS.ANONYMOUS].filesPerSession
}

/**
 * Mark anonymous IP as having used their free transcript
 */
export function markAnonymousIPUsed(ip: string): void {
  const existing = anonymousUsageCache.get(ip)
  if (existing) {
    existing.count++
    existing.lastUsed = new Date()
  } else {
    anonymousUsageCache.set(ip, { count: 1, lastUsed: new Date() })
  }
}

/**
 * Clear old anonymous usage data (call periodically)
 */
export function cleanupAnonymousUsageCache(): void {
  const now = Date.now()
  for (const [ip, usage] of anonymousUsageCache.entries()) {
    const hoursSinceLastUse = (now - usage.lastUsed.getTime()) / (1000 * 60 * 60)
    if (hoursSinceLastUse > 24) {
      anonymousUsageCache.delete(ip)
    }
  }
}
