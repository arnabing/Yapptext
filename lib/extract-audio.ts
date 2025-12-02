import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

let ffmpeg: FFmpeg | null = null
let loadPromise: Promise<FFmpeg> | null = null

/**
 * Lazy load FFmpeg WASM - only loaded when a video file is uploaded
 */
export async function loadFFmpeg(
  onProgress?: (message: string) => void
): Promise<FFmpeg> {
  // Return existing instance if already loaded
  if (ffmpeg?.loaded) return ffmpeg

  // Return existing load promise if loading in progress
  if (loadPromise) return loadPromise

  loadPromise = (async () => {
    onProgress?.('Loading video processor...')

    const ff = new FFmpeg()

    // Load from CDN with proper CORS headers
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'

    await ff.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    })

    ffmpeg = ff
    return ff
  })()

  return loadPromise
}

/**
 * Extract audio from a video file
 * @param videoFile - The video file to extract audio from
 * @param onProgress - Progress callback (0-1)
 * @returns A new File object containing the extracted audio as MP3
 */
export async function extractAudioFromVideo(
  videoFile: File,
  onProgress?: (progress: number, message: string) => void
): Promise<File> {
  onProgress?.(0, 'Loading video processor...')

  const ff = await loadFFmpeg((msg) => onProgress?.(0.1, msg))

  onProgress?.(0.15, 'Reading video file...')

  // Set up progress handler
  ff.on('progress', ({ progress }) => {
    // Map ffmpeg progress (0-1) to our range (0.2-0.9)
    const mappedProgress = 0.2 + (progress * 0.7)
    onProgress?.(mappedProgress, 'Extracting audio...')
  })

  // Write the video file to ffmpeg's virtual filesystem
  const inputName = 'input' + getExtension(videoFile.name)
  await ff.writeFile(inputName, await fetchFile(videoFile))

  onProgress?.(0.2, 'Extracting audio...')

  // Extract audio as MP3
  // -vn: no video
  // -acodec libmp3lame: use MP3 codec
  // -ab 128k: 128kbps bitrate (good quality, reasonable size)
  // -ar 44100: 44.1kHz sample rate
  await ff.exec([
    '-i', inputName,
    '-vn',
    '-acodec', 'libmp3lame',
    '-ab', '128k',
    '-ar', '44100',
    'output.mp3'
  ])

  onProgress?.(0.9, 'Finalizing...')

  // Read the output file
  const audioData = await ff.readFile('output.mp3')

  // Clean up virtual filesystem
  await ff.deleteFile(inputName)
  await ff.deleteFile('output.mp3')

  // Create new File object with audio
  const audioFileName = videoFile.name.replace(/\.[^.]+$/, '.mp3')
  // ffmpeg returns Uint8Array - create a copy to ensure we have a regular ArrayBuffer
  const uint8Data = audioData as Uint8Array
  const audioBlob = new Blob([uint8Data.slice().buffer as ArrayBuffer], { type: 'audio/mpeg' })
  const audioFile = new File([audioBlob], audioFileName, { type: 'audio/mpeg' })

  onProgress?.(1, 'Audio extracted!')

  return audioFile
}

/**
 * Check if a file is a video file based on MIME type or extension
 */
export function isVideoFile(file: File): boolean {
  // Check MIME type first
  if (file.type.startsWith('video/')) {
    return true
  }

  // Fallback to extension check for files with missing/incorrect MIME types
  const videoExtensions = /\.(mp4|mov|avi|mkv|webm|wmv|flv|m4v|3gp|mpeg|mpg)$/i
  return videoExtensions.test(file.name)
}

/**
 * Get file extension including the dot
 */
function getExtension(filename: string): string {
  const match = filename.match(/\.[^.]+$/)
  return match ? match[0].toLowerCase() : '.mp4'
}

/**
 * Estimate extracted audio size from video file
 * Assumes 128kbps MP3 output
 */
export function estimateAudioSize(videoDurationSeconds: number): number {
  // 128kbps = 16 KB/s
  return Math.ceil(videoDurationSeconds * 16 * 1024)
}
