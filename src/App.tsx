import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import IntroAnimation from './components/animations/IntroAnimation'
import {
  ServicePage,
  ServicesIndexPage,
} from './pages/ServiceRoutes'
import { applySiteSeo } from './lib/seo'
import { generalFaqs } from './lib/faqs'

function HomeRoute() {
  useEffect(() => {
    applySiteSeo(generalFaqs)
  }, [])

  return (
    <>
      <HomePage />
      <Footer />
    </>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AppRoutes() {
  const [introActive, setIntroActive] = useState(
    () =>
      sessionStorage.getItem('introPlayed') !== 'true' &&
      window.location.pathname === '/',
  )

  function handleIntroComplete() {
    sessionStorage.setItem('introPlayed', 'true')
    setIntroActive(false)
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-black focus:uppercase focus:tracking-[0.12em] focus:text-(--color-primary) focus:shadow-lg"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <AnimatePresence>
        {introActive && (
          <IntroAnimation key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      <div className={introActive ? 'invisible pointer-events-none' : undefined}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
