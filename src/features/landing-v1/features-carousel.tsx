'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface FeatureItem {
  title: string
  titleHighlight: string
  description: string
}

interface FeaturesCarouselProps {
  title: string
  subtitle: string
  items: FeatureItem[]
}

const FEATURE_IMAGES = [
  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format&fit=crop',
]

function HighlightedTitle({
  title,
  highlight,
}: {
  title: string
  highlight: string
}) {
  const idx = title.indexOf(highlight)
  if (idx === -1) {
    return (
      <h3 className="font-display text-lg font-semibold text-white">
        {title}
      </h3>
    )
  }
  const before = title.slice(0, idx)
  const after = title.slice(idx + highlight.length)
  return (
    <h3 className="font-display text-lg font-semibold text-white">
      {before}
      <strong className="text-cta">{highlight}</strong>
      {after}
    </h3>
  )
}

export function FeaturesCarousel({
  title,
  subtitle,
  items,
}: FeaturesCarouselProps) {
  const sectionRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const cardWidth =
      scrollRef.current.firstElementChild?.clientWidth ?? 340
    const scrollAmount =
      direction === 'left' ? -(cardWidth + 24) : cardWidth + 24
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section id="features" ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header row */}
        <div className="mb-12 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl font-body text-lg text-[#8B8FA3]">
              {subtitle}
            </p>
          </motion.div>

          {/* Arrows */}
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#12131F] text-white/60 transition-colors hover:border-white/[0.15] hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#12131F] text-white/60 transition-colors hover:border-white/[0.15] hover:text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

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
              className="w-[340px] flex-shrink-0 rounded-2xl border border-white/[0.08] bg-[#12131F] transition-colors hover:border-white/[0.15]"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-t-2xl">
                <img
                  src={FEATURE_IMAGES[i % FEATURE_IMAGES.length]}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <HighlightedTitle
                  title={item.title}
                  highlight={item.titleHighlight}
                />
                <p className="mt-2 font-body text-sm leading-relaxed text-[#8B8FA3]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
