import type { FaqItem } from '../lib/faqs'
import FaqAccordion from './FaqAccordion'

type FaqSectionProps = {
  items: FaqItem[]
  id?: string
  eyebrow?: string
  title?: string
  description?: string
}

export default function FaqSection({
  items,
  id,
  eyebrow = 'FAQs',
  title = 'Questions clients ask before they call',
  description = 'Straight answers about how Complete Trade Solutions coordinates trades, quotes multi-stage jobs, and supports residential and commercial work across metro Melbourne.',
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className="border-t border-(--color-line) bg-(--color-background) py-16"
    >
      <div className="section-shell max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black text-(--color-primary)">{title}</h2>
        <p className="mt-4 text-lg leading-8 text-(--color-muted)">{description}</p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-(--color-line) bg-white">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  )
}
