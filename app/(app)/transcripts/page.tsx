import { FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TranscriptsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transcripts</h1>
        <p className="text-muted-foreground">
          View and manage your transcription history
        </p>
      </div>

      {/* Empty State */}
      <Card>
        <CardHeader>
          <CardTitle>No transcripts yet</CardTitle>
          <CardDescription>
            Your transcription history will appear here once you start transcribing audio files
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-muted p-8 mb-4">
            <FileText className="h-12 w-12 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-sm">
            Head to the home page to transcribe your first audio file. All your transcripts will be saved here for easy access.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
