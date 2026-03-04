'use client'

import { useState, useCallback, useEffect } from 'react'
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

const LANG_KEY = 'renderly-lang'

export function FinalLandingPage() {
  const [lang, setLang] = useState<Lang>('en')
  const [bannerVisible, setBannerVisible] = useState(true)
  const t = copy[lang]

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY) as Lang | null
    if (stored === 'en' || stored === 'es') {
      setLang(stored)
      return
    }
    const browserLang = navigator.language?.toLowerCase()
    if (browserLang?.startsWith('es')) {
      setLang('es')
    }
  }, [])

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === 'en' ? 'es' : 'en'
      localStorage.setItem(LANG_KEY, next)
      return next
    })
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
        navLinks={t.nav.links}
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
      <FeaturesCarousel
        title={t.benefits.title}
        subtitle={t.benefits.subtitle}
        badge={t.features.badge}
        items={t.features.items}
      />
      <HowItWorksSection
        title={t.howItWorks.title}
        subtitle={t.howItWorks.subtitle}
        steps={t.howItWorks.steps}
        stepPrefix={t.howItWorks.stepPrefix}
      />
      <BigClaimSection hero={t.hero} stats={t.stats} />
      <TestimonialsSection
        socialProof={t.heroContent.socialProof}
        heading={t.testimonials.heading}
        ratingLabel={t.testimonials.ratingLabel}
        items={t.testimonials.items}
      />
      <PricingSection
        badge={t.pricing.badge}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        plans={t.pricing.plans}
        popularBadge={t.pricing.popularBadge}
        featuresIncluded={t.pricing.featuresIncluded}
      />
      <FaqSection
        title={t.faq.title}
        items={t.faq.items}
        badge={t.faq.badge}
        subtitle={t.faq.subtitle}
        contactCta={t.faq.contactCta}
        tabs={t.faq.tabs}
      />
      <CtaFinalSection
        title={t.ctaFinal.title}
        subtitle={t.ctaFinal.subtitle}
        cta={t.ctaFinal.cta}
        secondaryCta={t.ctaFinal.secondaryCta}
        trustItems={t.ctaFinal.trustItems}
        videoLabel={t.ctaFinal.videoLabel}
      />
      <Footer
        tagline={t.footer.tagline}
        copyright={t.footer.copyright}
        productLabel={t.footer.productLabel}
        companyLabel={t.footer.companyLabel}
        links={t.footer.links}
        privacyLink={t.footer.privacyLink}
        termsLink={t.footer.termsLink}
      />
      <ScrollToTop />
    </>
  )
}
