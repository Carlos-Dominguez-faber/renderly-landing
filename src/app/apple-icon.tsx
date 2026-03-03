import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
          background: 'linear-gradient(135deg, #FF6B4A 0%, #FF5533 100%)',
        }}
      >
        <span
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: 'white',
            lineHeight: 1,
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size }
  )
}
