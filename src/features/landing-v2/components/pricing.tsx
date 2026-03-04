'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, X, ArrowRight, DollarSign } from 'lucide-react'

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

export function PricingSection({ badge, title, subtitle, plans }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'per-property' | 'enterprise'>('per-property')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  // Show first 3 plans for per-property, all 4 for enterprise toggle
  const visiblePlans = billingCycle === 'per-property' ? plans.slice(0, 3) : plans

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 font-body text-sm font-medium text-white/60">
            <DollarSign className="h-4 w-4 text-cta" />
            {badge}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-[var(--text-secondary)]">
            {subtitle}
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3">
            <div className="flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] p-1">
              <button
                onClick={() => setBillingCycle('per-property')}
                className={`rounded-full px-5 py-2 font-body text-sm font-medium transition-all ${
                  billingCycle === 'per-property'
                    ? 'bg-white/[0.1] text-white'
                    : 'text-white/50 hover:text-white/70'
                }`}
              >
                Per Property
              </button>
              <button
                onClick={() => setBillingCycle('enterprise')}
                className={`rounded-full px-5 py-2 font-body text-sm font-medium transition-all ${
                  billingCycle === 'enterprise'
                    ? 'bg-white/[0.1] text-white'
                    : 'text-white/50 hover:text-white/70'
                }`}
              >
                Enterprise
              </button>
            </div>
            {billingCycle === 'enterprise' && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-full bg-emerald-500/20 px-3 py-1 font-body text-xs font-semibold text-emerald-400"
              >
                Unlimited properties
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-6 ${
              visiblePlans.length <= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {visiblePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:translate-y-[-4px] ${
                  plan.popular
                    ? 'border-cta/30 bg-cta/[0.05] shadow-lg shadow-cta/[0.08] ring-1 ring-cta/20'
                    : 'border-white/[0.08] bg-[var(--bg-surface)] hover:border-white/[0.12]'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="whitespace-nowrap rounded-full bg-cta px-4 py-1 font-body text-xs font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name & description */}
                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1 font-body text-sm text-white/50">{plan.description}</p>

                {/* Price */}
                <div className="mt-6">
                  <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price === '$75' && (
                    <span className="ml-1 font-body text-lg text-white/50">/mo</span>
                  )}
                </div>
                <p className="mt-1 font-body text-xs text-white/40">{plan.priceNote}</p>

                {/* Features */}
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-white/20" />
                      )}
                      <span className={`font-body text-sm ${
                        feature.included ? 'text-white/70' : 'text-white/30'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-body text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-cta text-white shadow-lg shadow-cta/20 hover:bg-cta-hover'
                      : 'bg-white/[0.08] text-white hover:bg-white/[0.12]'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
