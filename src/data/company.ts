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
    city: 'Hoofddorp',
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

  // From Part 7.7 — a management/oversight fee, not a services price. See
  // the brief's note: do not reword as "packages from".
  entryPrice: {
    amount: 89,
    currency: 'EUR',
    display: '€89',
  },

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
