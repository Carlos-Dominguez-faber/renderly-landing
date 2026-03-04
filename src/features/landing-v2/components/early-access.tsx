'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

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

export function EarlyAccessSection({ title, description, discount, form }: EarlyAccessProps) {
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      ref={ref}
      id="early-access"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cta/[0.05] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-cta/[0.08] px-4 py-2 font-body text-sm font-semibold text-cta">
            <Sparkles className="h-4 w-4" />
            {discount}
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-base text-[var(--text-secondary)]">
            {description}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.08] p-6 text-center"
            >
              <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-emerald-400" />
              <p className="font-body text-base text-emerald-300">{form.success}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder={form.namePlaceholder}
                  required
                  className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 font-body text-sm text-white placeholder-white/30 outline-none transition-all focus:border-cta/40 focus:ring-1 focus:ring-cta/20"
                />
                <input
                  type="email"
                  placeholder={form.emailPlaceholder}
                  required
                  className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 font-body text-sm text-white placeholder-white/30 outline-none transition-all focus:border-cta/40 focus:ring-1 focus:ring-cta/20"
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 font-display text-base font-semibold text-white transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/20 active:scale-[0.98]"
              >
                {form.submit}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center font-body text-xs text-white/30">{form.microcopy}</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
