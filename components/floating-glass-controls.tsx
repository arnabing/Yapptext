'use client'

import { useSidebar } from '@/components/ui/sidebar'
import { useHeader } from '@/lib/header-context'
import { LiquidGlassButton } from '@/components/ui/liquid-glass-button'
import { LiquidGlassCard } from '@/components/ui/liquid-glass'
import { PanelLeft } from 'lucide-react'

export function FloatingGlassControls() {
  const { toggleSidebar, state } = useSidebar()
  const { headerActions } = useHeader()

  // On desktop, shift sidebar button right when sidebar is open
  const sidebarOpen = state === 'expanded'

  return (
    <>
      {/* Top-left: Sidebar trigger - shifts right when sidebar is open on desktop */}
      <div className={`fixed top-4 z-40 transition-[left] duration-200 ${sidebarOpen ? 'md:left-[calc(16rem+1rem)]' : 'left-4'}`}>
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
            className="h-10 flex items-center gap-1 px-2"
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
