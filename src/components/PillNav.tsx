import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.jpg'
import { siteConfig } from '../lib/site'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#contact', label: 'Contact' },
]

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14.2 8.6V6.9c0-.8.5-1 1-1h1.9V2.6A25 25 0 0 0 14.4 2c-2.8 0-4.7 1.7-4.7 4.8v1.8H6.6v3.7h3.1V22h3.9v-9.7h3.1l.5-3.7h-3Z" />
    </svg>
  )
}

export default function PillNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-(--color-surface) shadow-lg shadow-black/30">
      <nav
        className="section-shell flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt={`${siteConfig.name} logo`}
            className="h-20 w-20 rounded-full object-cover"
          />
          <span className="hidden truncate text-sm font-black uppercase tracking-[0.16em] text-white sm:block sm:text-base">
            {siteConfig.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-white/78 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[var(--color-secondary)] hover:text-[var(--color-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            aria-label="Open Facebook page"
          >
            <FacebookIcon />
          </a>
          <a
            href={siteConfig.phoneHref}
            className="hidden h-10 items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 text-sm font-black text-[var(--color-background)] shadow-[0_0_0_rgba(232,93,4,0)] transition duration-200 hover:-translate-y-1 hover:bg-[var(--color-accent)] hover:shadow-[0_12px_28px_rgba(232,93,4,0.45)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-surface)] sm:inline-flex"
          >
            <Phone size={16} />
            Call
          </a>
          <a
            href={siteConfig.phoneHref}
            className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-accent)] text-[var(--color-background)] transition hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:shadow-[0_8px_20px_rgba(232,93,4,0.4)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] sm:hidden"
            aria-label={`Call ${siteConfig.name}`}
          >
            <Phone size={18} />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white md:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="section-shell pb-5 md:hidden"
        >
          <div className="rounded-2xl border border-white/10 bg-black/20 p-3 shadow-xl shadow-black/25">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <a
                href={siteConfig.phoneHref}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3 text-sm font-black text-[var(--color-background)]"
              >
                <Phone size={16} />
                Call {siteConfig.phone}
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <FacebookIcon size={16} />
                Facebook page
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
