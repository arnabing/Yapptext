import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'YappText - Audio to Text in Seconds'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#FAFAFA',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Main visual: Speaking to Text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '60px' }}>
          <span style={{ fontSize: '180px' }}>🗣️</span>
          <span style={{ fontSize: '80px', color: '#666' }}>→</span>
          <span style={{ fontSize: '180px' }}>💬</span>
        </div>
        
        {/* YappText Logo */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #1e3a8a, #3b82f6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            position: 'absolute',
            bottom: '60px',
          }}
        >
          YappText
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}