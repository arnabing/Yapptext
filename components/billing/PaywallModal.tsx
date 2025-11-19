'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Zap, Crown } from 'lucide-react'
import { TIER_FEATURES, PRICING_TIERS } from '@/lib/constants'

interface PaywallModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose?: () => void // Called when user closes without selecting
  trigger?: 'usage-exceeded' | 'upgrade-prompt'
}

export function PaywallModal({
  open,
  onOpenChange,
  onClose,
  trigger = 'usage-exceeded',
}: PaywallModalProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleClose = (open: boolean) => {
    if (!open && onClose) {
      onClose() // Trigger reverse trial offer
    }
    onOpenChange(open)
  }

  const handleSubscribe = async (tier: string) => {
    setIsLoading(tier)

    // TODO: Implement Stripe checkout
    // For now, just redirect to a checkout page
    window.location.href = `/api/checkout?tier=${tier}`
  }

  const tiers = [
    {
      id: PRICING_TIERS.FREE,
      name: TIER_FEATURES[PRICING_TIERS.FREE].name,
      description: TIER_FEATURES[PRICING_TIERS.FREE].description,
      price: 0,
      features: TIER_FEATURES[PRICING_TIERS.FREE].features,
      badge: TIER_FEATURES[PRICING_TIERS.FREE].badge,
      icon: Zap,
      color: 'text-muted-foreground',
    },
    {
      id: PRICING_TIERS.PRO,
      name: TIER_FEATURES[PRICING_TIERS.PRO].name,
      description: TIER_FEATURES[PRICING_TIERS.PRO].description,
      price: TIER_FEATURES[PRICING_TIERS.PRO].price,
      features: TIER_FEATURES[PRICING_TIERS.PRO].features,
      badge: TIER_FEATURES[PRICING_TIERS.PRO].badge,
      icon: Crown,
      color: 'text-primary',
    },
  ]

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">
            {trigger === 'usage-exceeded'
              ? 'Upgrade to continue transcribing'
              : 'Choose the perfect plan for you'}
          </DialogTitle>
          <DialogDescription className="text-base">
            {trigger === 'usage-exceeded'
              ? "You've reached your monthly limit. Upgrade to Pro for 500 minutes per month."
              : 'All plans include the same accuracy - gated by capacity only. Speaker detection, custom vocabulary, and downloads included.'}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 py-6">
          {tiers.map((tier) => {
            const Icon = tier.icon
            const isPopular = tier.badge === 'Most Popular'

            return (
              <Card
                key={tier.id}
                className={`relative ${
                  isPopular ? 'border-primary shadow-lg' : ''
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className={isPopular ? 'bg-primary' : ''}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`h-6 w-6 ${tier.color}`} />
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {tier.description}
                  </CardDescription>
                  <div className="pt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">${tier.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleSubscribe(tier.id)}
                    disabled={isLoading !== null}
                    className="w-full"
                    variant={isPopular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {isLoading === tier.id
                      ? 'Processing...'
                      : TIER_FEATURES[tier.id].cta}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center text-sm text-muted-foreground pt-4 border-t">
          <p>All plans include a 7-day free trial. Cancel anytime.</p>
          <p className="mt-1">No credit card required for trial.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
