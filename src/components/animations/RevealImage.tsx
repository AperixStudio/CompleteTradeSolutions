/**
 * RevealImage — wipes an image upward into view using clip-path.
 * Matches the inset(100% 0px 0px) → inset(0% 0px 0px) effect on chkstepan.com.
 */
import { motion, type HTMLMotionProps, useReducedMotion } from 'framer-motion'

interface Props extends HTMLMotionProps<'img'> {
  src: string
  alt: string
  delay?: number
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function RevealImage({ delay = 0, className, ...props }: Props) {
  const reduced = useReducedMotion()

  return (
    <motion.img
      {...props}
      className={className}
      initial={reduced ? false : { clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    />
  )
}
