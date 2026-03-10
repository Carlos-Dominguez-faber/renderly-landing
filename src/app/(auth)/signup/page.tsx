'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

type PlanId = 'free' | 'tier1' | 'tier2' | 'tier3'

const PLAN_CONFIG: Record<PlanId, { name: string; headline: string; highlights: string[] }> = {
  free: {
    name: 'Free',
    headline: 'Start staging for free',
    highlights: ['1 staged image per property', 'Up to 3 regenerations', 'No credit card required'],
  },
  tier1: {
    name: 'Starter ($19.99)',
    headline: 'Great choice \u2014 Starter',
    highlights: ['3 staged images per property', '1 property tour (8s 1080p)', 'Unlimited regenerations'],
  },
  tier2: {
    name: 'Professional ($29.99)',
    headline: 'You picked our most popular plan',
    highlights: ['9 staged images per property', '1 property tour (24s 1080p)', 'Custom branding & logo'],
  },
  tier3: {
    name: 'Enterprise ($75/mo)',
    headline: 'Go unlimited with Enterprise',
    highlights: ['Unlimited properties', 'Priority support', 'White-label solution', '4K property tours'],
  },
}

function SignupContent() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get('plan') as PlanId | null
  const plan = planParam && PLAN_CONFIG[planParam] ? PLAN_CONFIG[planParam] : null

  useEffect(() => {
    if (planParam && PLAN_CONFIG[planParam as PlanId]) {
      localStorage.setItem('selected_plan', planParam)
    }
  }, [planParam])

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-dark)]">
      {/* Top bar */}
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Renderly" className="h-7 w-7" />
            <span className="font-display text-lg font-bold tracking-tight text-white">Renderly</span>
          </Link>
          <Link
            href="/"
            className="group flex items-center gap-1.5 font-body text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md space-y-8">
          {/* Plan-aware heading */}
          <div className="text-center">
            {plan && (
              <span className="mb-3 inline-block rounded-full border border-[var(--cta)]/20 bg-[var(--cta)]/[0.06] px-4 py-1.5 font-body text-sm font-semibold text-[var(--cta)]">
                {plan.name}
              </span>
            )}
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {plan ? plan.headline : 'Transform Empty Rooms Into Stunning Spaces'}
            </h1>
            <p className="mt-3 font-body text-base text-white/50">
              Create your account to get started
            </p>
          </div>

          {/* Plan highlights */}
          {plan && (
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-wider text-white/30">
                Your plan includes
              </p>
              <ul className="space-y-2">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="font-body text-sm text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Signup form placeholder */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
            <p className="text-center font-body text-sm text-white/40">
              Signup form will be implemented here via features/auth/components/
            </p>
          </div>

          {/* Login link */}
          <p className="text-center font-body text-sm text-white/40">
            Already have an account?{' '}
            <Link href="/login" className="text-white underline underline-offset-2 transition-colors hover:text-[var(--cta)]">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-dark)]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
      </div>
    }>
      <SignupContent />
    </Suspense>
  )
}
