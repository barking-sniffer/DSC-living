// The site map from the brief (Part 2), as data — this drives the header
// mega-menu, the footer, hreflang pairing, and which service pages exist
// as full content vs. a "not yet built" stub.
//
// `status`:
//   'built'  — full, bespoke content (its own page file)
//   'stub'   — rendered by the dynamic [slug] route with a short
//              "coming soon" page and a working WhatsApp CTA, so the
//              mega-menu never links to a 404 while priority 2/3 pages
//              are written
export interface RouteEntry {
  slug: string
  nlPath: string
  enPath: string
  nlTerm: string
  enTerm: string
  nlTitle: string
  enTitle: string
  priority: 1 | 2 | 3
  status: 'built' | 'stub'
  sector: 'wonen' | 'zakelijk'
}

export const serviceRoutes: RouteEntry[] = [
  {
    slug: 'schoonmaak',
    nlPath: '/wonen/schoonmaak/',
    enPath: '/en/residential/cleaning/',
    nlTerm: 'schoonmaakbedrijf Hoofddorp',
    enTerm: 'cleaning service Hoofddorp',
    nlTitle: 'Schoonmaak',
    enTitle: 'Cleaning',
    priority: 1,
    status: 'built',
    sector: 'wonen',
  },
  {
    slug: 'was-en-strijk',
    nlPath: '/wonen/was-en-strijk/',
    enPath: '/en/residential/laundry/',
    nlTerm: 'strijkservice Amstelveen',
    enTerm: 'laundry service Amstelveen',
    nlTitle: 'Was en strijk',
    enTitle: 'Laundry & ironing',
    priority: 3,
    status: 'stub',
    sector: 'wonen',
  },
  {
    slug: 'glazenwassen',
    nlPath: '/wonen/glazenwassen/',
    enPath: '/en/residential/window-cleaning/',
    nlTerm: 'glazenwasser Hoofddorp',
    enTerm: 'window cleaner Hoofddorp',
    nlTitle: 'Glazenwassen',
    enTitle: 'Window cleaning',
    priority: 2,
    status: 'stub',
    sector: 'wonen',
  },
  {
    slug: 'tuinonderhoud',
    nlPath: '/wonen/tuinonderhoud/',
    enPath: '/en/residential/garden/',
    nlTerm: 'tuinonderhoud Haarlemmermeer',
    enTerm: 'garden maintenance Haarlemmermeer',
    nlTitle: 'Tuinonderhoud',
    enTitle: 'Garden care',
    priority: 2,
    status: 'stub',
    sector: 'wonen',
  },
  {
    slug: 'autoreiniging',
    nlPath: '/wonen/autoreiniging/',
    enPath: '/en/residential/car-care/',
    nlTerm: 'auto reinigen aan huis',
    enTerm: 'car care at home',
    nlTitle: 'Autoreiniging',
    enTitle: 'Car care',
    priority: 3,
    status: 'stub',
    sector: 'wonen',
  },
  {
    slug: 'leegstandsbeheer',
    nlPath: '/wonen/leegstandsbeheer/',
    enPath: '/en/residential/vacant-property/',
    nlTerm: 'leegstandsbeheer woning',
    enTerm: 'vacant property management',
    nlTitle: 'Leegstandsbeheer',
    enTitle: 'Vacant property care',
    priority: 3,
    status: 'stub',
    sector: 'wonen',
  },
  {
    slug: 'kantoorschoonmaak',
    nlPath: '/zakelijk/kantoorschoonmaak/',
    enPath: '/en/commercial/office-cleaning/',
    nlTerm: 'kantoorschoonmaak Hoofddorp',
    enTerm: 'office cleaning Hoofddorp',
    nlTitle: 'Kantoorschoonmaak',
    enTitle: 'Office cleaning',
    priority: 2,
    status: 'stub',
    sector: 'zakelijk',
  },
  {
    slug: 'sportschool-schoonmaak',
    nlPath: '/zakelijk/sportschool-schoonmaak/',
    enPath: '/en/commercial/gym-cleaning/',
    nlTerm: 'sportschool schoonmaak',
    enTerm: 'gym cleaning',
    nlTitle: 'Sportschool schoonmaak',
    enTitle: 'Gym cleaning',
    priority: 3,
    status: 'stub',
    sector: 'zakelijk',
  },
]

export function wonenStubSlugs() {
  return serviceRoutes.filter((r) => r.sector === 'wonen' && r.status === 'stub')
}
export function zakelijkStubSlugs() {
  return serviceRoutes.filter((r) => r.sector === 'zakelijk' && r.status === 'stub')
}

// Trust/legal pages — Part 2.2. `written` pages have real, verified copy
// in this build; the rest are honest "awaiting content" stubs rather than
// invented legal text, and stay index,follow per the brief either way.
export interface LegalEntry {
  slug: string
  nlPath: string
  enPath: string
  nlTitle: string
  enTitle: string
  written: boolean
}

export const legalRoutes: LegalEntry[] = [
  { slug: 'veiligheid', nlPath: '/veiligheid/', enPath: '/en/safety/', nlTitle: 'Veiligheid', enTitle: 'Safety and security', written: true },
  { slug: 'faq', nlPath: '/veelgestelde-vragen/', enPath: '/en/faq/', nlTitle: 'Veelgestelde vragen', enTitle: 'Frequently asked questions', written: true },
  { slug: 'about', nlPath: '/over-ons/', enPath: '/en/about/', nlTitle: 'Over ons', enTitle: 'About DSC Living', written: false },
  { slug: 'privacy', nlPath: '/privacy/', enPath: '/en/privacy/', nlTitle: 'Privacyverklaring', enTitle: 'Privacy statement', written: true },
  { slug: 'terms', nlPath: '/algemene-voorwaarden/', enPath: '/en/terms/', nlTitle: 'Algemene voorwaarden', enTitle: 'Terms', written: false },
  { slug: 'disclaimer', nlPath: '/disclaimer/', enPath: '/en/disclaimer/', nlTitle: 'Disclaimer', enTitle: 'Disclaimer', written: false },
  { slug: 'complaints', nlPath: '/klachten/', enPath: '/en/complaints/', nlTitle: 'Klachten', enTitle: 'Complaints', written: false },
  { slug: 'reviews', nlPath: '/reviews/', enPath: '/en/reviews/', nlTitle: 'Reviews', enTitle: 'Reviews', written: true },
  { slug: 'accessibility', nlPath: '/toegankelijkheid/', enPath: '/en/accessibility/', nlTitle: 'Toegankelijkheid', enTitle: 'Accessibility', written: false },
  { slug: 'company-details', nlPath: '/bedrijfsgegevens/', enPath: '/en/company-details/', nlTitle: 'Bedrijfsgegevens', enTitle: 'Company details', written: true },
  { slug: 'cookies', nlPath: '/cookies/', enPath: '/en/cookies/', nlTitle: 'Cookiebeleid', enTitle: 'Cookie policy', written: true },
  // Referenced by the header's Company panel but not in the brief's own
  // site map (Part 2) — added as a stub so the link isn't dead.
  { slug: 'careers', nlPath: '/vacatures/', enPath: '/en/careers/', nlTitle: 'Vacatures', enTitle: 'Careers', written: false },
]
