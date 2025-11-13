import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define public routes (don't require auth)
const isPublicRoute = createRouteMatcher([
  '/', // Main app - allow anonymous users
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)', // Stripe/Clerk webhooks
  '/api/upload(.*)', // Blob upload (handled in route)
  '/api/transcribe(.*)', // Transcription API (auth checked internally)
])

// Define which routes require authentication
const isProtectedRoute = createRouteMatcher([
  '/transcripts(.*)',
  '/settings(.*)',
  '/billing(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  // Allow public routes without auth
  if (isPublicRoute(req)) {
    return
  }

  // Protect all other routes
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
