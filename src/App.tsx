import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import IntroAnimation from './components/animations/IntroAnimation'
import { siteConfig } from './lib/site'

function shouldShowIntro(): boolean {
  const navEntry = performance.getEntriesByType(
    'navigation',
  )[0] as PerformanceNavigationTiming | undefined
  const navType = navEntry?.type
  const hasSeenIntro = sessionStorage.getItem('introPlayed')

  // Show on fresh open (flag not set) OR on hard refresh (F5)
  return navType === 'reload' || !hasSeenIntro
}

function App() {
  const [introActive, setIntroActive] = useState<boolean>(() => shouldShowIntro())

  function handleIntroComplete() {
    sessionStorage.setItem('introPlayed', 'true')
    setIntroActive(false)
  }

  useEffect(() => {
    const title = `${siteConfig.name} | Trade Services`
    const description =
      'Complete Trade Solutions website framework for local trade services, maintenance, projects, and quote enquiries.'
    const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin

    document.title = title

    const upsertMeta = (
      selector: string,
      attrs: Record<string, string>,
    ) => {
      let tag = document.head.querySelector<HTMLMetaElement>(selector)

      if (!tag) {
        tag = document.createElement('meta')
        document.head.appendChild(tag)
      }

      Object.entries(attrs).forEach(([key, value]) => {
        tag?.setAttribute(key, value)
      })
    }

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
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
      content: siteUrl,
    })

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }

    canonical.href = siteUrl

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteUrl,
      sameAs: [siteConfig.facebookUrl],
    }

    let schemaTag = document.getElementById('local-business-schema')

    if (!schemaTag) {
      schemaTag = document.createElement('script')
      schemaTag.id = 'local-business-schema'
      schemaTag.setAttribute('type', 'application/ld+json')
      document.head.appendChild(schemaTag)
    }

    schemaTag.textContent = JSON.stringify(schema)
  }, [])

  return (
    <>
      <AnimatePresence>
        {introActive && (
          <IntroAnimation key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      <div className={introActive ? 'invisible pointer-events-none' : undefined}>
        <HomePage />
        <Footer />
      </div>
    </>
  )
}

export default App
