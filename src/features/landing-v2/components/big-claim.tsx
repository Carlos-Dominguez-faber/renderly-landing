'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

interface BigClaimProps {
  stats: Array<{ value: number; suffix: string; label: string }>
}

function useCounter(end: number, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    let start: number
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // ease-out cubic
      setCount(Math.floor(eased * end))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [end, duration, shouldStart])

  return count
}

export function BigClaimSection({ stats }: BigClaimProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const mainCounter = useCounter(95, 2000, isInView)
  const stat1 = useCounter(stats[0]?.value || 0, 2500, isInView)
  const stat2 = useCounter(stats[1]?.value || 0, 2000, isInView)
  const stat3 = useCounter(stats[2]?.value || 0, 2200, isInView)

  const counters = [stat1, stat2, stat3]

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cta/[0.04] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 font-body text-sm font-medium text-white/60">
            <TrendingUp className="h-4 w-4 text-cta" />
            {stats[0]?.value?.toLocaleString()}+ rooms staged daily
          </span>
        </motion.div>

        {/* Big number claim */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
            Save{' '}
            <span className="bg-gradient-to-r from-cta to-primary bg-clip-text text-transparent">
              {mainCounter}%
            </span>{' '}
            vs traditional
            <br className="hidden sm:block" />{' '}
            staging costs
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center transition-all hover:border-white/[0.12] hover:bg-white/[0.05]"
            >
              <div className="font-display text-4xl font-bold text-white md:text-5xl">
                {counters[i]?.toLocaleString()}
                <span className="text-cta">{stat.suffix}</span>
              </div>
              <div className="mt-2 font-body text-sm font-medium uppercase tracking-wider text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
