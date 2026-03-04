'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

interface CtaSectionProps {
  title: string
  subtitle: string
  cta: string
  secondaryCta: string
}

export function CtaSection({
  title,
  subtitle,
  cta,
  secondaryCta,
}: CtaSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cta/[0.03] to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-body text-lg text-[#8B8FA3]"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-cta px-8 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-cta-hover"
          >
            {cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <Play className="h-4 w-4" />
            {secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

interface FooterProps {
  tagline: string
  copyright: string
}

export function Footer({ tagline, copyright }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div>
            <span className="font-display text-lg font-bold text-white">
              Renderly
            </span>
            <p className="mt-2 max-w-xs font-body text-sm text-[#8B8FA3]">
              {tagline}
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            <div>
              <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-white/40">
                Product
              </h4>
              <div className="mt-3 space-y-2">
                <a
                  href="#features"
                  className="block font-body text-sm text-[#8B8FA3] transition-colors hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block font-body text-sm text-[#8B8FA3] transition-colors hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="block font-body text-sm text-[#8B8FA3] transition-colors hover:text-white"
                >
                  FAQ
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-white/40">
                Company
              </h4>
              <div className="mt-3 space-y-2">
                <a
                  href="#"
                  className="block font-body text-sm text-[#8B8FA3] transition-colors hover:text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block font-body text-sm text-[#8B8FA3] transition-colors hover:text-white"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="block font-body text-sm text-[#8B8FA3] transition-colors hover:text-white"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="font-body text-xs text-[#5A5E73]">{copyright}</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="font-body text-xs text-[#5A5E73] transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs text-[#5A5E73] transition-colors hover:text-white/60"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
