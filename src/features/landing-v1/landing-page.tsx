'use client'

import { useState, useCallback } from 'react'
import { type Lang, copy } from './copy'
import { extraCopy } from './extra-copy'
import { Navbar } from './navbar'
import { HeroSection } from './hero-section'
import { FeaturesCarousel } from './features-carousel'
import { HowItWorksTabbed } from './how-it-works-tabbed'
import { BigClaimSection } from './big-claim'
import { TestimonialsCarousel } from './testimonials-carousel'
import { PricingSection } from './pricing-section'
import { FaqTabbed } from './faq-tabbed'
import { CtaSection, Footer } from './cta-footer'

export function V1LandingPage() {
  const [lang, setLang] = useState<Lang>('en')
  const t = copy[lang]
  const ext = extraCopy[lang]

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  return (
    <>
      <Navbar lang={lang} onToggleLang={toggleLang} ctaText={t.nav.cta} />

      <HeroSection
        trustBadge={ext.hero.trustBadge}
        headline={t.heroContent.headline}
        headlineHighlight={t.heroContent.headlineHighlight}
        subtitle={t.heroContent.subtitle}
        cta={t.heroContent.cta}
        secondaryCta={t.heroContent.secondaryCta}
      />

      <FeaturesCarousel
        title={ext.features.title}
        subtitle={ext.features.subtitle}
        items={ext.features.items}
      />

      <HowItWorksTabbed
        title={t.howItWorks.title}
        subtitle={t.howItWorks.subtitle}
        steps={t.howItWorks.steps}
      />

      <BigClaimSection
        badge={ext.bigClaim.badge}
        title={ext.bigClaim.title}
        titleHighlight={ext.bigClaim.titleHighlight}
      />

      <TestimonialsCarousel
        badge={ext.testimonials.badge}
        title={ext.testimonials.title}
        rating={ext.testimonials.rating}
        ratingLabel={ext.testimonials.ratingLabel}
        items={ext.testimonials.items}
      />

      <PricingSection
        badge={t.pricing.badge}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        plans={t.pricing.plans}
      />

      <FaqTabbed title={t.faq.title} items={t.faq.items} />

      <CtaSection
        title={t.ctaFinal.title}
        subtitle={t.ctaFinal.subtitle}
        cta={t.ctaFinal.cta}
        secondaryCta={t.ctaFinal.secondaryCta}
      />

      <Footer tagline={t.footer.tagline} copyright={t.footer.copyright} />
    </>
  )
}
