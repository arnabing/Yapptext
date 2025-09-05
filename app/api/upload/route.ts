import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    const { allowed, remaining } = await checkRateLimit(ip);
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Daily transcription limit reached. Please try again tomorrow.' },
        { status: 429 }
      );
    }

    const body = (await request.json()) as HandleUploadBody;

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Generate a client token for the browser to upload the file
        // This runs on your server before the file is uploaded
        
        return {
          allowedContentTypes: [
            'audio/mpeg',
            'audio/mp3',
            'audio/wav',
            'audio/wave',
            'audio/x-wav',
            'audio/m4a',
            'audio/x-m4a',
            'audio/mp4',
            'audio/webm',
            'video/mp4',
            'video/webm',
          ],
          maximumSizeInBytes: 2 * 1024 * 1024 * 1024, // 2GB max (AssemblyAI limit)
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // This runs on your server after the file is uploaded
        console.log('Upload completed:', blob.pathname, blob.url);
        
        // You can store the blob URL in a database here if needed
        // For now, we'll just return it to the client
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error('Upload error:', error);
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Upload failed' },
      { status: 400 }
    );
  }
}