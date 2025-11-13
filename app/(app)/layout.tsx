import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
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
        <main className="flex w-full flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4">
            <SidebarTrigger />
            <h1
              className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              style={{fontFamily: '"Sixtyfour Convergence Variable", sans-serif'}}
            >
              YappText
            </h1>
            <HeaderActions />
          </header>
          {children}
        </main>
      </SidebarProvider>
    </HeaderProvider>
  )
}
