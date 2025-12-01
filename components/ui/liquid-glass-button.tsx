'use client'

import { LiquidGlassCard } from '@/components/ui/liquid-glass'
import { cn } from '@/lib/utils'

interface LiquidGlassButtonProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}

export function LiquidGlassButton({
  className,
  size = 'md',
  children,
  onClick,
  disabled,
  'aria-label': ariaLabel
}: LiquidGlassButtonProps) {
  const sizeClasses = {
    sm: 'h-8 min-w-8 px-2',
    md: 'h-10 min-w-10 px-3',
    lg: 'h-12 min-w-12 px-4'
  }

  return (
    <LiquidGlassCard
      draggable={false}
      blurIntensity="md"
      shadowIntensity="sm"
      glowIntensity="xs"
      borderRadius="9999px"
      tint="auto"
      className={cn(
        'flex items-center justify-center text-foreground cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        disabled && 'opacity-50 cursor-not-allowed',
        sizeClasses[size],
        className
      )}
      onClick={disabled ? undefined : onClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-label={ariaLabel}
    >
      <span className="relative z-30">{children}</span>
    </LiquidGlassCard>
  )
}
