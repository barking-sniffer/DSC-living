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
  // public/images/hero.jpg — 2400×1600 — Sunlit Dutch interior, no people, no products
  hero: {
    src: '',
    alt: 'A sunlit living room in a Dutch home, tidy and lived-in',
    note: 'Sunlit Dutch interior — no people, no products',
  },
  // public/images/services/cleaning.jpg — 1200×900 — Kitchen surfaces, clean and empty
  serviceCleaning: {
    src: '',
    alt: 'Clean, empty kitchen surfaces',
    note: 'Kitchen surfaces, clean and empty',
  },
  // public/images/services/laundry.jpg — 1200×900 — Pressed shirts on hangers
  serviceLaundry: {
    src: '',
    alt: 'Pressed shirts hanging in a wardrobe',
    note: 'Pressed shirts on hangers',
  },
  // public/images/services/organising.jpg — 1200×900 — Ordered wardrobe, folded stacks
  serviceOrganising: {
    src: '',
    alt: 'An ordered wardrobe with folded stacks of clothing',
    note: 'Ordered wardrobe, folded stacks',
  },
  // public/images/services/garden.jpg — 1200×900 — Trimmed hedge, Dutch back garden
  serviceGarden: {
    src: '',
    alt: 'A trimmed hedge in a Dutch back garden',
    note: 'Trimmed hedge, Dutch back garden',
  },
  // public/images/services/cooking.jpg — 1200×900 — Hands preparing a family meal
  serviceCooking: {
    src: '',
    alt: 'Hands preparing a family meal in a home kitchen',
    note: 'Hands preparing a family meal',
  },
  // public/images/services/car.jpg — 1200×900 — Car on a driveway, finished by hand
  serviceCar: {
    src: '',
    alt: 'A car on a driveway, cleaned by hand',
    note: 'Car on a driveway, finished by hand',
  },
  // public/images/how-it-works.jpg — 1600×2000 — Team member with the shared calendar
  howItWorks: {
    src: '',
    alt: 'A DSC Living team member checking the shared calendar',
    note: 'Team member with the shared calendar',
  },
  // public/images/promise.jpg — 1600×2000 — ID card and keys on a hallway table
  promise: {
    src: '',
    alt: 'A DSC Living ID card and a set of house keys on a hallway table',
    note: 'ID card and keys on a hallway table',
  },
  // public/images/contact.jpg — 1600×2000 — Dutch house, clean path, clipped hedging
  contact: {
    src: '',
    alt: 'The front of a Dutch house with a clean path and clipped hedging',
    note: 'Dutch house, clean path, clipped hedging',
  },
  // public/images/og.jpg — 1200×630 — Open Graph card
  og: {
    src: '',
    alt: 'DSC Living — household management for busy families',
    note: 'Open Graph card',
  },
}
