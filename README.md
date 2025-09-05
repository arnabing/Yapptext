# YappText - Advanced Audio Transcription with Speaker Detection

A powerful, privacy-focused audio transcription web app with automatic speaker detection, powered by AssemblyAI.

## Features

- 🎵 Support for MP3, WAV, M4A, WebM, MP4 audio files
- 🎤 **Automatic speaker diarization** - Identifies different speakers
- 📝 **Smart formatting** - Paragraph detection and conversation layout
- 🌍 **99 language support** with automatic detection
- 💬 **Translation** - Translate transcripts to any language
- ⏱️ **Word-level timestamps** - Synchronized highlighting during playback
- 🚀 **Smart Model Selection** - Automatically uses Universal for speaker detection or Nano (3x faster) when possible
- 🎭 **Sentiment Analysis** - Analyze emotional tone of conversations
- 🔑 **Key Phrases** - Automatic extraction of important concepts
- 🎪 **Sample Audio** - Built-in demos for quick testing
- 🔒 Privacy-first: No files stored, processed in memory only
- 📱 Mobile-responsive design
- ⚡ Simple drag-and-drop interface
- 📋 One-click copy to clipboard
- 🚦 Rate limiting: 20 minutes of audio per day (configurable)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: Shadcn/ui components + Tailwind CSS
- **Transcription**: AssemblyAI API (with speaker detection)
- **Translation**: OpenAI GPT-3.5 API
- **Rate Limiting**: Vercel KV (Redis)
- **Deployment**: Vercel

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local` and add your API keys:
   ```bash
   cp .env.example .env.local
   ```

4. Get your API keys:
   - **AssemblyAI**: Sign up at [AssemblyAI](https://www.assemblyai.com) for $50 free credits
   - **OpenAI** (for translation): Get from [OpenAI Platform](https://platform.openai.com/api-keys)

5. Add to `.env.local`:
   ```env
   ASSEMBLYAI_API_KEY=your_assemblyai_key
   OPENAI_API_KEY=your_openai_key
   ```

6. Run the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000)

**Note**: Rate limiting will be disabled in local development unless you configure Vercel KV.

## Deployment to Vercel

1. Push your code to GitHub

2. Import project to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

3. Configure environment variables in Vercel:
   - Add `ASSEMBLYAI_API_KEY` with your AssemblyAI API key
   - Add `OPENAI_API_KEY` with your OpenAI API key (for translation)

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
- **Small files (<4.5MB)**: Direct upload to API
- **Large files (up to 2GB)**: Automatically uploaded to Vercel Blob storage
- Edit limits in `app/page.tsx` and `app/api/transcribe/route.ts`

## API Usage & Pricing

### AssemblyAI (Transcription)
- **Universal Model (Default when speaker detection needed)**:
  - **Cost**: ~$0.37 per hour (~$0.006 per minute)
  - **Use for**: Multiple speakers, high accuracy
  - **Features**: Speaker diarization, all audio intelligence features
- **Nano Model (Auto-selected when possible)**:
  - **Cost**: ~$0.12 per hour (~$0.002 per minute)  
  - **Use for**: Single speaker, quick transcriptions
  - **Speed**: 3x faster than Universal
  - **Limitation**: NO speaker detection support
- **Free Credits**: $50 on signup (135 hours with Universal, 400+ hours with Nano)
- **Note**: Only Universal and Slam-1 models support speaker labels

### OpenAI (Translation)
- **Cost**: ~$0.002 per 1,000 tokens (roughly 750 words)
- **Used for**: Text translation to other languages

With the default 20-minute daily limit per user:
- Maximum transcription cost per user per day: ~$0.09
- Monthly cost for 100 daily users: ~$270

## Privacy & Security

- ✅ No audio files are stored on servers
- ✅ Files are processed in memory and immediately discarded
- ✅ No user tracking or analytics
- ✅ Rate limiting by IP address only
- ✅ All API calls are server-side (API key never exposed)

## Current Capabilities

- ✅ Speaker diarization (automatic speaker detection)
- ✅ Smart paragraph formatting with iMessage-style layout
- ✅ 99 language support with auto-detection
- ✅ Translation to any language
- ✅ Word-level timestamps with synchronized highlighting
- ✅ Sentiment analysis (optional)
- ✅ Key phrases extraction (optional)
- ✅ Smart model selection (Universal for speakers, Nano for speed)
- ✅ Sample audio for testing
- ✅ Improved audio controls with seek buttons
- ✅ Success animations with confetti
- ✅ Vercel Blob storage for large files (>4.5MB)
- ✅ Keyboard shortcuts for audio controls (space, arrows)

## Future Enhancements

- [ ] Live microphone recording
- [ ] Multiple export formats (SRT, VTT, PDF)
- [ ] User accounts with transcript history
- [ ] Batch processing for multiple files
- [ ] Real-time transcription
- [ ] Custom vocabulary and terminology

## License

MIT

## Support

For issues or questions, please open a GitHub issue.