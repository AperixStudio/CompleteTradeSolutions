import AboutSection from '../components/AboutSection'
import ContactUs from '../components/ContactUs'
import DontDiySection from '../components/DontDiySection'
import Hero from '../components/Hero'
import PillNav from '../components/PillNav'
import ServicesOverview from '../components/ServicesOverview.tsx'
import OurWork from '../components/OurWork'

export default function HomePage() {
  return (
    <main id="top" className="bg-(--color-background)">
      <PillNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── About ────────────────────────────────────────────────────────── */}
      <AboutSection />

      {/* ── Don't DIY ────────────────────────────────────────────────────── */}
      <DontDiySection />

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <ServicesOverview />

      {/* ── Our Work ─────────────────────────────────────────────────────── */}
      <OurWork />

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <ContactUs />
    </main>
  )
}
