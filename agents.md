# AI Agents Guide for YappText

## Overview
YappText is a simple audio transcription web app that converts audio files to text using OpenAI's Whisper API. This guide helps AI agents understand and work with the codebase effectively.

## Project Structure
```
yapptext/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   ├── transcribe/      # Whisper transcription endpoint
│   │   └── check-limit/     # Rate limiting check
│   ├── page.tsx            # Main UI component
│   ├── layout.tsx          # Root layout
│   ├── error.tsx           # Error boundary
│   └── globals.css         # Tailwind styles
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions
│   ├── openai.ts          # OpenAI Whisper integration
│   ├── rate-limit.ts      # Vercel KV rate limiting
│   └── utils.ts           # Helper utilities
└── public/                 # Static assets
```

## Key Technologies
- **Framework**: Next.js 14 (App Router)
- **UI Library**: shadcn/ui (Radix UI + Tailwind CSS)
- **Styling**: Tailwind CSS
- **Transcription**: OpenAI Whisper API
- **Rate Limiting**: Vercel KV (Redis)
- **Deployment**: Vercel

## Core Features
1. **Audio Upload**: Drag-and-drop or click to select audio files
2. **File Validation**: MP3, WAV, M4A, WebM, MP4 (max 25MB)
3. **Transcription**: Uses OpenAI Whisper for accurate speech-to-text
4. **Rate Limiting**: 20 minutes of audio per day per IP
5. **Privacy**: No file storage, memory-only processing
6. **Copy to Clipboard**: One-click transcript copying

## Environment Variables
```env
OPENAI_API_KEY=            # Required: OpenAI API key for Whisper
KV_URL=                     # Optional: Vercel KV for rate limiting
KV_REST_API_URL=           # Optional: Vercel KV REST endpoint
KV_REST_API_TOKEN=         # Optional: Vercel KV token
KV_REST_API_READ_ONLY_TOKEN= # Optional: Vercel KV read-only token
```

## API Endpoints

### POST /api/transcribe
Transcribes audio files using OpenAI Whisper.

**Request:**
- Method: POST
- Body: FormData with 'audio' file
- Max size: 25MB

**Response:**
```json
{
  "text": "Transcribed text...",
  "words": 150,
  "duration": 5,
  "minutesUsed": 5,
  "remainingMinutes": 15
}
```

### GET /api/check-limit
Checks current usage against daily rate limit.

**Response:**
```json
{
  "allowed": true,
  "remaining": 15,
  "minutesUsed": 5,
  "dailyLimit": 20
}
```

## UI State Machine
The main page component (`app/page.tsx`) uses a state machine:

```typescript
type AppState = 'idle' | 'file-selected' | 'processing' | 'complete' | 'error'
```

**State Transitions:**
- `idle` → `file-selected`: When user selects/drops a file
- `file-selected` → `processing`: When user clicks "Transcribe"
- `processing` → `complete`: When transcription succeeds
- `processing` → `error`: When transcription fails
- Any state → `idle`: When user clicks "Reset" or "Process Another"

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local

# Run development server
npm run dev

# Open http://localhost:3000
```

### Testing Checklist
- [ ] File upload works (drag & drop)
- [ ] File validation rejects non-audio files
- [ ] File size limit (25MB) is enforced
- [ ] Transcription processes successfully
- [ ] Progress indicator shows during processing
- [ ] Copy button works
- [ ] Rate limiting blocks after 20 minutes
- [ ] Error states display properly

## Common Modifications

### Change Daily Limit
Edit `lib/rate-limit.ts`:
```typescript
const DAILY_LIMIT_MINUTES = 20 // Change this value
```

### Change File Size Limit
Edit validation in `app/page.tsx` and `app/api/transcribe/route.ts`:
```typescript
if (file.size > 25 * 1024 * 1024) // 25MB
```

### Add New Audio Format
Update accepted types in:
1. `app/page.tsx` - handleFileSelect function
2. `app/api/transcribe/route.ts` - validTypes array
3. Input accept attribute in the file input

## Deployment

### Vercel Deployment
1. Push to GitHub
2. Import to Vercel
3. Add environment variables:
   - `OPENAI_API_KEY` (required)
4. Enable Vercel KV for rate limiting
5. Deploy

### Cost Considerations
- OpenAI Whisper: ~$0.006 per minute
- Daily limit of 20 min/user = max $0.12/user/day
- Monitor usage in OpenAI dashboard

## Security Best Practices
1. **API Key**: Never expose in client code
2. **File Validation**: Always validate on server
3. **Rate Limiting**: Prevent abuse with IP-based limits
4. **Error Handling**: Don't expose internal errors
5. **CORS**: Configure appropriately for production

## Performance Optimization
- Files processed in memory (no disk I/O)
- Efficient chunking for large files
- Progress indication for better UX
- Minimal client-side JavaScript

## Troubleshooting

### Common Issues
1. **SWC Error on Mac ARM**: Already configured to bypass
2. **Rate Limit Not Working**: Vercel KV not configured (works without it)
3. **Transcription Fails**: Check OpenAI API key and quota
4. **Large Files Timeout**: Increase `maxDuration` in route.ts

### Debug Commands
```bash
# Check API key
echo $OPENAI_API_KEY

# Test transcription API
curl -X POST http://localhost:3000/api/transcribe \
  -F "audio=@test.mp3"

# Check rate limit
curl http://localhost:3000/api/check-limit
```

## Contributing Guidelines
1. Use only shadcn/ui components (no custom UI)
2. Follow existing code patterns
3. Test all audio formats
4. Update this guide for significant changes
5. Keep privacy-first approach

## AI Agent Tips
- The entire UI is in `app/page.tsx` for simplicity
- All shadcn components are pre-installed
- Rate limiting gracefully degrades without KV
- File processing is stateless and secure
- The app is optimized for mobile devices

## License
MIT - See LICENSE file

## Support
For issues or questions, open a GitHub issue.