'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

interface CtaFinalProps {
  title: string
  subtitle: string
  cta: string
  secondaryCta: string
  spotsLeft: string
}

interface FooterProps {
  tagline: string
  copyright: string
}

export function CtaFinalSection({ title, subtitle, cta, secondaryCta, spotsLeft }: CtaFinalProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[var(--bg-dark)]"
    >
      {/* Radial gradient bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cta)]/[0.06] blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--cta)]/20 bg-[var(--cta)]/[0.06] px-5 py-2"
        >
          <Zap className="h-4 w-4 text-[var(--cta)]" />
          <span className="font-body text-sm font-semibold text-[var(--cta)]">
            {spotsLeft}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-white/50"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#early-access"
            className="cta-pulse group relative flex items-center gap-2 overflow-hidden rounded-full bg-[var(--cta)] px-8 py-4 font-display text-base font-bold text-white shadow-xl shadow-[var(--cta)]/25 transition-all hover:shadow-2xl hover:shadow-[var(--cta)]/40 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative">{cta}</span>
            <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 rounded-full border border-white/10 px-7 py-4 font-display text-base font-semibold text-white/60 transition-all hover:border-white/20 hover:text-white"
          >
            {secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer({ tagline, copyright }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-dark)] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-bold text-white">Renderly</span>
          <span className="font-body text-sm text-white/30">{tagline}</span>
        </div>
        <p className="font-body text-sm text-white/30">{copyright}</p>
      </div>
    </footer>
  )
}
