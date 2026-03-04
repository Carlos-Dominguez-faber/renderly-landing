'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, DollarSign, Palette } from 'lucide-react'

interface BenefitItem {
  title: string
  description: string
}

interface FeaturesSectionProps {
  title: string
  subtitle: string
  items: BenefitItem[]
}

const icons = [TrendingUp, DollarSign, Palette]

export function FeaturesSection({ title, subtitle, items }: FeaturesSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="features"
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 font-body text-lg text-white/50">{subtitle}</p>
        </motion.div>

        {/* Bento Grid — asymmetric layout */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length]
            const isLarge = i === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className={`
                  group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#12131F] p-8 transition-all duration-300 hover:border-white/[0.12]
                  ${isLarge ? 'lg:col-span-2 lg:row-span-2 lg:p-12' : ''}
                `}
              >
                {/* Hover gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--cta)]/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--cta)]/10 ${isLarge ? 'lg:h-16 lg:w-16' : ''}`}>
                  <Icon className={`h-6 w-6 text-[var(--cta)] ${isLarge ? 'lg:h-8 lg:w-8' : ''}`} />
                </div>

                {/* Title */}
                <h3 className={`font-display text-xl font-bold text-white ${isLarge ? 'lg:text-3xl' : ''}`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`mt-3 font-body leading-relaxed text-white/50 ${isLarge ? 'lg:mt-5 lg:max-w-lg lg:text-lg' : 'text-sm'}`}>
                  {item.description}
                </p>

                {/* Decorative corner accent on large card */}
                {isLarge && (
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--cta)]/[0.06] blur-3xl" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
