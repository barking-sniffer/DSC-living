// English copy. This is the canonical key shape — nl.ts must mirror it
// exactly so both locales can be rendered by the same section components.
//
// Typed against the explicit Dict interface (not `typeof en`) so that
// nl.ts's different string content still satisfies the same type — two
// object literals with different literal string values are not otherwise
// structurally assignable to each other.
import type { Dict } from './types'
import { company } from '../data/company'

export const en: Dict = {
  meta: {
    title: 'DSC Living — Household Management for Busy Families | Hoofddorp',
    description:
      'Vetted, insured professionals in your home every week. Cleaning, laundry, ironing, organising, garden and car care. One monthly price, no employer paperwork. Book a free home audit.',
    lang: 'en',
    locale: 'en_GB',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    howItWorks: 'How it works',
    pricing: 'Pricing',
    forBuildings: 'For buildings',
    contact: 'Contact',
    login: 'Log in',
    cta: 'Book your audit',
    langLabel: 'NL / EN',
  },

  hero: {
    eyebrow: '360° HOME MANAGEMENT · HOOFDDORP & AMSTELVEEN',
    h1: 'Your time deserves care, not chores.',
    lead:
      "Trained, vetted, insured professionals in your home every week. Cleaning, laundry, ironing, organising, garden and car care — one monthly price, and none of the employer paperwork.",
    ctaPrimary: 'Book your free home audit',
    ctaSecondary: 'See how it works',
    microcopy: '45 minutes · no obligation · written price in two working days',
  },

  trustStrip: [
    { bold: 'VOG-screened', rest: 'before the first visit' },
    { bold: 'Directly employed', rest: 'on permanent Dutch contracts' },
    { bold: `${company.liabilityCover.amountShortEN} liability cover`, rest: '' },
    { bold: 'Cover guaranteed', rest: 'for illness and holidays' },
  ],

  services: {
    eyebrow: 'WHAT WE DO',
    h2: 'Six services. One team. One price.',
    intro:
      'Create your own package around how your household actually runs. Everything is set with you at the audit and written into your job sheet.',
    items: [
      {
        key: 'cleaning',
        title: 'Cleaning',
        tag: '',
        description:
          'Kitchens, bathrooms, floors, surfaces, dusting, bins — room by room to your written standard, plus a deep clean twice a year.',
      },
      {
        key: 'laundry',
        title: 'Laundry & ironing',
        tag: '',
        description:
          'Washed, dried, ironed, folded and put away. Shirts and school uniforms returned on hangers, or collected and done off-site.',
      },
      {
        key: 'organising',
        title: 'Wardrobe & organising',
        tag: 'FAMILIES',
        description:
          "Seasonal swaps, outgrown clothes sorted, playrooms reset, storage made findable. Nothing leaves your home without written approval.",
      },
      {
        key: 'garden',
        title: 'Gardening',
        tag: '',
        description:
          "Lawns, hedges, borders, terraces, leaf clearance, bins and seasonal work. Ground level only — we don't climb.",
      },
      {
        key: 'cooking',
        title: 'Cooking',
        tag: '',
        description:
          'Family meals cooked fresh in your kitchen on the days you choose. Allergies and dietary rules go into the job sheet before the first meal.',
      },
      {
        key: 'car',
        title: 'Car care',
        tag: 'WATERLESS',
        description:
          "Done on your drive while we're already there. Interior vacuum, dashboard, glass and a waterless exterior clean — no hoses, no run-off.",
      },
    ],
    footerNote1: 'Meal & grocery planning is available as an add-on.',
    footerNote2:
      'We plan the week with you, and bring household consumables in on the next visit — at cost plus an agreed handling fee, itemised on your invoice.',
    ctaBuildPackage: 'Build your package',
  },

  howItWorks: {
    eyebrow: 'HOW IT WORKS',
    h2: 'Four steps. The first one is free.',
    lead:
      "No price is quoted before we have seen your home — and please don't tidy up for us. We need to see it as it normally is, or the plan won't match your real week.",
    steps: [
      {
        number: '1',
        title: 'You choose your services',
        tag: '',
        description: 'Pick from the six. Build the package around your week, online or over the phone.',
      },
      {
        number: '2',
        title: 'We send an estimate',
        tag: '',
        description: 'An indicative monthly price, before anyone sets foot in your home.',
      },
      {
        number: '3',
        title: 'Your account manager visits',
        tag: 'WITHIN 24 HRS',
        description: 'Audits the home, fixes the quotation, and writes the job sheet you sign off.',
      },
      {
        number: '4',
        title: 'Service starts',
        tag: '',
        description: 'You meet your team before the first visit. From there, the house is handled.',
      },
    ],
    calloutTitle: 'Every visit lands in your calendar',
    calloutBody:
      'We sync to Google, Outlook and Apple — so you never wonder which day it is, and you see a change the moment we make one.',
    cta: 'Book your free home audit',
  },

  promise: {
    eyebrow: 'THE DSC LIVING PROMISE',
    h2: "You're giving someone a key to your house.",
    lead:
      'Everything in black and white — written down, agreed before we start, and yours to change at any time.',
    items: [
      {
        title: 'Verified & skilled staff, every time',
        description:
          'VOG-screened before the first visit, and each one carries a photo ID card with their DSC number.',
      },
      {
        title: 'Your keys, handled properly',
        description: 'Logged custody, never labelled with your address, revoked the day someone leaves us.',
      },
      {
        title: 'Cover for illness and holidays',
        description:
          'Arranged by us, at no extra cost, without you having to ask. That is the whole point.',
      },
      {
        title: `${company.liabilityCover.amountShortEN} liability cover`,
        description:
          'Something breaks, we replace it. You never negotiate with an individual, and never pay for it.',
      },
      {
        title: 'Not right? 48 hours to tell us',
        description:
          "We redo it at no charge, and walk the job sheet with you in case it's the spec that's wrong.",
      },
      {
        title: 'One dedicated account manager',
        description: 'One name, one number, one thread. Requests come to us, never to the person in your kitchen.',
      },
    ],
    footerNote:
      'Everyone who works for us is directly employed on permanent Dutch contracts at collective-agreement wages, with pension and full insurance. No grey market. It is most of why we cost what we cost.',
    ctaReadFull: 'Read the full promise',
  },

  comparison: {
    eyebrow: 'THE HONEST COMPARISON',
    h2: 'Time is money, and we value your time.',
    intro:
      'We cost more than twice what an arrangement from a social media group costs. Here is exactly what the difference buys.',
    headers: {
      left: '',
      middle: 'SOMEONE FROM A SOCIAL MEDIA GROUP',
      right: 'DSC LIVING',
    },
    rows: [
      {
        key: 'They fall sick',
        middle: 'You do it yourself, or it doesn’t happen',
        right: 'We send cover. Same day, same job sheet.',
      },
      {
        key: "They're booked for three weeks",
        middle: 'You do it yourself',
        right: "Covered. You don't arrange anything.",
      },
      {
        key: 'Material damage',
        middle: 'An awkward conversation. You absorb it.',
        right: `Replaced under our ${company.liabilityCover.amountShortEN} insurance.`,
      },
      {
        key: 'Employer liability',
        middle: 'Yours — with the obligations that carries',
        middleBold: true,
        right: 'Ours. You have a supplier and an invoice.',
        rightBold: true,
      },
      {
        key: 'What "clean" means',
        middle: 'Whatever you both assume',
        right: 'A written job sheet you approve and change',
      },
      {
        key: 'They leave',
        middle: 'Start again from scratch',
        right: "Not your problem. It's on us.",
      },
      {
        key: 'Price',
        keyBold: true,
        middle: '~€20 / hour, cash, on time',
        right: 'From €599 / month · min. 8 hrs',
        rightBold: true,
      },
    ],
    mobileMiddleLabel: 'Social media group',
    mobileRightLabel: 'DSC Living',
    calloutTitle: "Most people don't realise they're the employer",
    calloutBody:
      "Hire someone directly and Dutch law treats you as their employer — even without a contract, even paying cash. That carries up to six weeks' sick pay, minimum wage plus 8% holiday allowance, paid holiday, a month's notice, severance, and a duty of care if they're hurt in your home. With DSC Living, all of it is ours.",
    cta: 'Book your free audit',
  },

  contact: {
    eyebrow: 'CONTACT & BOOKING',
    h2: 'Book your free home audit.',
    lead:
      "45 minutes, no obligation, and a written price within two working days. Please don't tidy up for us — we need to see the house as it normally is.",
    ctaSend: 'Send on WhatsApp',
    ctaDirect: 'WhatsApp us',
    disclaimer: 'This opens WhatsApp with your details filled in. Nothing is stored on this website.',
    form: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      postcode: 'Postcode',
      homeType: 'Home type',
      homeTypeOptions: ['Apartment', 'Terraced', 'Semi-detached', 'Detached', 'Other'],
      services: 'Services',
      note: "What's driving you mad?",
      notePlaceholder: 'Optional',
    },
    footer: {
      phone: '+31 62 13 13 588',
      email: 'care@dscliving.nl',
      site: 'dscliving.nl',
      areaLabel: 'WHERE WE WORK',
      areas: 'Hoofddorp · Amstelveen · Haarlemmermeer · Amsterdam',
    },
  },

  footer: {
    company: 'DSC Living B.V.',
    kvk: '[TODO]',
    btw: '[TODO]',
    privacy: 'Privacy statement',
    terms: 'Terms',
    cookiePolicy: 'Cookie policy',
    email: 'care@dscliving.nl',
    whatsapp: 'WhatsApp us',
  },

  serviceNames: {
    cleaning: 'Cleaning',
    laundry: 'Laundry & ironing',
    organising: 'Wardrobe & organising',
    garden: 'Gardening',
    cooking: 'Cooking',
    car: 'Car care',
  },
}

export type { Dict }
