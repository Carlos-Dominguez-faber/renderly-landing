'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle2, ArrowLeft, ChevronDown } from 'lucide-react'
import Link from 'next/link'

/* ─── Types ─── */

type EnquiryType =
  | ''
  | 'general'
  | 'pricing'
  | 'partnership'
  | 'technical'
  | 'feature'

interface FormState {
  fullName: string
  email: string
  enquiryType: EnquiryType
  message: string
}

const ENQUIRY_OPTIONS: { value: EnquiryType; label: string }[] = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'pricing', label: 'Pricing Question' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'feature', label: 'Feature Request' },
]

const INITIAL_FORM: FormState = {
  fullName: '',
  email: '',
  enquiryType: '',
  message: '',
}

/* ─── Minimal Contact Navbar ─── */

function ContactNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed left-1/2 top-3 z-50 w-[90%] max-w-5xl -translate-x-1/2">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`
          relative overflow-hidden rounded-2xl border transition-all duration-500
          ${
            scrolled
              ? 'border-white/30 bg-white/65 shadow-xl shadow-black/[0.08] backdrop-blur-2xl backdrop-saturate-[1.8]'
              : 'border-white/[0.1] bg-white/[0.06] shadow-lg shadow-black/10 backdrop-blur-xl backdrop-saturate-150'
          }
        `}
      >
        {/* Inner highlight line */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-px transition-colors duration-500 ${
            scrolled
              ? 'bg-gradient-to-r from-transparent via-white/60 to-transparent'
              : 'bg-gradient-to-r from-transparent via-white/15 to-transparent'
          }`}
        />

        <div className="relative flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            className={`font-display text-lg font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-[var(--text-dark)]' : 'text-white'
            }`}
          >
            Renderly
          </Link>

          {/* Back to Home */}
          <Link
            href="/"
            className={`group flex items-center gap-1.5 font-body text-sm font-medium transition-colors ${
              scrolled
                ? 'text-[var(--text-muted)] hover:text-[var(--text-dark)]'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </Link>
        </div>
      </motion.nav>
    </div>
  )
}

/* ─── Input field styles (shared) ─── */

const inputClass =
  'w-full rounded-xl border border-white/[0.08] bg-[var(--bg-surface-alt)] px-4 py-3 font-body text-sm text-white placeholder:text-[var(--text-muted)] focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200'

/* ─── Success State ─── */

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-4 py-10 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
        <CheckCircle2 className="h-8 w-8 text-emerald-400" />
      </div>
      <div>
        <h3 className="font-display text-xl font-bold text-white">
          Thank you!
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-[var(--text-secondary)]">
          Your message has been received. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
      <Link
        href="/"
        className="mt-2 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[var(--bg-surface-alt)] px-5 py-2.5 font-body text-sm text-white/70 transition-all hover:border-white/[0.15] hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Home
      </Link>
    </motion.div>
  )
}

/* ─── Contact Form ─── */

function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}

    if (!form.fullName.trim()) {
      next.fullName = 'Full name is required.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
      next.email = 'Email address is required.'
    } else if (!emailRegex.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }

    if (!form.enquiryType) {
      next.enquiryType = 'Please select an enquiry type.'
    }

    if (!form.message.trim()) {
      next.message = 'Message is required.'
    } else if (form.message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters.'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  if (submitted) {
    return <SuccessState />
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Full Name */}
      <div className="space-y-1.5">
        <label
          htmlFor="fullName"
          className="block font-body text-sm font-medium text-white/80"
        >
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          value={form.fullName}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          className={`${inputClass} ${errors.fullName ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
        />
        {errors.fullName && (
          <p id="fullName-error" role="alert" className="font-body text-xs text-red-400">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email Address */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block font-body text-sm font-medium text-white/80"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`${inputClass} ${errors.email ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="font-body text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Enquiry Type */}
      <div className="space-y-1.5">
        <label
          htmlFor="enquiryType"
          className="block font-body text-sm font-medium text-white/80"
        >
          Enquiry Type
        </label>
        <div className="relative">
          <select
            id="enquiryType"
            name="enquiryType"
            value={form.enquiryType}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
            className={`${inputClass} appearance-none pr-10 ${
              form.enquiryType ? 'text-white' : 'text-[var(--text-muted)]'
            } ${errors.enquiryType ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
          >
            <option value="" disabled className="bg-[var(--bg-surface-alt)] text-[var(--text-muted)]">
              Select an enquiry type
            </option>
            {ENQUIRY_OPTIONS.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-[var(--bg-surface-alt)] text-white"
              >
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
            aria-hidden="true"
          />
        </div>
        {errors.enquiryType && (
          <p id="enquiryType-error" role="alert" className="font-body text-xs text-red-400">
            {errors.enquiryType}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block font-body text-sm font-medium text-white/80"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us how we can help..."
          value={form.message}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputClass} resize-none leading-relaxed ${errors.message ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="font-body text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 font-display text-sm font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/20 active:scale-[0.98]"
      >
        Send Message
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </button>
    </form>
  )
}

/* ─── Minimal Footer ─── */

function ContactFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-dark)] py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-body text-xs text-white/30">
          &copy; {new Date().getFullYear()} Renderly. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/legal/privacy-policy"
            className="font-body text-xs text-white/30 transition-colors hover:text-white/50"
          >
            Privacy Policy
          </Link>
          <Link
            href="/legal/terms-of-service"
            className="font-body text-xs text-white/30 transition-colors hover:text-white/50"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

/* ─── Contact Page ─── */

export function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-dark)]">
      <ContactNavbar />

      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-64 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[140px]" />
        <div className="absolute -right-64 top-1/2 h-[400px] w-[400px] rounded-full bg-cta/[0.04] blur-[120px]" />
        <div className="absolute inset-0 dot-grid" />
      </div>

      {/* Main content */}
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 pb-16 pt-32 sm:pt-36">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            How can we help?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-lg font-body text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            Have a question, idea, or just want to say hello? Drop us a line and we&apos;ll get
            back to you shortly.
          </motion.p>

          {/* Direct email */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex justify-center"
          >
            <a
              href="mailto:hello@renderly.com"
              className="group flex items-center gap-2 font-body text-sm text-[var(--text-secondary)] transition-colors hover:text-white"
              aria-label="Email us at hello@renderly.com"
            >
              <Mail
                className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-white"
                aria-hidden="true"
              />
              hello@renderly.com
            </a>
          </motion.div>
        </div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto w-full max-w-2xl"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-[var(--bg-surface)] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <ContactForm />
          </div>

          {/* Response time note */}
          <p className="mt-5 text-center font-body text-xs text-[var(--text-muted)]">
            We typically respond within a few hours during business days.
          </p>
        </motion.div>
      </main>

      <ContactFooter />
    </div>
  )
}
