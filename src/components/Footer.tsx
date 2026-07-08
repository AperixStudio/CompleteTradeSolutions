import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUp, X } from 'lucide-react'
import logo from '../assets/logo.jpg'
import aperixLogo from '../assets/aperix-logo.svg'
import { siteConfig } from '../lib/site'

/* ── privacy policy modal ───────────────────────────────── */
function PrivacyModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
    >
      <motion.div
        className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-black/10 bg-white p-8 text-neutral-700 shadow-2xl"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close privacy policy"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
        >
          <X size={18} />
        </button>

        <h2 className="mb-6 text-2xl font-bold text-neutral-900">
          Privacy Policy
        </h2>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            <strong className="text-neutral-900">{siteConfig.name}</strong>{' '}
            (&ldquo;<strong className="text-neutral-900">we</strong>&rdquo;,
            &ldquo;<strong className="text-neutral-900">us</strong>&rdquo;,
            &ldquo;<strong className="text-neutral-900">our</strong>&rdquo;) is
            committed to protecting your privacy and handling personal
            information in accordance with the <em>Privacy Act 1988</em> (Cth)
            and the Australian Privacy Principles (APPs).
          </p>
          <p>
            This policy explains what information we collect when you enquire
            about renovation or trade services, when we attend your property
            for a quote or to carry out work, and when you visit this website.
          </p>

          <h3 className="pt-2 text-base font-semibold text-neutral-900">
            1. Who we are
          </h3>
          <p>
            This website is operated by {siteConfig.name}, a renovation and
            trade-coordination business servicing {siteConfig.serviceArea}.
            For privacy questions you can contact us at{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold underline underline-offset-2"
            >
              {siteConfig.email}
            </a>
            .
          </p>

          <h3 className="pt-2 text-base font-semibold text-neutral-900">
            2. Information we collect
          </h3>
          <p>
            We only collect personal information that is reasonably necessary
            to quote, schedule, and complete the work you ask us to do.
          </p>
          <p>
            <strong className="text-neutral-900">From you directly:</strong>{' '}
            your name, contact details, property address, project
            description, budget and timeframe, and any plans, drawings, or
            inspection reports you share with us.
          </p>
          <p>
            <strong className="text-neutral-900">On-site information.</strong>{' '}
            During quotes and works we may take measurements, notes,
            and photographs of the parts of the property relevant to the job
            (kitchen, bathroom, roof line, electrical, plumbing, etc.). These
            images are used to quote accurately, brief subcontractors, record
            progress, and support warranty claims.
          </p>
          <p>
            <strong className="text-neutral-900">Automatically from this website:</strong>{' '}
            IP address, browser type, device, and pages visited, for
            site security and aggregate analytics.
          </p>
          <p>
            We do not knowingly collect information from children, and we do
            not collect sensitive information unless you provide it (for
            example, accessibility requirements that affect the design of a
            renovation).
          </p>

          <h3 className="pt-2 text-base font-semibold text-neutral-900">
            3. How we use your information
          </h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>to prepare quotes and proposals;</li>
            <li>to schedule, perform, and supervise the contracted work;</li>
            <li>
              to coordinate licensed subcontractors (e.g. electrical,
              plumbing, cabinetry, flooring, painting);
            </li>
            <li>to order materials and arrange delivery;</li>
            <li>to issue invoices and process payments;</li>
            <li>
              to respond to defect, warranty, and after-care requests; and
            </li>
            <li>to comply with our legal and tax obligations.</li>
          </ul>

          <h3 className="pt-2 text-base font-semibold text-neutral-900">
            4. Sharing your information
          </h3>
          <p>
            We do not sell, trade, or rent your personal information. We share
            information only with parties who help us deliver your job:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong className="text-neutral-900">Licensed subcontractors and trades,</strong>{' '}
              on a need-to-know basis (typically your name, site
              address, scope, and access notes).
            </li>
            <li>
              <strong className="text-neutral-900">Suppliers,</strong>
              when ordering materials such as cabinetry, tiles, or fixtures we
              may provide the delivery address.
            </li>
            <li>
              <strong className="text-neutral-900">Insurers, building surveyors, and councils,</strong>{' '}
              where required for permits, certifications, or insurance
              claims relating to your project.
            </li>
            <li>
              <strong className="text-neutral-900">Accounting, payment, and IT providers,</strong>{' '}
              including our hosting provider Netlify and the email
              and accounting tools we use to run the business.
            </li>
          </ul>

          <h3 className="pt-2 text-base font-semibold text-neutral-900">
            5. Photographs and marketing
          </h3>
          <p>
            We may use photographs of completed work in our portfolio, on
            social media, and in marketing materials. We aim to crop or frame
            images so that the property cannot be identified, and we will not
            publish street numbers or interior images that include people
            without your consent. If you would prefer your project not to be
            featured, please let us know in writing and we will respect that
            request.
          </p>

          <h3 className="pt-2 text-base font-semibold text-neutral-900">
            6. Cookies and analytics
          </h3>
          <p>
            This website does not use advertising or cross-site tracking
            cookies. Essential cookies may be used for site functionality and
            security. We use privacy-friendly analytics to understand how
            visitors find our services in aggregate.
          </p>

          <h3 className="pt-2 text-base font-semibold text-neutral-900">
            7. Data security, retention, and overseas storage
          </h3>
          <p>
            We take reasonable steps to protect your information, including
            encrypted transport (HTTPS), password-protected business systems,
            and access controls on photographs and project files.
          </p>
          <p>
            Quote and enquiry information is kept for up to{' '}
            <strong className="text-neutral-900">24 months</strong> if the
            enquiry does not become a job. Records for completed jobs
            (contracts, invoices, photos, certificates) are retained for at
            least <strong className="text-neutral-900">7 years</strong> to
            meet our tax and building-warranty obligations.
          </p>
          <p>
            Some of our service providers (hosting, email, cloud storage)
            store data outside Australia, primarily in the United States. By
            engaging us you acknowledge that your information may be processed
            in those locations under equivalent privacy protections.
          </p>

          <h3 className="pt-2 text-base font-semibold text-neutral-900">
            8. Access, correction, and complaints
          </h3>
          <p>
            You can ask to access or correct the personal information we hold
            about you, or raise a privacy concern, by emailing{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold underline underline-offset-2"
            >
              {siteConfig.email}
            </a>
            . We will respond within{' '}
            <strong className="text-neutral-900">30 days</strong>. If you are
            not satisfied with our response you may lodge a complaint with
            the Office of the Australian Information Commissioner (OAIC) at{' '}
            <a
              href="https://www.oaic.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2"
            >
              www.oaic.gov.au
            </a>
            .
          </p>

          <h3 className="pt-2 text-base font-semibold text-neutral-900">
            9. Changes to this policy
          </h3>
          <p>
            We may update this Privacy Policy from time to time. The current
            version is always available on this page.
          </p>

          <p className="pt-2 text-xs text-neutral-500">
            Last updated: 1 June 2026
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Footer() {
  const prefersReduced = useReducedMotion()
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <footer className="border-t border-(--color-line) bg-(--color-primary) px-4 pb-10 pt-6 text-white">
      <div className="mx-auto mb-4 flex max-w-6xl justify-center">
        <a
          href="#top"
          aria-label="Back to top"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white/80 backdrop-blur transition hover:bg-white/18 hover:text-white"
        >
          <ArrowUp size={13} />
          Back to Top
        </a>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt={siteConfig.name}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-black uppercase tracking-[0.16em] text-white">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-white/55">
                {siteConfig.serviceArea}
              </p>
            </div>
          </div>

          <a
            href="https://aperixstudio.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Built by Aperix"
            className="flex w-24 flex-col items-center justify-center gap-1 self-center text-center text-white/55 transition hover:text-white"
          >
            <motion.span
              className="grid h-7 w-7 place-items-center"
              animate={prefersReduced ? undefined : { rotate: 360 }}
              transition={
                prefersReduced
                  ? undefined
                  : { duration: 5, ease: 'linear', repeat: Infinity }
              }
            >
              <img
                src={aperixLogo}
                alt=""
                aria-hidden="true"
                className="h-7 w-7"
              />
            </motion.span>
            <span className="block w-full text-center text-[10px] font-bold uppercase leading-none tracking-[0.08em] text-white">
              Built by Aperix
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 pt-2 text-center">
          <p className="text-xs text-white/55">
            © 2026 Complete Trade Solutions. All rights reserved.
          </p>
          <button
            onClick={() => setPrivacyOpen(true)}
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35 transition hover:text-white/70"
          >
            <span className="text-white/20">(</span> Privacy Policy{' '}
            <span className="text-white/20">)</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {privacyOpen && <PrivacyModal onClose={() => setPrivacyOpen(false)} />}
      </AnimatePresence>
    </footer>
  )
}
