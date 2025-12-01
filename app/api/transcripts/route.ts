import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { title, text, fileName, duration, audioUrl, utterances, chapters, words } = await req.json()

    if (!title || !text || !fileName || duration === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get user email from Clerk
    const clerkUser = await currentUser()

    if (!clerkUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Find or create user in database
    const user = await db.user.upsert({
      where: { clerkId: userId },
      update: {},
      create: {
        clerkId: userId,
        email: clerkUser.emailAddresses[0]?.emailAddress || '',
      },
    })

    // Check for existing transcript with same audioUrl (prevents sample duplicates)
    if (audioUrl) {
      const existing = await db.transcript.findFirst({
        where: {
          userId: user.id,
          audioUrl: audioUrl,
        },
      })

      if (existing) {
        return NextResponse.json({
          id: existing.id,
          isDuplicate: true,
          message: 'Transcript already exists'
        })
      }
    }

    const transcript = await db.transcript.create({
      data: {
        userId: user.id,
        title,
        text,
        fileName,
        duration,
        audioUrl,
        utterances: utterances || null,
        chapters: chapters || null,
        words: words || null,
      },
    })

    return NextResponse.json(transcript)
  } catch (error) {
    console.error('Error creating transcript:', error)
    return NextResponse.json(
      { error: 'Failed to create transcript' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Find user in database
    const user = await db.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) {
      return NextResponse.json({ transcripts: [] })
    }

    const transcripts = await db.transcript.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
      select: {
        id: true,
        title: true,
        createdAt: true,
        duration: true,
      },
    })

    return NextResponse.json({ transcripts })
  } catch (error) {
    console.error('Error fetching transcripts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch transcripts' },
      { status: 500 }
    )
  }
}
