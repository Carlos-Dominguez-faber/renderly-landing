import { MetadataRoute } from 'next'

const SITE_URL = 'https://renderly.space'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
