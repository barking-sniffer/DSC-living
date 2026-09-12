# DSC Living — marketing site

A static, single-page marketing site for DSC Living (household and facility
services, Hoofddorp NL). Built with Astro + Tailwind CSS. No backend, no
database, no login. Every enquiry opens WhatsApp with a prefilled message.

## Setup

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-checks then builds to dist/
npm run preview    # serve the production build locally
```

Node 18+ recommended.

## Project shape

```
src/
  components/            Figure.astro, CtaButton.astro, Nav.astro, Footer.astro,
                          FloatingWhatsApp.astro, StickyBar.astro
  components/sections/   Hero, TrustStrip, Services, HowItWorks, Promise,
                          Comparison, Contact
  data/images.ts         every image slot on the site — see "Adding photos" below
  i18n/en.ts, nl.ts       all page copy, one file per locale
  i18n/types.ts           the shared Dict shape both locales must satisfy
  lib/whatsapp.ts         the WhatsApp number and link builder — see below
  layouts/Base.astro      <head>, fonts, JSON-LD, analytics
  pages/index.astro       Dutch (default, /)
  pages/en/index.astro    English (/en/)
  pages/privacy.astro, terms.astro, cookie-policy.astro   legal stubs (+ /en/ versions)
```

## Adding a photo

Every image on the site is a labelled placeholder until a real photo is
added — dropping one in never shifts the layout, because the placeholder
already reserves the exact box (ratio) the photo will fill.

1. Save the photo into `public/images/` using the filename below.
2. Open `src/data/images.ts` and set that slot's `src` to the matching path,
   e.g. `src: '/images/hero.jpg'`.
3. That's it — nothing else changes.

| Slot (in images.ts) | File                          | Size      | Subject |
|---|---|---|---|
| `hero`               | `public/images/hero.jpg`                  | 2400×1600 | Sunlit Dutch interior, no people, no products |
| `serviceCleaning`    | `public/images/services/cleaning.jpg`     | 1200×900  | Kitchen surfaces, clean and empty |
| `serviceLaundry`     | `public/images/services/laundry.jpg`      | 1200×900  | Pressed shirts on hangers |
| `serviceOrganising`  | `public/images/services/organising.jpg`   | 1200×900  | Ordered wardrobe, folded stacks |
| `serviceGarden`      | `public/images/services/garden.jpg`       | 1200×900  | Trimmed hedge, Dutch back garden |
| `serviceCooking`     | `public/images/services/cooking.jpg`      | 1200×900  | Hands preparing a family meal |
| `serviceCar`         | `public/images/services/car.jpg`          | 1200×900  | Car on a driveway, finished by hand |
| `howItWorks`         | `public/images/how-it-works.jpg`          | 1600×2000 | Team member with the shared calendar |
| `promise`            | `public/images/promise.jpg`               | 1600×2000 | ID card and keys on a hallway table |
| `contact`            | `public/images/contact.jpg`               | 1600×2000 | Dutch house, clean path, clipped hedging |
| `og`                 | `public/images/og.jpg`                    | 1200×630  | Open Graph card |

Pre-size and compress photos before adding them — images placed in
`public/` are served as-is, not processed by Astro's image pipeline.

## Changing the WhatsApp number

Edit `WA_NUMBER` in `src/lib/whatsapp.ts` (digits only, no `+`, no spaces,
country code included). Every CTA on the site reads from this one constant.

## The contact form is not a form

The "Book your free home audit" form in the Contact section never submits
anywhere. It reads its own fields with a small script and rewrites the
"Send on WhatsApp" button's link on every keystroke, composing a message
like:

```
Hi DSC Living, I'd like to book a free home audit.

Name: Kumar
Postcode: 2132
Home: Terraced house
Services: Cleaning, Laundry & ironing
Note: The kitchen never stays on top of itself.
```

Any line the visitor left blank is omitted. Nothing is stored, logged, or
sent anywhere except into the WhatsApp app the visitor opens. This is also
why there's no cookie banner or consent checkbox — no personal data
processing happens on the website itself.

## The service selector

In the Services section, ticking any of the six service checkboxes rewrites
the "Build your package" button so it opens WhatsApp with an estimate
request naming exactly the services chosen. With nothing ticked, it falls
back to the plain audit-booking message.

## Languages

`/` is Dutch (default), `/en/` is English. Both are real static routes
sharing the same section components; only `src/i18n/nl.ts` /
`src/i18n/en.ts` differ. `nl.ts` holds a full Dutch translation of the
approved English copy — same claims, same numbers, nothing added.

Note: the WhatsApp message templates themselves (in `src/lib/whatsapp.ts`
and the composer scripts in `Services.astro` / `Contact.astro`) stay in
English on both locales — that's the literal text specified in the brief.
If DSC Living wants Dutch visitors to compose Dutch WhatsApp messages
instead, that's a small follow-up, not a bug.

## Analytics

A single Plausible (EU-hosted, cookieless) script tag in
`src/layouts/Base.astro`. Every outbound WhatsApp click fires a "WhatsApp
Click" custom event labelled by `location` (nav, hero-primary,
services-build-package, how-it-works, comparison, contact-composer,
contact-direct, footer, floating-button, sticky-bar, sticky-bar-icon) —
this is the only conversion signal in phase 1, so it's worth checking in
the Plausible dashboard which locations actually convert.

Replace `data-domain="dscliving.nl"` in `Base.astro` if the live domain
differs.

## Before launch — outstanding TODOs

These are left as literal `[TODO]` markers in the code so they can't be
quietly forgotten:

- **KvK and BTW numbers** — `src/i18n/en.ts` / `nl.ts`, `footer.kvk` /
  `footer.btw`. Shown in the site footer.
- **Privacy statement, Terms, Cookie policy** — `src/pages/privacy.astro`,
  `terms.astro`, `cookie-policy.astro` (and their `/en/` counterparts) are
  stubs. They're short because the site itself processes no personal data,
  but they still need real content and won't hold up as-is.
- **Real photography** — see the image table above.
- **Two things flagged from the brief that still need a decision** (not
  blocking a build, but will show up in copy once photos and real numbers
  land):
  - `From €599/month · min. 8 hrs` in the Comparison section works out to
    roughly €75/hour — well above the professional band quoted elsewhere.
    Confirm what the entry package actually contains.
  - The Promise section promises "one dedicated account manager"; if any
    other material promises 24/7 support, pick one and use it consistently.

## Phase 2 seam

Every call-to-action on the site goes through `src/components/CtaButton.astro`,
which carries a `kind` prop (`audit` | `package` | `question` | `compose`)
and a `// PHASE 2:` comment marking the one place a real
enquiry/booking backend would be wired in — no section file needs to
change when that happens.

## Definition of done

- [x] `npm run build` completes clean, no TypeScript errors
- [x] Every image slot renders a labelled placeholder; setting a `src` in
      `images.ts` swaps it with no layout shift
- [x] All CTAs open WhatsApp with the correct prefilled text
- [x] Service selector composes correctly and falls back when nothing is ticked
- [x] Contact composer omits blank lines and submits nothing anywhere
- [x] No third-party script beyond fonts, images, and the analytics beacon
- [ ] Lighthouse mobile ≥ 95 across all four categories — verify against a
      deployed URL (Lighthouse in a local headless run under-reports LCP
      versus a real CDN)
- [x] 390px wide: sticky bar, nav overlay, and comparison cards checked
- [x] `[TODO]` markers still visible for KvK and BTW
