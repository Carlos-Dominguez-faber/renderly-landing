import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#08090D',
        light: '#FAFBFC',
        subtle: '#F3F4F6',
        background: '#08090D',
        foreground: '#ffffff',
        primary: {
          DEFAULT: '#2D5BFF',
          light: '#4D73FF',
          dark: '#1A3FCC',
          foreground: '#ffffff',
        },
        cta: {
          DEFAULT: '#FF6B4A',
          hover: '#FF5533',
        },
        muted: {
          DEFAULT: '#6C7281',
          foreground: 'rgba(255,255,255,0.5)',
        },
        secondary: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          foreground: 'rgba(255,255,255,0.7)',
        },
        accent: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        input: 'rgba(255,255,255,0.1)',
        ring: '#2D5BFF',
      },
      fontFamily: {
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
