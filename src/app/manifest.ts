import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Renderly — AI Virtual Staging',
    short_name: 'Renderly',
    description:
      'AI-powered virtual staging for real estate. Furnish empty rooms with photorealistic furniture in minutes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08090D',
    theme_color: '#FF6B4A',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
