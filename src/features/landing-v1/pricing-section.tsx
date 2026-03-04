'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'

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
  badge,
  title,
  subtitle,
  plans,
}: PricingSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="pricing" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/[0.08] bg-[#12131F] px-4 py-2">
            <span className="font-body text-sm font-medium text-white/70">
              {badge}
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-[#8B8FA3]">
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
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.popular
                  ? 'border-cta/40 bg-cta/[0.06]'
                  : 'border-white/[0.08] bg-[#12131F]'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="whitespace-nowrap rounded-full bg-cta px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name & description */}
              <h3 className="font-display text-xl font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-1 font-body text-sm text-[#8B8FA3]">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6">
                <span className="font-display text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.price === '$75' && (
                  <span className="ml-1 font-body text-lg text-white/50">
                    /mo
                  </span>
                )}
              </div>
              <p className="mt-1 font-body text-xs text-[#5A5E73]">
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
                      className={`font-body text-sm ${
                        feature.included ? 'text-white/70' : 'text-white/30'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-body text-sm font-semibold transition-all ${
                  plan.popular
                    ? 'bg-cta text-white hover:bg-cta-hover'
                    : 'bg-white/[0.08] text-white hover:bg-white/[0.12]'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
