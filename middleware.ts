import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { generateGuestId } from '@/lib/guest-usage'

// Define public routes (don't require auth)
const isPublicRoute = createRouteMatcher([
  '/', // Landing page - allow anonymous users
  '/new', // Upload page - allow guests to upload and transcribe
  '/t/(.*)', // Transcript view - allow guests to view transcripts
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)', // Stripe/Clerk webhooks
  '/api/upload(.*)', // Blob upload (handled in route)
  '/api/transcribe(.*)', // Transcription API (auth checked internally)
  '/api/guest-usage', // Guest usage check endpoint
])

// Define which routes require authentication
const isProtectedRoute = createRouteMatcher([
  '/transcripts(.*)',
  '/settings(.*)',
  '/billing(.*)',
])

// Routes where we want to set guest cookies
const isGuestTrackingRoute = createRouteMatcher([
  '/',
  '/new',
  '/api/transcribe(.*)',
  '/api/guest-usage',
])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()

  // Allow public routes without auth
  if (isPublicRoute(req)) {
    // Set guest cookie for anonymous users on tracking routes
    if (!userId && isGuestTrackingRoute(req)) {
      const existingGuestId = req.cookies.get('yapp_guest_id')?.value

      if (!existingGuestId) {
        const response = NextResponse.next()
        const newGuestId = generateGuestId()

        response.cookies.set('yapp_guest_id', newGuestId, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/'
        })

        return response
      }
    }
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
