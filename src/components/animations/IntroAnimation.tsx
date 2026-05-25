import { useAnimate, AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import CTSLogo from '../../assets/CTSlogo.png'

interface Props {
  onComplete: () => void
}

// ─── Display size ─────────────────────────────────────────────────────────────
const LOGO_SIZE = 480 // px — square container rendered on screen

// ─── Brand colours (sampled from CTSlogo (4).svg) ────────────────────────────
const COLOR_BG   = '#0d0d0d'  // near-black — matches logo's darkest elements
const COLOR_DARK = '#d9d9d7'  // near-white — ring, text, house mark (inverted for dark bg)

// ─── Clip regions — inset(top% right% bottom% left%) ─────────────────────────
// Source is 500×500. Formula: top=y/5, right=(500−x−w)/5, bottom=(500−y−h)/5, left=x/5
// All values from CTSlogo.meta(3).json
const REGIONS = {
  // "Complete"   x:159 y:284 w:108 h:15
  complete:    { top: 56.8, right: 46.6, bottom: 40.2, left: 31.8 },
  // "Trade"      x:275 y:284 w:65  h:15  (labelled "total" in meta)
  trade:       { top: 56.8, right: 32.0, bottom: 40.2, left: 55.0 },
  // "Solutions"  x:194 y:304 w:111 h:15
  solutions:   { top: 60.8, right: 39.0, bottom: 36.2, left: 38.8 },
  // House mark   x:172 y:136 w:163 h:142
  orangehouse: { top: 27.2, right: 33.0, bottom: 44.4, left: 34.4 },
  // outer-circle fills full 500×500 — represented by SVG ring overlay
} as const

type Region = { top: number; right: number; bottom: number; left: number }

// ─── SVG ring overlay ─────────────────────────────────────────────────────────
// outer-circle fills 500×500 in source → outer radius = 250px
// part-0001 inner content starts at x=84 in 500px → ring band = 84px wide
// scaled to 480px display: band = 84*(480/500) = 80.6px ≈ 81px
// stroke center = 240 - 81/2 = 199.5 ≈ 200  |  stroke width = 81
const RING_RADIUS      = 200
const RING_STROKE      = 81
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

// ─── Helpers ─────────────────────────────────────────────────────────────────
function toClip(r: Region) {
  return `inset(${r.top}% ${r.right}% ${r.bottom}% ${r.left}%)`
}

function LogoLayer({ id, clip, extraStyle }: {
  id: string
  clip: Region
  extraStyle?: CSSProperties
}) {
  return (
    <img
      id={id}
      src={CTSLogo}
      alt=""
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'fill',
        clipPath: toClip(clip),
        pointerEvents: 'none',
        userSelect: 'none',
        ...extraStyle,
      }}
    />
  )
}

export default function IntroAnimation({ onComplete }: Props) {
  const [scope, animate] = useAnimate()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const run = async () => {
      // ── 0. Blank hold ────────────────────────────────────────────────────
      await new Promise<void>((r) => setTimeout(r, 500))

      // ── 1. Text layers fly in (staggered, parallel) ──────────────────────
      animate(
        '#layer-complete',
        { x: ['-110vw', '0vw'], opacity: [0, 1] },
        { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      )
      animate(
        '#layer-trade',
        { x: ['110vw', '0vw'], opacity: [0, 1] },
        { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
      )
      await animate(
        '#layer-solutions',
        { y: ['60vh', '0vh'], opacity: [0, 1] },
        { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
      )

      // ── 2. Hold ─────────────────────────────────────────────────────────
      //await new Promise<void>((r) => setTimeout(r, 100))

      // ── 3. House mark fades in ───────────────────────────────────────────
      await animate(
        '#layer-orangehouse',
        { opacity: [0, 1] },
        { duration: 0.5, ease: 'easeOut' },
      )

      // ── 4. Ring draws on ─────────────────────────────────────────────────
      // Fade the stroke opacity in over the first 0.6s so the leading edge eases in
      animate('#ring-draw', { strokeOpacity: [0, 1] }, { duration: 0.5, ease: 'easeIn' })
      await animate(
        '#ring-draw',
        { strokeDashoffset: [RING_CIRCUMFERENCE, 0] },
        { duration: 0.9, ease: 'easeInOut' },
      )

      // ── 4b. Cross-fade: real PNG fades in, SVG ring fades out ─────────────
      animate('#svg-ring-layer', { opacity: [1, 0] }, { duration: 0.8, ease: 'easeInOut' })
      await animate('#full-logo-png', { opacity: [0, 1] }, { duration: 0.8, ease: 'easeInOut' })

      // ── 5. Hold — full logo visible ──────────────────────────────────────
      await new Promise<void>((r) => setTimeout(r, 500))

      // ── 6. Zoom punch-through ────────────────────────────────────────────
      await animate(
        '#logo-zoom',
        { scale: [1, 20] },
        { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
      )

      // ── 7. Done ──────────────────────────────────────────────────────────
      setVisible(false)
      setTimeout(onComplete, 150)
    }

    run()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={scope}
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: COLOR_BG,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* ── Logo zoom wrapper ─────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // Scale down on small screens so the logo fits without warping
              transform: `scale(var(--intro-scale, 1))`,
              transformOrigin: 'center center',
            }}
            className="[--intro-scale:0.55] sm:[--intro-scale:1]"
          >
          <div
            id="logo-zoom"
            style={{ position: 'relative', width: LOGO_SIZE, height: LOGO_SIZE }}
          >
            {/* SVG ring overlay (fades out once real PNG takes over) */}
            <svg
              id="svg-ring-layer"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
              viewBox={`0 0 ${LOGO_SIZE} ${LOGO_SIZE}`}
            >
              <circle
                id="ring-draw"
                cx={LOGO_SIZE / 2}
                cy={LOGO_SIZE / 2}
                r={RING_RADIUS}
                fill="none"
                stroke={COLOR_DARK}
                strokeWidth={RING_STROKE}
                strokeLinecap="round"
                strokeOpacity={0}
                strokeDasharray={RING_CIRCUMFERENCE}
                strokeDashoffset={RING_CIRCUMFERENCE}
                transform={`rotate(-90 ${LOGO_SIZE / 2} ${LOGO_SIZE / 2})`}
              />
            </svg>

            {/* Orange house — fades in */}
            <LogoLayer id="layer-orangehouse" clip={REGIONS.orangehouse} extraStyle={{ opacity: 0 }} />

            {/* Text layers — fly in from edges, start invisible */}
            <LogoLayer id="layer-complete"    clip={REGIONS.complete}    extraStyle={{ opacity: 0 }} />
            <LogoLayer id="layer-trade"       clip={REGIONS.trade}       extraStyle={{ opacity: 0 }} />
            <LogoLayer id="layer-solutions"   clip={REGIONS.solutions}   extraStyle={{ opacity: 0 }} />

            {/* Full PNG — fades in after ring draws, replacing SVG ring with real logo */}
            <img
              id="full-logo-png"
              src={CTSLogo}
              alt="Complete Trade Solutions"
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'fill',
                borderRadius: '50%',
                opacity: 0,
                pointerEvents: 'none',
              }}
            />
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
