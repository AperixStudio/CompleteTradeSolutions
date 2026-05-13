import {
  AlertTriangle,
  Clock,
  DollarSign,
  HardHat,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import Hero from '../components/Hero'
import PillNav from '../components/PillNav'
import ServicesOverview from '../components/ServicesOverview.tsx'
import RevealLine from '../components/animations/RevealLine'
import { siteConfig } from '../lib/site'

export default function HomePage() {
  return (
    <main id="top" className="bg-(--color-background)">
      <PillNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section id="about" className="flex min-h-svh snap-start items-center bg-(--color-background) py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <RevealLine as="p" className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
              About Us
            </RevealLine>
            <RevealLine as="h2" delay={0.08} className="mt-3 text-4xl font-black leading-tight text-(--color-primary) lg:text-5xl">
              Trade experience you can actually rely on.
            </RevealLine>
            <RevealLine delay={0.16} className="mt-6 text-lg leading-8 text-(--color-muted)">
              Complete Trade Solutions was built on a simple idea — renovations should be straightforward. No chasing trades, no crossed wires, no blowouts. Just a clear process from the first call to the final handover.
            </RevealLine>
            <RevealLine delay={0.22} className="mt-4 text-lg leading-8 text-(--color-muted)">
              We specialise in kitchen and bathroom renovations, bringing the right people to the right job at the right time so your home gets the finish it deserves.
            </RevealLine>
          </div>

          <div className="grid gap-4 content-center">
            {[
              { icon: ShieldCheck, heading: 'Licensed & insured', body: 'Every job is backed by licensed tradespeople and full insurance, so you can move forward with confidence.' },
              { icon: HardHat, heading: 'End-to-end coordination', body: 'We manage every stage of the build — scheduling, sequencing, and communication — so nothing falls through the cracks.' },
              { icon: Clock, heading: 'On time, every time', body: 'Deadlines matter. We build realistic timelines and hold the whole team to them, start to finish.' },
            ].map((item, i) => (
              <RevealLine key={item.heading} delay={0.12 + i * 0.1}>
                <div className="flex gap-5 rounded-xl border border-(--color-line) bg-white p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-(--color-secondary) text-(--color-primary)">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="font-black text-(--color-primary)">{item.heading}</p>
                    <p className="mt-1 leading-7 text-(--color-muted)">{item.body}</p>
                  </div>
                </div>
              </RevealLine>
            ))}
          </div>
        </div>
      </section>

      {/* ── Don't DIY ────────────────────────────────────────────────────── */}
      <section id="dont-diy" className="flex min-h-svh snap-start items-center bg-[#2a2a2a] py-24 text-white">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <RevealLine as="p" className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
                Don't DIY
              </RevealLine>
              <RevealLine as="h2" delay={0.08} className="mt-3 text-4xl font-black leading-tight lg:text-5xl">
                Some jobs look easy until they're not.
              </RevealLine>
              <RevealLine delay={0.16} className="mt-6 text-lg leading-8 text-white/75">
                Kitchen and bathroom renovations involve plumbing, electrical, waterproofing, and structural work — all of which carry real consequences when they go wrong. A poorly tiled shower or an unlicensed electrical connection isn't just ugly, it's a liability.
              </RevealLine>
              <RevealLine delay={0.22} className="mt-4 text-lg leading-8 text-white/75">
                Getting a professional in from the start is cheaper, faster, and safer than fixing a DIY job halfway through.
              </RevealLine>
            </div>

            <div className="grid gap-4 content-center">
              {[
                {
                  icon: AlertTriangle,
                  heading: 'Hidden costs add up fast',
                  body: 'Incorrect waterproofing, unlevel surfaces, and botched tile work often costs more to fix than it would have cost to do right the first time.',
                },
                {
                  icon: ShieldCheck,
                  heading: 'Licensing protects you',
                  body: 'Plumbing and electrical work require licensed tradespeople by law. Unlicensed work can void your home insurance and complicate future sales.',
                },
                {
                  icon: DollarSign,
                  heading: 'Your time has value',
                  body: "Weekends spent tiling, re-tiling, and undoing mistakes aren't free. A coordinated team gets the result done cleanly and hands it back to you.",
                },
              ].map((item, i) => (
                <RevealLine key={item.heading} delay={0.12 + i * 0.1}>
                  <div className="flex gap-5 rounded-xl border border-white/15 bg-white/8 p-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-(--color-accent) text-white">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="font-black text-white">{item.heading}</p>
                      <p className="mt-1 leading-7 text-white/70">{item.body}</p>
                    </div>
                  </div>
                </RevealLine>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <ServicesOverview />

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section id="contact" className="flex min-h-svh snap-start items-center bg-[#e8e8e6] py-24">
        <div className="section-shell w-full">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <RevealLine as="p" className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
                Contact Us
              </RevealLine>
              <RevealLine as="h2" delay={0.08} className="mt-3 text-4xl font-black leading-tight text-(--color-primary) lg:text-5xl">
                Get a quote — no obligation.
              </RevealLine>
              <RevealLine delay={0.16} className="mt-6 text-lg leading-8 text-(--color-muted)">
                Whether you're planning a full kitchen overhaul, a bathroom refresh, or just want to understand what's involved, we're happy to talk it through. Reach out and we'll get back to you quickly.
              </RevealLine>
              <RevealLine delay={0.22} className="mt-6">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-(--color-primary) px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:opacity-85"
                >
                  <Phone size={16} />
                  Call {siteConfig.phone}
                </a>
              </RevealLine>
            </div>

            <div className="space-y-4 content-center">
              {[
                { icon: Phone, label: 'Phone', value: siteConfig.phone, href: siteConfig.phoneHref },
                { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: MapPin, label: 'Location', value: siteConfig.location, href: undefined },
                { icon: Wrench, label: 'Service area', value: siteConfig.serviceArea, href: undefined },
              ].map((item, i) => (
                <RevealLine key={item.label} delay={0.1 + i * 0.08}>
                  <div className="flex gap-4 rounded-xl border border-(--color-line) bg-white p-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-(--color-secondary) text-(--color-primary)">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-(--color-muted)">{item.label}</p>
                      <p className="mt-1 font-bold text-(--color-primary)">{item.value}</p>
                    </div>
                  </div>
                </RevealLine>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-(--color-line) bg-(--color-primary) py-10">
        <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-white/55">{siteConfig.descriptor}</p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-white/55 sm:items-end">
            <a href={siteConfig.phoneHref} className="transition hover:text-white">{siteConfig.phone}</a>
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
