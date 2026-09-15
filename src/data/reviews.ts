// Empty until real, verified reviews exist. `verified` and `consent` are
// required (not optional) so an entry cannot compile without both set —
// scripts/guards.mjs additionally fails the build if either is ever
// false, and separately fails if any aggregateRating/review markup
// appears in JSON-LD while this array is empty.
export interface Review {
  author: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  date: string // ISO date
  verified: true
  consent: true
}

export const reviews: Review[] = []
