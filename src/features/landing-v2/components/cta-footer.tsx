'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, ArrowUp } from 'lucide-react'

interface CtaFinalProps {
  title: string
  subtitle: string
  cta: string
  secondaryCta: string
}

interface FooterProps {
  tagline: string
  copyright: string
}

export function CtaFinalSection({ title, subtitle, cta, secondaryCta }: CtaFinalProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cta/[0.06] via-transparent to-primary/[0.06] animate-gradient-shift" />
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-[var(--text-secondary)]">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#early-access"
              className="group flex items-center gap-2 rounded-lg bg-cta px-7 py-3.5 font-display text-base font-semibold text-white transition-all hover:bg-cta-hover hover:shadow-xl hover:shadow-cta/25 active:scale-[0.97]"
            >
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#video"
              className="flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.04] px-6 py-3.5 font-display text-base font-semibold text-white transition-all hover:border-white/[0.2] hover:bg-white/[0.08]"
            >
              <Play className="h-4 w-4" />
              {secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer({ tagline, copyright }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-dark)] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo + tagline */}
          <div>
            <span className="font-display text-lg font-bold text-white">Renderly</span>
            <p className="mt-2 max-w-xs font-body text-sm text-white/40">{tagline}</p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-white/30">Product</span>
              <a href="#features" className="font-body text-sm text-white/50 transition-colors hover:text-white">Features</a>
              <a href="#pricing" className="font-body text-sm text-white/50 transition-colors hover:text-white">Pricing</a>
              <a href="#faq" className="font-body text-sm text-white/50 transition-colors hover:text-white">FAQ</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-white/30">Company</span>
              <a href="#" className="font-body text-sm text-white/50 transition-colors hover:text-white">About</a>
              <a href="#" className="font-body text-sm text-white/50 transition-colors hover:text-white">Blog</a>
              <a href="#" className="font-body text-sm text-white/50 transition-colors hover:text-white">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 md:flex-row">
          <p className="font-body text-xs text-white/30">{copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-white/30 transition-colors hover:text-white/50">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-white/30 transition-colors hover:text-white/50">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-[var(--bg-surface)] text-white/60 shadow-lg backdrop-blur-md transition-all hover:bg-[var(--bg-surface-alt)] hover:text-white"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
