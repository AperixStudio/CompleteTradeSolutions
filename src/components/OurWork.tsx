import { AnimatePresence, LayoutGroup, motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import RevealLine from './animations/RevealLine'

// ─── Add your photos here in order ───────────────────────────────────────────
import windowBnA from '../assets/CarouselPhotos/Window-BnA.jpeg'
import LandscapeDirt from '../assets/CarouselPhotos/LandscapeDirt.jpeg'
import LandscapeGrass from '../assets/CarouselPhotos/LandscapeGras.jpeg'
import OldShopFloor from '../assets/CarouselPhotos/OldShopFloor.jpeg'
import OldShopFloorAlso from '../assets/CarouselPhotos/OldShopFloorAlso.jpeg'
import NewShopFloor from '../assets/CarouselPhotos/NewShopFloor.jpeg'
import NewShop from '../assets/CarouselPhotos/NewShop.jpeg'
import OldShopNewRoof from '../assets/CarouselPhotos/OldShopNewRoof.jpeg'
import OldPlaceBeforeAlso from '../assets/CarouselPhotos/OldPlaceBeforeAlso.jpeg'
import OldPlaceBefore from '../assets/CarouselPhotos/OldPlaceBefore.jpeg'
import FenceBefore from '../assets/CarouselPhotos/NewFence.jpeg'
import FenceAfter from '../assets/CarouselPhotos/FenceAfter.jpeg'
// If you don't have photos ready, you can use placeholders like this:
// const photos = Array.from({ length: 12 }, (_, i) => ({ src: '' }))


// Import each photo at the top, then set src: photoVariable below.
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61577631743905&mibextid=wwXIfr' // ← update if needed

const photos: { src: string; href?: string; isFacebook?: boolean }[] = [
  { src: windowBnA },
  { src: LandscapeDirt},
  { src: LandscapeGrass },
  { src: OldShopFloor },
  { src: OldShopFloorAlso },
  { src: NewShopFloor },
  { src: NewShop },
  { src: OldShopNewRoof },
  { src: OldPlaceBeforeAlso },
  { src: OldPlaceBefore },
  { src: FenceBefore },
  { src: FenceAfter },
  { src: '', href: FACEBOOK_URL, isFacebook: true },
]
// ─────────────────────────────────────────────────────────────────────────────

const CARD_W   = 340  // px — card width
const CARD_GAP = 16   // px — gap between cards
const STEP     = CARD_W + CARD_GAP
const SPEED    = 0.5  // px per frame — scroll speed

// Duplicate for seamless loop
const looped = [...photos, ...photos]

const SPRING = { type: 'spring' as const, stiffness: 280, damping: 28 }

export default function OurWork() {
  // selectedLoopId = the exact layoutId of the clicked card ("loop-3", "loop-15", etc.)
  // selectedReal   = the real photo index (0–11) for prev/next navigation
  const [selectedLoopId, setSelectedLoopId] = useState<string | null>(null)
  const [selectedReal,   setSelectedReal]   = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  const x      = useMotionValue(0)
  const totalW = useRef(STEP * photos.length)

  const isDragging   = useRef(false)
  const dragStartX   = useRef(0)
  const dragStartVal = useRef(0)

  const open = useCallback((loopId: string, realIndex: number) => {
    setSelectedLoopId(loopId)
    setSelectedReal(realIndex)
  }, [])

  const close = useCallback(() => {
    setSelectedLoopId(null)
    setSelectedReal(null)
  }, [])

  // When navigating prev/next clear the loopId so the lightbox stays open
  // with a simple fade rather than morphing back to a carousel card
  const prev = useCallback(() => {
    setSelectedLoopId(null)
    setSelectedReal((s) => s === null ? null : (s - 1 + photos.length) % photos.length)
  }, [])

  const next = useCallback(() => {
    setSelectedLoopId(null)
    setSelectedReal((s) => s === null ? null : (s + 1) % photos.length)
  }, [])

  // Infinite auto-scroll — pauses while lightbox is open
  useAnimationFrame(() => {
    if (paused || selectedReal !== null) return
    let nx = x.get() - SPEED
    if (Math.abs(nx) >= totalW.current) nx = 0
    x.set(nx)
  })

  useEffect(() => {
    if (selectedReal === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedReal, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = selectedReal !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedReal])

  const item = selectedReal !== null ? photos[selectedReal] : null

  return (
    <LayoutGroup>
    <section id="work" className="overflow-hidden bg-(--color-background) py-20">
      {/* Heading */}
      <div className="section-shell mb-12">
        <RevealLine
          as="p"
          className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)"
        >
          Our Work
        </RevealLine>
        <RevealLine
          as="h2"
          delay={0.08}
          className="mt-3 text-4xl font-black leading-tight text-(--color-primary) lg:text-5xl"
        >
          Projects we're proud of.
        </RevealLine>
      </div>

      {/* Carousel strip — bleeds edge to edge */}
      <div
        className="relative w-full cursor-grab overflow-hidden active:cursor-grabbing touch-pan-y"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); isDragging.current = false }}
        onPointerDown={(e) => {
          isDragging.current = false
          dragStartX.current   = e.clientX
          dragStartVal.current = x.get()
          setPaused(true)
        }}
        onPointerMove={(e) => {
          if (!(e.buttons & 1)) return
          const delta = e.clientX - dragStartX.current
          if (Math.abs(delta) > 4) isDragging.current = true
          let nx = dragStartVal.current + delta
          // Keep within the doubled-array bounds so the seam stays correct
          const max = totalW.current
          if (nx > 0)    nx = nx - max
          if (nx < -max) nx = nx + max
          x.set(nx)
        }}
        onPointerUp={() => { setPaused(false) }}
      >
        <motion.div
          className="flex"
          style={{ x, gap: CARD_GAP, willChange: 'transform' }}
        >
          {looped.map((p, i) => {
            const realIndex = i % photos.length
            const loopId    = `loop-${i}`
            return (
              <motion.button
                key={i}
                layoutId={p.isFacebook ? undefined : loopId}
                onClick={() => {
                  if (isDragging.current) return
                  if (p.isFacebook && p.href) { window.open(p.href, '_blank', 'noopener,noreferrer'); return }
                  open(loopId, realIndex)
                }}
                onDragStart={(e) => e.preventDefault()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING}
                style={{ width: CARD_W, flexShrink: 0 }}
                className="group relative aspect-4/3 overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
              >
                {p.isFacebook ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#1877F2] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                    <p className="px-6 text-center text-base font-bold leading-snug">
                      Check out more of our work on Facebook
                    </p>
                  </div>
                ) : p.src ? (
                  <img src={p.src} alt={`Project ${realIndex + 1}`} draggable={false} className="absolute inset-0 h-full w-full object-cover select-none" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#dcdcda] to-[#c4c4c2]">
                    <span className="text-4xl font-black text-(--color-muted)/30">{realIndex + 1}</span>
                  </div>
                )}
                {!p.isFacebook && (
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/60 p-3 transition-transform duration-200 group-hover:translate-y-0" />
                )}
              </motion.button>
            )
          })}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedReal !== null && item && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-200 flex items-center justify-center bg-black/85 p-4"
            onClick={close}
          >
            {/* Opened from a card → morph via layoutId. Navigated via prev/next → fade+scale. */}
            <motion.div
              {...(selectedLoopId
                ? { layoutId: selectedLoopId }
                : {
                    initial: { scale: 0.92, opacity: 0 },
                    animate: { scale: 1,    opacity: 1 },
                    exit:    { scale: 0.92, opacity: 0 },
                  }
              )}
              transition={SPRING}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-[#1c1c1c]"
            >
              <div className="max-h-[85vh] bg-[#2a2a2a]">
                {item.src ? (
                  <img src={item.src} alt={`Project ${selectedReal + 1}`} className="block max-h-[85vh] w-full object-contain" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 bg-linear-to-br from-[#dcdcda] to-[#c4c4c2]">
                    <span className="text-6xl font-black text-(--color-muted)/30">{selectedReal + 1}</span>
                    <span className="text-sm uppercase tracking-widest text-(--color-muted)/50">Photo coming soon</span>
                  </div>
                )}
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
            <button
              onClick={close}
              className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </LayoutGroup>
  )
}