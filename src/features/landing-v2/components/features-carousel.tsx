'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

interface FeatureCard {
  title: string
  titleHighlight: string
  description: string
  image: string
}

const FEATURES: FeatureCard[] = [
  {
    title: 'AI Virtual',
    titleHighlight: 'Staging',
    description: 'Transform empty rooms into beautifully furnished spaces with photorealistic AI in under 30 seconds.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Style',
    titleHighlight: 'Library',
    description: 'Choose from 5,000+ curated 3D assets. Modern, Scandinavian, Mid-Century — every aesthetic covered.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'MLS-Ready',
    titleHighlight: 'Output',
    description: 'High-resolution images optimized for MLS listings, social media, and print marketing materials.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Video',
    titleHighlight: 'Tours',
    description: 'Generate cinematic property walkthroughs from your staged photos. Up to 24 seconds in 4K quality.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Custom',
    titleHighlight: 'Branding',
    description: 'Add your logo and brand colors to every staged image. Professional presentation for every listing.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Batch',
    titleHighlight: 'Processing',
    description: 'Stage entire properties at once. Upload multiple rooms and get all results in a single batch.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80&auto=format&fit=crop',
  },
]

interface FeaturesCarouselProps {
  title: string
  subtitle: string
}

export function FeaturesCarousel({ title, subtitle }: FeaturesCarouselProps) {
  const sectionRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const cardWidth = 380
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header with arrows */}
        <div className="mb-12 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 font-body text-sm font-medium text-white/60">
              <Sparkles className="h-4 w-4 text-cta" />
              Features
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-3 max-w-lg font-body text-base text-[var(--text-secondary)]">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="hidden gap-2 sm:flex"
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/60 transition-all hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/60 transition-all hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          style={{ cursor: 'grab' }}
          onMouseDown={(e) => {
            const el = scrollRef.current
            if (!el) return
            const startX = e.pageX - el.offsetLeft
            const scrollLeftStart = el.scrollLeft
            const handleMouseMove = (ev: MouseEvent) => {
              const x = ev.pageX - el.offsetLeft
              el.scrollLeft = scrollLeftStart - (x - startX)
            }
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove)
              document.removeEventListener('mouseup', handleMouseUp)
              el.style.cursor = 'grab'
            }
            el.style.cursor = 'grabbing'
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
          }}
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="w-[340px] flex-shrink-0 snap-start sm:w-[360px]"
            >
              <div className="group h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[var(--bg-surface)] transition-all duration-300 hover:border-white/[0.15] hover:shadow-xl hover:shadow-black/20 hover:scale-[1.02]">
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-white">
                    {feature.title}{' '}
                    <span className="text-cta">{feature.titleHighlight}</span>
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
