'use client'

import { useState, useCallback } from 'react'
import { type Lang, copy } from './copy'
import { Navbar } from './components/navbar'
import { HeroSection } from './components/hero'
import { FeaturesCarousel } from './components/features-carousel'
import { HowItWorksSection } from './components/how-it-works'
import { BigClaimSection } from './components/big-claim'
import { TestimonialsSection } from './components/testimonials'
import { PricingSection } from './components/pricing'
import { FaqSection } from './components/faq-section'
import { EarlyAccessSection } from './components/early-access'
import { CtaFinalSection, Footer, ScrollToTop } from './components/cta-footer'

export function V2LandingPage() {
  const [lang, setLang] = useState<Lang>('en')
  const t = copy[lang]

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  return (
    <>
      <Navbar lang={lang} onToggleLang={toggleLang} ctaText={t.nav.cta} />

      <HeroSection
        badge={t.heroContent.badge}
        headline={t.heroContent.headline}
        headlineHighlight={t.heroContent.headlineHighlight}
        subtitle={t.heroContent.subtitle}
        cta={t.heroContent.cta}
        secondaryCta={t.heroContent.secondaryCta}
        socialProof={t.heroContent.socialProof}
      />

      <FeaturesCarousel
        title={t.benefits.title}
        subtitle={t.benefits.subtitle}
      />

      <HowItWorksSection
        title={t.howItWorks.title}
        subtitle={t.howItWorks.subtitle}
        steps={t.howItWorks.steps}
      />

      <BigClaimSection stats={t.stats.items} />

      <TestimonialsSection socialProof={t.heroContent.socialProof} />

      <PricingSection
        badge={t.pricing.badge}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        plans={t.pricing.plans}
      />

      <FaqSection title={t.faq.title} items={t.faq.items} />

      <EarlyAccessSection
        title={t.earlyAccess.title}
        description={t.earlyAccess.description}
        discount={t.earlyAccess.discount}
        form={t.earlyAccess.form}
      />

      <CtaFinalSection
        title={t.ctaFinal.title}
        subtitle={t.ctaFinal.subtitle}
        cta={t.ctaFinal.cta}
        secondaryCta={t.ctaFinal.secondaryCta}
      />

      <Footer tagline={t.footer.tagline} copyright={t.footer.copyright} />

      <ScrollToTop />
    </>
  )
}
