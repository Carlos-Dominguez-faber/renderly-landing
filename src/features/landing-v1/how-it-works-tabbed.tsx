'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

interface Step {
  step: string
  title: string
  description: string
}

interface HowItWorksTabbedProps {
  title: string
  subtitle: string
  steps: Step[]
}

const STEP_IMAGES = [
  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop',
]

export function HowItWorksTabbed({
  title,
  subtitle,
  steps,
}: HowItWorksTabbedProps) {
  const [activeTab, setActiveTab] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 font-body text-lg text-[#8B8FA3]">{subtitle}</p>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid items-start gap-12 md:grid-cols-5">
          {/* Left: tab list (40%) */}
          <div className="space-y-2 md:col-span-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`w-full rounded-xl p-5 text-left transition-all ${
                  activeTab === i
                    ? 'border-l-2 border-cta bg-white/[0.03]'
                    : 'border-l-2 border-transparent hover:bg-white/[0.02]'
                }`}
              >
                <span
                  className={`font-body text-xs font-semibold uppercase tracking-wider ${
                    activeTab === i ? 'text-cta' : 'text-[#5A5E73]'
                  }`}
                >
                  Step {step.step}
                </span>
                <h3
                  className={`mt-1 font-display text-lg font-semibold ${
                    activeTab === i ? 'text-white' : 'text-white/40'
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-1 font-body text-sm leading-relaxed ${
                    activeTab === i ? 'text-[#8B8FA3]' : 'text-white/20'
                  }`}
                >
                  {step.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right: screenshot (60%) */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl border border-white/[0.08]"
              >
                <img
                  src={STEP_IMAGES[activeTab % STEP_IMAGES.length]}
                  alt={steps[activeTab].title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
