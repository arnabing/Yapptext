import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { HeaderProvider } from "@/lib/header-context"
import { TranscriptProvider } from "@/lib/transcript-context"
import { FloatingGlassControls } from "@/components/floating-glass-controls"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TranscriptProvider>
      <HeaderProvider>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <SidebarInset className="relative flex flex-col min-h-screen">
            <FloatingGlassControls />
            <div className="flex-1 overflow-y-auto">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </HeaderProvider>
    </TranscriptProvider>
  )
}
