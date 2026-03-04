'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqTabbedProps {
  title: string
  items: FaqItem[]
}

/* Distribute 7 FAQ items across 3 tabs:
   General: What is virtual staging? (0), How does AI work? (3), Design skills? (6)
   Pricing: How much? (1), vs Traditional? (4)
   Technical: MLS allowed? (2), Sell faster? (5)
*/
const TABS: Array<{ label: string; indices: number[] }> = [
  { label: 'General', indices: [0, 3, 6] },
  { label: 'Pricing', indices: [1, 4] },
  { label: 'Technical', indices: [2, 5] },
]

export function FaqTabbed({ title, items }: FaqTabbedProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [openItem, setOpenItem] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const activeItems = TABS[activeTab].indices.map((idx) => ({
    ...items[idx],
    originalIndex: idx,
  }))

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Left: heading */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 font-body text-[#8B8FA3]">
                Still have questions?
              </p>
              <a
                href="mailto:support@renderly.com"
                className="mt-2 inline-block font-body text-sm font-medium text-cta transition-colors hover:text-cta-hover"
              >
                Contact Us &rarr;
              </a>
            </motion.div>
          </div>

          {/* Right: tabs + accordion */}
          <div className="md:col-span-3">
            {/* Tabs */}
            <div className="mb-6 flex gap-2">
              {TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => {
                    setActiveTab(i)
                    setOpenItem(0)
                  }}
                  className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                    activeTab === i
                      ? 'bg-white/[0.08] text-white'
                      : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="divide-y divide-white/[0.08]">
              {activeItems.map((item, i) => (
                <div key={item.originalIndex}>
                  <button
                    onClick={() =>
                      setOpenItem(openItem === i ? null : i)
                    }
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="pr-4 font-display text-base font-semibold text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-200 ${
                        openItem === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openItem === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 font-body text-sm leading-relaxed text-[#8B8FA3]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
