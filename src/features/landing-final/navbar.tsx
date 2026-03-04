'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { type Lang } from './copy'

/* ─── Urgency Banner ─── */
export function Banner({
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
export function Navbar({
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
