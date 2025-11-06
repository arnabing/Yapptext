'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, Zap, Calendar, TrendingUp } from 'lucide-react'

interface UsageData {
  tier: string
  minutesUsed: number
  minutesLimit: number
  periodStart: Date
  periodEnd: Date
  isUnlimited: boolean
  mode: string
  canDownload: boolean
  isInTrial?: boolean
  trialEndsAt?: Date | null
  subscriptionEndsAt?: Date | null
  subscriptionStatus?: string | null
}

interface UsageCardProps {
  usage: UsageData
  onUpgrade?: () => void
}

export function UsageCard({ usage, onUpgrade }: UsageCardProps) {
  const usagePercent = usage.isUnlimited
    ? 0
    : Math.min((usage.minutesUsed / usage.minutesLimit) * 100, 100)

  const remainingMinutes = usage.isUnlimited
    ? Infinity
    : Math.max(usage.minutesLimit - usage.minutesUsed, 0)

  const daysUntilReset = Math.ceil(
    (usage.periodEnd.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'turbo':
        return 'bg-blue-500'
      case 'standard':
        return 'bg-primary'
      case 'reasoning':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getTierName = (tier: string) => {
    return tier.charAt(0).toUpperCase() + tier.slice(1)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              Usage Overview
              <Badge className={getTierColor(usage.tier)}>
                {getTierName(usage.tier)}
              </Badge>
            </CardTitle>
            <CardDescription>
              {usage.isInTrial
                ? `Trial ends ${usage.trialEndsAt ? new Date(usage.trialEndsAt).toLocaleDateString() : 'soon'}`
                : `Resets in ${daysUntilReset} day${daysUntilReset !== 1 ? 's' : ''}`}
            </CardDescription>
          </div>
          {!usage.isUnlimited && onUpgrade && (
            <Button onClick={onUpgrade} size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Upgrade
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Usage Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Transcription minutes</span>
            <span className="font-semibold">
              {usage.isUnlimited ? (
                <span className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  Unlimited
                </span>
              ) : (
                `${usage.minutesUsed} / ${usage.minutesLimit}`
              )}
            </span>
          </div>
          {!usage.isUnlimited && (
            <Progress
              value={usagePercent}
              className="h-2"
            />
          )}
          {!usage.isUnlimited && (
            <p className="text-xs text-muted-foreground">
              {remainingMinutes} minutes remaining this month
            </p>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-xs">Current Mode</span>
            </div>
            <p className="text-sm font-semibold capitalize">{usage.mode}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="text-xs">Billing Period</span>
            </div>
            <p className="text-sm font-semibold">
              {usage.periodStart.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}{' '}
              -{' '}
              {usage.periodEnd.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Trial Banner */}
        {usage.isInTrial && usage.trialEndsAt && (
          <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800 p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-white dark:bg-gray-900 p-2">
                <Zap className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">
                  You're on a free trial!
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Enjoying Reasoning mode? Upgrade before{' '}
                  {new Date(usage.trialEndsAt).toLocaleDateString()} to keep
                  access.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Free tier CTA */}
        {usage.tier === 'free' && !usage.isInTrial && onUpgrade && (
          <div className="rounded-lg border border-dashed p-4 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Need more minutes or faster transcription?
            </p>
            <Button onClick={onUpgrade} variant="outline" className="w-full">
              View plans
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
