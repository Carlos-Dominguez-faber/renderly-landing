'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { type Lang } from './copy'

interface NavbarProps {
  lang: Lang
  onToggleLang: () => void
  ctaText: string
}

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar({ lang, onToggleLang, ctaText }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-[#08090D]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold text-white">
          Renderly
        </a>

        {/* Center nav links (desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="rounded-full px-2.5 py-1 font-body text-xs font-semibold text-white/50 transition-colors hover:text-white"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          <a
            href="/login"
            className="hidden font-body text-sm font-medium text-white/60 transition-colors hover:text-white sm:inline-block"
          >
            Login
          </a>

          <a
            href="#pricing"
            className="rounded-lg bg-cta px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
          >
            {ctaText}
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 text-white/60 transition-colors hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/[0.08] bg-[#08090D] px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-body text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
