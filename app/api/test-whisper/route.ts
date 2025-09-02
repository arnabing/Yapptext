import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function GET() {
  try {
    // Test if we can create OpenAI client
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'Missing API key' }, { status: 500 })
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      timeout: 10000, // 10 seconds for test
    })

    // Try a simple API call first (list models)
    console.log('Testing OpenAI connection...')
    const models = await openai.models.list()
    
    // Get first few model names
    const modelNames = models.data.slice(0, 5).map(m => m.id)
    
    return NextResponse.json({ 
      success: true, 
      message: 'OpenAI connection successful',
      models: modelNames,
      apiKeyPrefix: process.env.OPENAI_API_KEY?.substring(0, 10) + '...'
    })
  } catch (error) {
    console.error('OpenAI test error:', error)
    return NextResponse.json({ 
      error: 'OpenAI connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}