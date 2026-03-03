import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          background: 'linear-gradient(135deg, #FF6B4A 0%, #FF5533 100%)',
        }}
      >
        <span
          style={{
            fontSize: 20,
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
