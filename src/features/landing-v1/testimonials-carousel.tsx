'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface TestimonialItem {
  quote: string
  name: string
  role: string
}

interface TestimonialsCarouselProps {
  badge: string
  title: string
  rating: string
  ratingLabel: string
  items: TestimonialItem[]
}

const AVATARS = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
  'https://randomuser.me/api/portraits/women/22.jpg',
  'https://randomuser.me/api/portraits/men/65.jpg',
]

export function TestimonialsCarousel({
  badge,
  title,
  rating,
  ratingLabel,
  items,
}: TestimonialsCarouselProps) {
  const sectionRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const cardWidth =
      scrollRef.current.firstElementChild?.clientWidth ?? 380
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -(cardWidth + 24) : cardWidth + 24,
      behavior: 'smooth',
    })
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="font-body text-sm font-medium text-white/70">
            {badge}
          </span>
          <div className="flex -space-x-2">
            {AVATARS.slice(0, 4).map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-6 w-6 rounded-full border-2 border-[#08090D] object-cover"
              />
            ))}
          </div>
        </motion.div>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h2>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="flex w-[360px] flex-shrink-0 flex-col rounded-2xl border border-white/[0.08] bg-[#12131F] p-6"
            >
              {/* Quote icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M10 8c-1.1 0-2 .9-2 2v4h4V10h-2zm6 0c-1.1 0-2 .9-2 2v4h4V10h-2z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 18h4v-4H4c0-2.2 1.8-4 4-4V8c-3.3 0-6 2.7-6 6v4h2zm12-4h-4c0-2.2 1.8-4 4-4V8c-3.3 0-6 2.7-6 6v4h6v-4z"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Testimonial text */}
              <p className="flex-1 font-body text-sm leading-relaxed text-white/70">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="my-4 h-px bg-white/[0.08]" />

              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <img
                  src={AVATARS[i % AVATARS.length]}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="font-body text-xs text-[#8B8FA3]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows below */}
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#12131F] text-white/60 transition-colors hover:border-white/[0.15] hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#12131F] text-white/60 transition-colors hover:border-white/[0.15] hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
