import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import { Agentation } from 'agentation'
import './globals.css'

const SITE_URL = 'https://renderly.systemizemybiz.com'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Virtual Staging from $19.99 | AI Home Staging — Renderly',
    template: '%s | Renderly',
  },
  description:
    'AI virtual staging for real estate photos. Stage any room in 30 seconds from $19.99. MLS-ready results. No designer needed. Try free — Winnipeg & Canada.',
  keywords: [
    'virtual staging',
    'AI virtual staging',
    'virtual home staging',
    'virtual staging app',
    'virtual staging online',
    'affordable virtual staging',
    'cheap virtual staging',
    'virtual staging for real estate photos',
    'virtual staging website',
    'virtual staging Winnipeg',
    'virtual staging Canada',
    'virtual staging Manitoba',
    'virtual staging cost',
    'AI home staging',
    'MLS photos',
    'real estate staging',
    'FSBO staging',
    'home staging DIY',
    'property listing photos',
    'virtual furniture',
  ],
  authors: [{ name: 'Renderly' }],
  creator: 'Renderly',
  publisher: 'Renderly',
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
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: 'Renderly',
    title: 'Virtual Staging from $19.99 — Stage Any Room in 30 Seconds',
    description:
      'AI virtual staging for real estate. Upload a photo, pick a style, get MLS-ready staged images in minutes. No designer needed. Free to start.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Staging from $19.99 — Stage Any Room in 30 Seconds',
    description:
      'AI virtual staging for real estate. Upload a photo, pick a style, get MLS-ready staged images in minutes. No designer needed. Free to start.',
    creator: '@renderly',
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-CA': SITE_URL,
    },
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Renderly',
  description:
    'AI-powered virtual staging app for real estate agents, homeowners, and landlords. Stage any room from $19.99 per property.',
  url: SITE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '0',
    highPrice: '75',
    priceCurrency: 'USD',
    offerCount: '4',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '2000',
    bestRating: '5',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Renderly — AI Virtual Staging',
  description:
    'Affordable AI-powered virtual staging for real estate photos in Winnipeg, Manitoba and across Canada. Stage any room from $19.99.',
  url: SITE_URL,
  areaServed: [
    { '@type': 'City', name: 'Winnipeg' },
    { '@type': 'AdministrativeArea', name: 'Manitoba' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United States' },
  ],
  priceRange: '$0 - $75',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is virtual staging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Virtual staging is the process of digitally adding furniture, decor, and finishes to photos of empty rooms using AI or graphic design software. It produces photorealistic images that help buyers visualize a space, typically costing 95% less than physical staging.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does virtual staging cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Renderly offers virtual staging starting at $0 (free plan with 1 image) up to $29.99 per property for the Professional plan with 9 staged images. The Enterprise plan at $75/month covers unlimited properties. Most plans are one-time payments — no subscription required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is virtual staging allowed on MLS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most MLS boards allow virtually staged photos as long as they are clearly labeled as "virtually staged" in the listing. Renderly delivers clean, MLS-ready images that comply with standard disclosure requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI virtual staging work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload a photo of any empty room, choose from dozens of design styles (Modern, Scandinavian, Mid-Century, etc.), and Renderly\'s AI renders photorealistic furniture with accurate lighting and shadows in under 30 seconds. No design skills needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Virtual staging vs traditional staging — which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional physical staging costs $2,000–$5,000 per property and takes weeks to coordinate. Virtual staging starts at $19.99 per property and delivers results in minutes. Both help listings sell faster, but virtual staging is 95% cheaper and infinitely faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does virtual staging help sell a house faster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Studies show staged listings sell 73% faster and for 5-10% more than unstaged homes. Virtual staging delivers the same buyer engagement benefits as physical staging at a fraction of the cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need any design skills to use Renderly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Renderly is designed for anyone — real estate agents, homeowners, landlords. Upload a photo, pick a style, and the AI handles everything. No design software, no learning curve.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  )
}
