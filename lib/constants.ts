/**
 * Pricing tiers and usage limits for YappText freemium model
 * Simplified to 2 tiers: Free + Pro
 */

export const PRICING_TIERS = {
  ANONYMOUS: 'anonymous',
  FREE: 'free',
  PRO: 'pro',
} as const

export type PricingTier = typeof PRICING_TIERS[keyof typeof PRICING_TIERS]

/**
 * Transcription model - always use best quality
 */
export const TRANSCRIPTION_MODELS = {
  UNIVERSAL: 'universal',  // Maps to AssemblyAI 'best' model for highest quality
} as const

export type TranscriptionModel = typeof TRANSCRIPTION_MODELS[keyof typeof TRANSCRIPTION_MODELS]

// Deprecated: kept for backwards compatibility
export const TRANSCRIPTION_MODES = TRANSCRIPTION_MODELS
export type TranscriptionMode = TranscriptionModel

/**
 * Monthly pricing for each tier
 */
export const TIER_PRICES = {
  [PRICING_TIERS.PRO]: {
    monthly: 29,
    currency: 'USD',
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
  },
} as const

/**
 * Usage limits per tier
 * All tiers get the same quality - gated by capacity only
 */
export const USAGE_LIMITS = {
  [PRICING_TIERS.ANONYMOUS]: {
    minutesPerMonth: 20,
    filesPerSession: 1,
    allowDownload: true,  // Downloads now allowed for everyone
    defaultModel: TRANSCRIPTION_MODELS.UNIVERSAL,  // Standard quality for new users
    speakerDetection: true,
    customVocabulary: false,  // Removed with slam-1
    trackingMethod: 'ip', // Track by IP address
  },
  [PRICING_TIERS.FREE]: {
    minutesPerMonth: 60,
    filesPerSession: -1, // Unlimited files (within minute limit)
    allowDownload: true,
    defaultModel: TRANSCRIPTION_MODELS.UNIVERSAL,
    speakerDetection: true,
    customVocabulary: false,  // Removed with slam-1
    trackingMethod: 'user', // Track by user ID
  },
  [PRICING_TIERS.PRO]: {
    minutesPerMonth: 500,  // NOT unlimited - prevents abuse
    filesPerSession: -1,   // Unlimited files
    allowDownload: true,
    defaultModel: TRANSCRIPTION_MODELS.UNIVERSAL,
    speakerDetection: true,
    customVocabulary: false,  // Removed with slam-1
    trackingMethod: 'user',
  },
} as const

/**
 * Reverse trial configuration
 * Offered when user closes paywall modal
 * Give 200 bonus minutes (same quality as Pro tier)
 */
export const REVERSE_TRIAL = {
  durationDays: 7,
  minutesAllowed: 200,
  model: TRANSCRIPTION_MODELS.UNIVERSAL,
  requiresCreditCard: false,
  tierAfterTrial: PRICING_TIERS.FREE, // Downgrade to free tier after trial
} as const

/**
 * Feature matrix for each tier
 * Simplified to 2 tiers - everyone gets same quality
 */
export const TIER_FEATURES = {
  [PRICING_TIERS.ANONYMOUS]: {
    name: 'Anonymous',
    description: 'Try YappText with no signup required',
    features: [
      '1 free transcript',
      'Up to 20 minutes',
      'Speaker detection',
      'Best-in-class accuracy',
      'Download transcripts',
    ],
    cta: 'Sign up for more',
  },
  [PRICING_TIERS.FREE]: {
    name: 'Free',
    description: 'Get started - no credit card required',
    features: [
      '60 minutes per month',
      'Unlimited files',
      'Speaker detection',
      'Best-in-class accuracy',
      'Download transcripts',
    ],
    cta: 'Current plan',
    badge: null,
  },
  [PRICING_TIERS.PRO]: {
    name: 'Pro',
    description: 'For power users and professionals',
    price: TIER_PRICES[PRICING_TIERS.PRO].monthly,
    features: [
      '500 minutes per month',
      'Unlimited files',
      'Speaker detection',
      'Best-in-class accuracy',
      'Download transcripts',
      'Priority support',
      'API access (coming soon)',
    ],
    cta: 'Upgrade to Pro',
    badge: 'Best Value',
  },
} as const

/**
 * Sample files that don't count against usage
 * These are unlimited for all users
 */
export const SAMPLE_FILES = [
  '/samples/homer_short.mp3',
  '/samples/Homer Simpson Best Moments.mp3',
  '/samples/lil_wayne_deposition.mp3',
] as const

/**
 * Helper to check if a file is a sample
 */
export function isSampleFile(filePath: string): boolean {
  return SAMPLE_FILES.some(sample => filePath.includes(sample))
}

/**
 * Max file size in bytes (100MB)
 */
export const MAX_FILE_SIZE = 100 * 1024 * 1024

/**
 * Supported audio formats
 */
export const SUPPORTED_AUDIO_FORMATS = [
  'audio/mpeg',
  'audio/mp3',
  'audio/wav',
  'audio/wave',
  'audio/x-wav',
  'audio/m4a',
  'audio/x-m4a',
  'audio/aac',
  'audio/ogg',
  'audio/webm',
  'audio/flac',
] as const

/**
 * Supported video formats (audio will be extracted client-side)
 * Includes Apple iOS formats: HEVC (H.265), MOV, M4V
 */
export const SUPPORTED_VIDEO_FORMATS = [
  'video/mp4',
  'video/webm',
  'video/quicktime',  // .mov (iOS default)
  'video/x-msvideo',  // .avi
  'video/x-matroska', // .mkv
  'video/hevc',       // HEVC/H.265 (iOS)
  'video/x-m4v',      // .m4v (Apple)
  'video/3gpp',       // .3gp (mobile)
  'video/3gpp2',      // .3g2 (mobile)
] as const

/**
 * All supported media formats (audio + video)
 */
export const SUPPORTED_FORMATS = [
  ...SUPPORTED_AUDIO_FORMATS,
  ...SUPPORTED_VIDEO_FORMATS,
] as const

/**
 * Paywall configuration
 * Toggle to experiment with different paywall strategies
 */
export const PAYWALL_CONFIG = {
  /**
   * If true, all users must sign in before transcribing.
   * If false, guests can transcribe up to 20 min/month without signing in.
   */
  requireSignInToTranscribe: false,

  /**
   * If true, show reverse trial popup when user closes paywall modal.
   */
  enableReverseTrial: true,
} as const
