'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

function AnimatedCounter({
  end,
  suffix,
  duration = 2000,
}: {
  end: number
  suffix: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTs: number
    const tick = (ts: number) => {
      if (!startTs) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [end, duration, isInView])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const STATS = [
  { value: 73, suffix: '%', label: 'Faster Sales' },
  { value: 95, suffix: '%', label: 'Cost Savings' },
  { value: 30, suffix: 's', label: 'Per Room' },
]

export function ConferenceSocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative bg-[var(--bg-dark)] px-6 py-20 md:py-28"
    >
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-2xl grid-cols-3 gap-4"
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                duration={2000 + i * 300}
              />
            </div>
            <div className="mt-2 font-body text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto my-12 max-w-md"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </motion.div>

      {/* Trust line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <div className="mb-2 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <p className="font-body text-sm text-[var(--text-secondary)]">
          Trusted by <span className="font-semibold text-white">2,000+</span>{' '}
          real estate professionals
        </p>
      </motion.div>
    </section>
  )
}
