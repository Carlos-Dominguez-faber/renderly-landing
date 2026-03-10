'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Upload, Wand2, Download } from 'lucide-react'

const STEPS = [
  {
    icon: Upload,
    title: 'Upload',
    description: 'Snap a photo of any empty room with your phone.',
  },
  {
    icon: Wand2,
    title: 'AI Stages',
    description: 'Choose a style. Our AI adds photorealistic furniture in seconds.',
  },
  {
    icon: Download,
    title: 'Download',
    description: 'Get MLS-ready images. List faster, sell faster.',
  },
]

export function ConferenceHowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative bg-[var(--bg-dark)] px-6 py-20 md:py-28"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 max-w-2xl text-center"
      >
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Stage Any Room in{' '}
          <span className="bg-gradient-to-r from-[var(--cta)] to-amber-400 bg-clip-text text-transparent">
            30 Seconds
          </span>
        </h2>
      </motion.div>

      {/* Steps grid */}
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {STEPS.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="relative rounded-2xl border border-white/[0.08] bg-[var(--bg-surface)] p-6"
            >
              {/* Step number */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--cta)]/10 text-[var(--cta)]">
                <Icon className="h-5 w-5" />
              </div>

              {/* Step badge */}
              <span className="mb-2 inline-block font-body text-xs font-bold uppercase tracking-wider text-[var(--cta)]">
                Step {i + 1}
              </span>

              <h3 className="mb-2 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
