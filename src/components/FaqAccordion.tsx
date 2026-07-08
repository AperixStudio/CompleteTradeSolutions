import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import type { FaqItem } from '../lib/faqs'

type FaqAccordionProps = {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="border-t border-(--color-line)">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const isLast = index === items.length - 1
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div
            key={item.question}
            className={`bg-white transition-colors duration-300 ${
              isLast ? undefined : 'border-b border-(--color-line)'
            }`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="flex w-full items-start justify-between gap-4 bg-white px-5 py-5 text-left transition-colors duration-300 sm:px-6 sm:py-6"
            >
              <span className="text-base font-black leading-snug text-(--color-primary) sm:text-lg">
                {item.question}
              </span>
              <Plus
                size={20}
                strokeWidth={2.5}
                aria-hidden
                className={`mt-0.5 shrink-0 text-(--color-primary) transition-transform duration-300 ease-out ${
                  isOpen ? 'rotate-45' : ''
                }`}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid bg-white transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-(--color-line) bg-white px-5 pb-6 pt-4 sm:px-6 sm:pb-7">
                  <p className="leading-7 text-(--color-muted)">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
