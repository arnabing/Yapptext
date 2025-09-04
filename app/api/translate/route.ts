import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function POST(request: NextRequest) {
  try {
    const { text, targetLanguage, utterances } = await request.json()
    
    if ((!text && !utterances) || !targetLanguage) {
      return NextResponse.json(
        { error: 'Text/utterances and target language are required' },
        { status: 400 }
      )
    }

    // If utterances are provided, translate each one to maintain speaker segments
    if (utterances && utterances.length > 0) {
      console.log(`Translating ${utterances.length} utterances to ${targetLanguage}`)
      
      const translatedUtterances = await Promise.all(
        utterances.map(async (utterance: any) => {
          const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: `You are a professional translator. Translate the following text to ${targetLanguage}. Maintain the same tone and style. Only respond with the translation, no explanations.`
              },
              {
                role: 'user',
                content: utterance.text
              }
            ],
            temperature: 0.3,
            max_tokens: 1000,
          })
          
          return {
            ...utterance,
            text: completion.choices[0]?.message?.content || utterance.text
          }
        })
      )
      
      // Reconstruct the full text from translated utterances
      const translatedText = translatedUtterances
        .map(u => u.text)
        .join(' ')
      
      return NextResponse.json({
        translatedText,
        translatedUtterances,
        targetLanguage,
      })
    }
    
    // Fall back to translating the full text if no utterances
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a professional translator. Translate the following text to ${targetLanguage}. Maintain the same tone, style and formatting. Only respond with the translation, no explanations.`
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.3,
      max_tokens: 4000,
    })

    const translatedText = completion.choices[0]?.message?.content || ''
    
    return NextResponse.json({
      translatedText,
      targetLanguage,
    })
    
  } catch (error) {
    console.error('Translation error:', error)
    return NextResponse.json(
      { error: 'Failed to translate text' },
      { status: 500 }
    )
  }
}