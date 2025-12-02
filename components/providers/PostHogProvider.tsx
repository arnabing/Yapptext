'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const { user, isSignedIn } = useUser()

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll capture manually for better control with Next.js routing
        capture_pageleave: true,
      })
    }
  }, [])

  // Identify user when they sign in
  useEffect(() => {
    if (isSignedIn && user) {
      posthog.identify(user.id, {
        email: user.primaryEmailAddress?.emailAddress,
        name: user.fullName,
      })
    }
  }, [isSignedIn, user])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
