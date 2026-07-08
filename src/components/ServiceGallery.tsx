import { siteConfig } from '../lib/site'
import type { ServiceDefinition } from '../lib/services'

type ServiceGalleryProps = {
  service: ServiceDefinition
}

export default function ServiceGallery({ service }: ServiceGalleryProps) {
  if (service.gallery.length === 0) {
    return null
  }

  return (
    <section className="border-t border-(--color-line) bg-(--color-background) py-16">
      <div className="section-shell">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
          Project photos
        </p>
        <h2 className="mt-3 text-3xl font-black text-(--color-primary)">
          Recent {service.title.toLowerCase()} work
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-(--color-muted)">
          A sample of project work across metro Melbourne. More photos are
          available on our Facebook page.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.gallery.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-2xl border border-(--color-line) bg-white"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-4/3 w-full object-cover"
              />
            </figure>
          ))}
        </div>

        <a
          href={siteConfig.facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-(--color-line) bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-(--color-primary) transition hover:border-(--color-accent)"
        >
          View more on Facebook
        </a>
      </div>
    </section>
  )
}
