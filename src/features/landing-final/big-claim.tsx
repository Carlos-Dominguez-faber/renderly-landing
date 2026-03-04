'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface BigClaimProps {
  hero: { titleTop: string; titleBottom: string; tagline: string }
  stats: { items: Array<{ value: number; suffix: string; label: string }> }
}

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
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function BigClaimSection({ hero, stats }: BigClaimProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <section
      ref={sectionRef}
      id="big-claim"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cta)]/[0.06] blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 font-body text-sm font-medium text-white/60">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cta)]" />
            {hero.tagline}
          </span>
        </motion.div>

        {/* Giant headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center"
        >
          <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
            {hero.titleTop}
            <br />
            <span className="bg-gradient-to-r from-[var(--cta)] via-orange-400 to-amber-400 bg-clip-text text-transparent">
              {hero.titleBottom}
            </span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-8 md:gap-16"
        >
          {stats.items.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl font-black text-white md:text-4xl">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2000 + i * 300}
                />
              </div>
              <div className="mt-1 font-body text-xs font-medium uppercase tracking-widest text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Divider line */}
        <div className="mx-auto mt-16 max-w-5xl">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>
      </div>
    </section>
  )
}
