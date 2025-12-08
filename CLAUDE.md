# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev          # Start Next.js dev server on localhost:3000

# Build and Deploy
npm run build        # Build production bundle (validates Vercel deployability)
npm start            # Start production server after build

# Database
npx prisma generate  # Generate Prisma client after schema changes
npx prisma migrate dev  # Create and apply migrations
npx prisma studio    # Open database GUI
```

## Critical Architecture: Async Transcription Pattern

**IMPORTANT**: This app uses an asynchronous job-based transcription system. Understanding this flow is essential.

### The Correct Flow (3 steps):

1. **Job Submission** → POST `/api/transcribe`
   - Uploads audio to Vercel Blob
   - Submits job to AssemblyAI via `submitTranscriptionJob()`
   - Returns immediately with `transcriptId` (does NOT wait for completion)

2. **Status Polling** → GET `/api/transcribe-status/[id]`
   - Frontend polls every 3 seconds (max 60 attempts = 3 minutes)
   - Checks AssemblyAI job status via `getTranscriptionStatus(transcriptId)`
   - Returns `{ status: 'queued' | 'processing' | 'completed' | 'error' }`

3. **Completion** → Display transcript
   - When `status === 'completed'`, full transcript data is returned
   - Only then set state and display to user

### Implementation Files

**Core Library** (`lib/assemblyai.ts`):
- `submitTranscriptionJob()` - Submits async job, returns transcript ID
- `getTranscriptionStatus()` - Polls for job completion
- `transcribeWithAssemblyAI()` - Legacy synchronous method (DO NOT USE for new features)

**API Routes**:
- `app/api/transcribe/route.ts` - Job submission endpoint
- `app/api/transcribe-status/[id]/route.ts` - Status polling endpoint with usage logging

**Frontend Component**:
- `components/TranscriptionInterface.tsx` (lines 489-566) - Reference polling implementation
  - Extracts `transcriptId` from response
  - Implements while loop with 3-second intervals
  - Builds status URL with metadata for usage tracking
  - Validates data before using

**CRITICAL**: Any page that handles transcription MUST implement the polling pattern. Do not expect `/api/transcribe` to return transcript data synchronously.

## Route Group Architecture

Next.js 16 App Router with three route groups:

```
app/
├── (marketing)/          # Public landing page at /
│   └── page.tsx          # Uses TranscriptionInterface (light mode)
│
├── (app)/                # Authenticated app routes (requires Clerk)
│   ├── new/page.tsx      # Main transcription workspace at /new
│   ├── settings/         # User settings
│   └── transcripts/      # Transcript history
│
└── (auth)/               # Clerk auth pages
    ├── sign-in/
    └── sign-up/
```

**User Flow**:
- Guests → land at `/` (marketing), redirected to `/new` on sign-in
- Authenticated → always use `/new` workspace
- Both use same transcription logic (TranscriptionInterface component or equivalent polling)

## Next.js 15/16 Breaking Changes

### Async Route Params

Dynamic routes now receive params as a Promise. Always await:

```typescript
// CORRECT
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params  // Must await
  // ...
}

// WRONG
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id  // params is Promise, params.id is undefined
  // ...
}
```

### useSearchParams() Requires Suspense

Client components using `useSearchParams()` must be wrapped in `<Suspense>`:

```typescript
// Component using useSearchParams
function MyComponent() {
  const searchParams = useSearchParams()
  // ...
}

// Wrapper with Suspense
export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <MyComponent />
    </Suspense>
  )
}
```

## Database Schema (Prisma + PostgreSQL)

### Core Models

**User** - Clerk authentication + Stripe billing
- `clerkId` - Unique Clerk user ID
- `email` - User email
- `stripeCustomerId` - Stripe customer reference
- `subscriptionTier` - "free" | "pro"
- `subscriptionStatus` - "active" | "cancelled" | "past_due" | null
- Relations: `usageLogs[]`, `transcripts[]`

**Transcript** - Saved transcriptions
- `userId` - Owner (foreign key to User)
- `title`, `text`, `fileName`
- `audioUrl` - Vercel Blob storage URL
- `utterances` - Speaker segments (JSON)
- `chapters` - Chapter markers (JSON)
- `words` - Word-level timestamps (JSON)

**UsageLog** - Tracks minutes transcribed per user
- `userId` - Foreign key to User
- `minutes` - Audio duration transcribed
- `mode` - "universal" (single model now)

### Usage Tracking

When transcription completes (`/api/transcribe-status/[id]`):
1. Check if job completed successfully
2. Log usage: `await logUsage(userId, duration, model)`
3. Track in `usageLoggedJobs` Set to prevent duplicate logging

## Authentication (Clerk)

- **Client**: Use `useUser()` hook for `isSignedIn`, `user` object
- **Server**: Use `auth()` from `@clerk/nextjs/server` to get `userId`
- Protected routes check `if (!userId)` and return 401

**Environment Variables**:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
```

## Stripe Billing Integration

### Pricing Tiers
- **Free**: 30 min/month
- **Pro**: $20/month, 300 min/month (5 hours)

### API Routes

**`/api/checkout`** - Creates Stripe Checkout session
- Requires authenticated user
- Gets/creates Stripe customer, links to Clerk userId
- Redirects to Stripe hosted checkout page
- On success, redirects to `/new?upgrade=success`

**`/api/webhooks/stripe`** - Handles subscription lifecycle
- Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
- Updates `subscriptionTier` and `subscriptionStatus` in database
- Uses `stripeCustomerId` to find user

**`/api/create-portal-session`** - Stripe Customer Portal
- Opens Stripe's hosted billing portal
- Users can cancel subscription, update payment method
- Returns to `/new` after portal actions

### Important Notes
- **Never manually edit subscriptions in Stripe Dashboard** - always use Customer Portal or API, otherwise webhooks won't fire
- Stripe webhooks update the database automatically on subscription changes
- Use `PRICING_TIERS.FREE` and `PRICING_TIERS.PRO` constants from `lib/constants.ts`

## File Upload Strategy

### Small Files (<4.5MB)
- Direct upload in request body
- Memory-processed by API route

### Large Files (≥4.5MB)
- Upload to Vercel Blob Storage first
- Pass blob URL to `/api/transcribe`
- Blob client handles upload progress

**Implementation**: See `TranscriptionInterface.tsx` lines 398-450

## Testing & Benchmarking System

**Objective**: Measure ensemble transcription quality vs single models using Word Error Rate (WER) and quality gates.

### Test Page
- URL: `/test-transcription`
- Source: `app/test-transcription/page.tsx`
- Features:
  - **Static Compare**: Upload/paste transcript JSON and compare to reference
  - **Live Run**: Execute models and compare outputs in real-time
  - Shows: Gates (D'oh FP/FN, idiom preservation, length bounds), WER, winner selection

### Reference Assets (Gold Standard)
Located in `public/samples/`:
- `homer short.mp3` + `homer_short.draft.json`
- `lil_wayne_deposition.mp3` + `lil_wayne_deposition.draft.json`

### Test API Routes
- `GET /api/test-homer` - Homer test with params (short, contextWindow, glossary, etc.)
- `GET /api/benchmark-transcribe` - Pulp Fiction benchmark
- `GET /api/draft-homer-short?speakers=N&save=1` - Generate/update gold reference
- `GET /api/draft-lil-wayne?speakers=N&save=1` - Generate/update gold reference

### Reconciliation Strategies
- Core logic: `lib/reconcile-strategies.ts`
- Voting helpers: `lib/reconcile-voting.ts`
- Post-processing: idiom freeze, interjection gating, n-gram de-dup

### Quality Gates (Must Pass)
1. **D'oh FP=0 and FN=0** (or high F1 for ambiguous audio)
2. **Idioms preserved** (e.g., "don't panic" not "do not panic")
3. **Length bounds**: 0.85–1.15 of reference

Among gate-passers, pick lowest WER → tie-break with fewer duplicate n-grams, better proper-noun hits, faster time.

## Environment Variables

Required for development:
```bash
# AssemblyAI (Required)
ASSEMBLYAI_API_KEY=your_key

# Clerk Auth (Required)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Database (Required)
DATABASE_URL=postgresql://...

# Vercel Blob (Required for large files)
BLOB_READ_WRITE_TOKEN=vercel_blob_...

# OpenAI (Optional - for translation)
OPENAI_API_KEY=sk-...

# Gemini (Optional - for Reasoning mode)
GEMINI_API_KEY=...

# Stripe (Required for billing)
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Vercel KV (Optional - for rate limiting)
KV_REST_API_URL=...
KV_REST_API_TOKEN=...
```

## Known Issues & Fixes

### Issue: Transcription Fails with Empty Data
**Symptoms**: Completes in <1 second, 0 characters, "Cannot read properties of undefined"

**Cause**: Missing polling implementation - expecting synchronous response from `/api/transcribe`

**Fix**: Implement polling loop (see TranscriptionInterface.tsx lines 514-554):
```typescript
const { transcriptId } = await submitResponse.json()

let data = null
let pollAttempts = 0
while (!data && pollAttempts < 60) {
  await new Promise(resolve => setTimeout(resolve, 3000))
  pollAttempts++

  const statusResponse = await fetch(`/api/transcribe-status/${transcriptId}?userId=...`)
  const statusData = await statusResponse.json()

  if (statusData.status === 'completed') {
    data = statusData
    break
  } else if (statusData.status === 'error') {
    throw new Error(statusData.error)
  }
}
```

### Issue: 400 Bad Request from `/api/transcribe-status/[id]`
**Cause**: Using old Next.js params syntax (synchronous)

**Fix**: Update to async params (see above section)

## Code Patterns

### Transcription Models
- `universal` - Default model, supports speakers (~$0.006/min)
- Accessed via `lib/assemblyai.ts`

### Speaker Diarization
Enabled by default in `universal` model:
```typescript
transcriptOptions.speaker_labels = true
```
Returns utterances with `speaker` field: "Speaker A", "Speaker B", etc.

### Word-Level Timestamps
All transcriptions include `allWords` array with:
```typescript
{
  text: string
  start: number  // milliseconds
  end: number
  confidence: number
  speaker?: string
}
```

Used for synchronized highlighting during audio playback.

## Component Architecture

**TranscriptionInterface.tsx** - Main transcription UI component
- Handles: file upload, blob storage, polling, display
- Used by both landing page (light mode) and app page (dark mode)
- Props: `isDarkMode?: boolean`

**TranscriptView.tsx** - Renders completed transcripts
- Speaker-segmented display
- Word-level highlighting on audio playback
- Copy/download/translate actions

**AudioControls.tsx** - Audio player with seek controls
- Integrated with TranscriptView for synchronized playback
- Keyboard shortcuts (space, arrows)
- Glassmorphism design: `bg-white/30 dark:bg-black/40 backdrop-blur-md`
- **Important**: Wrapper div must NOT have `bg-background` class or it blocks transparency

**AppSidebar.tsx** - Sidebar with transcript history
- Uses shadcn's `useSidebar()` hook for mobile control
- Transcript navigation uses sessionStorage pattern
- Auto-closes on mobile when transcript is selected

## Sidebar Navigation Pattern

The app uses sessionStorage for transcript navigation (since `/t/[id]` route was removed):

```typescript
// Loading a transcript from history (app-sidebar.tsx)
const handleLoadTranscript = async () => {
  const response = await fetch(`/api/transcripts/${transcript.id}`)
  const data = await response.json()

  // Store in sessionStorage
  sessionStorage.setItem('demoTranscript', JSON.stringify({
    id: transcript.id,
    title: data.title,
    text: data.text,
    fileName: data.fileName,
    duration: data.duration,
    audioUrl: data.audioUrl,
    utterances: data.utterances || [],
    chapters: data.chapters || [],
    words: data.words || [],
  }))

  // Close mobile sidebar
  if (isMobile) {
    setOpenMobile(false)
  }

  // Navigate with timestamp to force re-render
  router.push(`/new?t=${Date.now()}`)
}
```

**Key Points:**
- Use `router.push()` / `router.replace()` instead of `window.location.href`
- Add timestamp query param to force useEffect re-run when already on `/new`
- Close mobile sidebar before navigation with `setOpenMobile(false)`

## Theme & Styling

### Green Theme (HSL for Tailwind v3)

The app uses a green accent theme defined in `app/globals.css`:

```css
/* Light mode */
--primary: 142.1 76.2% 36.3%;        /* Green */
--ring: 142.1 76.2% 36.3%;           /* Green focus ring */
--sidebar-primary: 142.1 76.2% 36.3%; /* Green sidebar accent */

/* Dark mode */
--primary: 142.1 70.6% 45.3%;        /* Brighter green for dark bg */
--ring: 142.4 71.8% 29.2%;           /* Darker green ring */
```

### Tailwind v3 Color Format

**IMPORTANT**: Tailwind v3 requires space-separated HSL values WITHOUT the `hsl()` wrapper:

```css
/* CORRECT - Tailwind v3 format */
--background: 0 0% 100%;
--primary: 142.1 76.2% 36.3%;

/* WRONG - Will break everything */
--background: hsl(0 0% 100%);
--background: oklch(1 0 0);
```

Tailwind wraps variables in `hsl()` automatically via `tailwind.config.ts`:
```typescript
background: 'hsl(var(--background))'
```

### Sidebar Variables Required

The sidebar component requires these CSS variables (all must be defined):
- `--sidebar-background`
- `--sidebar-foreground`
- `--sidebar-primary`
- `--sidebar-primary-foreground`
- `--sidebar-accent`
- `--sidebar-accent-foreground`
- `--sidebar-border`
- `--sidebar-ring`

## Layout Structure

### App Layout (`app/(app)/layout.tsx`)

```tsx
<SidebarProvider defaultOpen={false}>
  <AppSidebar />
  <SidebarInset className="flex flex-col h-screen">
    <header className="sticky top-0 z-20 ...">
      <SidebarTrigger />
      <HeaderActions />
    </header>
    <div className="flex-1">
      {children}
    </div>
  </SidebarInset>
</SidebarProvider>
```

**Key Points:**
- `SidebarInset` should NOT have `overflow-y-auto` (breaks sticky header)
- Header uses `sticky top-0` to stay fixed while content scrolls
- Each page handles its own content scrolling

## Deployment Notes

This app is designed for Vercel deployment:
- Serverless functions have 10-60 second timeouts (configurable with `maxDuration`)
- Transcription jobs must be async (polling pattern) to avoid timeouts
- Vercel Blob required for files >4.5MB
- Prisma database connection pooling enabled for serverless

**Vercel Configuration**:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

Add all environment variables to Vercel project settings before deploying.
