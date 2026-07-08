import { useId, useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ServiceDefinition } from '../lib/services'

const COLUMNS = 3

type ServicesAccordionProps = {
  services: ServiceDefinition[]
  showImages?: boolean
  defaultOpenSlug?: string | null
}

function chunkServices<T>(items: T[], size: number): T[][] {
  const rows: T[][] = []

  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size))
  }

  return rows
}

type ServicePanelProps = {
  service: ServiceDefinition
  showImages: boolean
  panelId: string
  buttonId: string
}

function ServicePanel({
  service,
  showImages,
  panelId,
  buttonId,
}: ServicePanelProps) {
  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={buttonId}
      className="border-b border-(--color-line) bg-(--color-background) px-5 py-6 md:px-8 md:py-8"
    >
      {showImages ? (
        <img
          src={service.image}
          alt={service.imageAlt}
          className="mb-5 aspect-16/10 w-full object-cover md:aspect-21/9"
        />
      ) : null}

      <p className="leading-7 text-(--color-muted)">{service.intro}</p>

      {service.scope.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {service.scope.slice(0, 4).map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-(--color-muted) md:text-base"
            >
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <Link
        to={`/services/${service.slug}`}
        className="group mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-black"
      >
        View full service
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </div>
  )
}

type ServiceCellProps = {
  service: ServiceDefinition
  index: number
  isOpen: boolean
  onToggle: (index: number) => void
  baseId: string
}

function ServiceCell({ service, index, isOpen, onToggle, baseId }: ServiceCellProps) {
  const panelId = `${baseId}-panel-${index}`
  const buttonId = `${baseId}-button-${index}`

  return (
    <button
      id={buttonId}
      type="button"
      aria-expanded={isOpen}
      aria-controls={panelId}
      onClick={() => onToggle(index)}
      className="flex min-h-[4.5rem] w-full items-center justify-between gap-4 border-b border-(--color-line) px-5 py-5 text-left md:min-h-[5.5rem] md:border-r md:px-6 md:py-6"
    >
      <span className="text-sm font-black uppercase leading-snug text-black sm:text-base md:text-lg">
        {service.tickerLabel}
      </span>
      <Plus
        size={20}
        strokeWidth={2.5}
        aria-hidden
        className={`shrink-0 text-black ${isOpen ? 'rotate-45' : ''}`}
      />
    </button>
  )
}

export default function ServicesAccordion({
  services,
  showImages = false,
  defaultOpenSlug = null,
}: ServicesAccordionProps) {
  const baseId = useId()
  const defaultIndex =
    defaultOpenSlug === null
      ? null
      : services.findIndex((service) => service.slug === defaultOpenSlug)
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultIndex === -1 ? null : defaultIndex,
  )

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  const rows = chunkServices(services, COLUMNS)

  return (
    <>
      <div className="border-t border-(--color-line) md:hidden">
        {services.map((service, index) => {
          const isOpen = openIndex === index
          const panelId = `${baseId}-panel-${index}`
          const buttonId = `${baseId}-button-${index}`

          return (
            <div key={service.slug}>
              <ServiceCell
                service={service}
                index={index}
                isOpen={isOpen}
                onToggle={toggle}
                baseId={baseId}
              />
              {isOpen ? (
                <ServicePanel
                  service={service}
                  showImages={showImages}
                  panelId={panelId}
                  buttonId={buttonId}
                />
              ) : null}
            </div>
          )
        })}
      </div>

      <div className="hidden border-t border-l border-(--color-line) md:block">
        {rows.map((rowServices, rowIndex) => {
          const rowStartIndex = rowIndex * COLUMNS
          const openInRow =
            openIndex !== null &&
            openIndex >= rowStartIndex &&
            openIndex < rowStartIndex + rowServices.length
          const openService = openInRow ? services[openIndex] : null
          const openPanelId = openInRow ? `${baseId}-panel-${openIndex}` : ''
          const openButtonId = openInRow ? `${baseId}-button-${openIndex}` : ''

          return (
            <div key={rowStartIndex}>
              <div className="grid grid-cols-3">
                {rowServices.map((service, colIndex) => {
                  const index = rowStartIndex + colIndex

                  return (
                    <ServiceCell
                      key={service.slug}
                      service={service}
                      index={index}
                      isOpen={openIndex === index}
                      onToggle={toggle}
                      baseId={baseId}
                    />
                  )
                })}

                {rowServices.length < COLUMNS
                  ? Array.from({ length: COLUMNS - rowServices.length }).map(
                      (_, emptyIndex) => (
                        <div
                          key={`empty-${rowIndex}-${emptyIndex}`}
                          aria-hidden
                          className="border-b border-r border-(--color-line)"
                        />
                      ),
                    )
                  : null}
              </div>

              {openService ? (
                <ServicePanel
                  service={openService}
                  showImages={showImages}
                  panelId={openPanelId}
                  buttonId={openButtonId}
                />
              ) : null}
            </div>
          )
        })}
      </div>
    </>
  )
}
