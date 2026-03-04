'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'

const PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1280&q=80&auto=format&fit=crop'

const AVATARS = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
]

interface HeroSectionProps {
  trustBadge: string
  headline: string
  headlineHighlight: string
  subtitle: string
  cta: string
  secondaryCta: string
}

export function HeroSection({
  trustBadge,
  headline,
  headlineHighlight,
  subtitle,
  cta,
  secondaryCta,
}: HeroSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Trust badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#12131F] px-5 py-2.5"
        >
          <div className="flex -space-x-2">
            {AVATARS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-6 w-6 rounded-full border-2 border-[#12131F] object-cover"
              />
            ))}
          </div>
          <span className="font-body text-sm font-medium text-white/70">
            {trustBadge}
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl"
        >
          {headline}{' '}
          <span className="text-cta">{headlineHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-[#8B8FA3]"
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="#pricing"
            className="inline-block rounded-lg bg-cta px-8 py-4 font-display text-base font-semibold text-white transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
          >
            {cta}
          </a>
        </motion.div>

        {/* Product Screenshot with Play overlay */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mt-16"
        >
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] shadow-2xl shadow-black/40">
            <img
              src={PRODUCT_IMAGE}
              alt="Renderly virtual staging product interface"
              className="w-full"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 transition-colors hover:bg-black/40">
              <button
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Play demo video"
              >
                <Play className="h-6 w-6 text-white" fill="white" />
              </button>
              <span className="mt-3 font-body text-sm font-medium text-white/80">
                {secondaryCta}
              </span>
            </div>
          </div>
          {/* Bottom gradient fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08090D] to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
