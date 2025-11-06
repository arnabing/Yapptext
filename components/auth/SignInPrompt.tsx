'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LogIn, UserPlus } from 'lucide-react'

interface SignInPromptProps {
  title?: string
  description?: string
  compact?: boolean
  className?: string
}

export function SignInPrompt({
  title = 'Sign in to continue',
  description = 'You need to be signed in to access this feature.',
  compact = false,
  className = '',
}: SignInPromptProps) {
  const router = useRouter()

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push('/sign-in')}
        >
          <LogIn className="h-4 w-4 mr-2" />
          Sign in
        </Button>
      </div>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-3">
        <Button
          onClick={() => router.push('/sign-up')}
          className="flex-1"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Sign up
        </Button>
        <Button
          onClick={() => router.push('/sign-in')}
          variant="outline"
          className="flex-1"
        >
          <LogIn className="h-4 w-4 mr-2" />
          Sign in
        </Button>
      </CardContent>
    </Card>
  )
}
