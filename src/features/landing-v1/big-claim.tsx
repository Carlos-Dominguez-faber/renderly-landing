'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface BigClaimProps {
  badge: string
  title: string
  titleHighlight: string
}

export function BigClaimSection({ badge, title, titleHighlight }: BigClaimProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const parts = title.split(titleHighlight)

  return (
    <section ref={ref} className="relative overflow-hidden py-32 md:py-40">
      {/* Background image dimmed */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/80 to-[#08090D]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-white/[0.08] bg-[#12131F] px-5 py-2.5"
        >
          <span className="font-body text-sm font-medium text-white/70">
            {badge}
          </span>
        </motion.div>

        {/* Large claim */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          {parts[0]}
          <span className="text-cta">{titleHighlight}</span>
          {parts[1]}
        </motion.h2>
      </div>
    </section>
  )
}
