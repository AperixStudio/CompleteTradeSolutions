import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
// import bathroomCreative from '../assets/bathroom-renovation.jpg'
// import kitchenCreative from '../assets/kitchen-renovation.jpg'
import baHoriz from '../assets/BAHoriz.webp'
import baVert from '../assets/BAVert.webp'
// import logo from '../assets/logo.jpg'
import { getPublishedServices } from '../lib/services'
import RevealImage from './animations/RevealImage'
import RevealLine from './animations/RevealLine'
import ServicesAccordion from './ServicesAccordion'
import { REVEAL_VIEWPORT } from '../lib/motion'

type ShowcaseCard = {
  number: string
  title: string
  eyebrow: string
  label: string
  href: string
  cta: string
  image: string
  alt: string
  lines: string[]
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const showcaseCards: ShowcaseCard[] = [
  // {
  //   number: '01',
  //   title: 'Kitchen Renovations',
  //   eyebrow: 'Planned, practical, and built to last.',
  //   label: '( where function meets finish )',
  //   href: '#work',
  //   cta: 'See kitchen work',
  //   image: kitchenCreative,
  //   alt: 'Complete Trade Solutions kitchen renovation',
  //   lines: [
  //     'Kitchen projects are shaped around layout, storage, and clean finishes',
  //     'that suit the way the home is actually used day to day.',
  //     'From demolition and joinery coordination to fixtures and handover,',
  //     'the focus stays on a renovation flow that feels clear, efficient,',
  //     'and well managed from the first quote through the final install.',
  //   ],
  // },
  // {
  //   number: '02',
  //   title: 'Bathroom Renovations',
  //   eyebrow: 'Waterproofed properly. Finished cleanly.',
  //   label: '( details matter in wet areas )',
  //   href: '#contact',
  //   cta: 'Ask about bathrooms',
  //   image: bathroomCreative,
  //   alt: 'Complete Trade Solutions bathroom renovation',
  //   lines: [
  //     'Bathrooms are approached with a balance of durability, comfort, and',
  //     'practical detailing across tiling, fittings, lighting, and layout.',
  //     'Each stage is coordinated to reduce friction between trades, helping',
  //     'the finished room feel refined, hard wearing, and consistent in use,',
  //     'without losing sight of budget, timelines, or everyday function.',
  //   ],
  // },
  // {
  //   number: '03',
  //   title: 'Coordinated Trades',
  //   eyebrow: 'One clear process across the whole job.',
  //   label: '( less chasing, more progress )',
  //   href: '#contact',
  //   cta: 'Start a project',
  //   image: logo,
  //   alt: 'Complete Trade Solutions brand mark',
  //   lines: [
  //     'Projects run better when communication is simple, sequencing is clear,',
  //     'and each trade knows where the job is heading before work begins.',
  //     'Complete Trade Solutions brings that structure into the build,',
  //     'supporting smoother scheduling, clearer decisions, and a process',
  //     'that keeps momentum without unnecessary noise or confusion.',
  //   ],
  // },
]

function ServiceShowcaseCard({
  number,
  title,
  eyebrow,
  label,
  href,
  cta,
  image,
  alt,
  lines,
}: ShowcaseCard) {
  const reduced = useReducedMotion()

  return (
    <section className="section-shell grid min-h-svh items-center gap-10 border-t border-(--color-line) py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      <div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <RevealLine
            as="div"
            innerAs="span"
            className="shrink-0 text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)"
          >
            {number}
          </RevealLine>

          <motion.span
            aria-hidden
            className="mt-2 block h-px flex-1 origin-left bg-(--color-line)"
            initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={REVEAL_VIEWPORT}
            transition={{ duration: 0.5, ease: EASE, delay: 0.06 }}
          />

          <div className="max-w-2xl space-y-1 text-[clamp(1.1rem,1.6vw,1.4rem)] font-medium leading-[1.35] text-black">
            {lines.map((line, index) => (
              <RevealLine
                key={`${title}-${index}`}
                as="div"
                innerAs="span"
                delay={0.03 * index}
              >
                {line}
              </RevealLine>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <RevealLine
              as="p"
              innerAs="span"
              className="text-sm font-black uppercase tracking-[0.18em] text-(--color-muted)"
            >
              {eyebrow}
            </RevealLine>
            <RevealLine
              as="h3"
              innerAs="span"
              delay={0.04}
              className="mt-3 text-4xl font-black uppercase leading-none text-black sm:text-5xl"
            >
              {title}
            </RevealLine>
          </div>

          <a
            href={href}
            className="group inline-flex items-center gap-3 self-start text-sm font-black uppercase tracking-[0.16em] text-black"
          >
            <span className="border-b border-current pb-1">{cta}</span>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-(--color-line) transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-(--color-line) bg-(--color-background) p-4 sm:p-6">
        <motion.span
          aria-hidden
          className="absolute left-0 top-0 block h-px w-full origin-left bg-black"
          initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.5, ease: EASE, delay: 0.06 }}
        />

        <RevealImage
          src={image}
          alt={alt}
          delay={0.04}
          className="aspect-4/5 w-full rounded-[20px] object-cover"
        />

        <RevealLine
          as="div"
          innerAs="span"
          delay={0.08}
          className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-(--color-muted)"
        >
          {label}
        </RevealLine>
      </div>
    </section>
  )
}

export default function ServicesOverview() {
  const featuredServices = getPublishedServices()

  return (
    <>
      <section id="services" className="section-shell flex min-h-svh flex-col justify-center bg-(--color-background) py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
              Services
            </p>
            <h2 className="mt-1 text-4xl font-black leading-[0.95] text-black sm:text-5xl lg:text-6xl">
              Trade solutions for every stage of the job.
            </h2>
            <div className="mt-8 max-w-3xl space-y-1 text-lg leading-8 text-(--color-muted)">
              <p>
                From renovations and fitouts to plumbing, electrical, painting,
                roofing, and flooring, we help keep the work clear and moving.
              </p>
              <p>
                Tap a service below for a quick overview of what we cover.
              </p>
            </div>
          </div>

          <div>
            <img
              src={baVert}
              alt="Complete Trade Solutions services"
              className="aspect-[3/4] w-full object-contain sm:hidden"
            />
            <img
              src={baHoriz}
              alt="Complete Trade Solutions services"
              className="hidden aspect-[4/3] w-full object-contain sm:block"
            />
          </div>
        </div>

        <div className="mt-12">
          <ServicesAccordion services={featuredServices} />
        </div>
      </section>

      {showcaseCards.map((card) => (
        <ServiceShowcaseCard key={card.number} {...card} />
      ))}
    </>
  )
}
