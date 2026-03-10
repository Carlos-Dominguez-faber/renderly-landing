import { ConferencePage } from '@/features/conference/conference-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exclusive Offer: 1 Month Free Enterprise | Renderly',
  description:
    'Conference exclusive: Get 1 month free on Renderly Enterprise. AI virtual staging for real estate agents. $0 upfront, no credit card required.',
  openGraph: {
    title: 'Exclusive Offer: 1 Month Free Enterprise | Renderly',
    description:
      'Conference exclusive: Get 1 month free on Renderly Enterprise. AI virtual staging for real estate agents.',
    type: 'website',
    url: 'https://renderly.space/conference',
  },
}

export default function ConferenceRoute() {
  return <ConferencePage />
}
