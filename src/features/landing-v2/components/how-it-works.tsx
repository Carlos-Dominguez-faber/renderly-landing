'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Upload, Palette, Download } from 'lucide-react'

interface Step {
  step: string
  title: string
  description: string
}

interface HowItWorksProps {
  title: string
  subtitle: string
  steps: Step[]
}

const STEP_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80&auto=format&fit=crop',
]

const STEP_ICONS = [Upload, Palette, Download]

export function HowItWorksSection({ title, subtitle, steps }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-base text-[var(--text-secondary)]">
            {subtitle}
          </p>
        </motion.div>

        {/* Mobile: horizontal pills */}
        <div className="mb-8 flex gap-2 overflow-x-auto no-scrollbar md:hidden">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-body text-sm font-medium transition-all ${
                activeStep === i
                  ? 'bg-cta text-white'
                  : 'bg-white/[0.06] text-white/50 hover:bg-white/[0.1]'
              }`}
            >
              <span className="font-display text-xs font-bold">{step.step}</span>
              {step.title}
            </button>
          ))}
        </div>

        {/* Desktop: 2-column layout */}
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          {/* Left: tab list (desktop) */}
          <div className="hidden flex-col gap-2 md:col-span-2 md:flex">
            {steps.map((step, i) => {
              const Icon = STEP_ICONS[i] || Upload
              return (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  onClick={() => setActiveStep(i)}
                  className={`group relative rounded-xl p-5 text-left transition-all duration-300 ${
                    activeStep === i
                      ? 'bg-white/[0.06] border border-white/[0.1]'
                      : 'hover:bg-white/[0.03]'
                  }`}
                >
                  {/* Active indicator */}
                  {activeStep === i && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-cta"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      activeStep === i ? 'bg-cta/20 text-cta' : 'bg-white/[0.06] text-white/40'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className={`font-body text-xs font-semibold uppercase tracking-wider transition-colors ${
                        activeStep === i ? 'text-cta' : 'text-white/30'
                      }`}>
                        Step {step.step}
                      </span>
                      <h3 className={`mt-1 font-display text-lg font-bold transition-colors ${
                        activeStep === i ? 'text-white' : 'text-white/50'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`mt-1 font-body text-sm leading-relaxed transition-colors ${
                        activeStep === i ? 'text-[var(--text-secondary)]' : 'text-white/30'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Right: content panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[var(--bg-surface)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={STEP_IMAGES[activeStep] || STEP_IMAGES[0]}
                    alt={steps[activeStep]?.title || 'Step'}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Mobile step info */}
              <div className="p-5 md:hidden">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-cta">
                  Step {steps[activeStep]?.step}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-white">
                  {steps[activeStep]?.title}
                </h3>
                <p className="mt-2 font-body text-sm text-[var(--text-secondary)]">
                  {steps[activeStep]?.description}
                </p>
              </div>
            </div>

            {/* Progress dots — mobile */}
            <div className="mt-4 flex justify-center gap-2 md:hidden">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeStep === i ? 'w-8 bg-cta' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
