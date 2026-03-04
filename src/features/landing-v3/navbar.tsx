'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type Lang } from './copy'

interface NavbarProps {
  lang: Lang
  onToggleLang: () => void
  ctaText: string
  bannerVisible: boolean
}

export function Navbar({ lang, onToggleLang, ctaText, bannerVisible }: NavbarProps) {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const goingDown = currentY > lastScrollY.current && currentY > 80

      setVisible(!goingDown)
      setScrolled(currentY > 40)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed left-0 right-0 z-50"
          style={{ top: bannerVisible ? '2.75rem' : '0' }}
        >
          <nav
            className={`
              mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-all duration-300
              ${scrolled ? '' : ''}
            `}
          >
            {/* Logo */}
            <span className="font-display text-xl font-extrabold tracking-tight text-white">
              Renderly
            </span>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Hidden nav links for desktop */}
              <div className="mr-4 hidden items-center gap-6 md:flex">
                {['features', 'pricing', 'faq'].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="font-body text-sm font-medium text-white/50 transition-colors hover:text-white"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
              </div>

              {/* Lang toggle */}
              <button
                onClick={onToggleLang}
                className="rounded-full border border-white/10 px-3 py-1.5 font-body text-xs font-semibold text-white/60 transition-all hover:border-white/20 hover:text-white"
              >
                {lang === 'en' ? 'ES' : 'EN'}
              </button>

              {/* CTA */}
              <a
                href="#early-access"
                className="hidden rounded-full bg-[var(--cta)] px-5 py-2 font-display text-sm font-bold text-white shadow-lg shadow-[var(--cta)]/20 transition-all hover:shadow-xl hover:shadow-[var(--cta)]/30 active:scale-95 sm:inline-block"
              >
                {ctaText}
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
