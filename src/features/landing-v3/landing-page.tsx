'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { type Lang, copy } from './copy'
import { Navbar } from './navbar'
import { HeroSection } from './hero-section'
import { FeaturesSection } from './features-section'
import { HowItWorksSection } from './how-it-works-section'
import { BigClaimSection } from './big-claim-section'
import { TestimonialsSection } from './testimonials-section'
import { NewPricingSection } from './new-pricing-section'
import { NewFaqSection } from './new-faq-section'
import { EarlyAccessSection } from './early-access-section'
import { CtaFinalSection, Footer } from './cta-footer-section'

/* ─── Urgency Banner ─── */
function Banner({
  text,
  cta,
  onClose,
}: {
  text: string
  cta: string
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-[60] border-b border-white/[0.06] bg-[var(--bg-dark)] py-2.5 text-center"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cta)]" />
        <p className="font-body text-sm font-medium text-white/70">{text}</p>
        <a
          href="#early-access"
          className="rounded-full bg-[var(--cta)]/90 px-3.5 py-1 font-body text-xs font-semibold text-white transition-all hover:bg-[var(--cta)] hover:shadow-md hover:shadow-[var(--cta)]/25"
        >
          {cta}
        </a>
      </div>
      <button
        onClick={onClose}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/30 transition-colors hover:text-white/60"
        aria-label="Close banner"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M12 4L4 12M4 4l8 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </motion.div>
  )
}

/* ─── Main Landing Page ─── */
export function V3LandingPage() {
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

      {/* 1. Hero — Split asymmetric + urgency counter */}
      <HeroSection
        hero={t.hero}
        heroContent={t.heroContent}
        stats={t.stats}
      />

      {/* 2. Features — Bento grid */}
      <FeaturesSection
        title={t.benefits.title}
        subtitle={t.benefits.subtitle}
        items={t.benefits.items}
      />

      {/* 3. How It Works — Vertical scroll storytelling */}
      <HowItWorksSection
        title={t.howItWorks.title}
        subtitle={t.howItWorks.subtitle}
        steps={t.howItWorks.steps}
      />

      {/* 4. Big Claim — Dramatic price comparison */}
      <BigClaimSection
        badge={t.bigClaim.badge}
        oldPrice={t.bigClaim.oldPrice}
        newPrice={t.bigClaim.newPrice}
        headline={t.bigClaim.headline}
        subtitle={t.bigClaim.subtitle}
      />

      {/* 5. Testimonials — Infinite marquee */}
      <TestimonialsSection
        title={t.testimonials.title}
        subtitle={t.testimonials.subtitle}
        items={t.testimonials.items}
      />

      {/* 6. Pricing — 3D tilt cards */}
      <NewPricingSection
        badge={t.pricing.badge}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        plans={t.pricing.plans}
      />

      {/* 7. FAQ — Chat UI */}
      <NewFaqSection title={t.faq.title} items={t.faq.items} />

      {/* 8. Early Access */}
      <EarlyAccessSection
        title={t.earlyAccess.title}
        description={t.earlyAccess.description}
        discount={t.earlyAccess.discount}
        form={t.earlyAccess.form}
      />

      {/* 9. Final CTA + Footer */}
      <CtaFinalSection
        title={t.ctaFinal.title}
        subtitle={t.ctaFinal.subtitle}
        cta={t.ctaFinal.cta}
        secondaryCta={t.ctaFinal.secondaryCta}
        spotsLeft={t.ctaFinal.spotsLeft}
      />

      <Footer tagline={t.footer.tagline} copyright={t.footer.copyright} />
    </>
  )
}
