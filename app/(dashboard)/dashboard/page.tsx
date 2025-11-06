import { redirect } from 'next/navigation'
import { getCurrentUserId } from '@/lib/auth'
import { getUserUsageSummary } from '@/lib/usage'
import { UsageCard } from '@/components/dashboard/UsageCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileAudio, Download, Users, Star } from 'lucide-react'

export default async function DashboardPage() {
  const userId = await getCurrentUserId()

  if (!userId) {
    redirect('/sign-in')
  }

  const usageSummary = await getUserUsageSummary(userId)

  // Mock stats for now - in production, fetch from database
  const stats = [
    {
      icon: FileAudio,
      label: 'Total Transcripts',
      value: '12',
      description: 'All time',
    },
    {
      icon: Download,
      label: 'Downloads',
      value: '8',
      description: 'This month',
    },
    {
      icon: Users,
      label: 'Speakers Detected',
      value: '34',
      description: 'Total unique',
    },
    {
      icon: Star,
      label: 'Avg. Accuracy',
      value: '98%',
      description: 'Word error rate',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your usage and manage your subscription
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.label}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <UsageCard
            usage={usageSummary}
            onUpgrade={() => {
              // This will be handled by client component
              window.location.href = '/dashboard#upgrade'
            }}
          />

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and helpful links
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="/"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileAudio className="h-5 w-5" />
                  <div>
                    <p className="font-medium">New Transcription</p>
                    <p className="text-sm text-muted-foreground">
                      Upload a new audio file
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="/settings"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Account Settings</p>
                    <p className="text-sm text-muted-foreground">
                      Manage your profile
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="/billing"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Billing & Plans</p>
                    <p className="text-sm text-muted-foreground">
                      View or change your plan
                    </p>
                  </div>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
