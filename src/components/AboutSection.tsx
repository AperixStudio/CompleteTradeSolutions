import { Clock, HardHat, ShieldCheck } from 'lucide-react'
import RevealLine from './animations/RevealLine'

const aboutCards = [
  {
    icon: ShieldCheck,
    heading: 'Licensed & insured',
    body: 'Every job is backed by licensed tradespeople and full insurance, so you can move forward with confidence.',
  },
  {
    icon: HardHat,
    heading: 'End-to-end coordination',
    body: 'We manage every stage of the build: scheduling, sequencing, and communication, so nothing falls through the cracks.',
  },
  {
    icon: Clock,
    heading: 'On time, every time',
    body: 'Deadlines matter. We build realistic timelines and hold the whole team to them, start to finish.',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-svh items-center bg-(--color-background) py-24"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <RevealLine
            as="p"
            className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)"
          >
            About Us
          </RevealLine>
          <RevealLine
            as="h2"
            delay={0.03}
            className="mt-3 text-4xl font-black leading-tight text-(--color-primary) lg:text-5xl"
          >
            Trade Experience You Can Rely On.
          </RevealLine>
          <RevealLine
            delay={0.06}
            className="mt-6 text-lg leading-8 text-(--color-muted)"
          >
            Complete Trade Solutions was built on a simple idea: renovations
            should be straightforward. No chasing trades, no crossed wires, no
            blowouts. Just a clear process from the first call to the final
            handover.
          </RevealLine>
          <RevealLine
            delay={0.09}
            className="mt-4 text-lg leading-8 text-(--color-muted)"
          >
            We specialise in kitchen and bathroom renovations, bringing the
            right people to the right job at the right time so your home gets
            the finish it deserves.
          </RevealLine>
        </div>

        <div className="grid content-center gap-4">
          {aboutCards.map((item, index) => (
            <RevealLine key={item.heading} delay={0.05 + index * 0.04}>
              <div className="flex gap-5 rounded-xl border border-(--color-line) bg-white p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-(--color-accent) text-(--color-primary)">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="font-black text-(--color-primary)">
                    {item.heading}
                  </p>
                  <p className="mt-1 leading-7 text-(--color-muted)">
                    {item.body}
                  </p>
                </div>
              </div>
            </RevealLine>
          ))}
        </div>
      </div>
    </section>
  )
}
