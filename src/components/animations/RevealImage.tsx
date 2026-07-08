/**
 * RevealImage — wipes an image upward into view using clip-path.
 */
import { motion, type HTMLMotionProps, useReducedMotion } from 'framer-motion'
import {
  REVEAL_EASE,
  REVEAL_IMAGE_TRANSITION,
  REVEAL_VIEWPORT,
} from '../../lib/motion'

interface Props extends HTMLMotionProps<'img'> {
  src: string
  alt: string
  delay?: number
}

export default function RevealImage({ delay = 0, className, ...props }: Props) {
  const reduced = useReducedMotion()

  return (
    <motion.img
      {...props}
      className={className}
      initial={reduced ? false : { clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={REVEAL_VIEWPORT}
      transition={{ ...REVEAL_IMAGE_TRANSITION, delay, ease: REVEAL_EASE }}
    />
  )
}
