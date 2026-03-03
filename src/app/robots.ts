import { MetadataRoute } from 'next'

const SITE_URL = 'https://renderly.systemizemybiz.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/login', '/signup'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
