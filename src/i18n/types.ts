// The shared shape both locale dictionaries (en.ts, nl.ts) must satisfy.
// Defined as an explicit interface — rather than `typeof en` — so the two
// locales, which necessarily hold different string content, are still
// structurally interchangeable wherever a `Dict` is expected.

export interface ComparisonRow {
  key: string
  keyBold?: boolean
  middle: string
  middleBold?: boolean
  right: string
  rightBold?: boolean
}

export interface Dict {
  meta: {
    title: string
    description: string
    lang: string
    locale: string
  }

  nav: {
    home: string
    services: string
    howItWorks: string
    pricing: string
    forBuildings: string
    contact: string
    login: string
    cta: string
    langLabel: string
  }

  hero: {
    eyebrow: string
    h1: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    microcopy: string
  }

  trustStrip: Array<{ bold: string; rest: string }>

  services: {
    eyebrow: string
    h2: string
    intro: string
    items: Array<{ key: string; title: string; tag: string; description: string }>
    footerNote1: string
    footerNote2: string
    ctaBuildPackage: string
  }

  howItWorks: {
    eyebrow: string
    h2: string
    lead: string
    steps: Array<{ number: string; title: string; tag: string; description: string }>
    calloutTitle: string
    calloutBody: string
    cta: string
  }

  promise: {
    eyebrow: string
    h2: string
    lead: string
    items: Array<{ title: string; description: string }>
    footerNote: string
    ctaReadFull: string
  }

  comparison: {
    eyebrow: string
    h2: string
    intro: string
    headers: { left: string; middle: string; right: string }
    rows: ComparisonRow[]
    mobileMiddleLabel: string
    mobileRightLabel: string
    calloutTitle: string
    calloutBody: string
    cta: string
  }

  contact: {
    eyebrow: string
    h2: string
    lead: string
    ctaSend: string
    ctaDirect: string
    disclaimer: string
    form: {
      name: string
      email: string
      phone: string
      postcode: string
      homeType: string
      homeTypeOptions: string[]
      services: string
      note: string
      notePlaceholder: string
    }
    footer: {
      phone: string
      email: string
      site: string
      areaLabel: string
      areas: string
    }
  }

  footer: {
    company: string
    kvk: string
    btw: string
    privacy: string
    terms: string
    cookiePolicy: string
    email: string
    whatsapp: string
  }

  serviceNames: {
    cleaning: string
    laundry: string
    organising: string
    garden: string
    cooking: string
    car: string
  }
}
