'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, Star, Play } from 'lucide-react'

interface HeroProps {
  badge: string
  headline: string
  headlineHighlight: string
  subtitle: string
  cta: string
  secondaryCta: string
  socialProof: { rating: string; count: string }
}

const avatars = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
]

const HERO_VIDEO_URL =
  'https://assets.cdn.filesafe.space/bfilCH1kUaWjdh22WREh/media/69b172bf78565a5c1938e9c1.mp4'

export function HeroSection({
  badge,
  headline,
  headlineHighlight,
  subtitle,
  cta,
  secondaryCta,
  socialProof,
}: HeroProps) {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { once: true })
  const [isPlaying, setIsPlaying] = useState(false)
  const [glowVisible, setGlowVisible] = useState(true)

  const handlePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.play()
    setIsPlaying(true)
    // Fade out the glow over 800ms (CSS transition handles the visual)
    setGlowVisible(false)
  }, [])

  const handlePause = useCallback(() => {
    setIsPlaying(false)
    setGlowVisible(true)
  }, [])

  const handleEnded = useCallback(() => {
    setIsPlaying(false)
    setGlowVisible(true)
  }, [])

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

        {/* ─── Video Player ─── Sandcastles-inspired with neon coral glow ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="relative mx-auto mt-20 max-w-6xl md:mt-24"
        >
          {/* ── Neon coral glow layers ── */}
          {/* Outer diffuse glow */}
          <div
            className="pointer-events-none absolute -inset-8 rounded-[2rem] transition-opacity duration-[800ms] ease-out"
            style={{
              background:
                'radial-gradient(50% 55% at 50% 55%, rgba(255,107,74,0.18) 0%, rgba(255,107,74,0) 100%)',
              opacity: glowVisible ? 1 : 0,
            }}
          />
          {/* Mid glow ring */}
          <div
            className="pointer-events-none absolute -inset-4 rounded-3xl transition-opacity duration-[800ms] ease-out"
            style={{
              background:
                'radial-gradient(50% 60% at 50% 55%, rgba(255,107,74,0.12) 0%, rgba(255,107,74,0) 100%)',
              boxShadow: '0 0 80px 20px rgba(255,107,74,0.08)',
              opacity: glowVisible ? 1 : 0,
            }}
          />
          {/* Tight border glow */}
          <div
            className="pointer-events-none absolute -inset-[2px] rounded-[18px] transition-opacity duration-[800ms] ease-out"
            style={{
              boxShadow:
                '0 0 30px 4px rgba(255,107,74,0.25), 0 0 60px 10px rgba(255,107,74,0.12), inset 0 0 20px 2px rgba(255,107,74,0.06)',
              opacity: glowVisible ? 1 : 0,
            }}
          />

          {/* Video container */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40">
            <video
              ref={videoRef}
              poster="/renderly-hero-thumbnail.webp"
              playsInline
              controls={isPlaying}
              onPause={handlePause}
              onEnded={handleEnded}
              className="aspect-video w-full object-cover"
            >
              <source src={HERO_VIDEO_URL} type="video/mp4" />
            </video>

            {/* Play overlay — visible when not playing */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30"
                  onClick={handlePlay}
                >
                  {/* Pulsing ring behind play button */}
                  <div className="absolute h-28 w-28 animate-pulse rounded-full bg-cta/10 sm:h-32 sm:w-32" />
                  <button
                    aria-label={secondaryCta}
                    className="group relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all hover:scale-110 hover:border-cta/40 hover:bg-cta/20 sm:h-24 sm:w-24"
                  >
                    <Play
                      className="ml-1 h-8 w-8 text-white transition-transform group-hover:scale-110 sm:h-10 sm:w-10"
                      fill="white"
                    />
                  </button>

                  {/* Bottom label */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6">
                    <p className="font-body text-xs text-white/50">{badge}</p>
                    <p className="font-display text-sm font-semibold text-white sm:text-base">
                      {secondaryCta}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
