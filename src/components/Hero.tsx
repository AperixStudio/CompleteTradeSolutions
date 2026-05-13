import { ArrowRight, Phone } from 'lucide-react'
import heroVideo from '../assets/CTS-compressed.mp4'
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
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay so text stays legible */}
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="section-shell relative grid h-full items-center gap-10 py-14">
        <div className="max-w-3xl">
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 min-h-16 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
            <TypeWriter phrases={siteConfig.heroHeadline} />
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
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
