import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define public routes (don't require auth)
const isPublicRoute = createRouteMatcher([
  '/', // Landing page
  '/new', // Upload page - publicly accessible, auth checked before upload
  '/t/(.*)', // Transcript view
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)', // Stripe/Clerk webhooks
  '/api/upload(.*)', // Blob upload (handled in route)
])

// Define which routes require authentication
const isProtectedRoute = createRouteMatcher([
  '/transcripts(.*)',
  '/settings(.*)',
  '/billing(.*)',
  '/api/transcribe(.*)', // Transcription API - requires auth
  '/api/user(.*)', // User API - requires auth
])

export default clerkMiddleware(async (auth, req) => {
  // Allow public routes without auth
  if (isPublicRoute(req)) {
    return
  }

  // Protect routes that require authentication
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
