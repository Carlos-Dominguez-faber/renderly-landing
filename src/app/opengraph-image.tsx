import { ImageResponse } from 'next/og'

export const alt = 'Renderly | Affordable AI Virtual Staging for Real Estate Photos'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #08090D 0%, #0F1118 50%, #08090D 100%)',
          position: 'relative',
        }}
      >
        {/* Dot grid overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.15,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,107,74,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderRadius: 9999,
            border: '1px solid rgba(255,107,74,0.3)',
            background: 'rgba(255,107,74,0.1)',
            padding: '8px 20px',
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#FF6B4A',
            }}
          >
            AI-Powered Virtual Staging
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            Renderly
          </span>
          <span
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.4,
              textAlign: 'center',
              maxWidth: 700,
            }}
          >
            Virtual Staging from $19.99 | Winnipeg & Canada
          </span>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            gap: 48,
            marginTop: 48,
          }}
        >
          {[
            { value: '10,000+', label: 'Rooms Staged' },
            { value: '30s', label: 'Average Time' },
            { value: '98%', label: 'Satisfaction' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: '#FF6B4A',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
