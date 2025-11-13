'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser, useClerk } from '@clerk/nextjs'
import {
  Home,
  FileText,
  Settings,
  CreditCard,
  LogOut,
  ChevronDown,
  Crown,
  User as UserIcon,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
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

const navItems = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Transcripts',
    href: '/transcripts',
    icon: FileText,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { user, isSignedIn } = useUser()
  const { signOut } = useClerk()
  const [usageData, setUsageData] = useState<{
    minutesUsed: number
    remaining: number
    dailyLimit: number
  } | null>(null)
  const [showPaywall, setShowPaywall] = useState(false)
  const [isUsageOpen, setIsUsageOpen] = useState(true)

  // Determine user tier (for now, everyone is free - will add Stripe integration later)
  const userTier = isSignedIn ? PRICING_TIERS.FREE : PRICING_TIERS.ANONYMOUS
  const isPro = userTier === PRICING_TIERS.PRO
  const limit = USAGE_LIMITS[userTier].minutesPerMonth

  // Fetch usage data
  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const response = await fetch('/api/check-limit')
        if (response.ok) {
          const data = await response.json()
          setUsageData(data)
        }
      } catch (error) {
        console.error('Failed to fetch usage:', error)
      }
    }

    fetchUsage()
  }, [])

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

  const minutesUsed = usageData?.minutesUsed ?? 0
  const usagePercent = (minutesUsed / limit) * 100

  return (
    <>
      <Sidebar collapsible="offcanvas">
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <span className="text-sm font-bold">Y</span>
            </div>
            <span className="text-lg font-semibold">YappText</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {/* Navigation */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* Usage Quota */}
          {isSignedIn && (
            <SidebarGroup>
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
            <SidebarGroup>
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
