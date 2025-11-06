import { auth, currentUser } from '@clerk/nextjs/server'
import { ensureUserExists } from '@/lib/usage'

/**
 * Get the current user's ID (Clerk ID)
 * Returns null if not authenticated
 */
export async function getCurrentUserId(): Promise<string | null> {
  const { userId } = await auth()
  return userId
}

/**
 * Get the current user's email
 * Returns null if not authenticated
 */
export async function getCurrentUserEmail(): Promise<string | null> {
  const user = await currentUser()
  return user?.emailAddresses[0]?.emailAddress ?? null
}

/**
 * Get the current user with full details
 */
export async function getCurrentUserDetails() {
  const user = await currentUser()
  if (!user) return null

  return {
    id: user.id,
    email: user.emailAddresses[0]?.emailAddress,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
  }
}

/**
 * Require authentication - throws if not authenticated
 * Use in API routes or server actions
 */
export async function requireAuth() {
  const { userId } = await auth()
  if (!userId) {
    throw new Error('Unauthorized - Authentication required')
  }
  return userId
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const { userId } = await auth()
  return !!userId
}

/**
 * Sync Clerk user to database
 * Call this when user signs in/up
 */
export async function syncUserToDatabase() {
  const user = await currentUser()
  if (!user) return null

  const email = user.emailAddresses[0]?.emailAddress
  if (!email) return null

  return await ensureUserExists(user.id, email)
}

/**
 * Get client IP address from request headers
 * Used for anonymous user tracking
 */
export function getClientIP(request: Request): string {
  // Try various headers for IP (handles proxies, CDNs)
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const cfConnectingIp = request.headers.get('cf-connecting-ip') // Cloudflare

  if (forwarded) {
    // x-forwarded-for can be a comma-separated list
    return forwarded.split(',')[0].trim()
  }

  if (realIp) {
    return realIp
  }

  if (cfConnectingIp) {
    return cfConnectingIp
  }

  // Fallback (shouldn't happen in production)
  return 'unknown'
}

/**
 * Hash IP address for privacy
 * We don't store raw IPs, just hashed versions
 */
export async function hashIP(ip: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(ip + process.env.IP_HASH_SALT)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}
