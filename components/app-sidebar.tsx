'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
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
  Pencil,
  Trash2,
  AudioWaveform,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
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
  const { user, isSignedIn } = useUser()
  const { signOut, redirectToSignIn } = useClerk()
  const [usageData, setUsageData] = useState<{
    minutesUsed: number
    remaining: number
    dailyLimit: number
  } | null>(null)
  const [showPaywall, setShowPaywall] = useState(false)
  const [transcripts, setTranscripts] = useState<Transcript[]>([])
  const [renamingId, setRenamingId] = useState<string | null>(null)
  const [newTitle, setNewTitle] = useState('')

  // Determine user tier
  const userTier = isSignedIn ? PRICING_TIERS.FREE : PRICING_TIERS.ANONYMOUS
  const isPro = userTier === PRICING_TIERS.PRO
  const limit = USAGE_LIMITS[userTier].minutesPerMonth

  // Fetch usage data and transcripts
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isSignedIn) {
          // Fetch usage data for authenticated users
          const usageResponse = await fetch('/api/user/usage')
          if (usageResponse.ok) {
            const data = await usageResponse.json()
            setUsageData({
              minutesUsed: data.minutesUsed,
              remaining: data.minutesLimit - data.minutesUsed,
              dailyLimit: data.minutesLimit
            })
          }

          // Fetch transcripts
          const transcriptsResponse = await fetch('/api/transcripts')
          if (transcriptsResponse.ok) {
            const data = await transcriptsResponse.json()
            setTranscripts(data.transcripts || [])
          }
        } else {
          // Fetch usage data for anonymous users
          const limitResponse = await fetch('/api/check-limit')
          if (limitResponse.ok) {
            const data = await limitResponse.json()
            setUsageData({
              minutesUsed: data.minutesUsed || 0,
              remaining: data.remaining || 20,
              dailyLimit: 20
            })
          }
        }
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }

    fetchData()
  }, [isSignedIn])

  const handleManageBilling = async () => {
    try {
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
        setTranscripts(transcripts.filter(t => t.id !== id))

        if (pathname === `/t/${id}`) {
          router.push('/new')
        }
      }
    } catch (error) {
      console.error('Failed to delete transcript:', error)
    }
  }

  const minutesUsed = usageData?.minutesUsed ?? 0
  const usagePercent = (minutesUsed / limit) * 100

  return (
    <>
      <Sidebar collapsible="offcanvas">
        {/* CUSTOM HEADER: Branding + New Button */}
        <SidebarHeader className="border-b border-sidebar-border p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                asChild
                className="mb-2"
              >
                <button onClick={() => router.push('/')}>
                  <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-full">
                    <AudioWaveform className="size-6" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span
                      className="font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                      style={{fontFamily: '"Sixtyfour Convergence Variable", sans-serif'}}
                    >
                      YappText
                    </span>
                    <span className="text-xs text-muted-foreground">Audio Transcription</span>
                  </div>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <Button
            onClick={() => router.push('/new')}
            className="w-full"
            variant="outline"
          >
            <Plus className="h-4 w-4 mr-2" />
            New transcription
          </Button>
        </SidebarHeader>

        {/* SCROLLABLE CONTENT */}
        <SidebarContent className="flex flex-col">
          {/* CUSTOM: Recent Transcripts */}
          {isSignedIn && transcripts.length > 0 && (
            <SidebarGroup>
              <SidebarGroupLabel>Transcripts</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {transcripts.map((transcript) => {
                    const isActive = pathname === `/t/${transcript.id}`
                    const isRenaming = renamingId === transcript.id

                    return (
                      <SidebarMenuItem key={transcript.id}>
                        {isRenaming ? (
                          <div className="flex flex-col gap-1 w-full px-2 py-1.5">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
                              <input
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value.slice(0, 60))}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    handleRenameSubmit(transcript.id)
                                  } else if (e.key === 'Escape') {
                                    setRenamingId(null)
                                  }
                                }}
                                onBlur={() => handleRenameSubmit(transcript.id)}
                                autoFocus
                                maxLength={60}
                                className="flex-1 min-w-0 bg-background border border-input rounded-md px-2 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              />
                            </div>
                            <span className="text-xs text-muted-foreground pl-6">
                              {newTitle.length}/60 characters
                            </span>
                          </div>
                        ) : (
                          <>
                            <SidebarMenuButton asChild isActive={isActive}>
                              <Link href={`/t/${transcript.id}`}>
                                <FileText />
                                <span className="truncate">{transcript.title}</span>
                              </Link>
                            </SidebarMenuButton>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <SidebarMenuAction showOnHover>
                                  <MoreHorizontal />
                                  <span className="sr-only">More</span>
                                </SidebarMenuAction>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent side="right" align="start">
                                <DropdownMenuItem onClick={() => handleRename(transcript.id, transcript.title)}>
                                  <Pencil className="text-muted-foreground" />
                                  <span>Rename</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => handleDelete(transcript.id)}
                                  className="text-destructive focus:text-destructive"
                                >
                                  <Trash2 className="text-muted-foreground" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </>
                        )}
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {isSignedIn && transcripts.length > 0 && <SidebarSeparator />}

          {/* CUSTOM: Usage & Upgrade Card */}
          <SidebarGroup className="flex-none mt-auto">
            <Card className="mx-2 border-sidebar-border bg-sidebar">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">
                      {isSignedIn ? 'Monthly Usage' : 'Daily Usage'}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {minutesUsed}/{limit} min
                    </span>
                  </div>
                  <Progress value={usagePercent} className="h-2" />
                  {!isPro && usagePercent > 80 && (
                    <p className="text-xs text-orange-600">Running low on minutes</p>
                  )}
                  {!isSignedIn && (
                    <p className="text-xs text-muted-foreground">
                      Sign in for more minutes
                    </p>
                  )}
                </div>

                {!isPro && (
                  <>
                    <Separator />
                    <Button
                      onClick={() => setShowPaywall(true)}
                      className="w-full"
                      variant="default"
                    >
                      <Crown className="h-4 w-4 mr-2" />
                      Upgrade to Pro
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </SidebarGroup>
        </SidebarContent>

        {/* CUSTOM: User Menu Footer */}
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
                <SidebarMenuButton size="lg" onClick={() => redirectToSignIn()}>
                  <UserIcon className="h-4 w-4" />
                  <span>Sign In</span>
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
