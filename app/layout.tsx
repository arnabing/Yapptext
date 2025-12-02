import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { PostHogProvider } from '@/components/providers/PostHogProvider'
import { PostHogPageView } from '@/components/providers/PostHogPageView'
import "@fontsource-variable/sixtyfour-convergence/full.css"
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'YappText - Audio to Text in Seconds',
  description: 'Simple, fast audio transcription with speaker detection. Drop your audio file and get instant transcripts.',
  metadataBase: new URL('https://yapptext.com'),
  openGraph: {
    title: 'YappText - Audio to Text in Seconds',
    description: 'Simple, fast audio transcription with speaker detection. Drop your audio file and get instant transcripts.',
    url: 'https://yapptext.com',
    siteName: 'YappText',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YappText - Audio to Text in Seconds',
    description: 'Simple, fast audio transcription with speaker detection. Drop your audio file and get instant transcripts.',
    creator: '@yapptext',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <PostHogProvider>
        <html lang="en">
          <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
            <PostHogPageView />
            {children}
            <Analytics />
            <Toaster />
          </body>
        </html>
      </PostHogProvider>
    </ClerkProvider>
  )
}