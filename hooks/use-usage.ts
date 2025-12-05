'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect, useCallback } from 'react'

export interface UsageData {
  minutesUsed: number
  minutesLimit: number
  remaining: number
  tier: string
}

export interface CanTranscribeResult {
  allowed: boolean
  reason?: string
  remaining: number
}

/**
 * Hook for fetching and managing usage data for authenticated users.
 *
 * - Only fetches from /api/user/usage (PostgreSQL)
 * - Returns null for non-authenticated users
 * - Provides canTranscribe() helper for pre-upload quota checks
 *
 * @param refreshTrigger - Optional number that triggers refetch when changed
 */
export function useUsage(refreshTrigger?: number) {
  const { isSignedIn, isLoaded } = useUser()
  const [usage, setUsage] = useState<UsageData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchUsage = useCallback(async () => {
    // Wait for Clerk to load before fetching
    if (!isLoaded) return

    // Only fetch for signed-in users
    if (!isSignedIn) {
      setUsage(null)
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/user/usage')

      if (!res.ok) {
        throw new Error(`Failed to fetch usage: ${res.status}`)
      }

      const data = await res.json()

      const minutesUsed = data.minutesUsed || 0
      const minutesLimit = data.minutesLimit || 60
      setUsage({
        minutesUsed,
        minutesLimit,
        remaining: Math.max(0, minutesLimit - minutesUsed),
        tier: data.tier || 'free'
      })
    } catch (err) {
      console.error('Failed to fetch usage:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch usage')

      // Set default values on error so UI doesn't break
      setUsage({
        minutesUsed: 0,
        minutesLimit: 60,
        remaining: 60,
        tier: 'free'
      })
    } finally {
      setLoading(false)
    }
  }, [isSignedIn, isLoaded])

  // Fetch on mount and when dependencies change
  useEffect(() => {
    fetchUsage()
  }, [fetchUsage, refreshTrigger])

  /**
   * Check if user can transcribe a file of given duration.
   * Use this BEFORE starting transcription to prevent quota overruns.
   *
   * @param estimatedMinutes - Estimated duration of the audio file in minutes
   * @returns Object with allowed status, reason if denied, and remaining minutes
   */
  const canTranscribe = useCallback((estimatedMinutes: number): CanTranscribeResult => {
    // Not signed in - auth required
    if (!isSignedIn) {
      return { allowed: false, reason: 'Sign in required', remaining: 0 }
    }

    if (loading) {
      return { allowed: false, reason: 'Loading usage data...', remaining: 0 }
    }

    if (!usage) {
      return { allowed: false, reason: 'Unable to verify quota', remaining: 0 }
    }

    // Check if user has already exhausted their quota
    if (usage.remaining <= 0) {
      return {
        allowed: false,
        reason: `You've used all ${usage.minutesLimit} minutes this month. ${
          usage.tier === 'free' ? 'Upgrade to Pro for 500 min/month.' : ''
        }`.trim(),
        remaining: 0
      }
    }

    // Check if user has enough remaining quota for this file
    if (usage.remaining < estimatedMinutes) {
      return {
        allowed: false,
        reason: `This file is ~${Math.ceil(estimatedMinutes)} min but you only have ${Math.floor(usage.remaining)} min remaining. ${
          usage.tier === 'free' ? 'Upgrade to Pro for 500 min/month.' : ''
        }`.trim(),
        remaining: usage.remaining
      }
    }

    return { allowed: true, remaining: usage.remaining }
  }, [usage, loading, isSignedIn])

  /**
   * Update usage locally after a transcription completes.
   * This provides instant UI feedback before the next API fetch.
   *
   * @param minutesTranscribed - Duration of the completed transcription
   */
  const addUsage = useCallback((minutesTranscribed: number) => {
    setUsage(prev => {
      if (!prev) return prev
      const newMinutesUsed = prev.minutesUsed + minutesTranscribed
      return {
        ...prev,
        minutesUsed: newMinutesUsed,
        remaining: Math.max(0, prev.minutesLimit - newMinutesUsed)
      }
    })
  }, [])

  return {
    usage,
    loading,
    error,
    refetch: fetchUsage,
    canTranscribe,
    addUsage
  }
}
