'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react'
import { FloatingParticles } from '@/components/ui/floating-particles'

const DEMO_VIDEO =
  'https://storage.googleapis.com/msgsndr/bfilCH1kUaWjdh22WREh/media/6969259ae4cf742b9b12dc94.mp4'

interface VideoSectionProps {
  title: string
  subtitle: string
}

export function VideoSection({ title, subtitle }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    if (!videoRef.current) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      videoRef.current.requestFullscreen()
    }
  }

  return (
    <section
      ref={sectionRef}
      id="video"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Floating particles */}
      <FloatingParticles count={40} />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-cta/[0.08] px-4 py-2 font-body text-sm font-semibold text-cta"
          >
            <Film className="h-4 w-4" />
            See It In Action
          </motion.div>

          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/70">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-cta/10 to-primary/20 opacity-60 blur-2xl" />

          <div
            className="group relative overflow-hidden rounded-3xl border border-white/[0.1] shadow-2xl shadow-black/30 ring-1 ring-white/[0.05]"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => isPlaying && setShowControls(false)}
          >
            {/* Cinematic vignette */}
            <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]" />

            <video
              ref={videoRef}
              src={DEMO_VIDEO}
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
              onClick={togglePlay}
            />

            {/* Play overlay */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/30"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-white/[0.2] bg-white/[0.1] shadow-2xl shadow-black/20 backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/[0.18]"
                >
                  <Play className="ml-1 h-8 w-8 text-white" fill="white" />
                </motion.button>
              </motion.div>
            )}

            {/* Controls bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: showControls ? 1 : 0,
                y: showControls ? 0 : 10,
              }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-3 left-3 right-3 z-20 flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-black/40 px-4 py-2.5 backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-2xl bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />

              <button
                onClick={togglePlay}
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
              <div className="flex-1" />
              <button
                onClick={toggleFullscreen}
                className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Maximize className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
