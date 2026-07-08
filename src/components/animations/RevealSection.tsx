import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  REVEAL_EASE,
  REVEAL_SECTION_TRANSITION,
  REVEAL_SECTION_VIEWPORT,
} from '../../lib/motion'

interface Props {
  children: ReactNode
  className?: string
  /** Extra upward offset the content travels from. Default 48px. */
  distance?: number
  /** Delay in seconds before the reveal starts. Default 0. */
  delay?: number
}

export default function RevealSection({
  children,
  className,
  distance = 48,
  delay = 0,
}: Props) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={
        prefersReduced
          ? false
          : { opacity: 0, y: distance, clipPath: `inset(${distance}px 0 0 0)` }
      }
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0px 0 0 0)' }}
      viewport={REVEAL_SECTION_VIEWPORT}
      transition={{
        ...REVEAL_SECTION_TRANSITION,
        delay,
        ease: REVEAL_EASE,
      }}
    >
      {children}
    </motion.div>
  )
}
