'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Check, Mic } from 'lucide-react'
import { LiquidGlassCard } from '@/components/ui/liquid-glass'
import { TIER_FEATURES, TIER_PRICES, PRICING_TIERS, USAGE_LIMITS } from '@/lib/constants'
import { useUser, SignUpButton } from '@clerk/nextjs'
import type { UsageData } from '@/hooks/use-usage'

interface PaywallModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void
  trigger?: 'usage-exceeded' | 'upgrade-prompt'
  usageData?: UsageData
  reason?: string
  isGuest?: boolean  // If true, show sign-up flow instead of upgrade
}

export function PaywallModal({
  open,
  onOpenChange,
  onClose,
  trigger = 'usage-exceeded',
  usageData,
  reason,
  isGuest = false,
}: PaywallModalProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const { isSignedIn } = useUser()

  // Use prop or detect from auth state
  const showGuestFlow = isGuest || !isSignedIn

  const handleClose = (open: boolean) => {
    if (!open && onClose) {
      onClose()
    }
    onOpenChange(open)
  }

  const handleSubscribe = async (tier: string) => {
    if (tier === PRICING_TIERS.FREE) return

    setIsLoading(tier)
    window.location.href = `/api/checkout?tier=${tier}`
  }

  // Guest sign-up modal
  if (showGuestFlow) {
    const freeMinutes = USAGE_LIMITS[PRICING_TIERS.FREE].minutesPerMonth

    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md p-0 bg-transparent border-none shadow-none [&>button]:hidden">
          <VisuallyHidden>
            <DialogTitle>Sign up to transcribe</DialogTitle>
          </VisuallyHidden>
          <LiquidGlassCard
            draggable={false}
            blurIntensity="xl"
            shadowIntensity="lg"
            glowIntensity="md"
            tint="auto"
            borderRadius="24px"
            className="p-8"
          >
            {/* Header */}
            <div className="text-center mb-6 relative z-30">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mic className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Sign up to transcribe your files
              </h2>
              <p className="text-muted-foreground">
                Get {freeMinutes} free minutes every month
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6 relative z-30">
              {TIER_FEATURES[PRICING_TIERS.FREE].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="space-y-3 relative z-30">
              <SignUpButton mode="modal" forceRedirectUrl="/new">
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Sign Up Free
                </Button>
              </SignUpButton>
              <p className="text-xs text-center text-muted-foreground">
                No credit card required
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => handleClose(false)}
              className="absolute top-4 right-4 z-40 p-2 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </LiquidGlassCard>
        </DialogContent>
      </Dialog>
    )
  }

  // Authenticated user upgrade modal
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl p-0 bg-transparent border-none shadow-none [&>button]:hidden">
        <VisuallyHidden>
          <DialogTitle>Upgrade your plan</DialogTitle>
        </VisuallyHidden>
        <LiquidGlassCard
          draggable={false}
          blurIntensity="xl"
          shadowIntensity="lg"
          glowIntensity="md"
          tint="auto"
          borderRadius="24px"
          className="p-8"
        >
          {/* Header */}
          <div className="text-center mb-8 relative z-30">
            <h2 className="text-2xl font-bold mb-2">
              {trigger === 'usage-exceeded'
                ? 'Need more transcription time?'
                : 'Upgrade for more time'}
            </h2>
            {reason && (
              <p className="text-foreground/80 font-medium mb-1">{reason}</p>
            )}
            {usageData && (
              <p className="text-muted-foreground">
                You&apos;ve used {usageData.minutesUsed} of {usageData.minutesLimit} minutes this month
              </p>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-30">
            {/* Free Tier */}
            <div className="p-6 rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-1">
                {TIER_FEATURES[PRICING_TIERS.FREE].name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {TIER_FEATURES[PRICING_TIERS.FREE].description}
              </p>
              <div className="mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                {TIER_FEATURES[PRICING_TIERS.FREE].features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full"
                disabled
              >
                Current plan
              </Button>
            </div>

            {/* Pro Tier */}
            <div className="relative p-6 rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                {TIER_FEATURES[PRICING_TIERS.PRO].badge}
              </Badge>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-lg">
                  {TIER_FEATURES[PRICING_TIERS.PRO].name}
                </h3>
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {TIER_FEATURES[PRICING_TIERS.PRO].description}
              </p>
              <div className="mb-4">
                <span className="text-4xl font-bold">${TIER_PRICES[PRICING_TIERS.PRO].monthly}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                {TIER_FEATURES[PRICING_TIERS.PRO].features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleSubscribe(PRICING_TIERS.PRO)}
                disabled={isLoading !== null}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                {isLoading === PRICING_TIERS.PRO ? 'Processing...' : TIER_FEATURES[PRICING_TIERS.PRO].cta}
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-border/30 relative z-30">
            <p className="text-xs text-center text-muted-foreground">
              Satisfaction guaranteed. Cancel anytime.
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={() => handleClose(false)}
            className="absolute top-4 right-4 z-40 p-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </LiquidGlassCard>
      </DialogContent>
    </Dialog>
  )
}
