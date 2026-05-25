import { Mail, Phone, Wrench } from 'lucide-react'
import { siteConfig } from '../lib/site'
import RevealSection from './animations/RevealSection'

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Wrench,
    label: 'Service area',
    value: siteConfig.serviceArea,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,  
    href: `mailto:${siteConfig.email}`,
    fullWidth: true,
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
          <RevealSection className="space-y-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
              Contact Us
            </p>
            <h2 className="text-4xl font-black leading-tight text-(--color-primary) lg:text-5xl">
              Get a No Obligation, Free Quote
            </h2>
            <p className="text-lg leading-8 text-(--color-muted)">
              Whether you're planning a full kitchen overhaul, a bathroom
              refresh, or just want to understand what's involved, we're happy
              to talk it through. Reach out and we'll get back to you quickly.
            </p>
            <div className="grid items-stretch gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className={item.fullWidth ? 'h-full sm:col-span-2' : 'h-full'}
                >
                  <div className="flex h-full min-h-20 gap-4 rounded-xl border border-(--color-line) bg-white p-5">
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
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection className="space-y-8">
            <form
              name="contact"
              method="POST"
              action="/thank-you.html"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="rounded-3xl border border-(--color-line) bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.08)] sm:p-8"
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-black uppercase tracking-[0.12em] text-(--color-primary)"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-(--color-line) bg-[#f8f8f6] px-4 py-3 text-(--color-primary) outline-none transition focus:border-(--color-accent) focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-detail"
                    className="mb-2 block text-sm font-black uppercase tracking-[0.12em] text-(--color-primary)"
                  >
                    Phone or email
                  </label>
                  <input
                    id="contact-detail"
                    name="contact"
                    type="text"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-(--color-line) bg-[#f8f8f6] px-4 py-3 text-(--color-primary) outline-none transition focus:border-(--color-accent) focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-black uppercase tracking-[0.12em] text-(--color-primary)"
                  >
                    Job details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y rounded-xl border border-(--color-line) bg-[#f8f8f6] px-4 py-3 text-(--color-primary) outline-none transition focus:border-(--color-accent) focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-(--color-primary) px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:opacity-85"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
