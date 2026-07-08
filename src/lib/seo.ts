import { siteConfig } from './site'

const DEFAULT_SITE_URL = 'https://www.completetrade.au'

export function getSiteUrl(): string {
  const envUrl = import.meta.env.VITE_SITE_URL?.trim()

  if (envUrl) {
    return envUrl.replace(/\/$/, '')
  }

  if (typeof window !== 'undefined') {
    return window.location.origin.replace(/\/$/, '')
  }

  return DEFAULT_SITE_URL
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!tag) {
    tag = document.createElement('meta')
    document.head.appendChild(tag)
  }

  Object.entries(attrs).forEach(([key, value]) => {
    tag?.setAttribute(key, value)
  })
}

function upsertLink(rel: string, href: string, extra: Record<string, string> = {}) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!link) {
    link = document.createElement('link')
    link.rel = rel
    document.head.appendChild(link)
  }

  link.href = href
  Object.entries(extra).forEach(([key, value]) => {
    link?.setAttribute(key, value)
  })
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let schemaTag = document.getElementById(id)

  if (!schemaTag) {
    schemaTag = document.createElement('script')
    schemaTag.id = id
    schemaTag.setAttribute('type', 'application/ld+json')
    document.head.appendChild(schemaTag)
  }

  schemaTag.textContent = JSON.stringify(data)
}

function applyFaqSchema(faqs: { question: string; answer: string }[]) {
  if (faqs.length > 0) {
    upsertJsonLd('faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
  } else {
    document.getElementById('faq-schema')?.remove()
  }
}

export type PageSeoConfig = {
  title: string
  description: string
  path: string
  serviceName?: string
  faqs?: { question: string; answer: string }[]
}

export function applyPageSeo({ title, description, path, serviceName, faqs }: PageSeoConfig) {
  const siteUrl = getSiteUrl()
  const { name, seo } = siteConfig
  const canonical = `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
  const ogImage = `${siteUrl}${seo.ogImagePath}`

  document.documentElement.lang = siteConfig.locale
  document.title = title

  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: description,
  })
  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: 'index, follow',
  })

  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: description,
  })
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
  upsertMeta('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: name,
  })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })
  upsertMeta('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: 'summary_large_image',
  })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: description,
  })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage })

  upsertLink('canonical', canonical)

  upsertJsonLd('webpage-schema', {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#organization` },
    inLanguage: siteConfig.locale,
  })

  if (serviceName) {
    upsertJsonLd('service-schema', {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description,
      url: canonical,
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: siteConfig.serviceArea,
    })
  } else {
    const existing = document.getElementById('service-schema')
    existing?.remove()
  }

  applyFaqSchema(faqs ?? [])
}

export function applySiteSeo(faqs: { question: string; answer: string }[] = []) {
  const siteUrl = getSiteUrl()
  const { seo, name } = siteConfig
  const title = seo.title
  const description = seo.description
  const canonical = `${siteUrl}/`
  const ogImage = `${siteUrl}${seo.ogImagePath}`

  document.documentElement.lang = siteConfig.locale
  document.title = title

  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: description,
  })
  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: 'index, follow',
  })
  upsertMeta('meta[name="theme-color"]', {
    name: 'theme-color',
    content: siteConfig.themeColor,
  })

  upsertMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: title,
  })
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: description,
  })
  upsertMeta('meta[property="og:type"]', {
    property: 'og:type',
    content: 'website',
  })
  upsertMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: canonical,
  })
  upsertMeta('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: name,
  })
  upsertMeta('meta[property="og:locale"]', {
    property: 'og:locale',
    content: siteConfig.ogLocale,
  })
  upsertMeta('meta[property="og:image"]', {
    property: 'og:image',
    content: ogImage,
  })
  upsertMeta('meta[property="og:image:alt"]', {
    property: 'og:image:alt',
    content: `${name} — ${siteConfig.descriptor}`,
  })

  upsertMeta('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: 'summary_large_image',
  })
  upsertMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: title,
  })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: description,
  })
  upsertMeta('meta[name="twitter:image"]', {
    name: 'twitter:image',
    content: ogImage,
  })

  upsertLink('canonical', canonical)
  upsertLink('manifest', '/manifest.webmanifest')

  upsertJsonLd('local-business-schema', {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name,
    description: seo.description,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: ogImage,
    areaServed: siteConfig.serviceArea,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [siteConfig.facebookUrl],
  })

  upsertJsonLd('website-schema', {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name,
    url: siteUrl,
    description: seo.description,
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: siteConfig.locale,
  })

  upsertJsonLd('webpage-schema', {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    about: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: siteConfig.locale,
  })

  applyFaqSchema(faqs)
}
