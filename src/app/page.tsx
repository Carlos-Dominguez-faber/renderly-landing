import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[var(--bg-dark)] p-8">
      <h1 className="font-display text-4xl font-bold text-white">
        Renderly — Landing Page Variants
      </h1>
      <p className="text-lg text-white/60">
        Select a variant to preview
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          href="/original"
          className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-white transition-all hover:bg-white/10"
        >
          Original
        </Link>
        <Link
          href="/v1"
          className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-white transition-all hover:bg-white/10"
        >
          V1 — Literal
        </Link>
        <Link
          href="/v2"
          className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-white transition-all hover:bg-white/10"
        >
          V2 — Creativo
        </Link>
        <Link
          href="/v3"
          className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-white transition-all hover:bg-white/10"
        >
          V3 — Disruptivo
        </Link>
        <Link
          href="/final"
          className="rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-8 py-4 text-white transition-all hover:bg-[var(--primary)]/20"
        >
          Final — Cherry Pick
        </Link>
      </div>
    </main>
  )
}
