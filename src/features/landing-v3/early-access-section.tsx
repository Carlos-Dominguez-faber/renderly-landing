'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="early-access"
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--cta)]/[0.05] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {/* Discount badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--cta)]/20 bg-[var(--cta)]/[0.06] px-5 py-2"
        >
          <Sparkles className="h-4 w-4 text-[var(--cta)]" />
          <span className="font-body text-sm font-semibold text-[var(--cta)]">{discount}</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-body text-lg leading-relaxed text-white/50"
        >
          {description}
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-3">
              <input
                type="text"
                placeholder={form.namePlaceholder}
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-3 font-body text-sm text-white placeholder:text-white/30 focus:border-[var(--cta)]/30 focus:outline-none"
              />
              <input
                type="email"
                placeholder={form.emailPlaceholder}
                required
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-3 font-body text-sm text-white placeholder:text-white/30 focus:border-[var(--cta)]/30 focus:outline-none"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--cta)] px-6 py-3.5 font-display text-base font-bold text-white shadow-lg shadow-[var(--cta)]/20 transition-all hover:shadow-xl hover:shadow-[var(--cta)]/30 active:scale-[0.98]"
              >
                {form.submit}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="font-body text-xs text-white/30">{form.microcopy}</p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-md rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-8"
            >
              <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-emerald-400" />
              <p className="font-body text-base leading-relaxed text-emerald-300/80">
                {form.success}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
