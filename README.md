# YappText - Simple Audio Transcription

A clean, privacy-focused audio transcription web app that converts audio files to text using OpenAI's Whisper API.

## Features

- 🎵 Support for MP3, WAV, M4A, WebM, MP4 audio files
- 📝 Fast, accurate transcription using OpenAI Whisper
- 🔒 Privacy-first: No files stored, processed in memory only
- 📱 Mobile-responsive design
- ⚡ Simple drag-and-drop interface
- 📋 One-click copy to clipboard
- 🚦 Rate limiting: 20 minutes of audio per day (configurable)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: Shadcn/ui components + Tailwind CSS
- **Transcription**: OpenAI Whisper API
- **Rate Limiting**: Vercel KV (Redis)
- **Deployment**: Vercel

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local` and add your OpenAI API key:
   ```bash
   cp .env.example .env.local
   ```

4. Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

**Note**: Rate limiting will be disabled in local development unless you configure Vercel KV.

## Deployment to Vercel

1. Push your code to GitHub

2. Import project to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

3. Configure environment variables in Vercel:
   - Add `OPENAI_API_KEY` with your OpenAI API key

4. Enable Vercel KV for rate limiting:
   - Go to your project dashboard
   - Navigate to "Storage" tab
   - Click "Create Database"
   - Select "KV" and follow setup
   - KV environment variables will be added automatically

5. Deploy!

## Configuration

### Rate Limiting
Edit `lib/rate-limit.ts` to change the daily limit:
```typescript
const DAILY_LIMIT_MINUTES = 20 // Change this value
```

### File Size Limit
Edit the validation in `app/page.tsx` and `app/api/transcribe/route.ts`:
```typescript
if (selectedFile.size > 25 * 1024 * 1024) // 25MB limit
```

## API Usage

The app uses OpenAI's Whisper API which costs approximately $0.006 per minute of audio.

With the default 20-minute daily limit per user:
- Maximum cost per user per day: ~$0.12
- Monthly cost for 100 daily users: ~$360

## Privacy & Security

- ✅ No audio files are stored on servers
- ✅ Files are processed in memory and immediately discarded
- ✅ No user tracking or analytics
- ✅ Rate limiting by IP address only
- ✅ All API calls are server-side (API key never exposed)

## Future Enhancements

- [ ] Live microphone recording
- [ ] Multiple export formats (SRT, VTT, etc.)
- [ ] User accounts with history
- [ ] Batch processing
- [ ] Language detection and translation
- [ ] Speaker diarization

## License

MIT

## Support

For issues or questions, please open a GitHub issue.