import { kv } from '@vercel/kv'

const DAILY_LIMIT_MINUTES = 20

export async function checkRateLimit(ip: string): Promise<{
  allowed: boolean
  remaining: number
  minutesUsed: number
}> {
  try {
    const today = new Date().toISOString().split('T')[0]
    const key = `usage:${ip}:${today}`
    
    const minutesUsed = (await kv.get<number>(key)) || 0
    const allowed = minutesUsed < DAILY_LIMIT_MINUTES
    const remaining = Math.max(0, DAILY_LIMIT_MINUTES - minutesUsed)
    
    return { allowed, remaining, minutesUsed }
  } catch (error) {
    // If KV is not configured (local development), allow all requests
    console.warn('Rate limit check failed, allowing request:', error)
    return { allowed: true, remaining: DAILY_LIMIT_MINUTES, minutesUsed: 0 }
  }
}

export async function updateUsage(ip: string, audioDurationMinutes: number): Promise<number> {
  try {
    const today = new Date().toISOString().split('T')[0]
    const key = `usage:${ip}:${today}`
    
    const newUsage = await kv.incrby(key, Math.ceil(audioDurationMinutes))
    
    // Set expiration for midnight UTC (86400 seconds = 24 hours)
    await kv.expire(key, 86400)
    
    return newUsage
  } catch (error) {
    // If KV is not configured (local development), return 0
    console.warn('Usage update failed:', error)
    return 0
  }
}