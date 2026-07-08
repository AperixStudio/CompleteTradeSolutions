import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getPublishedServices } from '../lib/services'
import { siteConfig } from '../lib/site'
import ServicesAccordion from './ServicesAccordion'

export default function ServicesIndexContent() {
  const publishedServices = getPublishedServices()

  return (
    <>
      <section className="border-b border-(--color-line) bg-(--color-background) pt-32 pb-16">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-(--color-primary) lg:text-6xl">
            Trade solutions for every stage of the job.
          </h1>
          <p className="mt-6 text-lg leading-8 text-(--color-muted)">
            Explore the full range of trade and renovation services Complete Trade
            Solutions offers across metro Melbourne. Tap any service to expand it.
          </p>
        </div>
      </section>

      <section className="bg-(--color-background) py-16">
        <div className="section-shell">
          <ServicesAccordion services={publishedServices} />
        </div>
      </section>

      <section className="border-t border-(--color-line) bg-[#2a2a2a] py-16 text-white">
        <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black">Need help choosing a service?</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-white/70">
              Call {siteConfig.phone} or send an enquiry and we will point you
              in the right direction.
            </p>
          </div>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#2a2a2a] transition hover:opacity-85"
          >
            Contact us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
