'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

interface HeroProps {
  badge: string
  headline: string
  headlineHighlight: string
  subtitle: string
  cta: string
  secondaryCta: string
  socialProof: { rating: string; count: string }
}

const PRODUCT_SCREENSHOT =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1280&q=80&auto=format&fit=crop'

const avatars = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
]

export function HeroSection({
  badge,
  headline,
  headlineHighlight,
  subtitle,
  cta,
  socialProof,
}: HeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Ambient gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[150px]" />
        <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-cta/[0.04] blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2"
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-6 w-6 rounded-full border-2 border-[var(--bg-dark)] object-cover"
                />
              ))}
            </div>
            <span className="font-body text-sm font-medium text-white/70">
              {socialProof.rating}
              <span className="mx-1 text-amber-400">&#9733;</span>
              {socialProof.count}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            {headline}{' '}
            <span className="bg-gradient-to-r from-cta to-cta-hover bg-clip-text text-transparent">
              {headlineHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl"
          >
            {subtitle}
          </motion.p>

          {/* Single primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#early-access"
              className="group flex items-center gap-2 rounded-lg bg-cta px-7 py-3.5 font-display text-base font-semibold text-white transition-all hover:bg-cta-hover hover:shadow-xl hover:shadow-cta/25 active:scale-[0.97]"
            >
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Social proof stars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-body text-sm text-white/50">{badge}</span>
          </motion.div>
        </div>

        {/* Product screenshot — 25% bigger: max-w-6xl, mt-20 md:mt-24 */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="relative mx-auto mt-20 max-w-6xl md:mt-24"
        >
          {/* Glow behind screenshot */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cta/10 via-primary/10 to-cta/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40">
            <img
              src={PRODUCT_SCREENSHOT}
              alt="Renderly AI virtual staging product interface"
              className="w-full object-cover"
            />

            {/* Bottom gradient fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-dark)] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
