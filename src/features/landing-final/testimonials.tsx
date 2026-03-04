'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  avatar: string
  text: string
  rating: number
}

interface TestimonialsProps {
  socialProof: { rating: string; count: string }
  heading: string
  ratingLabel: string
  items: Testimonial[]
}

export function TestimonialsSection({ socialProof, heading, ratingLabel, items }: TestimonialsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const row1 = items.slice(0, 4)
  const row2 = items.slice(4)

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {/* Trust bar */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-display text-sm font-bold text-white">
              {socialProof.rating}{ratingLabel}
            </span>
            <div className="flex -space-x-2">
              {items.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.avatar}
                  alt=""
                  className="h-6 w-6 rounded-full border-2 border-[var(--bg-dark)] object-cover"
                />
              ))}
            </div>
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {heading}
          </h2>
        </motion.div>

        {/* Marquee row 1 */}
        <div className="relative mb-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-dark)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-dark)] to-transparent" />
          <div className="animate-marquee flex gap-6" style={{ width: 'max-content' }}>
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Marquee row 2 */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-dark)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-dark)] to-transparent" />
          <div className="animate-marquee-reverse flex gap-6" style={{ width: 'max-content' }}>
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-[380px] flex-shrink-0 rounded-2xl border border-white/[0.08] bg-[var(--bg-surface)] p-6 transition-all hover:border-white/[0.15] hover:bg-[var(--bg-surface-alt)]">
      <Quote className="mb-4 h-8 w-8 text-primary/40" />
      <p className="font-body text-sm leading-relaxed text-white/70">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="font-display text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="font-body text-xs text-white/40">{testimonial.role}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </div>
  )
}
