'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const CTA_URL =
  'https://app.renderly.space/signup?plan=tier3&promo=CONFERENCE2026&campaign=conference'

const FEATURES = [
  'Unlimited staged photos',
  'All 20+ design styles',
  'MLS-ready 4K resolution',
  'Commercial use license',
  'Priority AI processing',
  'Dedicated support',
]

export function ConferenceOfferCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative bg-[var(--bg-dark)] px-6 py-20 md:py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cta)]/[0.04] blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-lg"
      >
        <div className="rounded-2xl border border-[var(--cta)]/30 bg-[var(--bg-surface)] p-8 shadow-2xl shadow-[var(--cta)]/[0.06] sm:p-10">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-white">
              Enterprise Plan
            </h3>
            <span className="rounded-full border border-[var(--cta)]/20 bg-[var(--cta)]/10 px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[var(--cta)]">
              1 Month Free
            </span>
          </div>

          {/* Price */}
          <div className="mb-2 flex items-baseline gap-3">
            <span className="font-display text-5xl font-extrabold text-white sm:text-6xl">
              $0
            </span>
            <span className="font-body text-lg text-[var(--text-secondary)] line-through">
              $75
            </span>
            <span className="font-body text-base text-[var(--text-secondary)]">
              / first month
            </span>
          </div>
          <p className="mb-8 font-body text-sm text-[var(--text-secondary)]">
            Then $75/mo. Cancel anytime.
          </p>

          {/* Divider */}
          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Features */}
          <ul className="mb-8 space-y-3">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 font-body text-sm text-[#e8eaed]"
              >
                <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={CTA_URL}
            className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[var(--cta)] font-display text-base font-semibold text-white shadow-xl shadow-[#ff6b4a]/20 transition-all hover:bg-[var(--cta-hover)] hover:shadow-2xl hover:shadow-[#ff6b4a]/30 active:scale-[0.97]"
          >
            Claim Your Free Month
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
