import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rate-limit'

export async function GET(request: NextRequest) {
  try {
    // Get IP address
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check current usage
    const { allowed, remaining, minutesUsed } = await checkRateLimit(ip)
    
    return NextResponse.json({
      allowed,
      remaining,
      minutesUsed,
      dailyLimit: 20
    })
    
  } catch (error) {
    console.error('Rate limit check error:', error)
    
    // Return default values if rate limiting is not available
    return NextResponse.json({
      allowed: true,
      remaining: 20,
      minutesUsed: 0,
      dailyLimit: 20
    })
  }
}