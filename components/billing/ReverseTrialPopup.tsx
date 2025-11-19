'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Sparkles, Clock, CreditCard } from 'lucide-react'
import { REVERSE_TRIAL } from '@/lib/constants'

interface ReverseTrialPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAccept?: () => void
}

export function ReverseTrialPopup({
  open,
  onOpenChange,
  onAccept,
}: ReverseTrialPopupProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleAcceptTrial = async () => {
    setIsLoading(true)

    try {
      // Call API to activate reverse trial
      const response = await fetch('/api/reverse-trial', {
        method: 'POST',
      })

      if (response.ok) {
        onAccept?.()
        onOpenChange(false)
        // Refresh to update UI with new trial status
        router.refresh()
      } else {
        console.error('Failed to activate trial')
      }
    } catch (error) {
      console.error('Error activating trial:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const benefits = [
    {
      icon: Sparkles,
      text: `${REVERSE_TRIAL.minutesAllowed} minutes of transcription`,
    },
    {
      icon: Clock,
      text: `${REVERSE_TRIAL.durationDays} days free access`,
    },
    {
      icon: CreditCard,
      text: 'No credit card required',
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>

        <DialogHeader className="pt-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <DialogTitle className="text-2xl text-center">
              Wait! Try our best plan FREE
            </DialogTitle>
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
              Limited Offer
            </Badge>
          </div>
          <DialogDescription className="text-center text-base">
            We know you'll love our Reasoning mode. Try it risk-free for{' '}
            {REVERSE_TRIAL.durationDays} days with {REVERSE_TRIAL.minutesAllowed}{' '}
            minutes of transcription.
          </DialogDescription>
        </DialogHeader>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800 p-6 mt-4">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2">
              <span className="line-through text-muted-foreground text-2xl mr-2">
                $129
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                FREE
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              for {REVERSE_TRIAL.durationDays} days
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="rounded-full bg-white dark:bg-gray-900 p-2">
                    <Icon className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              )
            })}
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm mb-2">What you get:</h4>
            <ul className="space-y-2">
              {[
                'Human-level accuracy with AI reasoning',
                'Multi-model consensus for best results',
                'Unlimited transcriptions during trial',
                'Speaker detection included',
                'Download in multiple formats',
                'Priority support',
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <div className="flex flex-col gap-3 pt-4">
          <Button
            onClick={handleAcceptTrial}
            disabled={isLoading}
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {isLoading ? 'Activating...' : 'Start my free trial'}
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            variant="ghost"
            size="sm"
            className="w-full"
          >
            No thanks, I'll stick with the free plan
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-2">
          Trial ends automatically after {REVERSE_TRIAL.durationDays} days. No
          auto-billing. You'll be moved to the free plan unless you choose to
          upgrade.
        </p>
      </DialogContent>
    </Dialog>
  )
}
