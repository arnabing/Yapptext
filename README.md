# YappText - Advanced Audio Transcription with Speaker Detection

A powerful, privacy-focused audio transcription web app with automatic speaker detection, powered by AssemblyAI.

## Project Goal

Our goal is to get to human‑level transcription with AI by combining multiple ASR models and lightweight reconciliation, validated against human‑verified reference transcripts.

## Features

- 🎵 Support for MP3, WAV, M4A, WebM, MP4 audio files
- 🎤 **Automatic speaker diarization** - Identifies different speakers
- 📝 **Smart formatting** - Paragraph detection and conversation layout
- 🌍 **99 language support** with automatic detection
- 💬 **Translation** - Translate transcripts to any language
- ⏱️ **Word-level timestamps** - Synchronized highlighting during playback
- 🧠 **Three Transcription Modes**:
  - **Turbo**: 3x faster with Nano model for quick transcriptions
  - **Standard**: Universal-2 model with speaker detection (default)
  - **Reasoning**: Dual-model approach with AI reconciliation for maximum accuracy
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
   - **Gemini** (optional, for Reasoning mode): Get from [Google AI Studio](https://aistudio.google.com/apikey)

5. Add to `.env.local`:
   ```env
   ASSEMBLYAI_API_KEY=your_assemblyai_key
   OPENAI_API_KEY=your_openai_key
   GEMINI_API_KEY=your_gemini_key  # Optional, for Reasoning mode
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

### Transcription Modes

#### Turbo Mode
- **Model**: AssemblyAI Nano
- **Cost**: ~$0.12 per hour (~$0.002 per minute)
- **Speed**: 3x faster than Standard
- **Use for**: Quick transcriptions, single speaker
- **Limitation**: No speaker detection

#### Standard Mode (Default)
- **Model**: AssemblyAI Universal-2 (best tier)
- **Cost**: ~$0.37 per hour (~$0.006 per minute)
- **Features**: Speaker detection, high accuracy
- **Use for**: Multiple speakers, conversations

#### Reasoning Mode (Maximum Accuracy)
- **Models**: AssemblyAI Universal-2 + Gemini 2.5 Flash
- **Cost**: ~$0.37/hour (AssemblyAI) + minimal Gemini costs
- **Features**: Dual-model transcription with AI reconciliation
- **Use for**: Critical accuracy needs, complex audio
- **Benefit**: Near-human transcription accuracy (97%+)

### API Providers

**AssemblyAI**:
- **Free Credits**: $50 on signup (135 hours with Universal, 400+ hours with Nano)
- **Note**: Only Universal and Slam-1 models support speaker labels

**Gemini (for Reasoning mode)**:
- **Free Tier**: 1 million tokens/month free
- **Cost after free tier**: $0.075 per 1M input tokens

**OpenAI (Translation)**:
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

## Testing & Evaluation (Proof that the system works)

- Goal: objectively measure ensemble quality vs single models and pick a winner per run using simple gates + WER.

- Proof page
  - UI: `http://localhost:3000/test-transcription`
  - Source: `app/test-transcription/page.tsx`
  - Includes:
    - Static Compare: paste/upload any transcript (or JSON with `utterances[].text`) and compare directly to a chosen reference without running models. Shows gates (D’oh FP/FN=0, idioms intact, length bounds 0.85–1.15), local WER, and highlights a Static Winner.
    - Live Run: executes models/strategies once and compares outputs to the selected reference. Shows Metrics vs Reference, local WER, and highlights a Winner among gate‑passers.

- Reference assets (gold set)
  - Homer (short) audio: `public/samples/homer short.mp3`
  - Lil Wayne audio: `public/samples/lil_wayne_deposition.mp3`
  - Homer (short) gold transcript: `public/samples/homer_short.draft.json`
  - Lil Wayne gold transcript: `public/samples/lil_wayne_deposition.draft.json`

- Test API routes
  - Homer test: `GET /api/test-homer` (supports `short=1&contextWindow=1&glossary=1&confThreshold=0.85&expLabel=...&debug=1`)
    - Source: `app/api/test-homer/route.ts`
  - Benchmark (Pulp Fiction): `GET /api/benchmark-transcribe`
    - Source: `app/api/benchmark-transcribe/route.ts`
  - Draft generators (create/update gold references):
    - Homer short: `GET /api/draft-homer-short?speakers=N&save=1`
      - `app/api/draft-homer-short/route.ts`
    - Lil Wayne: `GET /api/draft-lil-wayne?speakers=N&save=1`
      - `app/api/draft-lil-wayne/route.ts`

- Reconciliation strategies
  - Core logic and post‑processing (idiom freeze, interjection gating, n‑gram de‑dup): `lib/reconcile-strategies.ts`
  - Voting helpers: `lib/reconcile-voting.ts`

- What “best” means (simple and clear)
  - Gates (must pass):
    - D’oh FP=0 and FN=0 (or high F1 for ambiguous audio)
    - Idioms preserved (e.g., “don’t panic”)
    - Length bounds within 0.85–1.15 of reference
  - Among passers: pick lowest WER vs reference; tie‑break with fewer duplicate n‑grams, better proper‑noun hits, and faster time.

- Quick replicate
  - Open the proof page → select reference (e.g., Homer (short))
  - Live: click Run Test to generate outputs and see the Winner
  - Static: paste/upload a transcript and see Static Winner (no model run)

## License

MIT

## Support

For issues or questions, please open a GitHub issue.