'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  drift: number
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function FloatingParticles({ count = 40 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: seededRandom(i * 7 + 1) * 100,
        y: seededRandom(i * 13 + 3) * 100,
        size: seededRandom(i * 17 + 5) * 3 + 1,
        duration: seededRandom(i * 23 + 7) * 8 + 6,
        delay: seededRandom(i * 29 + 11) * 5,
        opacity: seededRandom(i * 31 + 13) * 0.3 + 0.05,
        drift: seededRandom(i * 37 + 17) * 20 - 10,
      }))
    )
  }, [count])

  if (particles.length === 0) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.drift, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
