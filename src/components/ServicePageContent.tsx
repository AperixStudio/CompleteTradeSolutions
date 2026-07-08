import { ArrowLeft, ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../lib/site'
import { getPublishedServices, type ServiceDefinition } from '../lib/services'
import ServiceGallery from './ServiceGallery'
import ServicesAccordion from './ServicesAccordion'
import FaqSection from './FaqSection'

type ServicePageContentProps = {
  service: ServiceDefinition
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
  const otherServices = getPublishedServices(service.slug)

  return (
    <>
      <section className="border-b border-(--color-line) bg-(--color-background) pt-32 pb-16">
        <div className="section-shell">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-(--color-muted) transition hover:text-(--color-accent)"
          >
            <ArrowLeft size={16} />
            All services
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
            {service.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-(--color-primary) lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-(--color-muted)">
            {service.intro}
          </p>
        </div>
      </section>

      <section className="bg-(--color-background) py-16">
        <div className="section-shell max-w-4xl space-y-6">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-(--color-muted)">
              {paragraph}
            </p>
          ))}

          <div className="rounded-3xl border border-(--color-line) bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black text-(--color-primary)">
              What we cover
            </h2>
            <ul className="mt-5 space-y-3 text-(--color-muted)">
              {service.scope.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-(--color-accent)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-(--color-line) bg-(--color-primary) p-6 text-white sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
              {siteConfig.whyChooseUs.partnerHeading}
            </p>
            <h2 className="mt-3 text-2xl font-black">
              {siteConfig.whyChooseUs.heading}
            </h2>
            <p className="mt-4 leading-8 text-white/75">
              {siteConfig.whyChooseUs.partnerText}
            </p>
            <ul className="mt-6 space-y-3 text-white/85">
              {siteConfig.whyChooseUs.points.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-(--color-accent)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServiceGallery service={service} />

      <section className="border-t border-(--color-line) bg-[#2a2a2a] py-16 text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
              Get a quote
            </p>
            <h2 className="mt-3 text-3xl font-black lg:text-4xl">
              Ready to talk about {service.title.toLowerCase()}?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
              Tell us what you are planning and we will help you understand scope,
              timing, and the next step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#2a2a2a] transition hover:opacity-85"
            >
              Request a quote
              <ArrowRight size={16} />
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/15"
            >
              <Phone size={16} />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <FaqSection
          items={service.faqs}
          title={`${service.title} FAQs`}
          description={`Common questions about ${service.title.toLowerCase()} across metro Melbourne — answered in plain language before you request a quote.`}
        />
      )}

      {otherServices.length > 0 && (
        <section className="bg-(--color-background) py-16">
          <div className="section-shell">
            <h2 className="text-3xl font-black text-(--color-primary)">
              Other services
            </h2>
            <div className="mt-8">
              <ServicesAccordion services={otherServices} />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
