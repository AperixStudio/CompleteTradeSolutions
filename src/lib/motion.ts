export const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Start reveals before elements reach the viewport edge. */
export const REVEAL_VIEWPORT = {
  once: false,
  amount: 0,
  margin: '0px 0px 25% 0px',
} as const

export const REVEAL_SECTION_VIEWPORT = {
  once: true,
  amount: 0,
  margin: '0px 0px 20% 0px',
} as const

export const REVEAL_LINE_TRANSITION = {
  duration: 0.5,
  ease: REVEAL_EASE,
} as const

export const REVEAL_IMAGE_TRANSITION = {
  duration: 0.65,
  ease: REVEAL_EASE,
} as const

export const REVEAL_SECTION_TRANSITION = {
  duration: 0.5,
  ease: REVEAL_EASE,
} as const
