'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { MoveHorizontal, Eye } from 'lucide-react'

const BEFORE_IMAGE =
  'https://storage.googleapis.com/msgsndr/9WsKwTMFwsyqE4fExicP/media/68f7e4f05d0f4e6bc075c834.png'
const AFTER_IMAGE =
  'https://storage.googleapis.com/msgsndr/9WsKwTMFwsyqE4fExicP/media/68f7e4f0ec31a1dcb57ddff8.png'

interface ComparisonSectionProps {
  title: string
  subtitle: string
  beforeLabel: string
  afterLabel: string
}

export function ComparisonSection({
  title,
  subtitle,
  beforeLabel,
  afterLabel,
}: ComparisonSectionProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPosition((x / rect.width) * 100)
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[350px] w-[350px] rounded-full bg-cta/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Badge — orange for consistency */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-cta/[0.08] px-4 py-2 font-body text-sm font-semibold text-cta backdrop-blur-md"
          >
            <Eye className="h-4 w-4" />
            Real Results
          </motion.div>

          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/50">
            {subtitle}
          </p>
        </motion.div>

        {/* Comparison container */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Outer glow */}
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-primary/15 via-cta/10 to-primary/15 opacity-60 blur-2xl" />

          <div
            ref={containerRef}
            className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/30 ring-1 ring-white/[0.08] md:aspect-[16/9]"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            {/* After image (full width, behind) */}
            <Image
              src={AFTER_IMAGE}
              alt="After virtual staging"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={BEFORE_IMAGE}
                alt="Before virtual staging"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
              />
            </div>

            {/* Slider line */}
            <div
              className="absolute bottom-0 top-0 z-10 w-[2px] bg-white/90"
              style={{
                left: `${sliderPosition}%`,
                transform: 'translateX(-50%)',
                boxShadow: '0 0 16px rgba(255,255,255,0.3)',
              }}
            >
              {/* Handle — liquid glass */}
              <motion.div
                animate={{ scale: isDragging ? 1.15 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/[0.15] shadow-xl shadow-black/30 backdrop-blur-xl"
              >
                <MoveHorizontal className="h-4 w-4 text-white" />
              </motion.div>
            </div>

            {/* Labels — liquid glass pills */}
            <div className="absolute left-3.5 top-3.5 z-10 flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-black/40 px-3 py-1.5 backdrop-blur-xl sm:left-5 sm:top-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="font-display text-[11px] font-bold uppercase tracking-widest text-white/90">
                {beforeLabel}
              </span>
            </div>
            <div className="absolute right-3.5 top-3.5 z-10 flex items-center gap-1.5 rounded-lg border border-cta/20 bg-cta/70 px-3 py-1.5 backdrop-blur-xl sm:right-5 sm:top-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              <span className="font-display text-[11px] font-bold uppercase tracking-widest text-white">
                {afterLabel}
              </span>
            </div>

            {/* Bottom gradient vignette */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Caption below */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 text-center font-body text-sm text-white/40"
          >
            Drag the slider to compare &mdash; same room, same photo, AI-staged in under 30 seconds
          </motion.p>
        </motion.div>
      </div>

    </section>
  )
}
