import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { HeaderProvider } from "@/lib/header-context"
import { HeaderActions } from "@/components/header-actions"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <HeaderProvider>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset className="flex flex-col h-screen">
          <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b px-4 bg-background">
            <SidebarTrigger />
            <div className="flex-1" />
            <HeaderActions />
          </header>
          <div className="flex-1">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </HeaderProvider>
  )
}
