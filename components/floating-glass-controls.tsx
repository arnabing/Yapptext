'use client'

import { useSidebar } from '@/components/ui/sidebar'
import { useHeader } from '@/lib/header-context'
import { LiquidGlassButton } from '@/components/ui/liquid-glass-button'
import { LiquidGlassCard } from '@/components/ui/liquid-glass'
import { PanelLeft } from 'lucide-react'

export function FloatingGlassControls() {
  const { toggleSidebar } = useSidebar()
  const { headerActions } = useHeader()

  return (
    <>
      {/* Top-left: Sidebar trigger */}
      <div className="fixed top-4 left-4 z-40">
        <LiquidGlassButton
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          size="md"
        >
          <PanelLeft className="h-5 w-5" />
        </LiquidGlassButton>
      </div>

      {/* Top-right: Header actions */}
      {headerActions && (
        <div className="fixed top-4 right-4 z-40">
          <LiquidGlassCard
            draggable={false}
            blurIntensity="md"
            shadowIntensity="sm"
            glowIntensity="xs"
            borderRadius="9999px"
            tint="auto"
            className="flex items-center gap-1 px-2 py-1.5"
          >
            <div className="relative z-30 flex items-center gap-1">
              {headerActions}
            </div>
          </LiquidGlassCard>
        </div>
      )}
    </>
  )
}
