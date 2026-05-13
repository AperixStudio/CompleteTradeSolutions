/**
 * RevealLine — wraps children in an overflow:hidden mask.
 * The inner content slides up from y:100% when it enters the viewport.
 * This is the exact technique used on chkstepan.com.
 */
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode, ElementType } from 'react'

const MOTION_TAGS = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
} as const

type MotionTag = keyof typeof MOTION_TAGS

interface Props {
  children: ReactNode
  /** Extra delay in seconds (use for staggering sibling lines). Default 0. */
  delay?: number
  /** Tailwind / CSS classes applied to the outer mask wrapper. */
  className?: string
  /** Tailwind / CSS classes applied to the inner moving element. */
  innerClassName?: string
  /** Tag for the outer mask element. Default 'div'. */
  as?: ElementType
  /** Tag for the inner moving element. Defaults to 'span' for text tags and 'div' otherwise. */
  innerAs?: MotionTag
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function getDefaultInnerTag(tag: ElementType): MotionTag {
  if (
    typeof tag === 'string'
    && ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
  ) {
    return 'span'
  }

  return 'div'
}

export default function RevealLine({
  children,
  delay = 0,
  className = '',
  innerClassName = '',
  as: Outer = 'div',
  innerAs,
}: Props) {
  const reduced = useReducedMotion()
  const MotionInner = MOTION_TAGS[innerAs ?? getDefaultInnerTag(Outer)]

  return (
    <Outer className={className}>
      <MotionInner
        style={{ display: 'block' }}
        className={innerClassName}
        initial={reduced ? { y: '0%' } : { y: '105%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: false, amount: 0.12, margin: '0px 0px -12% 0px' }}
        transition={{ duration: 0.72, delay, ease: EASE }}
      >
        {children}
      </MotionInner>
    </Outer>
  )
}
