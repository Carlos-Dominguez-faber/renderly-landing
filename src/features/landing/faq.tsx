'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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

interface FaqSectionProps {
  title: string
  items: Array<{ question: string; answer: string }>
}

export function FaqSection({ title, items }: FaqSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="faq"
      ref={ref}
      className="relative overflow-hidden bg-[var(--bg-dark)] py-28"
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cta/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Left column — headline */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-cta/[0.08] px-4 py-2 font-body text-sm font-semibold text-cta"
              >
                <HelpCircle className="h-4 w-4" />
                FAQ
              </motion.div>

              <h2 className="font-display text-4xl font-black tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-4 font-body text-base text-white/50">
                Everything you need to know about Renderly
              </p>

              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 h-1 rounded-full bg-gradient-to-r from-cta to-primary"
              />
            </motion.div>
          </div>

          {/* Right column — accordion */}
          <div className="md:col-span-3">
            {isInView && (
              <Accordion type="single" collapsible defaultValue="item-0">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * index }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-b border-white/[0.08]"
                    >
                      <AccordionTrigger className="cursor-pointer py-5 text-left font-display text-base font-semibold text-white hover:text-white/80 hover:no-underline [&[data-state=open]>svg]:text-cta">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <BlurredStagger text={item.answer} />
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
