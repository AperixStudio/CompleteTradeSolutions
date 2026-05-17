import { motion, useReducedMotion } from 'framer-motion'
import aperixLogo from '../assets/aperix-logo.svg'
import { siteConfig } from '../lib/site'

export default function Footer() {
  const prefersReduced = useReducedMotion()

  return (
    <footer className="border-t border-(--color-line) bg-(--color-primary) py-10">
      <div className="section-shell flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-white/55">{siteConfig.descriptor}</p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-white/55 sm:items-end">
            <a
              href={siteConfig.phoneHref}
              className="transition hover:text-white"
            >
              {siteConfig.phone}
            </a>
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
          </div>
        </div>

        <a
          href="https://aperixstudio.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Built by Aperix"
          className="flex w-fit flex-col items-center gap-1 self-end text-white/55 transition hover:text-white"
        >
          <motion.span
            className="block"
            animate={prefersReduced ? undefined : { rotate: 360 }}
            transition={
              prefersReduced
                ? undefined
                : { duration: 5, ease: 'linear', repeat: Infinity }
            }
          >
            <img
              src={aperixLogo}
              alt=""
              aria-hidden="true"
              className="h-7 w-auto"
            />
          </motion.span>
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white">
            Built by Aperix
          </span>
        </a>
      </div>
    </footer>
  )
}
