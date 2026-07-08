import AboutSection from '../components/AboutSection'
import ContactUs from '../components/ContactUs'
import DontDiySection from '../components/DontDiySection'
import FaqSection from '../components/FaqSection'
import Hero from '../components/Hero'
import PillNav from '../components/PillNav'
import ServicesOverview from '../components/ServicesOverview.tsx'
import { generalFaqs } from '../lib/faqs'

export default function HomePage() {
  return (
    <main id="main-content" className="bg-(--color-background)">
      <PillNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── About ────────────────────────────────────────────────────────── */}
      <AboutSection />

      {/* ── Don't DIY ────────────────────────────────────────────────────── */}
      <DontDiySection />

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <ServicesOverview />

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <ContactUs />

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      <FaqSection id="faq" items={generalFaqs} />
    </main>
  )
}
