import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Configure connection pool for serverless environment
// Vercel serverless functions need smaller pool sizes and shorter timeouts
const getDatabaseUrl = () => {
  const url = process.env.DATABASE_URL
  if (!url) return url

  // Add connection pool parameters if not already present
  const urlObj = new URL(url)

  // Smaller connection pool for serverless (default is 10)
  if (!urlObj.searchParams.has('connection_limit')) {
    urlObj.searchParams.set('connection_limit', '5')
  }

  // Shorter pool timeout for serverless (default is 10s)
  if (!urlObj.searchParams.has('pool_timeout')) {
    urlObj.searchParams.set('pool_timeout', '5')
  }

  // Enable connection pooling (pgbouncer compatibility)
  if (!urlObj.searchParams.has('pgbouncer')) {
    urlObj.searchParams.set('pgbouncer', 'true')
  }

  return urlObj.toString()
}

export const db = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: getDatabaseUrl(),
    },
  },
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
