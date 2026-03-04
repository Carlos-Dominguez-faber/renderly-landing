'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight, Star } from 'lucide-react'

interface HeroSectionProps {
  hero: {
    titleTop: string
    titleBottom: string
    tagline: string
  }
  heroContent: {
    badge: string
    headline: string
    headlineHighlight: string
    subtitle: string
    cta: string
    secondaryCta: string
    trustBadges: string[]
    socialProof: { rating: string; count: string }
  }
  stats: {
    items: Array<{ value: number; suffix: string; label: string }>
  }
}

function AnimatedCounter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTs: number
    const tick = (ts: number) => {
      if (!startTs) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [end, duration, isInView])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const HERO_PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1280&q=80&auto=format&fit=crop'

const avatars = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
]

export function HeroSection({ hero, heroContent, stats }: HeroSectionProps) {
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true })

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[var(--bg-dark)]">
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cta)]/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/[0.04] blur-[120px]" />
      </div>

      {/* Top hero: Oversized stat */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-8 md:pt-40">
        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 font-body text-sm font-medium text-white/60">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cta)]" />
            {hero.tagline}
          </span>
        </motion.div>

        {/* Giant headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center"
        >
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
            {hero.titleTop}
            <br />
            <span className="bg-gradient-to-r from-[var(--cta)] via-orange-400 to-amber-400 bg-clip-text text-transparent">
              {hero.titleBottom}
            </span>
          </h1>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-8 md:gap-16"
        >
          {stats.items.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl font-black text-white md:text-4xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000 + i * 300} />
              </div>
              <div className="mt-1 font-body text-xs font-medium uppercase tracking-widest text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Divider line */}
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      {/* Bottom hero: Content + urgency */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4 font-body text-sm font-medium text-white/50"
            >
              {heroContent.badge}
            </motion.p>

            {/* Headline with urgency highlight */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              {heroContent.headline}{' '}
              <span className="relative inline-block text-red-400">
                {heroContent.headlineHighlight}
                <span className="absolute -inset-x-2 -inset-y-1 -z-10 rounded-lg bg-red-500/10" />
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8 max-w-lg font-body text-lg leading-relaxed text-white/60"
            >
              {heroContent.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#early-access"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[var(--cta)] px-7 py-3.5 font-display text-base font-bold text-white shadow-xl shadow-[var(--cta)]/25 transition-all hover:shadow-2xl hover:shadow-[var(--cta)]/35 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">{heroContent.cta}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#big-claim"
                className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-display text-base font-semibold text-white/70 transition-all hover:border-white/20 hover:text-white"
              >
                {heroContent.secondaryCta}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              {heroContent.trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="font-body text-sm text-white/40">{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy Renderly customer"
                    className="h-9 w-9 rounded-full border-2 border-[var(--bg-dark)] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 font-display text-sm font-bold text-white">
                    {heroContent.socialProof.rating}
                  </span>
                </div>
                <span className="font-body text-xs text-white/40">
                  {heroContent.socialProof.count}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Product screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={HERO_PRODUCT_IMAGE}
                alt="Renderly AI virtual staging — beautifully staged living room"
                className="w-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-6 rounded-xl border border-white/10 bg-[#12131F]/90 px-4 py-3 backdrop-blur-sm">
              <p className="font-body text-xs text-white/50">Staged in</p>
              <p className="font-display text-lg font-bold text-white">30 seconds</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
