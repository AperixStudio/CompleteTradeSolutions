import newShop from '../assets/CarouselPhotos/NewShop.jpeg'
import newShopFloor from '../assets/CarouselPhotos/NewShopFloor.jpeg'
import oldShopNewRoof from '../assets/CarouselPhotos/OldShopNewRoof.jpeg'
import oldPlaceBefore from '../assets/CarouselPhotos/OldPlaceBefore.jpeg'
import oldPlaceBeforeAlso from '../assets/CarouselPhotos/OldPlaceBeforeAlso.jpeg'
import oldShopFloor from '../assets/CarouselPhotos/OldShopFloor.jpeg'
import oldShopFloorAlso from '../assets/CarouselPhotos/OldShopFloorAlso.jpeg'
import windowBnA from '../assets/CarouselPhotos/Window-BnA.jpeg'
import landscapeDirt from '../assets/CarouselPhotos/LandscapeDirt.jpeg'
import landscapeGrass from '../assets/CarouselPhotos/LandscapeGras.jpeg'
import fenceBefore from '../assets/CarouselPhotos/NewFence.jpeg'
import fenceAfter from '../assets/CarouselPhotos/FenceAfter.jpeg'
import type { FaqItem } from './faqs'
import { siteConfig } from './site'

export type ServicePhoto = {
  src: string
  alt: string
}

export type ServiceDefinition = {
  slug: string
  title: string
  tickerLabel: string
  eyebrow: string
  intro: string
  paragraphs: string[]
  scope: string[]
  outcomes: string[]
  batch: 1 | 2
  published: boolean
  image: string
  imageAlt: string
  gallery: ServicePhoto[]
  faqs: FaqItem[]
  seo: {
    title: string
    description: string
  }
}

export const services: ServiceDefinition[] = [
  {
    slug: 'renovation-remodeling',
    title: 'Renovation and Remodeling',
    tickerLabel: 'Renovation and Remodeling',
    eyebrow: 'Residential and commercial upgrades',
    intro:
      'Kitchen, bathroom, and whole-property renovations managed with clear communication and coordinated trades across metro Melbourne.',
    paragraphs: [
      'Renovation projects move faster when planning, demolition, trade sequencing, and finishing are handled in one clear process. Complete Trade Solutions supports homeowners and commercial clients who want practical upgrades without the usual confusion between trades.',
      'Whether you are refreshing a single room or reshaping how a property works day to day, we help you understand scope, timing, and the trades involved before work begins.',
    ],
    scope: [
      'Kitchen and bathroom renovation support',
      'Layout changes and internal remodeling',
      'Trade coordination across demolition, build, and finish stages',
      'Residential and light commercial improvement projects',
    ],
    outcomes: [
      'Clearer project sequencing from quote to handover',
      'Less back-and-forth between separate trades',
      'Renovation work aligned to how the space is actually used',
    ],
    batch: 1,
    published: true,
    image: oldPlaceBefore,
    imageAlt: 'Renovation and remodeling project by Complete Trade Solutions',
    gallery: [
      {
        src: oldPlaceBefore,
        alt: 'Residential property before renovation works',
      },
      {
        src: oldPlaceBeforeAlso,
        alt: 'Property exterior before improvement works',
      },
      {
        src: newShop,
        alt: 'Completed commercial renovation interior',
      },
    ],
    seo: {
      title:
        'Renovation and Remodeling Melbourne | Complete Trade Solutions',
      description:
        'Melbourne renovation and remodeling support for kitchens, bathrooms, and whole-property upgrades. Coordinated trades and clear project management.',
    },
    faqs: [
      {
        question:
          'Do you coordinate all trades for a kitchen or bathroom renovation in Melbourne?',
        answer:
          'Yes. Renovation and remodeling work often involves demolition, plumbing, electrical, painting, flooring, and finishing trades in a set order. Complete Trade Solutions manages that sequencing under one point of contact so the job keeps moving without you chasing separate contractors.',
      },
      {
        question:
          'Can Complete Trade Solutions handle a single-room upgrade and a whole-property remodel?',
        answer:
          'We support both. Some clients need a focused kitchen or bathroom refresh; others want broader layout changes across a home or commercial property. We scope the trades required, explain timing, and quote based on how the space needs to work day to day.',
      },
      {
        question:
          'How long does a typical renovation take in Melbourne?',
        answer:
          'Timelines depend on scope, approvals, and trade availability. A smaller room renovation may run over several weeks, while larger remodeling projects take longer. We outline realistic milestones before work starts rather than giving a one-size-fits-all timeframe.',
      },
      {
        question:
          'Do you take on commercial renovation projects as well as residential work?',
        answer:
          'Yes. Complete Trade Solutions supports residential improvements and light commercial upgrades where coordinated trades matter. That includes practical layout changes, fitout-related works, and property improvements across metro Melbourne.',
      },
      {
        question:
          'What should I share when requesting a renovation quote?',
        answer:
          `Tell us which rooms or areas are involved, what you want to change, and your rough timing. Photos, plans, or access notes help. Call ${siteConfig.phone} or use the contact form and we will follow up with a no-obligation quote path.`,
      },
    ],
  },
  {
    slug: 'roof-restoration',
    title: 'Exterior Construction and Roof Restoration',
    tickerLabel: 'Exterior Construction & Roof Restoration',
    eyebrow: 'Built to protect and present well',
    intro:
      'Exterior construction and roof restoration for properties that need durable workmanship, weather protection, and a cleaner overall finish.',
    paragraphs: [
      'Roof and exterior work affects both the look and long-term performance of a building. We approach these jobs with an eye on structure, weatherproofing, and the details that prevent costly rework later.',
      'From roof restoration through broader exterior construction support, clients get a clearer path from assessment to completed work.',
    ],
    scope: [
      'Roof restoration and exterior repair support',
      'Weather protection and structural presentation improvements',
      'Exterior construction coordination for residential and commercial sites',
      'Practical advice on scope before work starts',
    ],
    outcomes: [
      'Better protection against weather and wear',
      'Improved street appeal and building presentation',
      'Exterior work planned with the rest of the property in mind',
    ],
    batch: 1,
    published: true,
    image: oldShopNewRoof,
    imageAlt: 'Roof restoration project by Complete Trade Solutions',
    gallery: [
      {
        src: oldShopNewRoof,
        alt: 'Commercial building roof restoration project',
      },
      {
        src: fenceBefore,
        alt: 'Exterior fence construction in progress',
      },
      {
        src: fenceAfter,
        alt: 'Completed exterior fence installation',
      },
      {
        src: landscapeDirt,
        alt: 'Exterior landscaping preparation work',
      },
      {
        src: landscapeGrass,
        alt: 'Completed exterior landscaping with fresh turf',
      },
    ],
    seo: {
      title:
        'Roof Restoration Melbourne | Complete Trade Solutions',
      description:
        'Roof restoration and exterior construction services in metro Melbourne. Durable workmanship for residential and commercial properties.',
    },
    faqs: [
      {
        question:
          'How do I know if my Melbourne roof needs restoration rather than full replacement?',
        answer:
          'That depends on the roof condition, age, leaks, structural issues, and how the rest of the property is being upgraded. We assess what is actually required before quoting so you are not paying for work that does not match the building.',
      },
      {
        question:
          'Does Complete Trade Solutions handle exterior work beyond roof restoration?',
        answer:
          'Yes. Our exterior construction support can include related presentation and protection works such as fencing and broader exterior improvements, depending on the property and project scope across metro Melbourne.',
      },
      {
        question:
          'Can roof and exterior work be coordinated with other property upgrades?',
        answer:
          'It can, and that is often the smartest approach. When roofing, painting, fitout, or renovation work overlap, sequencing matters. We help line up exterior trades with the rest of the job so rework and delays are reduced.',
      },
      {
        question:
          'What affects the timeline for roof restoration in Melbourne?',
        answer:
          'Weather, access, roof size, repair scope, and whether other trades are active on site all affect timing. We discuss these factors upfront so you have a clearer picture before work begins.',
      },
      {
        question:
          'Do you inspect storm or weather damage before quoting roof work?',
        answer:
          'Yes. If weather exposure or visible damage is the reason for the enquiry, we use that context to shape scope and quote properly. Share photos and details when you contact us so the first conversation is useful.',
      },
    ],
  },
  {
    slug: 'cabinetry-fitouts',
    title: 'Cabinetry and Interior Fitouts',
    tickerLabel: 'Cabinetry and Interior Fitouts',
    eyebrow: 'Functional spaces, finished properly',
    intro:
      'Cabinetry and interior fitout work for clients who need storage, layout, and finish quality handled cleanly from planning through install.',
    paragraphs: [
      'Fitout work is where daily usability and final presentation meet. Complete Trade Solutions supports cabinetry and interior fitout projects that need accurate measurements, practical layouts, and tidy finishing.',
      'That includes commercial shop fitouts and residential joinery-focused improvements where the details matter as much as the overall result.',
    ],
    scope: [
      'Cabinetry planning and installation support',
      'Interior fitouts for commercial and residential spaces',
      'Joinery coordination with broader renovation workflows',
      'Finish-focused upgrades for usable, polished interiors',
    ],
    outcomes: [
      'Better use of space through practical layout decisions',
      'Cleaner handover across cabinetry and finishing trades',
      'Interior spaces that feel finished, not halfway done',
    ],
    batch: 1,
    published: true,
    image: newShopFloor,
    imageAlt: 'Commercial interior fitout by Complete Trade Solutions',
    gallery: [
      {
        src: newShopFloor,
        alt: 'Completed commercial shop floor fitout',
      },
      {
        src: oldShopFloor,
        alt: 'Shop floor before fitout upgrade',
      },
      {
        src: newShop,
        alt: 'Renovated commercial shop interior',
      },
    ],
    seo: {
      title:
        'Cabinetry and Interior Fitouts Melbourne | Complete Trade Solutions',
      description:
        'Cabinetry and interior fitout services in Melbourne for commercial and residential spaces. Practical layouts and quality finishing.',
    },
    faqs: [
      {
        question:
          'What is included in a cabinetry and interior fitout project?',
        answer:
          'Scope varies by property, but fitout work typically covers practical layout planning, cabinetry or joinery installation support, and coordination with finishing trades such as flooring, painting, and electrical so the space feels complete — not half finished.',
      },
      {
        question:
          'Do you fit out commercial shops as well as residential spaces?',
        answer:
          'Yes. Complete Trade Solutions supports commercial shop fitouts and residential joinery-focused improvements across metro Melbourne. The priority is usable layout, clean finishing, and trades sequenced properly for handover.',
      },
      {
        question:
          'Can fitout work be coordinated with flooring and electrical upgrades?',
        answer:
          'That is one of the main reasons clients use us. Cabinetry and fitouts often depend on power, lighting, and floor levels being handled in the right order. We coordinate those trades under one process instead of leaving you to manage the overlap.',
      },
      {
        question:
          'How do you plan cabinetry layouts before installation starts?',
        answer:
          'We start with how the space is used — storage needs, workflow, access, and finish expectations. Accurate planning before install reduces rework and helps the finished room feel deliberate rather than improvised.',
      },
      {
        question:
          'Can fitout work happen while part of a business stays open?',
        answer:
          'Sometimes, depending on the scope and access requirements. For commercial sites we discuss staging, working hours, and which areas can remain operational so disruption is kept as practical as possible.',
      },
    ],
  },
  {
    slug: 'painting',
    title: 'Painting Services',
    tickerLabel: 'Painting Services',
    eyebrow: 'Clean finishes inside and out',
    intro:
      'Interior and exterior painting for properties that need sharp presentation, durable finishes, and work coordinated with the rest of the job.',
    paragraphs: [
      'Good painting is as much about preparation and protection as it is about the final coat. Complete Trade Solutions supports painting work that fits cleanly into broader renovation, maintenance, and commercial improvement projects.',
      'Whether you are refreshing one area or updating the presentation of a whole property, we help keep scope, timing, and trade sequencing straightforward.',
    ],
    scope: [
      'Interior and exterior painting support',
      'Preparation, patching, and finish work coordination',
      'Residential and commercial repaint projects',
      'Painting aligned with renovation and maintenance workflows',
    ],
    outcomes: [],
    batch: 2,
    published: true,
    image: windowBnA,
    imageAlt: 'Painting and finishing work by Complete Trade Solutions',
    gallery: [
      {
        src: windowBnA,
        alt: 'Window renovation before and after painting finish',
      },
    ],
    seo: {
      title: 'Painting Services Melbourne | Complete Trade Solutions',
      description:
        'Interior and exterior painting services in metro Melbourne for residential and commercial properties. Quality finishes with clear project coordination.',
    },
    faqs: [
      {
        question:
          'Does your Melbourne painting service include preparation work?',
        answer:
          'Yes. A durable finish depends on proper preparation — patching, sanding, protection, and surface readiness before the top coats go on. We treat prep as part of the job, not an optional extra.',
      },
      {
        question:
          'Can painting be scheduled around other renovation or fitout trades?',
        answer:
          'That is the ideal way to run it. Painting often sits late in a renovation sequence, but touch-ups and partial repaints may happen earlier. We coordinate timing with other trades so fresh work is not damaged by what comes next.',
      },
      {
        question:
          'Do you paint both residential homes and commercial premises?',
        answer:
          'Yes. Complete Trade Solutions supports interior and exterior painting for residential properties and commercial spaces across metro Melbourne, especially where the repaint is part of a broader improvement project.',
      },
      {
        question:
          'How do you protect fittings and floors during a repaint?',
        answer:
          'Protection matters on every job. We plan what needs to be covered or masked, especially in occupied homes and active commercial spaces, so the finished result is clean without unnecessary mess or damage.',
      },
      {
        question:
          'Should I book painting before or after other renovation work?',
        answer:
          'Usually after major construction, plumbing, electrical, and flooring work — but not always. Tell us what else is happening on site and we will recommend a sequence that avoids rework and wasted finish work.',
      },
    ],
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Services',
    tickerLabel: 'Plumbing Services',
    eyebrow: 'Licensed trade support',
    intro:
      'Plumbing support for renovations, maintenance, and property improvement work across metro Melbourne.',
    paragraphs: [
      'Plumbing issues can quickly affect the rest of a project if they are not planned properly from the start. Complete Trade Solutions helps coordinate licensed plumbing work as part of a broader, clearer maintenance or renovation process.',
      'From bathroom and kitchen upgrades through to general property plumbing needs, clients get practical support without juggling multiple points of contact.',
    ],
    scope: [
      'Plumbing support for renovation and remodeling projects',
      'Maintenance and repair coordination',
      'Bathroom, kitchen, and utility plumbing workflows',
      'Licensed trade coordination within broader property works',
    ],
    outcomes: [],
    batch: 2,
    published: true,
    image: oldShopFloorAlso,
    imageAlt: 'Plumbing services by Complete Trade Solutions',
    gallery: [
      {
        src: oldShopFloorAlso,
        alt: 'Commercial property before plumbing and renovation works',
      },
      {
        src: oldShopFloor,
        alt: 'Shop floor area before plumbing and upgrade works',
      },
    ],
    seo: {
      title: 'Plumbing Services Melbourne | Complete Trade Solutions',
      description:
        'Plumbing services in metro Melbourne for renovations, maintenance, and property improvements. Licensed trade support with clear coordination.',
    },
    faqs: [
      {
        question:
          'Is plumbing work carried out by licensed plumbers?',
        answer:
          'Yes. Plumbing must be handled by licensed tradespeople. Complete Trade Solutions coordinates licensed plumbing support as part of a broader renovation, maintenance, or property improvement process across metro Melbourne.',
      },
      {
        question:
          'Can plumbing be booked as part of a bathroom or kitchen renovation?',
        answer:
          'That is one of the most common requests we handle. Bathroom and kitchen upgrades depend on plumbing being planned before tiling, cabinetry, and electrical work proceed. We sequence those trades so the wet areas are done properly the first time.',
      },
      {
        question:
          'Do you help with maintenance plumbing as well as planned upgrades?',
        answer:
          'Yes. Not every plumbing job is part of a full renovation. We also support maintenance and improvement work where licensed plumbing needs to be booked properly alongside other property trades.',
      },
      {
        question:
          'Can plumbing be coordinated with electrical and finishing trades on one job?',
        answer:
          'Yes. On active projects, trade order matters — especially in kitchens, bathrooms, and utility areas. We manage that coordination so plumbing is not finished in isolation from the rest of the build.',
      },
      {
        question:
          'What details help you quote plumbing work accurately?',
        answer:
          'Tell us the location, symptoms or upgrade goal, access constraints, and whether other renovation work is happening at the same time. Photos and a brief description of the existing setup help us respond with a clearer next step.',
      },
    ],
  },
  {
    slug: 'electrical',
    title: 'Electrical Services',
    tickerLabel: 'Electrical Services',
    eyebrow: 'Safe, compliant installations',
    intro:
      'Electrical support for renovations, fitouts, and property maintenance where safe, compliant workmanship matters.',
    paragraphs: [
      'Electrical work needs to be handled correctly, especially when it sits alongside other trades on an active project. Complete Trade Solutions coordinates licensed electrical support as part of a broader property improvement process.',
      'That helps reduce delays, miscommunication, and rework when lighting, power, and compliance requirements change during a job.',
    ],
    scope: [
      'Electrical support for renovation and fitout projects',
      'Maintenance and upgrade coordination',
      'Licensed electrical work within broader trade workflows',
      'Residential and commercial property improvements',
    ],
    outcomes: [],
    batch: 2,
    published: true,
    image: newShop,
    imageAlt: 'Electrical services by Complete Trade Solutions',
    gallery: [
      {
        src: newShop,
        alt: 'Commercial fitout with completed electrical and lighting work',
      },
    ],
    seo: {
      title: 'Electrical Services Melbourne | Complete Trade Solutions',
      description:
        'Electrical services in metro Melbourne for renovations, fitouts, and property maintenance. Safe, compliant trade support with clear coordination.',
    },
    faqs: [
      {
        question:
          'Is electrical work completed by licensed electricians?',
        answer:
          'Yes. Electrical work must be carried out safely and compliantly by licensed tradespeople. Complete Trade Solutions coordinates licensed electrical support within broader renovation, fitout, and maintenance projects.',
      },
      {
        question:
          'Can you upgrade lighting and power during a renovation or fitout?',
        answer:
          'Yes. Layout changes, new fittings, additional power points, and lighting upgrades are common during renovations and commercial fitouts. We help plan that work alongside other trades so compliance and finish quality stay aligned.',
      },
      {
        question:
          'Do you support electrical work on commercial properties?',
        answer:
          'Yes. Commercial fitouts and improvement projects often need lighting, power, and compliance considerations handled in step with cabinetry, flooring, and painting. We coordinate that as part of one clearer process.',
      },
      {
        question:
          'Why does trade sequencing matter for electrical work?',
        answer:
          'Electrical rough-in, fit-off, and testing often depend on what plumbing, cabinetry, and finishing trades are doing before and after. Poor sequencing causes delays and rework. We manage that order so the job stays on track.',
      },
      {
        question:
          'What should I mention when requesting an electrical quote?',
        answer:
          'Include the property type, what you want added or changed, any known compliance concerns, and whether other renovation work is underway. That helps us understand scope and respond with the right next step.',
      },
    ],
  },
  {
    slug: 'flooring',
    title: 'Flooring',
    tickerLabel: 'Flooring',
    eyebrow: 'Durable surfaces, finished well',
    intro:
      'Flooring solutions for residential and commercial spaces that need practical surfaces, clean installation, and coordination with the rest of the build.',
    paragraphs: [
      'Flooring changes the feel and function of a space immediately, but it also depends on what happened before it goes down. Complete Trade Solutions supports flooring work that fits properly into renovation, fitout, and maintenance projects.',
      'From preparation through to final install, the focus stays on a smoother process and a better finished result.',
    ],
    scope: [
      'Flooring support for renovation and fitout projects',
      'Surface preparation and installation coordination',
      'Residential and commercial flooring improvements',
      'Flooring aligned with broader property upgrade workflows',
    ],
    outcomes: [],
    batch: 2,
    published: true,
    image: newShopFloor,
    imageAlt: 'Flooring installation by Complete Trade Solutions',
    gallery: [
      {
        src: oldShopFloor,
        alt: 'Shop floor before flooring replacement',
      },
      {
        src: oldShopFloorAlso,
        alt: 'Commercial floor surface before upgrade',
      },
      {
        src: newShopFloor,
        alt: 'Completed commercial flooring installation',
      },
    ],
    seo: {
      title: 'Flooring Services Melbourne | Complete Trade Solutions',
      description:
        'Flooring services in metro Melbourne for residential and commercial properties. Practical surface upgrades with coordinated trade support.',
    },
    faqs: [
      {
        question:
          'What flooring projects do you support in Melbourne?',
        answer:
          'We support flooring as part of renovation, fitout, and property improvement work for residential and commercial spaces. That includes replacement projects where preparation, installation, and trade sequencing all need to line up properly.',
      },
      {
        question:
          'Does flooring installation include subfloor preparation?',
        answer:
          'Preparation is often the difference between a floor that lasts and one that fails early. We coordinate the prep and install stages properly, especially when other trades have already worked on the space or when levels need correction.',
      },
      {
        question:
          'When should new flooring be installed during a renovation?',
        answer:
          'Usually after major construction, plumbing rough-in, and electrical work — but before or alongside final painting and joinery depending on the space. We recommend sequencing based on your specific job so new floors are not damaged by later trades.',
      },
      {
        question:
          'Can flooring be replaced in an occupied commercial property?',
        answer:
          'Often yes, depending on access, business hours, and how the area can be staged. We discuss practical working arrangements upfront so disruption is managed as cleanly as possible.',
      },
      {
        question:
          'How do you quote flooring when multiple rooms are involved?',
        answer:
          'We look at total area, current floor condition, access, preparation needs, and whether the job ties into broader renovation work. Sharing room sizes, photos, and timing expectations helps us quote with clearer scope.',
      },
    ],
  },
]

export function getPublishedServices(excludeSlug?: string) {
  return services.filter(
    (service) => service.published && service.slug !== excludeSlug,
  )
}

export function getServiceBySlug(slug: string) {
  const service = services.find((item) => item.slug === slug)
  return service?.published ? service : undefined
}

export function getServicePath(slug: string) {
  return `/services/${slug}`
}
