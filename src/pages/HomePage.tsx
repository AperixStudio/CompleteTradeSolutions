import {
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import bathroomCreative from '../assets/bathroom-renovation.jpg'
import kitchenCreative from '../assets/kitchen-renovation.jpg'
import Hero from '../components/Hero'
import PillNav from '../components/PillNav'
import { serviceTags, services, siteConfig } from '../lib/site'

export default function HomePage() {
  return (
    <main id="top" className="overflow-hidden bg-[var(--color-background)]">
      <PillNav />

      <Hero />

      <section id="services" className="section-shell py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Services
          </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[var(--color-primary)]">
            Renovation services shaped from the supplied Facebook page.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const icons = [Hammer, Wrench, ClipboardCheck]
            const Icon = icons[index]

            return (
              <article
                key={service.title}
                className="rounded-lg border border-[var(--color-line)] bg-white p-6 shadow-sm"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[var(--color-primary)]">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">
                  {service.text}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {serviceTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm font-bold text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section id="work" className="bg-white py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Work
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[var(--color-primary)]">
              Kitchen and bathroom creatives ready to replace with project photos.
            </h2>
            <p className="mt-5 leading-8 text-[var(--color-muted)]">
              The first draft uses Facebook-supplied promotional images. Swap
              these for real before and after photos when supplied.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--color-line)] bg-[var(--color-background)] p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Kitchen renovation',
                  image: kitchenCreative,
                  alt: 'Complete Trade Solutions kitchen renovation Facebook creative',
                },
                {
                  title: 'Bathroom renovation',
                  image: bathroomCreative,
                  alt: 'Complete Trade Solutions bathroom renovation Facebook creative',
                },
              ].map((item) => (
                <figure
                  key={item.title}
                  className="overflow-hidden rounded-lg bg-white shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="aspect-square w-full object-cover"
                  />
                  <figcaption className="flex items-center gap-2 p-4 font-black text-[var(--color-primary)]">
                    <CheckCircle2
                      className="text-[var(--color-accent)]"
                      size={20}
                    />
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--color-accent)]">
            About
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[var(--color-primary)]">
            Practical renovation support for local homes.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-[var(--color-muted)]">
          <p>
            Complete Trade Solutions presents kitchen renovations, bathroom
            renovations, and coordinated trade support in a simple enquiry-led
            format.
          </p>
          <p>
            Location, service area, licences, email, and real customer reviews
            should be added once confirmed by the business.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--color-secondary)]">
              Reviews
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight">
              Customer proof goes here.
            </h2>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/8 p-6">
            <ShieldCheck className="text-[var(--color-secondary)]" size={28} />
            <p className="mt-5 text-xl font-bold leading-8">
              Customer reviews can be added once supplied.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-20">
        <div className="rounded-lg bg-white p-6 shadow-xl shadow-slate-900/8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[var(--color-primary)]">
                Ready for quote enquiries.
              </h2>
              <p className="mt-5 leading-8 text-[var(--color-muted)]">
                The phone number is taken from the supplied creative. Replace
                remaining placeholders with verified business details before
                publishing.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Phone', value: siteConfig.phone },
                { icon: Mail, label: 'Email', value: siteConfig.email },
                { icon: MapPin, label: 'Location', value: siteConfig.location },
                {
                  icon: Wrench,
                  label: 'Service area',
                  value: siteConfig.serviceArea,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-lg border border-[var(--color-line)] p-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-1 font-bold text-[var(--color-primary)]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-line)] bg-white py-8">
        <div className="section-shell flex flex-col gap-3 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black text-[var(--color-primary)]">
            {siteConfig.name}
          </p>
          <p>{siteConfig.descriptor}</p>
        </div>
      </footer>
    </main>
  )
}
