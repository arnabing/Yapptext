import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    
    console.log('=== API Key Test ===')
    console.log('Environment check:')
    console.log('- NODE_ENV:', process.env.NODE_ENV)
    console.log('- API Key exists:', !!apiKey)
    console.log('- API Key length:', apiKey?.length)
    console.log('- API Key format:', apiKey?.startsWith('sk-') ? 'Correct format (sk-)' : 'Incorrect format')
    console.log('- API Key full:', apiKey)
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'API key not found in environment',
        env: process.env.NODE_ENV 
      }, { status: 500 })
    }
    
    // Test 1: Direct API call to check models
    console.log('\nTest 1: Checking models endpoint...')
    const modelsResponse = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
    
    console.log('Models response status:', modelsResponse.status)
    const modelsText = await modelsResponse.text()
    
    if (!modelsResponse.ok) {
      console.error('Models API error:', modelsText)
      return NextResponse.json({ 
        error: 'Models API failed',
        status: modelsResponse.status,
        details: modelsText
      }, { status: 500 })
    }
    
    // Test 2: Check account/usage
    console.log('\nTest 2: Checking usage endpoint...')
    const usageResponse = await fetch('https://api.openai.com/v1/usage', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
    
    console.log('Usage response status:', usageResponse.status)
    
    // Test 3: Check if Whisper model is available
    const models = JSON.parse(modelsText)
    const hasWhisper = models.data?.some((m: any) => m.id.includes('whisper'))
    
    return NextResponse.json({
      success: true,
      apiKeyValid: true,
      apiKeyPrefix: apiKey.substring(0, 10),
      apiKeyLength: apiKey.length,
      modelsCount: models.data?.length || 0,
      hasWhisperAccess: hasWhisper,
      usageStatus: usageResponse.status === 200 ? 'accessible' : 'not accessible'
    })
    
  } catch (error) {
    console.error('API key test error:', error)
    return NextResponse.json({ 
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}