import Image from 'next/image'

export function ConferenceFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-dark)] px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        {/* Logo */}
        <a
          href="https://renderly.space"
          className="flex items-center gap-2"
        >
          <Image src="/logo.svg" alt="Renderly" width={28} height={28} />
          <span className="font-display text-lg font-bold text-white">
            Renderly
          </span>
        </a>

        <p className="font-body text-sm text-[var(--text-secondary)]">
          AI virtual staging for real estate
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://renderly.space"
            className="font-body text-sm text-white/50 transition-colors hover:text-white"
          >
            renderly.space
          </a>
          <a
            href="https://renderly.space/legal/privacy-policy"
            className="font-body text-sm text-white/50 transition-colors hover:text-white"
          >
            Privacy
          </a>
          <a
            href="https://renderly.space/legal/terms-of-service"
            className="font-body text-sm text-white/50 transition-colors hover:text-white"
          >
            Terms
          </a>
        </div>

        <p className="font-body text-xs text-white/30">
          &copy; 2026 Renderly. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
