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

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Real Estate Agent, RE/MAX',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Renderly cut my staging costs by 90%. I used to spend $3,000 per listing on physical staging. Now I get better-looking photos for $29.99. My listings sell in half the time.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Broker, Coldwell Banker',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'The AI understands lighting and shadows in a way I have never seen before. Buyers literally cannot tell the difference between our virtual staging and real photos.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Managing 40+ rental units means staging is impossible. With Renderly, I stage every vacant unit in minutes. Vacancy rates dropped 35% since we started using it.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Real Estate Agent, Keller Williams',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    text: 'The video tours feature is a game-changer. I send 8-second walkthrough videos to potential buyers and get 3x more showing requests than with static photos alone.',
    rating: 5,
  },
  {
    name: 'Jessica Thompson',
    role: 'Homeowner, Winnipeg',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    text: 'Selling FSBO and saved thousands by staging virtually. The Scandinavian style I chose got so many compliments during showings. Sold above asking price!',
    rating: 5,
  },
  {
    name: 'Robert Williams',
    role: 'Commercial Agent, CBRE',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    text: 'We use Renderly for commercial properties too. Conference rooms, lobbies, open offices — the AI handles it all. Batch processing saves us hours every week.',
    rating: 5,
  },
  {
    name: 'Amanda Foster',
    role: 'Interior Designer & Agent',
    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    text: 'As a designer, I was skeptical. But the quality of the 3D assets and the lighting accuracy genuinely impressed me. I now recommend it to all my agent clients.',
    rating: 5,
  },
  {
    name: 'Michael Torres',
    role: 'Real Estate Investor',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Flipping houses means fast turnaround. Renderly lets me list properties before renovations are complete. I stage the "after" vision and attract buyers early.',
    rating: 5,
  },
]

interface TestimonialsProps {
  socialProof: { rating: string; count: string }
}

export function TestimonialsSection({ socialProof }: TestimonialsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const row1 = TESTIMONIALS.slice(0, 4)
  const row2 = TESTIMONIALS.slice(4)

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
              {socialProof.rating}/5 Rating
            </span>
            <div className="flex -space-x-2">
              {TESTIMONIALS.slice(0, 4).map((t, i) => (
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
            Trusted by 2,000+ agents & homeowners
          </h2>
        </motion.div>

        {/* Marquee row 1 — left */}
        <div className="relative mb-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-dark)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-dark)] to-transparent" />
          <div className="animate-marquee flex gap-6" style={{ width: 'max-content' }}>
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Marquee row 2 — right */}
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
