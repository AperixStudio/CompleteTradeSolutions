import { Mail, MapPin, Phone, Wrench } from 'lucide-react'
import { siteConfig } from '../lib/site'
import RevealLine from './animations/RevealLine'

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
  },
  {
    icon: Wrench,
    label: 'Service area',
    value: siteConfig.serviceArea,
  },
]

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="flex min-h-svh snap-start items-center bg-[#e8e8e6] py-24"
    >
      <div className="section-shell w-full">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <RevealLine
              as="p"
              className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)"
            >
              Contact Us
            </RevealLine>
            <RevealLine
              as="h2"
              delay={0.08}
              className="mt-3 text-4xl font-black leading-tight text-(--color-primary) lg:text-5xl"
            >
              Get a quote — no obligation.
            </RevealLine>
            <RevealLine
              delay={0.16}
              className="mt-6 text-lg leading-8 text-(--color-muted)"
            >
              Whether you're planning a full kitchen overhaul, a bathroom
              refresh, or just want to understand what's involved, we're happy
              to talk it through. Reach out and we'll get back to you quickly.
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
            {contactItems.map((item, index) => (
              <RevealLine key={item.label} delay={0.1 + index * 0.08}>
                <div className="flex gap-4 rounded-xl border border-(--color-line) bg-white p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-(--color-secondary) text-(--color-primary)">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-(--color-muted)">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block font-bold text-(--color-primary) transition hover:text-(--color-accent)"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-bold text-(--color-primary)">
                        {item.value}
                      </p>
                    )}
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
