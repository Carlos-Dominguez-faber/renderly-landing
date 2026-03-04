'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { type Lang, copy } from './copy'
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero'
import { PulseBeams } from '@/components/ui/pulse-beams'
import {
  CheckCircle2,
  ArrowRight,
  Play,
  Star,
  Sparkles,
} from 'lucide-react'
import {
  PainSection,
  BenefitsSection,
  HowItWorksSection,
  EarlyAccessSection,
  CtaFinalSection,
  Footer,
} from './sections'
import { FaqSection } from './faq'
import { ComparisonSection } from './comparison-section'
import { VideoSection } from './video-section'
import { PricingSection } from './pricing-section'

const HERO_BG_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop'
const HERO_MEDIA_IMAGE =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1280&q=80&auto=format&fit=crop'

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
      className="relative z-[60] border-b border-white/[0.08] bg-[var(--bg-dark)] py-2.5 text-center"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cta" />
        <p className="font-body text-sm font-medium text-white/80">
          {text}
        </p>
        <a
          href="#early-access"
          className="rounded-full bg-cta/90 px-3.5 py-1 font-body text-xs font-semibold text-white transition-all hover:bg-cta hover:shadow-md hover:shadow-cta/25"
        >
          {cta}
        </a>
      </div>
      <button
        onClick={onClose}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/40 transition-colors hover:text-white/80"
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

/* ─── Floating Liquid Glass Navbar ─── */
function Navbar({
  lang,
  onToggleLang,
  ctaText,
  bannerVisible,
}: {
  lang: Lang
  onToggleLang: () => void
  ctaText: string
  bannerVisible: boolean
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed left-1/2 z-50 w-[85%] max-w-5xl -translate-x-1/2 transition-all duration-300"
      style={{ top: bannerVisible ? '2.75rem' : '0.75rem' }}
    >
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`
          relative overflow-hidden rounded-2xl border transition-all duration-500
          ${
            scrolled
              ? 'border-white/30 bg-white/65 shadow-xl shadow-black/[0.08] backdrop-blur-2xl backdrop-saturate-[1.8]'
              : 'border-white/15 bg-white/[0.07] shadow-lg shadow-black/10 backdrop-blur-xl backdrop-saturate-150'
          }
        `}
      >
        {/* Liquid glass inner highlight */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-px transition-colors duration-500 ${
            scrolled
              ? 'bg-gradient-to-r from-transparent via-white/60 to-transparent'
              : 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
          }`}
        />

        <div className="relative flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <span
            className={`font-display text-lg font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-[var(--text-dark)]' : 'text-white'
            }`}
          >
            Renderly
          </span>

          {/* Nav links - center */}
          <div className="hidden items-center gap-8 md:flex">
            {['features', 'pricing', 'faq'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`font-body text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-[var(--text-dark)] hover:text-black'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleLang}
              className={`rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-all ${
                scrolled
                  ? 'bg-black/[0.04] text-[var(--text-muted)] hover:bg-black/[0.08] hover:text-[var(--text-dark)]'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <a
              href="#early-access"
              className={`hidden rounded-full px-5 py-2 font-display text-sm font-semibold transition-all active:scale-[0.97] sm:inline-block ${
                scrolled
                  ? 'bg-[var(--text-dark)] text-white shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15'
                  : 'bg-white/15 text-white backdrop-blur-sm hover:bg-white/25'
              }`}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

/* ─── PulseBeams config ─── */
const heroBeams = [
  {
    path: 'M200 180H50C44.477 180 40 184.477 40 190V280',
    gradientConfig: {
      initial: { x1: '0%', x2: '0%', y1: '80%', y2: '100%' },
      animate: {
        x1: ['0%', '0%', '200%'],
        x2: ['0%', '0%', '180%'],
        y1: ['80%', '0%', '0%'],
        y2: ['100%', '20%', '20%'],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear', repeatDelay: 2, delay: 0 },
    },
    connectionPoints: [{ cx: 40, cy: 280, r: 4 }],
  },
  {
    path: 'M400 180H550C555.523 180 560 184.477 560 190V280',
    gradientConfig: {
      initial: { x1: '0%', x2: '0%', y1: '80%', y2: '100%' },
      animate: {
        x1: ['20%', '100%', '100%'],
        x2: ['0%', '90%', '90%'],
        y1: ['80%', '80%', '-20%'],
        y2: ['100%', '100%', '0%'],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear', repeatDelay: 2, delay: 0.5 },
    },
    connectionPoints: [{ cx: 560, cy: 280, r: 4 }],
  },
  {
    path: 'M300 200V260C300 265.523 295.523 270 290 270H120C114.477 270 110 274.477 110 280V340',
    gradientConfig: {
      initial: { x1: '0%', x2: '0%', y1: '80%', y2: '100%' },
      animate: {
        x1: ['20%', '100%', '100%'],
        x2: ['0%', '90%', '90%'],
        y1: ['80%', '80%', '-20%'],
        y2: ['100%', '100%', '0%'],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear', repeatDelay: 2, delay: 1 },
    },
    connectionPoints: [{ cx: 110, cy: 340, r: 4 }],
  },
  {
    path: 'M300 200V260C300 265.523 304.477 270 310 270H480C485.523 270 490 274.477 490 280V340',
    gradientConfig: {
      initial: { x1: '40%', x2: '50%', y1: '160%', y2: '180%' },
      animate: { x1: '0%', x2: '10%', y1: '-40%', y2: '-20%' },
      transition: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear', repeatDelay: 2, delay: 1.5 },
    },
    connectionPoints: [{ cx: 490, cy: 340, r: 4 }],
  },
]

/* ─── Animated Counter ─── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start: number
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(p * end))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [end, duration, isInView])

  return { count, ref }
}

/* ─── Below the Fold (revealed after hero expansion) ─── */
function BelowTheFold({ t }: { t: typeof copy['en'] }) {
  const rooms = useCounter(10000, 3200)
  const seconds = useCounter(30, 2800)
  const satisfaction = useCounter(98, 3000)

  const stats = [
    { ...rooms, suffix: '+', label: t.stats.items[0].label },
    { ...seconds, suffix: 's', label: t.stats.items[1].label },
    { ...satisfaction, suffix: '%', label: t.stats.items[2].label },
  ]

  const avatars = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg',
  ]

  return (
    <div className="bg-white">
      {/* ── Main content with PulseBeams ── */}
      <div className="relative">
        <PulseBeams
          beams={heroBeams}
          gradientColors={{ start: '#FF6B4A', middle: '#2D5BFF', end: '#7C3AED' }}
          width={600}
          height={400}
          baseColor="#e5e7eb"
          accentColor="#d1d5db"
          className="min-h-[620px]"
        >
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2 font-body text-sm font-semibold text-cta"
            >
              <Sparkles className="h-4 w-4" />
              {t.heroContent.badge}
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 font-display text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-dark)] md:text-6xl"
            >
              {t.heroContent.headline}{' '}
              <span className="bg-gradient-to-r from-cta via-primary to-violet-600 bg-clip-text text-transparent">
                {t.heroContent.headlineHighlight}
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl font-body text-lg leading-relaxed text-muted md:text-xl"
            >
              {t.heroContent.subtitle}
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
            >
              {t.heroContent.trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-4"
            >
              {/* Primary CTA */}
              <a
                href="#early-access"
                className="group relative flex h-14 items-center gap-2.5 overflow-hidden rounded-full bg-cta px-8 font-display text-base font-bold text-white shadow-xl shadow-cta/25 transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-cta/35 active:scale-[0.97]"
              >
                {/* Radial glow on hover */}
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,0.35)_0%,transparent_75%)] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  {t.heroContent.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              {/* Secondary CTA */}
              <a
                href="#video"
                className="flex h-14 items-center gap-2 rounded-full border-2 border-[var(--border)] bg-white px-7 font-display text-base font-bold text-[var(--text-dark)] shadow-lg shadow-black/[0.03] transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow-xl active:scale-[0.97]"
              >
                <Play className="h-4 w-4" />
                {t.heroContent.secondaryCta}
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Satisfied Renderly customer — real estate agent using virtual staging"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-md"
                  />
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 font-display text-sm font-bold text-[var(--text-dark)]">
                    {t.heroContent.socialProof.rating}
                  </span>
                </div>
                <span className="font-body text-xs text-muted">
                  {t.heroContent.socialProof.count}
                </span>
              </div>
            </motion.div>
          </div>
        </PulseBeams>
      </div>

      {/* ── Animated stats bar — bento glass cards ── */}
      <div className="relative bg-white py-16">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
                className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white px-8 py-10 text-center shadow-2xl shadow-black/[0.08]"
              >
                {/* Gradient top accent */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cta via-primary to-violet-500" />
                {/* Hover glow */}
                <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-cta/[0.06] via-transparent to-primary/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative font-display text-5xl font-black text-[var(--text-dark)] md:text-6xl">
                  <span ref={stat.ref}>{stat.count.toLocaleString()}</span>
                  <span className="bg-gradient-to-r from-cta to-primary bg-clip-text text-transparent">
                    {stat.suffix}
                  </span>
                </div>
                <div className="relative mt-3 font-body text-sm font-semibold uppercase tracking-wider text-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Landing Page ─── */
export function LandingPage() {
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

      <Navbar lang={lang} onToggleLang={toggleLang} ctaText={t.nav.cta} bannerVisible={bannerVisible} />

      {/* Scroll Expansion Hero (original Unsplash images) */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={HERO_MEDIA_IMAGE}
        bgImageSrc={HERO_BG_IMAGE}
        titleTop={t.hero.titleTop}
        titleBottom={t.hero.titleBottom}
        tagline={t.hero.tagline}
        scrollHint={t.hero.scrollHint}
        textBlend
      >
        <BelowTheFold t={t} />
      </ScrollExpandMedia>

      {/* Before/After comparison slider */}
      <ComparisonSection
        title={t.comparison.title}
        subtitle={t.comparison.subtitle}
        beforeLabel={t.comparison.beforeLabel}
        afterLabel={t.comparison.afterLabel}
      />

      <PainSection title={t.pain.title} paragraphs={t.pain.paragraphs} />

      <BenefitsSection
        title={t.benefits.title}
        subtitle={t.benefits.subtitle}
        items={t.benefits.items}
      />

      <HowItWorksSection
        title={t.howItWorks.title}
        subtitle={t.howItWorks.subtitle}
        steps={t.howItWorks.steps}
      />

      <PricingSection
        badge={t.pricing.badge}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        plans={t.pricing.plans}
      />

      {/* Video section */}
      <VideoSection title={t.video.title} subtitle={t.video.subtitle} />

      <EarlyAccessSection
        title={t.earlyAccess.title}
        description={t.earlyAccess.description}
        discount={t.earlyAccess.discount}
        form={t.earlyAccess.form}
      />

      <FaqSection title={t.faq.title} items={t.faq.items} />

      <CtaFinalSection
        title={t.ctaFinal.title}
        subtitle={t.ctaFinal.subtitle}
        cta={t.ctaFinal.cta}
        secondaryCta={t.ctaFinal.secondaryCta}
      />

      <Footer tagline={t.footer.tagline} copyright={t.footer.copyright} />
    </>
  )
}
