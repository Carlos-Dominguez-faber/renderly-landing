'use client'

import { ConferenceHero } from './components/hero'
import { ConferenceHowItWorks } from './components/how-it-works'
import { ConferenceOfferCard } from './components/offer-card'
import { ConferenceSocialProof } from './components/social-proof'
import { ConferenceFooter } from './components/footer'

export function ConferencePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-dark)]">
      <ConferenceHero />
      <ConferenceHowItWorks />
      <ConferenceOfferCard />
      <ConferenceSocialProof />
      <ConferenceFooter />
    </main>
  )
}
