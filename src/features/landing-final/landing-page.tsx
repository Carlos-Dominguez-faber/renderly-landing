'use client'

import { useState, useCallback } from 'react'
import { type Lang, copy } from './copy'
import { Banner, Navbar } from './navbar'
import { HeroSection } from './hero'
import { FeaturesCarousel } from './features-carousel'
import { HowItWorksSection } from './how-it-works'
import { BigClaimSection } from './big-claim'
import { TestimonialsSection } from './testimonials'
import { PricingSection } from './pricing'
import { FaqSection } from './faq'
import { CtaFinalSection, Footer, ScrollToTop } from './cta-footer'

export function FinalLandingPage() {
  const [lang, setLang] = useState<Lang>('en')
  const [bannerVisible, setBannerVisible] = useState(true)
  const t = copy[lang]

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  return (
    <>
      {bannerVisible && (
        <Banner
          text={t.banner.text}
          cta={t.banner.cta}
          onClose={() => setBannerVisible(false)}
        />
      )}
      <Navbar
        lang={lang}
        onToggleLang={toggleLang}
        ctaText={t.nav.cta}
        bannerVisible={bannerVisible}
      />
      <HeroSection
        badge={t.heroContent.badge}
        headline={t.heroContent.headline}
        headlineHighlight={t.heroContent.headlineHighlight}
        subtitle={t.heroContent.subtitle}
        cta={t.heroContent.cta}
        secondaryCta={t.heroContent.secondaryCta}
        socialProof={t.heroContent.socialProof}
      />
      <FeaturesCarousel title={t.benefits.title} subtitle={t.benefits.subtitle} />
      <HowItWorksSection
        title={t.howItWorks.title}
        subtitle={t.howItWorks.subtitle}
        steps={t.howItWorks.steps}
      />
      <BigClaimSection hero={t.hero} stats={t.stats} />
      <TestimonialsSection socialProof={t.heroContent.socialProof} />
      <PricingSection
        badge={t.pricing.badge}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        plans={t.pricing.plans}
      />
      <FaqSection title={t.faq.title} items={t.faq.items} />
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
