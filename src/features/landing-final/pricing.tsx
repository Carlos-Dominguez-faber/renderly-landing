'use client'

import { useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion'
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
  popularBadge: string
  featuresIncluded: string
}

function PricingCard({
  plan,
  index,
  isInView,
  popularBadge,
  featuresIncluded,
}: {
  plan: PricingPlan
  index: number
  isInView: boolean
  popularBadge: string
  featuresIncluded: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [5, -5]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const includedCount = plan.features.filter((f) => f.included).length
  const totalFeatures = plan.features.length

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={cn(
        'relative flex flex-col rounded-2xl border p-6',
        plan.popular
          ? 'border-[var(--cta)]/30 bg-[var(--cta)]/[0.04] shadow-lg shadow-[var(--cta)]/[0.06] md:-mt-4 md:scale-105'
          : 'border-white/[0.06] bg-[#12131F]'
      )}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="whitespace-nowrap rounded-full bg-[var(--cta)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[var(--cta)]/20">
            {popularBadge}
          </span>
        </div>
      )}

      {/* Glow effect for popular */}
      {plan.popular && (
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-[var(--cta)]/10 to-transparent opacity-50" />
      )}

      {/* Plan name & description */}
      <div className="relative">
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
        <p className="mt-1 font-body text-sm text-white/40">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="relative mt-6">
        <span className="font-display text-4xl font-black text-white">{plan.price}</span>
        {plan.price === '$75' && (
          <span className="ml-1 font-body text-lg text-white/40">/mo</span>
        )}
      </div>
      <p className="relative mt-1 font-body text-xs text-white/30">{plan.priceNote}</p>

      {/* Feature progress bar */}
      <div className="relative mt-6">
        <div className="mb-2 flex justify-between">
          <span className="font-body text-xs text-white/30">{featuresIncluded}</span>
          <span className="font-body text-xs text-white/50">
            {includedCount}/{totalFeatures}
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${(includedCount / totalFeatures) * 100}%` } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
            className={cn(
              'h-full rounded-full',
              plan.popular
                ? 'bg-gradient-to-r from-[var(--cta)] to-orange-400'
                : 'bg-white/20'
            )}
          />
        </div>
      </div>

      {/* Features */}
      <ul className="relative mt-5 flex-1 space-y-2.5">
        {plan.features.map((feature, j) => (
          <li key={j} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-white/15" />
            )}
            <span
              className={cn(
                'font-body text-sm',
                feature.included ? 'text-white/60' : 'text-white/20'
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
          'relative mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-body text-sm font-semibold transition-all',
          plan.popular
            ? 'bg-[var(--cta)] text-white shadow-lg shadow-[var(--cta)]/20 hover:shadow-xl hover:shadow-[var(--cta)]/30'
            : 'bg-white/[0.06] text-white hover:bg-white/[0.1]'
        )}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  )
}

export function PricingSection({ badge, title, subtitle, plans, popularBadge, featuresIncluded }: PricingSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[var(--cta)]/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--cta)]/20 bg-[var(--cta)]/[0.06] px-4 py-2 font-body text-sm font-semibold text-[var(--cta)]">
            <DollarSign className="h-4 w-4" />
            {badge}
          </div>

          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-white/50">
            {subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} isInView={isInView} popularBadge={popularBadge} featuresIncluded={featuresIncluded} />
          ))}
        </div>
      </div>
    </section>
  )
}
