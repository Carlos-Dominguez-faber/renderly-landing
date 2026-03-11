'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, Play, ArrowUp, CheckCircle2 } from 'lucide-react'

interface CtaFinalProps {
  title: string
  subtitle: string
  cta: string
  secondaryCta: string
  trustItems: string[]
  videoLabel: string
}

interface FooterProps {
  tagline: string
  copyright: string
  productLabel: string
  companyLabel: string
  links: {
    features: string
    pricing: string
    faq: string
    about: string
    contact: string
    login: string
  }
  privacyLink: string
  termsLink: string
}

const DEMO_VIDEO_URL =
  'https://assets.cdn.filesafe.space/bfilCH1kUaWjdh22WREh/media/69b172bf7fc07c08198fef50.mp4'

export function CtaFinalSection({ title, subtitle, cta, secondaryCta, trustItems, videoLabel }: CtaFinalProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [glowVisible, setGlowVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const handlePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.play()
    setIsPlaying(true)
    setGlowVisible(false)
  }, [])

  const handlePause = useCallback(() => {
    setIsPlaying(false)
    setGlowVisible(true)
  }, [])

  const handleEnded = useCallback(() => {
    setIsPlaying(false)
    setGlowVisible(true)
  }, [])

  return (
    <section
      ref={ref}
      id="early-access"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-cta/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Card container with subtle border — like Sandcastles */}
        <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12 lg:p-16">
          {/* "WATCH VIDEO" curved arrow label — positioned between copy and video */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pointer-events-none absolute left-[38%] top-6 z-20 hidden md:block"
          >
            <div className="flex flex-col items-center">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                {videoLabel}
              </span>
              {/* Curved arrow SVG */}
              <svg
                width="60"
                height="40"
                viewBox="0 0 60 40"
                fill="none"
                className="mt-1 text-white/30"
              >
                <path
                  d="M8 4C20 4 40 4 48 20C52 28 50 36 44 36"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M48 30L44 36L38 32"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </motion.div>

          <div className="grid items-center gap-10 md:grid-cols-5 md:gap-12">
            {/* Left: Copy — 40% */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-md font-body text-base text-[var(--text-secondary)] lg:text-lg">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://app.renderly.space/signup?plan=free"
                  className="group flex items-center gap-2 rounded-lg bg-cta px-7 py-3.5 font-display text-base font-semibold text-white transition-all hover:bg-cta-hover hover:shadow-xl hover:shadow-cta/25 active:scale-[0.97]"
                >
                  {cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                {trustItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="font-body text-sm text-white/50">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Video — 60% */}
            <motion.div
              initial={{ opacity: 0, x: 32, scale: 0.96 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative md:col-span-3"
            >
              {/* Neon coral glow layers */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2rem] transition-opacity duration-[800ms] ease-out"
                style={{
                  background:
                    'radial-gradient(50% 55% at 50% 55%, rgba(255,107,74,0.12) 0%, rgba(255,107,74,0) 100%)',
                  opacity: glowVisible ? 1 : 0,
                }}
              />
              <div
                className="pointer-events-none absolute -inset-[2px] rounded-[18px] transition-opacity duration-[800ms] ease-out"
                style={{
                  boxShadow:
                    '0 0 20px 3px rgba(255,107,74,0.15), 0 0 50px 8px rgba(255,107,74,0.08)',
                  opacity: glowVisible ? 1 : 0,
                }}
              />

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40">
                <video
                  ref={videoRef}
                  playsInline
                  controls={isPlaying}
                  onPause={handlePause}
                  onEnded={handleEnded}
                  preload="metadata"
                  className="aspect-video w-full object-contain bg-black"
                >
                  <source src={DEMO_VIDEO_URL} type="video/mp4" />
                </video>

                {/* Play overlay */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30"
                      onClick={handlePlay}
                    >
                      {/* Pulsing ring */}
                      <div className="absolute h-24 w-24 animate-pulse rounded-full bg-cta/10" />
                      <button
                        aria-label={secondaryCta}
                        className="group relative z-10 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md transition-all hover:scale-105 hover:border-cta/40 hover:bg-cta/20"
                      >
                        <Play className="h-5 w-5 text-white" fill="white" />
                        <span className="font-display text-sm font-semibold text-white">
                          {secondaryCta}
                        </span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer({ tagline, copyright, productLabel, companyLabel, links, privacyLink, termsLink }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-dark)] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo + tagline */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Renderly" className="h-7 w-7" />
              <span className="font-display text-lg font-bold text-white">Renderly</span>
            </a>
            <p className="mt-2 max-w-xs font-body text-sm text-white/40">{tagline}</p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-white/30">
                {productLabel}
              </span>
              <a
                href="#features"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                {links.features}
              </a>
              <a
                href="#pricing"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                {links.pricing}
              </a>
              <a
                href="#faq"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                {links.faq}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-white/30">
                {companyLabel}
              </span>
              <a
                href="https://systemizemybiz.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                {links.about}
              </a>
              <a
                href="/contact"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                {links.contact}
              </a>
              <a
                href="https://app.renderly.space/login"
                className="font-body text-sm text-white/50 transition-colors hover:text-white"
              >
                {links.login}
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
              {privacyLink}
            </a>
            <a
              href="/legal/terms-of-service"
              className="font-body text-xs text-white/30 transition-colors hover:text-white/50"
            >
              {termsLink}
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
