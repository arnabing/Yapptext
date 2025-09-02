import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function GET() {
  console.log('\n=== DEBUG API KEY ENDPOINT ===')
  
  try {
    const apiKey = process.env.OPENAI_API_KEY
    
    console.log('Step 1: Check environment variable')
    console.log('- API Key exists:', !!apiKey)
    console.log('- API Key length:', apiKey?.length)
    console.log('- API Key starts with "sk-":', apiKey?.startsWith('sk-'))
    console.log('- Full API Key:', apiKey)
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'No API key found',
        suggestion: 'Check .env.local file'
      }, { status: 500 })
    }
    
    // Test 1: Simple models list
    console.log('\nStep 2: Test models endpoint with fetch')
    try {
      const modelsResponse = await fetch('https://api.openai.com/v1/models', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      })
      
      console.log('Models endpoint status:', modelsResponse.status)
      console.log('Models endpoint headers:', Object.fromEntries(modelsResponse.headers.entries()))
      
      if (modelsResponse.status === 429) {
        const errorText = await modelsResponse.text()
        console.error('429 Error details:', errorText)
        return NextResponse.json({
          error: 'API Key has exceeded quota',
          status: 429,
          details: errorText,
          solution: 'Add credits at https://platform.openai.com/usage'
        }, { status: 429 })
      }
      
      if (!modelsResponse.ok) {
        const errorText = await modelsResponse.text()
        console.error('Models endpoint error:', errorText)
        return NextResponse.json({
          error: 'Models endpoint failed',
          status: modelsResponse.status,
          details: errorText
        }, { status: 500 })
      }
      
      const models = await modelsResponse.json()
      console.log('Models count:', models.data?.length)
      console.log('Has Whisper:', models.data?.some((m: any) => m.id.includes('whisper')))
    } catch (fetchError) {
      console.error('Fetch error:', fetchError)
    }
    
    // Test 2: Try with OpenAI SDK
    console.log('\nStep 3: Test with OpenAI SDK')
    try {
      const openai = new OpenAI({
        apiKey: apiKey,
        timeout: 10000,
        maxRetries: 0
      })
      
      console.log('OpenAI client created')
      console.log('Testing models.list()...')
      
      const models = await openai.models.list()
      console.log('SDK models.list() successful')
      console.log('Models from SDK:', models.data.length)
      
      return NextResponse.json({
        success: true,
        apiKeyValid: true,
        modelsCount: models.data.length,
        hasWhisper: models.data.some(m => m.id.includes('whisper')),
        apiKeyPrefix: apiKey.substring(0, 20)
      })
      
    } catch (sdkError: any) {
      console.error('SDK Error:', sdkError)
      console.error('SDK Error type:', sdkError?.constructor?.name)
      console.error('SDK Error message:', sdkError?.message)
      console.error('SDK Error status:', sdkError?.status)
      console.error('SDK Error code:', sdkError?.code)
      
      if (sdkError?.code === 'insufficient_quota') {
        return NextResponse.json({
          error: 'QUOTA EXCEEDED',
          message: 'Your OpenAI API key has no remaining quota',
          solution: 'Please add credits to your OpenAI account at https://platform.openai.com/usage',
          details: sdkError?.message
        }, { status: 429 })
      }
      
      return NextResponse.json({
        error: 'SDK test failed',
        details: sdkError?.message || 'Unknown error',
        code: sdkError?.code
      }, { status: 500 })
    }
    
  } catch (error) {
    console.error('Debug endpoint error:', error)
    return NextResponse.json({ 
      error: 'Debug test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}