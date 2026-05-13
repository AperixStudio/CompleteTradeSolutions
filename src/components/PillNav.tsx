import { ExternalLink, Mail, Menu, Phone } from 'lucide-react'
import logo from '../assets/logo.jpg'
import { siteConfig } from '../lib/site'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function PillNav() {
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
          <span className="truncate text-sm font-black uppercase tracking-[0.16em] text-white sm:text-base">
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
            <ExternalLink size={18} />
          </a>
          <a
            href={siteConfig.phoneHref}
            className="hidden h-10 items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 text-sm font-black text-[var(--color-background)] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:inline-flex"
          >
            <Phone size={16} />
            Call
          </a>
          <a
            href="#contact"
            className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-secondary)] text-[var(--color-background)] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:hidden"
            aria-label="Contact Complete Trade Solutions"
          >
            <Mail size={18} />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white md:hidden"
            aria-label="Navigation menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  )
}
