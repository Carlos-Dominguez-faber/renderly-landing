'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, Play, ArrowUp, CheckCircle2 } from 'lucide-react'

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

const VIDEO_THUMBNAIL =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1280&q=80&auto=format&fit=crop'

const TRUST_ITEMS = [
  'No credit card required',
  'Results in 30 seconds',
  'MLS-ready output',
]

export function CtaFinalSection({ title, subtitle, cta, secondaryCta }: CtaFinalProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="early-access"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cta/[0.06] via-transparent to-primary/[0.06] animate-gradient-shift" />
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-cta/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-5 md:gap-16">
          {/* Left: Copy — 60% */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-lg font-body text-lg text-[var(--text-secondary)]">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/signup"
                className="group flex items-center gap-2 rounded-lg bg-cta px-7 py-3.5 font-display text-base font-semibold text-white transition-all hover:bg-cta-hover hover:shadow-xl hover:shadow-cta/25 active:scale-[0.97]"
              >
                {cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="font-body text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Video thumbnail — 40% */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative md:col-span-2"
          >
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cta/10 via-primary/10 to-cta/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40">
              <img
                src={VIDEO_THUMBNAIL}
                alt="Renderly AI virtual staging demo video"
                className="aspect-[4/3] w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  aria-label={secondaryCta}
                  className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20"
                >
                  <Play className="ml-1 h-8 w-8 text-white" fill="white" />
                </button>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur-sm">
                <p className="font-body text-xs text-white/50">See Renderly in action</p>
                <p className="font-display text-sm font-semibold text-white">{secondaryCta}</p>
              </div>
            </div>
          </motion.div>
        </div>
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
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-white/30">
                Product
              </span>
              <a
                href="#features"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                FAQ
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-white/30">
                Company
              </span>
              <a
                href="https://systemizemybiz.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                About
              </a>
              <a
                href="/contact"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                Contact
              </a>
              <a
                href="/login"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                Login
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 md:flex-row">
          <p className="font-body text-xs text-white/30">{copyright}</p>
          <div className="flex gap-6">
            <a
              href="/legal/privacy-policy"
              className="font-body text-xs text-white/30 transition-colors hover:text-white/50"
            >
              Privacy Policy
            </a>
            <a
              href="/legal/terms-of-service"
              className="font-body text-xs text-white/30 transition-colors hover:text-white/50"
            >
              Terms of Service
            </a>
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
