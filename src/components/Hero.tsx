import { ArrowRight, Phone } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { siteConfig } from '../lib/site'
import TypeWriter from './animations/TypeWriter'

export default function Hero() {
  return (
    <section className="trade-grid relative min-h-[92svh] pt-28">
      <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
      <div className="section-shell relative grid min-h-[calc(92svh-7rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-[var(--color-primary)] sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 min-h-16 max-w-3xl text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            <TypeWriter phrases={siteConfig.heroHeadline} />
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            >
              <Phone size={18} />
              Call {siteConfig.phone}
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[var(--color-primary)] transition hover:bg-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            >
              Facebook page
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="logo-shadow relative mx-auto grid aspect-square w-full max-w-[520px] place-items-center overflow-hidden rounded-[28px] bg-[var(--color-primary)] p-8">
            <div className="absolute inset-0 opacity-35 trade-grid" />
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[var(--color-secondary)]" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-tl-[80px] bg-[var(--color-accent)]" />
            <img
              src={logo}
              alt={`${siteConfig.name} brand mark`}
              className="relative z-10 w-full max-w-[340px] rounded-3xl bg-white object-contain p-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
