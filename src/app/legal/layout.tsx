import Link from 'next/link'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg-dark)] flex flex-col">
      {/* Top navbar */}
      <header className="border-b border-white/[0.06] bg-[var(--bg-dark)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
          >
            Renderly
          </Link>
          <Link
            href="/"
            className="font-body text-sm text-[var(--text-secondary)] transition-colors hover:text-white"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-white/[0.06] bg-[var(--bg-dark)]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
          <p className="font-body text-sm text-[var(--text-muted)]">
            &copy; 2026 Renderly. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link
              href="/legal/privacy-policy"
              className="font-body text-sm text-[var(--text-muted)] transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="font-body text-sm text-[var(--text-muted)] transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
