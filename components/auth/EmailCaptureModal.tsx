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
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Download, Clock, Sparkles } from 'lucide-react'

interface EmailCaptureModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  trigger?: 'first-transcript' | 'download-attempt'
}

export function EmailCaptureModal({
  open,
  onOpenChange,
  trigger = 'first-transcript',
}: EmailCaptureModalProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = () => {
    setIsLoading(true)
    router.push('/sign-in')
  }

  const handleSignUp = () => {
    setIsLoading(true)
    router.push('/sign-up')
  }

  const benefits = [
    {
      icon: Clock,
      title: '60 minutes per month',
      description: 'Transcribe up to 60 minutes of audio every month',
    },
    {
      icon: Download,
      title: 'Download transcripts',
      description: 'Export your transcripts in multiple formats',
    },
    {
      icon: Sparkles,
      title: 'Speaker detection',
      description: 'Automatic speaker identification and labeling',
    },
    {
      icon: CheckCircle2,
      title: 'Save your history',
      description: 'Access all your transcripts anytime',
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <DialogTitle className="text-2xl">
              {trigger === 'download-attempt'
                ? 'Sign in to download'
                : 'Love what you see?'}
            </DialogTitle>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Free
            </Badge>
          </div>
          <DialogDescription className="text-base">
            {trigger === 'download-attempt'
              ? 'Sign up with your email to unlock downloads and get 60 minutes of transcription per month.'
              : 'Sign up for free to unlock more transcriptions and download your results.'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <Button
            onClick={handleSignUp}
            disabled={isLoading}
            size="lg"
            className="w-full"
          >
            {isLoading ? 'Redirecting...' : 'Sign up for free'}
          </Button>
          <Button
            onClick={handleSignIn}
            disabled={isLoading}
            variant="outline"
            size="lg"
            className="w-full"
          >
            Already have an account? Sign in
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground pt-2">
          No credit card required. Start transcribing in seconds.
        </p>
      </DialogContent>
    </Dialog>
  )
}
