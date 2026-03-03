'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DollarSign, Check, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingPlan {
  name: string
  description: string
  price: string
  priceNote: string
  popular?: boolean
  cta: string
  features: Array<{ text: string; included: boolean }>
}

interface PricingSectionProps {
  badge: string
  title: string
  subtitle: string
  plans: PricingPlan[]
}

export function PricingSection({
  badge: badgeText,
  title,
  subtitle,
  plans,
}: PricingSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-cta/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-cta/[0.08] px-4 py-2 font-body text-sm font-semibold text-cta"
          >
            <DollarSign className="h-4 w-4" />
            {badgeText}
          </motion.div>

          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-white/70">
            {subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={cn(
                'relative flex flex-col rounded-2xl border p-6',
                plan.popular
                  ? 'border-cta/40 bg-cta/[0.06] shadow-lg shadow-cta/[0.08]'
                  : 'border-white/[0.08] bg-white/[0.03]'
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="whitespace-nowrap rounded-full border border-emerald-500/30 bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name & description */}
              <h3 className="font-display text-xl font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-1 font-body text-sm text-white/50">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6">
                <span className="font-display text-4xl font-black text-white">
                  {plan.price}
                </span>
                {plan.price === '$75' && (
                  <span className="ml-1 font-body text-lg text-white/50">
                    /mo
                  </span>
                )}
              </div>
              <p className="mt-1 font-body text-xs text-white/40">
                {plan.priceNote}
              </p>

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-white/20" />
                    )}
                    <span
                      className={cn(
                        'font-body text-sm',
                        feature.included ? 'text-white/70' : 'text-white/30'
                      )}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={cn(
                  'mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-body text-sm font-semibold transition-all',
                  plan.popular
                    ? 'bg-cta text-white shadow-lg shadow-cta/20 hover:bg-cta-hover'
                    : 'bg-white/[0.08] text-white hover:bg-white/[0.12]'
                )}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
