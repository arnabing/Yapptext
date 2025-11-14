'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useUser, useClerk } from '@clerk/nextjs'
import {
  FileText,
  CreditCard,
  LogOut,
  ChevronDown,
  Crown,
  User as UserIcon,
  Plus,
  Settings,
  MoreHorizontal,
  Download,
  Pencil,
  Trash2,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PaywallModal } from '@/components/billing/PaywallModal'
import { USAGE_LIMITS, PRICING_TIERS } from '@/lib/constants'

type Transcript = {
  id: string
  title: string
  createdAt: string
  duration: number
}

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user, isSignedIn } = useUser()
  const { signOut } = useClerk()
  const [usageData, setUsageData] = useState<{
    minutesUsed: number
    remaining: number
    dailyLimit: number
  } | null>(null)
  const [showPaywall, setShowPaywall] = useState(false)
  const [isUsageOpen, setIsUsageOpen] = useState(true)
  const [transcripts, setTranscripts] = useState<Transcript[]>([])
  const [renamingId, setRenamingId] = useState<string | null>(null)
  const [newTitle, setNewTitle] = useState('')

  // Determine user tier (for now, everyone is free - will add Stripe integration later)
  const userTier = isSignedIn ? PRICING_TIERS.FREE : PRICING_TIERS.ANONYMOUS
  const isPro = userTier === PRICING_TIERS.PRO
  const limit = USAGE_LIMITS[userTier].minutesPerMonth

  // Fetch usage data and transcripts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch usage data
        const usageResponse = await fetch('/api/check-limit')
        if (usageResponse.ok) {
          const usageData = await usageResponse.json()
          setUsageData(usageData)
        }

        // Fetch transcripts if signed in
        if (isSignedIn) {
          const transcriptsResponse = await fetch('/api/transcripts')
          if (transcriptsResponse.ok) {
            const data = await transcriptsResponse.json()
            setTranscripts(data.transcripts || [])
          }
        }
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }

    fetchData()
  }, [isSignedIn, searchParams])

  const handleManageBilling = async () => {
    try {
      // Redirect to Stripe Customer Portal
      const response = await fetch('/api/create-portal-session', {
        method: 'POST',
      })

      if (response.ok) {
        const { url } = await response.json()
        window.location.href = url
      }
    } catch (error) {
      console.error('Failed to open billing portal:', error)
    }
  }

  const handleRename = async (id: string, currentTitle: string) => {
    setRenamingId(id)
    setNewTitle(currentTitle)
  }

  const handleRenameSubmit = async (id: string) => {
    if (!newTitle.trim()) return

    try {
      const response = await fetch(`/api/transcripts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle.trim() }),
      })

      if (response.ok) {
        // Update local state
        setTranscripts(transcripts.map(t =>
          t.id === id ? { ...t, title: newTitle.trim() } : t
        ))
        setRenamingId(null)
      }
    } catch (error) {
      console.error('Failed to rename transcript:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this transcript?')) return

    try {
      const response = await fetch(`/api/transcripts/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // Update local state
        setTranscripts(transcripts.filter(t => t.id !== id))

        // If currently viewing this transcript, navigate to home
        if (searchParams?.get('transcriptId') === id) {
          router.push('/')
        }
      }
    } catch (error) {
      console.error('Failed to delete transcript:', error)
    }
  }

  const handleDownload = async (id: string, title: string) => {
    try {
      const response = await fetch(`/api/transcripts/${id}`)
      if (response.ok) {
        const data = await response.json()
        const blob = new Blob([data.text], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${title}.txt`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.error('Failed to download transcript:', error)
    }
  }

  const minutesUsed = usageData?.minutesUsed ?? 0
  const usagePercent = (minutesUsed / limit) * 100

  return (
    <>
      <Sidebar collapsible="offcanvas">
        <SidebarHeader className="border-b border-sidebar-border p-4">
          <Button
            onClick={() => router.push('/')}
            className="w-full"
            variant="outline"
          >
            <Plus className="h-4 w-4 mr-2" />
            New transcription
          </Button>
        </SidebarHeader>

        <SidebarContent className="flex flex-col">
          {/* Transcripts List */}
          {isSignedIn && transcripts.length > 0 && (
            <SidebarGroup className="flex-1 overflow-hidden">
              <SidebarGroupLabel className="px-4 text-xs text-muted-foreground">
                Transcripts
              </SidebarGroupLabel>
              <SidebarGroupContent className="flex-1 overflow-hidden">
                <ScrollArea className="h-full">
                  <SidebarMenu>
                    {transcripts.map((transcript) => {
                      const isActive = searchParams?.get('transcriptId') === transcript.id
                      return (
                        <SidebarMenuItem key={transcript.id}>
                          <SidebarMenuButton asChild isActive={isActive}>
                            <Link href={`/?transcriptId=${transcript.id}`}>
                              <FileText />
                              <span>{transcript.title}</span>
                            </Link>
                          </SidebarMenuButton>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <SidebarMenuAction showOnHover>
                                <MoreHorizontal />
                                <span className="sr-only">More</span>
                              </SidebarMenuAction>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              className="w-56 rounded-lg"
                              side="right"
                              align="start"
                            >
                              <DropdownMenuItem onClick={() => handleRename(transcript.id, transcript.title)}>
                                <Pencil className="text-muted-foreground" />
                                <span>Rename</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDownload(transcript.id, transcript.title)}>
                                <Download className="text-muted-foreground" />
                                <span>Download</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => handleDelete(transcript.id)}
                                className="text-destructive focus:text-destructive"
                              >
                                <Trash2 className="text-muted-foreground" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                </ScrollArea>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {isSignedIn && transcripts.length > 0 && <SidebarSeparator />}

          {/* Usage Quota */}
          {isSignedIn && (
            <SidebarGroup className="flex-none mt-auto">
              <Collapsible open={isUsageOpen} onOpenChange={setIsUsageOpen}>
                <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium hover:bg-sidebar-accent rounded-md">
                  <span>Usage</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isUsageOpen ? 'rotate-180' : ''
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-2 space-y-2">
                  <div className="text-xs text-muted-foreground">
                    {minutesUsed} of {limit} minutes used
                  </div>
                  <Progress value={usagePercent} className="h-2" />
                  {!isPro && usagePercent > 80 && (
                    <p className="text-xs text-orange-600">
                      Running low on minutes
                    </p>
                  )}
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          )}

          {/* Upgrade CTA */}
          {!isPro && (
            <SidebarGroup className="flex-none">
              <SidebarGroupContent className="px-2">
                <Button
                  onClick={() => setShowPaywall(true)}
                  className="w-full"
                  variant="default"
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Upgrade to Pro
                </Button>
              </SidebarGroupContent>
            </SidebarGroup>
          )}
        </SidebarContent>

        {/* User Menu Footer */}
        <SidebarFooter className="border-t border-sidebar-border">
          {isSignedIn ? (
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton size="lg" className="w-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.imageUrl} alt={user?.fullName || 'User'} />
                        <AvatarFallback>
                          {user?.firstName?.[0] || user?.emailAddresses?.[0]?.emailAddress?.[0] || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start text-left">
                        <span className="text-sm font-medium">
                          {user?.fullName || user?.emailAddresses?.[0]?.emailAddress}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {isPro ? 'Pro' : 'Free'} Plan
                        </span>
                      </div>
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="top"
                    align="end"
                    className="w-56"
                  >
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    {isPro && (
                      <DropdownMenuItem onClick={handleManageBilling}>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Manage Billing
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          ) : (
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="lg">
                  <Link href="/sign-in">
                    <UserIcon className="h-4 w-4" />
                    <span>Sign In</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          )}
        </SidebarFooter>
      </Sidebar>

      {/* Paywall Modal */}
      <PaywallModal
        open={showPaywall}
        onOpenChange={setShowPaywall}
      />
    </>
  )
}
