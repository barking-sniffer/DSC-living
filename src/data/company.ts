// Single source of truth for every identity value used in structured data,
// the footer statutory block, and legal copy. Fill in the [[ ]] fields
// before launch — scripts/guards.mjs fails the build if any populated
// value still contains "[[".
//
// Values legitimately still pending real information stay as literal
// [[ TO POPULATE ]] markers (matching the brief's own convention) rather
// than invented numbers.

export const company = {
  name: 'DSC Living',
  legalName: '[[ TO POPULATE — legal entity name ]]',
  tradeName: 'DSC Living',
  url: 'https://dscliving.nl',

  address: {
    street: '[[ TO POPULATE — street and number ]]',
    postcode: '[[ TO POPULATE — postcode ]]',
    city: '[[ TO POPULATE — city ]]',
    country: 'NL',
    countryName: 'Nederland',
  },

  kvk: '[[ TO POPULATE — KvK number ]]',
  btw: '[[ TO POPULATE — BTW/VAT number ]]',

  phone: '+31 62 13 13 588',
  phoneDisplay: '+31 62 13 13 588',
  email: 'care@dscliving.nl',

  areaServed: ['Hoofddorp', 'Amstelveen', 'Haarlemmermeer', 'Amsterdam'],

  // Insurance figure — the ONE place this number is allowed to live.
  // scripts/guards.mjs fails the build if "€1m" / "€1 miljoen" appears
  // anywhere in dist/ outside a value sourced from here.
  liabilityCover: {
    amount: '€1.000.000',
    amountShortNL: '€1 miljoen',
    amountShortEN: '€1m',
  },

  priceRange: '€€',

  // CR-01 Part 5 — membership, replacing the €89 management fee. This is
  // a membership price, never a service price: it covers the property
  // record, priority scheduling, the 24/7 support line and member rates.
  // Do not present it as "cleaning from €20" (unavailable "from" price).
  membership: {
    amount: 20,
    currency: 'EUR',
    displayEN: '€20',
    displayNL: '€ 20',
  },

  // CR-01 Part 7 — the tax section links OUT to DSC Capital (different
  // trading name, its own terms and privacy statement). No URL has been
  // supplied yet; the link renders only once this is set.
  dscCapitalUrl: '',

  social: {
    // Populate only the profiles that are real — Footer.astro renders
    // exactly the keys present here, nothing else.
    // instagram: 'https://instagram.com/dscliving',
    // linkedin: 'https://linkedin.com/company/dscliving',
    // google: 'https://g.page/dscliving',
  } as Record<string, string>,

  openingHours: {
    // 24/7 support line per Part 7.3 "Report anything, any time" — the
    // office/audit-booking hours are separate and still to confirm.
    supportLine: '24/7',
  },
}

export type Company = typeof company
