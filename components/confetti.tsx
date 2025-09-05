'use client'

import confetti from 'canvas-confetti'
import { useEffect } from 'react'

interface ConfettiOptions {
  particleCount?: number
  angle?: number
  spread?: number
  startVelocity?: number
  decay?: number
  gravity?: number
  drift?: number
  ticks?: number
  origin?: {
    x?: number
    y?: number
  }
  colors?: string[]
  shapes?: confetti.Shape[]
  scalar?: number
  zIndex?: number
  disableForReducedMotion?: boolean
}

const defaults: ConfettiOptions = {
  particleCount: 100,
  angle: 90,
  spread: 360,
  startVelocity: 30,
  decay: 0.94,
  gravity: 1,
  drift: 0,
  ticks: 200,
  origin: { x: 0.5, y: 0.5 },
  colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'],
  scalar: 1,
  zIndex: 100,
  disableForReducedMotion: false
}

export function triggerConfetti(options?: ConfettiOptions) {
  const settings = { ...defaults, ...options }
  
  if (settings.disableForReducedMotion) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      return
    }
  }

  confetti({
    particleCount: settings.particleCount,
    angle: settings.angle,
    spread: settings.spread,
    startVelocity: settings.startVelocity,
    decay: settings.decay,
    gravity: settings.gravity,
    drift: settings.drift,
    ticks: settings.ticks,
    origin: settings.origin,
    colors: settings.colors,
    shapes: settings.shapes,
    scalar: settings.scalar,
    zIndex: settings.zIndex,
  })
}

export function Confetti({ trigger = false, options }: { trigger?: boolean; options?: ConfettiOptions }) {
  useEffect(() => {
    if (trigger) {
      triggerConfetti(options)
    }
  }, [trigger, options])

  return null
}

// Pre-built animation styles
export const confettiPresets = {
  success: () => {
    const scalar = 1.5
    const checkmark = confetti.shapeFromText({ text: '✅', scalar })
    const speech = confetti.shapeFromText({ text: '💬', scalar })
    
    const end = Date.now() + 0.8 * 1000 // 0.8 seconds (much shorter)
    const colors = ['#10b981', '#3b82f6', '#8b5cf6', '#ec4899']

    const frame = () => {
      if (Date.now() > end) return

      // Left side - checkmarks (reduced particles)
      confetti({
        particleCount: 1,
        angle: 60,
        spread: 45,
        startVelocity: 35,
        origin: { x: 0, y: 0.6 },
        shapes: [checkmark],
        scalar,
        colors: colors,
        ticks: 150,
        gravity: 0.9,
        decay: 0.94,
      })
      
      // Right side - speech bubbles (reduced particles)
      confetti({
        particleCount: 1,
        angle: 120,
        spread: 45,
        startVelocity: 35,
        origin: { x: 1, y: 0.6 },
        shapes: [speech],
        scalar,
        colors: colors,
        ticks: 150,
        gravity: 0.9,
        decay: 0.94,
      })

      requestAnimationFrame(frame)
    }

    frame()
  },
  
  fireworks: () => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      })
    }, 250)
  },
  
  sideCannons: () => {
    const end = Date.now() + 2 * 1000
    const colors = ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      })

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }
}