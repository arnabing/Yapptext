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
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <div className="flex-1" />
            <HeaderActions />
          </header>
          <div className="flex-1 overflow-auto pb-32 md:pb-36">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </HeaderProvider>
  )
}
