'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Camera, Paintbrush, Download } from 'lucide-react'

interface Step {
  step: string
  title: string
  description: string
}

interface HowItWorksSectionProps {
  title: string
  subtitle: string
  steps: Step[]
}

const stepIcons = [Camera, Paintbrush, Download]

export function HowItWorksSection({ title, subtitle, steps }: HowItWorksSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/[0.03] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 font-body text-lg text-white/50">{subtitle}</p>
        </motion.div>

        {/* Steps — vertical flow with large step numbers */}
        <div className="relative">
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-8 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-[var(--cta)]/40 via-[var(--primary)]/30 to-transparent md:left-16 md:block"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length]

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                  className="relative flex gap-8 md:gap-16"
                >
                  {/* Step number — oversized decorative */}
                  <div className="relative flex shrink-0 flex-col items-center">
                    {/* Circle node on the line */}
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#12131F] md:h-32 md:w-32 md:rounded-3xl">
                      <span className="font-display text-2xl font-black text-white/20 md:text-6xl">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 md:pt-8">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--cta)]/10">
                        <Icon className="h-4 w-4 text-[var(--cta)]" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="max-w-md font-body text-base leading-relaxed text-white/50 md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
