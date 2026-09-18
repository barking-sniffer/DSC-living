// The single source of truth for every image on the site.
//
// Every slot starts with src: '' — that renders a labelled placeholder box
// (see src/components/Figure.astro) at the exact size/ratio the real photo
// will occupy, so there is never a layout shift when you drop a file in.
//
// TO ADD A PHOTO: save the file into public/images/ using the filename in
// the comment below, then set that slot's `src` to the matching path
// (e.g. '/images/hero.jpg'). Nothing else needs to change.

export interface ImageSlot {
  src: string
  alt: string
  note: string
}

export const images: Record<string, ImageSlot> = {
  // public/images/woonkamer-hoofddorp-daglicht.jpg — 2400×1600 — Sunlit Dutch interior, no people, no products
  hero: {
    src: '/images/woonkamer-hoofddorp-daglicht.jpg',
    alt: 'A sunlit living room in a Dutch home, tidy and lived-in',
    note: 'Sunlit Dutch interior — no people, no products',
  },
  // public/images/services/cleaning.jpg — 1200×900 — Kitchen surfaces, clean and empty
  serviceCleaning: {
    src: '/images/services/cleaning.jpg',
    alt: 'Clean, empty kitchen surfaces',
    note: 'Kitchen surfaces, clean and empty',
  },
  // public/images/services/laundry.jpg — 1200×900 — Pressed shirts on hangers
  serviceLaundry: {
    src: '/images/services/laundry.jpg',
    alt: 'Pressed shirts hanging in a wardrobe',
    note: 'Pressed shirts on hangers',
  },
  // public/images/services/organising.jpg — 1200×900 — Ordered wardrobe, folded stacks
  serviceOrganising: {
    src: '/images/services/organising.jpg',
    alt: 'An ordered wardrobe with folded stacks of clothing',
    note: 'Ordered wardrobe, folded stacks',
  },
  // public/images/services/garden.jpg — 1200×900 — Trimmed hedge, Dutch back garden
  serviceGarden: {
    src: '/images/services/garden.jpg',
    alt: 'A trimmed hedge in a Dutch back garden',
    note: 'Trimmed hedge, Dutch back garden',
  },
  // public/images/services/cooking.jpg — 1200×900 — Hands preparing a family meal
  serviceCooking: {
    src: '/images/services/cooking.jpg',
    alt: 'Hands preparing a family meal in a home kitchen',
    note: 'Hands preparing a family meal',
  },
  // public/images/services/car.jpg — 1200×900 — Car on a driveway, finished by hand
  serviceCar: {
    src: '/images/services/car.jpg',
    alt: 'A car on a driveway, cleaned by hand',
    note: 'Car on a driveway, finished by hand',
  },
  // public/images/how-it-works.jpg — 1600×2000 — Team member with the shared calendar
  howItWorks: {
    src: '/images/how-it-works.jpg',
    alt: 'A DSC Living team member checking the shared calendar',
    note: 'Team member with the shared calendar',
  },
  // public/images/promise.jpg — 1600×2000 — ID card and keys on a hallway table
  promise: {
    src: '/images/promise.jpg',
    alt: 'A DSC Living ID card and a set of house keys on a hallway table',
    note: 'ID card and keys on a hallway table',
  },
  // public/images/contact.jpg — 1600×2000 — Dutch house, clean path, clipped hedging
  contact: {
    src: '/images/contact.jpg',
    alt: 'The front of a Dutch house with a clean path and clipped hedging',
    note: 'Dutch house, clean path, clipped hedging',
  },
  // public/images/og.jpg — 1200×630 — Open Graph card
  og: {
    src: '/images/og.jpg',
    alt: 'DSC Living — household management for busy families',
    note: 'Open Graph card',
  },

  // --- Property-management homepage slots — brief Part 6.2. Buildings as
  // the subject, wide and architectural, empty and immaculate, natural
  // daylight. Distinct in tone from the warmer /wonen photography above.

  // public/images/property/vastgoedbeheer-nederland-landschap.jpg — 16:9 —
  // Supplied banner: aerial of a sustainable Dutch development at dusk.
  // NOTE: the supplied file has a headline and a "Get to know us" button
  // burned into the pixels. The alt text repeats that wording because it
  // is an image of text (WCAG 1.4.5) — if the text is ever removed from
  // the artwork, shorten the alt to describe the scene only.
  heroPortfolio: {
    src: '/images/property/vastgoedbeheer-nederland-landschap.jpg',
    alt: 'Aerial view at dusk of a sustainable Dutch development beside a canal, with wind turbines and a windmill on the horizon. Overlaid text reads: Future of sustainable living and workplace is now.',
    note: 'Wide architectural portfolio view — Dutch housing',
  },
  // public/images/property/survey.jpg — 4:3 — A condition survey underway: a tablet against a stairwell wall, a drawing on a worktop. Hands at most, no faces.
  survey: {
    src: '',
    alt: 'A tablet held against a stairwell wall during a condition survey',
    note: 'Condition survey underway — hands only, no faces',
  },
  // public/images/property/one-roof.jpg — 3:2 — An immaculate empty communal entrance, or a finished room in clean daylight.
  oneRoof: {
    src: '',
    alt: 'An immaculate, empty communal entrance in clean daylight',
    note: 'Immaculate empty communal entrance — the result',
  },
  // public/images/property/woningbeheer-woonwijk-luchtfoto.jpg — 16:9 —
  // Supplied banner, headline burned in (see heroPortfolio note).
  sectorResidential: {
    src: '/images/property/woningbeheer-woonwijk-luchtfoto.jpg',
    alt: 'Aerial view of a Dutch residential neighbourhood of houses and apartments along a canal. Overlaid text reads: Residential property management.',
    note: 'Dutch residential neighbourhood from the air',
  },
  // public/images/property/bedrijfspanden-kantorenpark.jpg — 16:9 —
  // Supplied banner, headline burned in (see heroPortfolio note).
  sectorCommercial: {
    src: '/images/property/bedrijfspanden-kantorenpark.jpg',
    alt: 'Aerial view of a modern office district at sunrise. Overlaid text reads: Unlock productivity with DSC for your commercial property.',
    note: 'Modern office district from the air',
  },
  // public/images/property/ai-woningautomatisering.jpg — 16:9 — Supplied
  // artwork for the AI section: a resident speaking a command, with
  // lights/temperature/music responding, and a tablet showing an
  // "AI HOME CONTROL" interface. Note this depicts a product that is not
  // built yet, so the surrounding copy carries the honesty burden.
  aiPlaceholder: {
    src: '/images/property/ai-woningautomatisering.jpg',
    alt: 'A man in an armchair speaks a command in a living room overlooking Dutch meadows; overlaid text reads Lights: Warm, Temperature: Set to 21°C, Music: Play Jazz, and a tablet beside him shows a DSC Living AI home control screen.',
    note: 'Home automation responding to a spoken command',
  },

  // --- Service-page hero slots. Filenames follow brief §3.5: descriptive
  // and hyphenated, never hero-1.jpg.

  // public/images/services/schoonmaak-hoofddorp-keuken.jpg — 16/10 — Clean kitchen surfaces, empty, daylight
  schoonmaakHero: {
    src: '/images/services/cleaning.jpg',
    alt: 'Schone, lege keukenoppervlakken in een woning',
    note: 'Kitchen surfaces, clean and empty',
  },
  // public/images/property/vve-appartementencomplex.jpg — 16/10 — Communal entrance / stairwell of an apartment block, immaculate
  vveHero: {
    src: '',
    alt: 'Een onberispelijke algemene ruimte in een appartementencomplex',
    note: 'Immaculate communal entrance — apartment complex',
  },
  // public/images/property/kantoor-hoofddorp.jpg — 16/10 — Empty modern office space, daylight
  zakelijkHero: {
    src: '',
    alt: 'Een leeg, modern kantoor in daglicht',
    note: 'Modern office interior, empty, daylight',
  },
}
