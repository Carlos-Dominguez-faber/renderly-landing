'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MessageCircle, Bot } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

interface NewFaqSectionProps {
  title: string
  items: FaqItem[]
}

function ChatMessage({ item, index, isVisible }: { item: FaqItem; index: number; isVisible: boolean }) {
  const [showAnswer, setShowAnswer] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="space-y-3">
      {/* User question — right aligned */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        onAnimationComplete={() => setShowAnswer(true)}
        className="flex justify-end"
      >
        <div className="max-w-md rounded-2xl rounded-br-md bg-[var(--cta)]/10 px-5 py-3 backdrop-blur-sm">
          <p className="font-display text-sm font-semibold text-white/80">
            {item.question}
          </p>
        </div>
      </motion.div>

      {/* Renderly answer — left aligned */}
      <AnimatePresence>
        {showAnswer && isInView && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex gap-3"
          >
            {/* Bot avatar */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
              <Bot className="h-4 w-4 text-[var(--primary)]" />
            </div>

            <div className="max-w-lg rounded-2xl rounded-bl-md border border-white/[0.06] bg-[#12131F] px-5 py-3">
              <p className="font-body text-sm leading-relaxed text-white/60">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function NewFaqSection({ title, items }: NewFaqSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="faq"
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-body text-sm font-medium text-white/50">
            <MessageCircle className="h-4 w-4" />
            FAQ
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </motion.div>

        {/* Chat conversation */}
        <div className="space-y-8">
          {items.map((item, i) => (
            <ChatMessage key={i} item={item} index={i} isVisible={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
