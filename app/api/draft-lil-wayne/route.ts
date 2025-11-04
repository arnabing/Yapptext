import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import { readFile, writeFile } from 'fs/promises'
import { transcribeWithAssemblyAI } from '@/lib/assemblyai'

export const maxDuration = 60

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams
    const save = search.get('save') === '1' || search.get('save') === 'true'
    const speakersExpected = parseInt(search.get('speakers') || '0', 10)

    // Load Lil Wayne deposition sample from public
    const audioPath = path.join(process.cwd(), 'public', 'samples', 'lil_wayne_deposition.mp3')
    const audioBuffer = await readFile(audioPath)
    const u8 = new Uint8Array(audioBuffer)

    // Construct File for AssemblyAI helper (expects File or URL)
    const file = new File([u8], 'lil_wayne_deposition.mp3', { type: 'audio/mpeg' })

    // Transcribe with speaker labels
    const result = await transcribeWithAssemblyAI(file, {
      turboMode: false,
      enableSentiment: false,
      enableKeyPhrases: false,
      speakersExpected: Number.isFinite(speakersExpected) && speakersExpected > 0 ? speakersExpected : undefined
    })

    // Build a clean draft JSON
    const utterances = (result.utterances || []).map(u => ({
      speaker: u.speaker,
      start: u.start,
      end: u.end,
      text: u.text
    }))

    const speakers = Array.from(new Set(utterances.map(u => u.speaker)))

    const draft = {
      source: 'public/samples/lil_wayne_deposition.mp3',
      createdAt: new Date().toISOString(),
      speakers,
      utterances
    }

    let saved = false
    let savePath: string | undefined
    if (save) {
      savePath = path.join(process.cwd(), 'public', 'samples', 'lil_wayne_deposition.draft.json')
      await writeFile(savePath, JSON.stringify(draft, null, 2), 'utf8')
      saved = true
    }

    return NextResponse.json({
      sample: 'lil_wayne_deposition.mp3',
      sizeMB: Number((audioBuffer.length / 1024 / 1024).toFixed(2)),
      speakers,
      utteranceCount: utterances.length,
      diarizationHint: speakersExpected || undefined,
      draft,
      saved,
      savePath
    })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Failed to create draft' }, { status: 500 })
  }
}


