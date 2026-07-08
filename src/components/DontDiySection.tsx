import { AlertTriangle, DollarSign, ShieldCheck } from 'lucide-react'
import RevealLine from './animations/RevealLine'

const riskCards = [
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
]

export default function DontDiySection() {
  return (
    <section
      id="dont-diy"
      className="flex min-h-svh snap-start items-center bg-[#2a2a2a] pb-36 pt-24 text-white lg:pb-44"
    >
      <div className="section-shell">
        <div className="max-w-4xl">
          <RevealLine
            as="p"
            className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)"
          >
            Don't DIY
          </RevealLine>
          <RevealLine
            as="h2"
            delay={0.03}
            className="mt-3 text-4xl font-black leading-tight lg:text-5xl"
          >
            Some Jobs Look Easy Until They’re Not.
          </RevealLine>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <div className="mx-auto w-full max-w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl shadow-black/30 lg:mx-0 lg:max-w-[320px]">
            <iframe
              title="Complete Trade Solutions Facebook reel"
              src="https://www.facebook.com/plugins/video.php?height=571&href=https%3A%2F%2Fwww.facebook.com%2F61577631743905%2Fvideos%2F1255679929613214%2F&show_text=false&width=320&t=0"
              width="320"
              height="571"
              className="aspect-[320/571] w-full"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>

          <div className="grid gap-4 lg:h-[571px] lg:grid-rows-3">
            {riskCards.map((item, index) => (
              <RevealLine key={item.heading} delay={0.03 + index * 0.03}>
                <div className="flex h-full gap-5 rounded-xl border border-white/15 bg-white/8 p-5">
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
  )
}
