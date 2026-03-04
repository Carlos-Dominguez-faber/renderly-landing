'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface BigClaimSectionProps {
  badge: string
  oldPrice: string
  newPrice: string
  headline: string
  subtitle: string
}

function PriceCounter({ target, duration = 2500 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(2500)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const start = 2500
    let startTs: number

    const tick = (ts: number) => {
      if (!startTs) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setValue(Math.round(start + (target - start) * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration, isInView])

  return <span ref={ref}>${value < 100 ? value.toFixed(2) : value.toLocaleString()}</span>
}

export function BigClaimSection({ badge, oldPrice, newPrice, headline, subtitle }: BigClaimSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="big-claim"
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-500/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--cta)]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 font-body text-sm font-medium text-white/50">
            {badge}
          </span>
        </motion.div>

        {/* Price comparison — dramatic split */}
        <div className="mb-16 grid items-center gap-8 md:grid-cols-2">
          {/* Old price */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-white/30">
              Traditional Staging
            </p>
            <div className="relative inline-block">
              <span className="font-display text-7xl font-black text-white/20 line-through decoration-red-500/60 decoration-4 sm:text-8xl md:text-9xl">
                {oldPrice}
              </span>
            </div>
          </motion.div>

          {/* New price */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-[var(--cta)]/70">
              Renderly
            </p>
            <span className="font-display text-7xl font-black text-[var(--cta)] sm:text-8xl md:text-9xl">
              {newPrice}
            </span>
            {/* Glow effect behind price */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cta)]/10 blur-3xl md:left-auto md:translate-x-0" />
          </motion.div>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-black tracking-tight text-white md:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 font-body text-lg text-white/50">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}
