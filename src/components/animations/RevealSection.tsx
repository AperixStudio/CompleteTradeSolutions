import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  /** Extra upward offset the content travels from. Default 48px. */
  distance?: number
  /** Delay in seconds before the reveal starts. Default 0. */
  delay?: number
  /** How much of the element must be visible before triggering. Default 0.12. */
  threshold?: number
}

export default function RevealSection({
  children,
  className,
  distance = 48,
  delay = 0,
  threshold = 0.12,
}: Props) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: distance, clipPath: `inset(${distance}px 0 0 0)` }}
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0px 0 0 0)' }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
