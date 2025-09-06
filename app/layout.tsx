import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import "@fontsource-variable/sixtyfour-convergence/full.css"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}