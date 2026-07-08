import { siteConfig } from './site'

export type FaqItem = {
  question: string
  answer: string
}

/**
 * CTS-specific FAQs — framed around coordinated trades and commercial +
 * residential work, not generic renovation templates copied across competitors.
 */
export const generalFaqs: FaqItem[] = [
  {
    question:
      'Why use Complete Trade Solutions instead of hiring separate tradies?',
    answer:
      'Many Melbourne jobs need plumbing, electrical, painting, roofing, or fitout work in a clear sequence — not a string of separate quotes and handovers. Complete Trade Solutions coordinates licensed trades under one point of contact, with transparent pricing and one invoice, so the job keeps moving without you chasing people.',
  },
  {
    question:
      'Which trades can Complete Trade Solutions coordinate on one project?',
    answer:
      'We cover renovation and remodeling, exterior construction and roof restoration, painting, plumbing, electrical, cabinetry and interior fitouts, and flooring across metro Melbourne. That makes us a practical option when a kitchen, bathroom, shop fitout, or property upgrade needs more than one trade lined up properly.',
  },
  {
    question:
      'Do you work on commercial properties as well as residential homes?',
    answer:
      'Yes. Complete Trade Solutions supports both residential improvements and commercial projects such as shop fitouts, floor upgrades, and coordinated maintenance work. The focus is the same in both cases: clear scope, compliant workmanship, and trades sequenced so the property is usable again sooner.',
  },
  {
    question:
      'What does “one point of contact” mean for my renovation or fitout?',
    answer:
      'Instead of coordinating plumbers, electricians, painters, and other trades yourself, you deal with one team that manages communication, scheduling, and handover between stages. That reduces delays, crossed wires, and the usual stress of juggling multiple contractors on an active job.',
  },
  {
    question:
      'How do quotes work for multi-trade jobs in Melbourne?',
    answer:
      'We start with what you are trying to achieve — the space, the trades involved, timing, and any compliance requirements. From there we provide a no-obligation quote with clearer scope and pricing before work begins, rather than a vague estimate that changes once multiple trades are on site.',
  },
  {
    question:
      'Can you help with property maintenance, not just full renovations?',
    answer:
      'Yes. Not every job is a full remodel. We also support maintenance and improvement work where licensed trades need to be booked properly — from roofing and exterior repairs through to plumbing, electrical, painting, and flooring as part of a broader property upgrade.',
  },
  {
    question:
      'What areas of Melbourne do you service?',
    answer:
      `Complete Trade Solutions works across ${siteConfig.serviceArea}. If you are planning a residential or commercial job in the region, call ${siteConfig.phone} or send an enquiry and we will confirm we can help with your location and scope.`,
  },
  {
    question: 'Do you provide warranties on your work?',
    answer:
      'Yes, all our renovations come with a warranty for workmanship and materials. This ensures peace of mind and long-term satisfaction with your investment.',
  },
]
