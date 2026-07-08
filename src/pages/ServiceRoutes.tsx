import { type ReactNode, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import PillNav from '../components/PillNav'
import ServicePageContent from '../components/ServicePageContent'
import ServicesIndexContent from '../components/ServicesIndexContent'
import { applyPageSeo } from '../lib/seo'
import { getServiceBySlug } from '../lib/services'

function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-black focus:uppercase focus:tracking-[0.12em] focus:text-(--color-primary) focus:shadow-lg"
      >
        Skip to content
      </a>
      <PillNav />
      <main id="main-content" className="bg-(--color-background)">
        {children}
      </main>
      <Footer />
    </>
  )
}

export function ServicesIndexPage() {
  useEffect(() => {
    applyPageSeo({
      title: 'Services | Complete Trade Solutions',
      description:
        'Explore renovation, roof restoration, cabinetry, and interior fitout services from Complete Trade Solutions across metro Melbourne.',
      path: '/services',
    })
  }, [])

  return (
    <SiteShell>
      <ServicesIndexContent />
    </SiteShell>
  )
}

export function ServicePage() {
  const { slug } = useParams()
  const service = slug ? getServiceBySlug(slug) : undefined

  useEffect(() => {
    if (!service) return

    applyPageSeo({
      title: service.seo.title,
      description: service.seo.description,
      path: `/services/${service.slug}`,
      serviceName: service.title,
      faqs: service.faqs,
    })
  }, [service])

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <SiteShell>
      <ServicePageContent service={service} />
    </SiteShell>
  )
}
