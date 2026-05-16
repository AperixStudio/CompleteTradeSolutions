import { ArrowRight, Phone } from 'lucide-react'
import heroVideo from '../assets/CTSHero.webm'
import heroVideoMobile from '../assets/CTSHeroVertV2.webm'
import { siteConfig } from '../lib/site'
import TypeWriter from './animations/TypeWriter'

export default function Hero() {
  return (
    <section className="trade-grid relative h-svh snap-start pt-28">
      {/* Full-bleed video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center sm:hidden"
        >
          <source src={heroVideoMobile} type="video/webm" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 hidden h-full w-full translate-y-12 object-cover object-[50%_75%] sm:block"
        >
          <source src={heroVideo} type="video/webm" />
        </video>
        {/* Dark overlay so text stays legible */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/45 via-black/20 to-transparent sm:hidden" />
      </div>
      <div className="section-shell relative grid h-full items-start gap-10 pt-44 pb-14 sm:items-center sm:py-14">
        <div className="max-w-3xl">
          <h1 className="max-w-4xl text-4xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-1 min-h-14 max-w-3xl text-2xl font-black leading-tight text-white sm:min-h-16 sm:text-4xl">
            <TypeWriter phrases={siteConfig.heroHeadline} />
          </p>
          <p className="mt-1 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/20 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <Phone size={18} />
              Call {siteConfig.phone}
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Facebook page
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
