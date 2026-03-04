'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { HelpCircle, ChevronDown, MessageCircle, DollarSign, Cpu } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  title: string
  items: FaqItem[]
  badge: string
  subtitle: string
  contactCta: string
  tabs: Array<{ id: string; label: string }>
}

const TAB_ICONS: Record<string, typeof HelpCircle> = {
  general: HelpCircle,
  pricing: DollarSign,
  technical: Cpu,
}

function BlurredStagger({ text }: { text: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.012 },
    },
  }

  const letterAnimation = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    show: { opacity: 1, filter: 'blur(0px)' },
  }

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="show"
      className="text-base leading-relaxed break-words whitespace-normal text-white/60"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.p>
  )
}

export function FaqSection({ title, items, badge, subtitle, contactCta, tabs }: FaqSectionProps) {
  const [activeTab, setActiveTab] = useState('general')
  const [openItem, setOpenItem] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  // Distribute items across tabs
  const tabItems: Record<string, FaqItem[]> = {
    general: items.slice(0, 3),
    pricing: items.slice(3, 5),
    technical: items.slice(5),
  }

  const currentItems = tabItems[activeTab] || []

  return (
    <section
      ref={ref}
      id="faq"
      className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32"
    >
      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Left column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 font-body text-sm font-medium text-white/60">
                <HelpCircle className="h-4 w-4 text-cta" />
                {badge}
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 font-body text-base text-[var(--text-secondary)]">
                {subtitle}
              </p>

              {/* Contact link */}
              <a
                href="mailto:hello@renderly.com"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-cta transition-colors hover:text-cta-hover"
              >
                <MessageCircle className="h-4 w-4" />
                {contactCta}
              </a>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="md:col-span-3">
            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 flex gap-2"
            >
              {tabs.map((tab) => {
                const Icon = TAB_ICONS[tab.id] || HelpCircle
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id)
                      setOpenItem(0)
                    }}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 font-body text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-white/[0.1] text-white'
                        : 'text-white/40 hover:bg-white/[0.04] hover:text-white/60'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                )
              })}
            </motion.div>

            {/* Accordion */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {currentItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="border-b border-white/[0.06]"
                  >
                    <button
                      onClick={() => setOpenItem(openItem === i ? null : i)}
                      className="flex w-full items-center justify-between py-5 text-left"
                    >
                      <span className="font-display text-base font-semibold text-white pr-4">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openItem === i ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-colors ${
                            openItem === i ? 'text-cta' : 'text-white/30'
                          }`}
                        />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openItem === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pb-5">
                            <BlurredStagger text={item.answer} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
