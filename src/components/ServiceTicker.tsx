type ServiceTickerProps = {
  items: string[]
}

export default function ServiceTicker({ items }: ServiceTickerProps) {
  const tickerItems = [...items, ...items]

  return (
    <div className="service-ticker group overflow-hidden border-y border-(--color-line) bg-(--color-surface) py-5 text-white">
      <div className="service-ticker__track flex w-max items-center gap-5">
        {tickerItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-5 whitespace-nowrap text-2xl font-black uppercase leading-none tracking-normal sm:text-3xl lg:text-4xl"
            aria-hidden={index >= items.length}
          >
            {item}
            <span className="h-2.5 w-2.5 rounded-full bg-(--color-accent)" />
          </span>
        ))}
      </div>
    </div>
  )
}
