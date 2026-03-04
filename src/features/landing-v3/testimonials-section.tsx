'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
  location: string
}

interface TestimonialsSectionProps {
  title: string
  subtitle: string
  items: Testimonial[]
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <div className="w-[340px] shrink-0 rounded-2xl border border-white/[0.06] bg-[#12131F]/80 p-6 backdrop-blur-sm">
      {/* Quote icon */}
      <Quote className="mb-4 h-5 w-5 text-[var(--cta)]/40" />

      {/* Quote text */}
      <p className="mb-6 font-body text-sm leading-relaxed text-white/60">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="mb-4 h-px bg-white/[0.06]" />

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--cta)]/20 to-[var(--primary)]/20">
          <span className="font-display text-sm font-bold text-white/60">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-white">
            {testimonial.name}
          </p>
          <p className="font-body text-xs text-white/40">
            {testimonial.role} &middot; {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection({ title, subtitle, items }: TestimonialsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const row1 = items.slice(0, Math.ceil(items.length / 2))
  const row2 = items.slice(Math.ceil(items.length / 2))

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          {/* Star rating */}
          <div className="mb-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 font-display text-lg font-bold text-white">4.9</span>
          </div>

          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 font-body text-lg text-white/50">{subtitle}</p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="mt-12 space-y-5">
        {/* Row 1 — scrolls right */}
        <div className="marquee-container">
          <div className="marquee-track marquee-right">
            {[...row1, ...row1, ...row1].map((testimonial, i) => (
              <TestimonialCard key={`r1-${i}`} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls left */}
        <div className="marquee-container">
          <div className="marquee-track marquee-left">
            {[...row2, ...row2, ...row2].map((testimonial, i) => (
              <TestimonialCard key={`r2-${i}`} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
