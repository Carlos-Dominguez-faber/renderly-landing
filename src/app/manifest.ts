import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Renderly | AI Virtual Staging',
    short_name: 'Renderly',
    description:
      'AI-powered virtual staging for real estate. Furnish empty rooms with photorealistic furniture in minutes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08090D',
    theme_color: '#FF6B4A',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
