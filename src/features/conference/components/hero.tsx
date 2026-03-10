'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const CTA_URL =
  'https://app.renderly.space/signup?plan=tier3&promo=CONFERENCE2026&campaign=conference'

const TRUST_ITEMS = [
  'No charge for 30 days',
  'Cancel anytime',
  'Full Enterprise access',
]

export function ConferenceHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[var(--bg-dark)] px-6 py-20"
    >
      {/* Ambient gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cta)]/[0.08] blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/[0.05] blur-[120px]" />
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[var(--cta)]/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--cta)]/20 bg-[var(--cta)]/10 px-5 py-2"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cta)]" />
          <span className="font-body text-xs font-bold uppercase tracking-wider text-[var(--cta)]">
            Exclusive Conference Offer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          1 Month{' '}
          <span className="bg-gradient-to-r from-[var(--cta)] via-orange-400 to-amber-400 bg-clip-text text-transparent">
            Free
          </span>
          <br />
          <span className="text-white/90">on Enterprise</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-[#e8eaed] sm:text-xl"
        >
          Get full Enterprise access to AI virtual staging.{' '}
          <span className="text-white font-semibold">$0 upfront</span>, no charge until month 2.
          $75/mo after that. Cancel anytime.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <a
            href={CTA_URL}
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-[var(--cta)] px-8 font-display text-base font-semibold text-white shadow-xl shadow-[#ff6b4a]/20 transition-all hover:bg-[var(--cta-hover)] hover:shadow-2xl hover:shadow-[#ff6b4a]/30 active:scale-[0.97] sm:text-lg"
          >
            Claim Your Free Month
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Trust Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {TRUST_ITEMS.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 font-body text-sm text-[var(--text-secondary)]"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
