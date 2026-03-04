'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Cpu,
  Palette,
  DollarSign,
  CheckCircle2,
  Star,
  Sparkles,
  TrendingUp,
  Clock,
  Zap,
  ArrowRight,
  AlertTriangle,
  Banknote,
  RotateCcw,
} from 'lucide-react'
import { PulseBeams } from '@/components/ui/pulse-beams'
import { GlareCard } from '@/components/ui/glare-card'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { FloatingParticles } from '@/components/ui/floating-particles'
import { MagneticButton } from '@/components/ui/magnetic-button'

/* ─── Shared animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ─── Animated Counter Hook ─── */
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return { count, ref }
}

/* ─── Stats Section ─── */
interface StatsProps {
  items: Array<{ value: number; suffix: string; label: string }>
}

export function StatsSection({ items }: StatsProps) {
  const counters = items.map((item) => useCounter(item.value, 2000))

  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 divide-y md:grid-cols-3 md:divide-x md:divide-y-0 divide-slate-200">
          {items.map((item, i) => {
            const iconColors = [
              { bg: 'bg-blue-100', text: 'text-blue-600' },
              { bg: 'bg-indigo-100', text: 'text-indigo-600' },
              { bg: 'bg-purple-100', text: 'text-purple-600' },
            ]
            const icons = [
              <TrendingUp key="trending" size={32} />,
              <Clock key="clock" size={32} />,
              <Zap key="zap" size={32} />,
            ]
            const color = iconColors[i % iconColors.length]

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center justify-center gap-4 py-4 md:py-0"
              >
                <div className={`rounded-2xl p-3 ${color.bg} ${color.text}`}>
                  {icons[i % icons.length]}
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-slate-900">
                    <span ref={counters[i].ref}>
                      {counters[i].count.toLocaleString()}
                    </span>
                    <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      {item.suffix}
                    </span>
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Social Proof ─── */
interface SocialProofProps {
  rating: string
  count: string
}

export function SocialProof({ rating, count }: SocialProofProps) {
  const avatars = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex items-center justify-center gap-4"
    >
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Customer"
            className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-md"
          />
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
          <span className="ml-1 text-sm font-bold text-gray-900">
            {rating}
          </span>
        </div>
        <span className="text-sm text-gray-500">{count}</span>
      </div>
    </motion.div>
  )
}

/* ─── Hero Content (PulseBeams + CTA) ─── */
const ctaBeams = [
  {
    path: 'M200 180H50C44.477 180 40 184.477 40 190V280',
    gradientConfig: {
      initial: { x1: '0%', x2: '0%', y1: '80%', y2: '100%' },
      animate: {
        x1: ['0%', '0%', '200%'],
        x2: ['0%', '0%', '180%'],
        y1: ['80%', '0%', '0%'],
        y2: ['100%', '20%', '20%'],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        repeatDelay: 2,
        delay: 0,
      },
    },
    connectionPoints: [{ cx: 40, cy: 280, r: 4 }],
  },
  {
    path: 'M400 180H550C555.523 180 560 184.477 560 190V280',
    gradientConfig: {
      initial: { x1: '0%', x2: '0%', y1: '80%', y2: '100%' },
      animate: {
        x1: ['20%', '100%', '100%'],
        x2: ['0%', '90%', '90%'],
        y1: ['80%', '80%', '-20%'],
        y2: ['100%', '100%', '0%'],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        repeatDelay: 2,
        delay: 0.5,
      },
    },
    connectionPoints: [{ cx: 560, cy: 280, r: 4 }],
  },
  {
    path: 'M300 200V260C300 265.523 295.523 270 290 270H120C114.477 270 110 274.477 110 280V340',
    gradientConfig: {
      initial: { x1: '0%', x2: '0%', y1: '80%', y2: '100%' },
      animate: {
        x1: ['20%', '100%', '100%'],
        x2: ['0%', '90%', '90%'],
        y1: ['80%', '80%', '-20%'],
        y2: ['100%', '100%', '0%'],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        repeatDelay: 2,
        delay: 1,
      },
    },
    connectionPoints: [{ cx: 110, cy: 340, r: 4 }],
  },
  {
    path: 'M300 200V260C300 265.523 304.477 270 310 270H480C485.523 270 490 274.477 490 280V340',
    gradientConfig: {
      initial: { x1: '40%', x2: '50%', y1: '160%', y2: '180%' },
      animate: { x1: '0%', x2: '10%', y1: '-40%', y2: '-20%' },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        repeatDelay: 2,
        delay: 1.5,
      },
    },
    connectionPoints: [{ cx: 490, cy: 340, r: 4 }],
  },
]

interface HeroContentProps {
  badge: string
  headline: string
  headlineHighlight: string
  subtitle: string
  cta: string
  secondaryCta: string
  trustBadges: string[]
  socialProof: { rating: string; count: string }
}

export function HeroContent({
  badge,
  headline,
  headlineHighlight,
  subtitle,
  cta,
  secondaryCta,
  trustBadges,
  socialProof,
}: HeroContentProps) {
  return (
    <div className="bg-white">
      <div className="relative">
        <PulseBeams
          beams={ctaBeams}
          gradientColors={{ start: '#2D5BFF', middle: '#6344F5', end: '#AE48FF' }}
          width={600}
          height={400}
          baseColor="#e2e8f0"
          accentColor="#cbd5e1"
          className="min-h-[600px]"
        >
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 text-sm font-semibold text-primary"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              {badge}
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-display text-4xl font-black leading-tight text-gray-900 md:text-6xl"
            >
              {headline}{' '}
              <span className="bg-gradient-to-r from-primary via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {headlineHighlight}
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl font-body text-lg text-gray-600 md:text-xl"
            >
              {subtitle}
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12 flex flex-wrap justify-center gap-4"
            >
              <a
                href="#early-access"
                className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-indigo-600 px-8 text-lg font-bold text-white shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 active:scale-95"
              >
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  {cta}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="#video"
                className="flex h-14 items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 text-lg font-bold text-gray-700 shadow-lg transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                {secondaryCta}
              </a>
            </motion.div>

            {/* Social Proof */}
            <SocialProof
              rating={socialProof.rating}
              count={socialProof.count}
            />
          </div>
        </PulseBeams>
      </div>
    </div>
  )
}

/* ─── Pain Section ─── */
interface PainProps {
  title: string
  paragraphs: string[]
}

const painCardConfig = [
  {
    icon: <AlertTriangle size={22} />,
    number: '01',
    accent: 'border-l-red-500',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
    glowColor: 'group-hover:shadow-red-500/5',
  },
  {
    icon: <Banknote size={22} />,
    number: '02',
    accent: 'border-l-amber-500',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    glowColor: 'group-hover:shadow-amber-500/5',
  },
  {
    icon: <RotateCcw size={22} />,
    number: '03',
    accent: 'border-l-orange-500',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    glowColor: 'group-hover:shadow-orange-500/5',
  },
]

export function PainSection({ title, paragraphs }: PainProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-red-500/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Left column — Editorial headline */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.08] px-4 py-2 font-body text-sm font-semibold text-red-400"
              >
                <AlertTriangle className="h-4 w-4" />
                The Problem
              </motion.div>

              {/* Title */}
              <h2 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl">
                {title}
              </h2>

              {/* Accent line — animated width */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 h-1 rounded-full bg-gradient-to-r from-red-500 to-amber-500"
              />

              {/* Summary stat — animated counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex items-baseline gap-2"
              >
                <span className="font-display text-5xl font-black text-red-400">
                  $5K
                </span>
                <span className="font-body text-base text-white/50">
                  avg. cost per staging
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column — Pain cards */}
          <div className="flex flex-col gap-5">
            {paragraphs.map((p, i) => {
              const config = painCardConfig[i % painCardConfig.length]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 48, rotateY: -8 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + 0.15 * i,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{
                    scale: 1.02,
                    x: 4,
                    transition: { duration: 0.25 },
                  }}
                  className={`group relative cursor-default rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06] hover:shadow-2xl ${config.glowColor} border-l-[3px] ${config.accent}`}
                >
                  {/* Hover glow effect */}
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Card header */}
                  <div className="mb-4 flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.35 + 0.15 * i,
                      }}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${config.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <span className={config.iconColor}>{config.icon}</span>
                    </motion.div>
                    <span className="font-display text-3xl font-black text-white/30 transition-colors duration-300 group-hover:text-white/50">
                      {config.number}
                    </span>
                  </div>

                  {/* Card body */}
                  <p className="font-body text-[15px] leading-relaxed text-white/75">
                    {p}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

/* ─── Benefits Section (GlareCard edition) ─── */
interface BenefitsProps {
  title: string
  subtitle: string
  items: Array<{ title: string; description: string }>
}

const benefitIcons = [
  { icon: <Cpu size={32} />, gradient: 'from-blue-500 to-cyan-400' },
  { icon: <DollarSign size={32} />, gradient: 'from-emerald-500 to-green-400' },
  { icon: <Palette size={32} />, gradient: 'from-purple-500 to-pink-400' },
]

export function BenefitsSection({ title, subtitle, items }: BenefitsProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-dark)] py-28">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-cta/[0.08] px-4 py-2 font-body text-sm font-semibold text-cta"
          >
            <Sparkles className="h-4 w-4" />
            Why Renderly
          </motion.div>

          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 font-body text-lg text-white/50">{subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {items.map((item, i) => {
            const config = benefitIcons[i % benefitIcons.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="w-full max-w-[260px]"
              >
                <GlareCard
                  className="flex flex-col items-start justify-end bg-gradient-to-br from-cta/90 to-cta/70 p-6"
                  containerClassName="[aspect-ratio:3/4]"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <span className="text-white">{config.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </GlareCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works Section ─── */
interface HowItWorksProps {
  title: string
  subtitle: string
  steps: Array<{ step: string; title: string; description: string }>
}

const stepIcons = [
  { icon: <Zap size={24} />, gradient: 'from-cta to-orange-400' },
  { icon: <Palette size={24} />, gradient: 'from-primary to-indigo-400' },
  { icon: <Sparkles size={24} />, gradient: 'from-emerald-500 to-green-400' },
]

export function HowItWorksSection({
  title,
  subtitle,
  steps,
}: HowItWorksProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-dark)] py-28">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cta/[0.04] blur-[120px]" />

      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="mb-4 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-cta/[0.08] px-4 py-2 font-body text-sm font-semibold text-cta"
              >
                <Zap className="h-4 w-4" />
                Simple Process
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                {title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 font-body text-lg text-white/50"
              >
                {subtitle}
              </motion.p>
            </div>
          }
        >
          {/* Steps inside the scroll card */}
          <div className="grid gap-0 divide-y divide-white/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
            {steps.map((step, i) => {
              const config = stepIcons[i % stepIcons.length]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="group relative p-8 md:p-10 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  {/* Step number — large watermark */}
                  <span className="absolute right-4 top-4 font-display text-7xl font-black text-white transition-colors duration-500 group-hover:text-white/80">
                    {step.step}
                  </span>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.25 + 0.15 * i,
                    }}
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${config.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <span className="text-white">{config.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-2 font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-[15px] leading-relaxed text-white/60">
                    {step.description}
                  </p>

                  {/* Animated accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + 0.15 * i }}
                    className={`mt-5 h-0.5 rounded-full bg-gradient-to-r ${config.gradient}`}
                  />
                </motion.div>
              )
            })}
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}

/* ─── Early Access Section ─── */
interface EarlyAccessProps {
  title: string
  description: string
  discount: string
  form: {
    emailPlaceholder: string
    namePlaceholder: string
    submit: string
    microcopy: string
    success: string
  }
}

export function EarlyAccessSection({
  title,
  description,
  discount,
  form,
}: EarlyAccessProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section
      ref={ref}
      id="early-access"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24"
    >
      <div className="absolute inset-0 dot-grid" />
      <FloatingParticles count={30} />

      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={stagger}
        className="relative z-10 mx-auto max-w-2xl px-6 text-center"
      >
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full border border-cta/30 bg-cta/10 px-4 py-1.5 font-body text-sm font-medium text-cta"
        >
          {discount}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-body text-lg leading-relaxed text-white/70"
        >
          {description}
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative mt-10 overflow-hidden rounded-2xl border border-green-500/20 bg-green-500/[0.08] p-6 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
            <svg
              className="mx-auto mb-3 h-10 w-10 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="font-body text-base text-green-300">{form.success}</p>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="mt-10"
          >
            {/* Liquid glass form container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.05] p-4 backdrop-blur-xl sm:p-2">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={form.emailPlaceholder}
                  className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.05] px-5 py-3.5 font-body text-base text-white placeholder-white/30 outline-none transition-all focus:border-primary/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-primary/20"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="whitespace-nowrap rounded-xl bg-cta px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-cta/20 transition-all hover:bg-cta-hover hover:shadow-xl hover:shadow-cta/30"
                >
                  {form.submit}
                </motion.button>
              </div>
            </div>
            <p className="mt-3 font-body text-sm text-[var(--text-light)]/40">
              {form.microcopy}
            </p>
          </motion.form>
        )}
      </motion.div>
    </section>
  )
}

/* ─── CTA Final Section (Gradient Block) ─── */
interface CtaFinalProps {
  title: string
  subtitle: string
  cta: string
  secondaryCta: string
}

export function CtaFinalSection({
  title,
  subtitle,
  cta,
  secondaryCta,
}: CtaFinalProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-dark)] py-32">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Floating particles */}
      <FloatingParticles count={50} />

      {/* Central glow — large CTA-colored orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cta/[0.06] blur-[160px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-cta/[0.08] px-4 py-2 font-body text-sm font-semibold text-cta"
        >
          <Sparkles className="h-4 w-4" />
          Limited Time Offer
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl"
        >
          {title}
        </motion.h2>

        {/* Accent line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-cta to-primary"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/60 md:text-xl"
        >
          {subtitle}
        </motion.p>

        {/* CTAs with MagneticButton */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <MagneticButton>
            <a
              href="#early-access"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-cta px-10 py-5 font-display text-lg font-black text-white shadow-2xl shadow-cta/30 transition-all hover:shadow-[0_0_60px_rgba(255,107,74,0.4)]"
            >
              {/* Shimmer effect */}
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:200%_100%] opacity-0 transition-opacity duration-500 group-hover:animate-shimmer group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2">
                {cta}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </MagneticButton>

          <MagneticButton distance={0.4}>
            <a
              href="#video"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.05] px-8 py-5 font-display text-lg font-bold text-white backdrop-blur-xl transition-all hover:border-white/25 hover:bg-white/[0.1]"
            >
              {secondaryCta}
            </a>
          </MagneticButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-green-400/60" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-green-400/60" />
            Cancel anytime
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-green-400/60" />
            50% launch discount
          </span>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
interface FooterProps {
  tagline: string
  copyright: string
}

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#video' },
    { label: 'Early Access', href: '#early-access' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Press Kit', href: '/press' },
  ],
  resources: [
    { label: 'Help Center', href: '/help' },
    { label: 'API Documentation', href: '/docs' },
    { label: 'Virtual Staging Guide', href: '/guide' },
    { label: 'Real Estate Tips', href: '/blog/tips' },
    { label: 'Case Studies', href: '/case-studies' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR', href: '/gdpr' },
  ],
}

export function Footer({ tagline, copyright }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[var(--bg-dark)]">
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cta/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Main footer grid */}
        <div className="grid gap-12 py-16 md:grid-cols-6 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <span className="font-display text-xl font-black tracking-tight text-white">
              Renderly
            </span>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-white/50">
              {tagline}
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {['X', 'In', 'YT', 'IG'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] font-display text-xs font-bold text-white/50 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/70">
              Product
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/70">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/70">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/70">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 sm:flex-row">
          <p className="font-body text-sm text-white/30">{copyright}</p>
          <div className="flex items-center gap-6">
            <a
              href="/sitemap.xml"
              className="font-body text-xs text-white/25 transition-colors hover:text-white/50"
            >
              Sitemap
            </a>
            <a
              href="/accessibility"
              className="font-body text-xs text-white/25 transition-colors hover:text-white/50"
            >
              Accessibility
            </a>
            <span className="font-body text-xs text-white/20">
              Made with AI in San Francisco
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
