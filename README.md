# DSC Living — marketing site

A multi-page marketing site for DSC Living (property management, Hoofddorp NL).
Built with Astro + Tailwind. No backend, no database, no login. Every
enquiry opens WhatsApp with a prefilled message.

The site follows the **v3 build brief** (15 Sept 2026): the homepage is
positioned as 360° property management, the former single-page site moved
to `/wonen` as the residential hub, and dedicated service pages carry the
actual search demand. See that brief for the full rationale and copy —
this README covers what's built, what isn't yet, and how to work on it.

## Setup

```bash
npm install
npm run dev        # http://localhost:4321
npm run build       # type-checks, then builds to dist/
npm run guards      # runs the 12 postbuild guards against dist/ — see below
npm run preview     # serve the production build locally
```

## Site map — what's live

**Priority 1 (built in full):**

| Dutch | English | Status |
|---|---|---|
| `/` | `/en/` | New positioning homepage |
| `/wonen` | `/en/residential` | Residential hub (old homepage content) |
| `/wonen/schoonmaak` | `/en/residential/cleaning` | Full bespoke content |
| `/vve-beheer` | `/en/vve-management` | Full bespoke content |
| `/zakelijk` | `/en/commercial` | Full bespoke content (brief gave this copy too) |

**Priority 2/3 service pages** — `glazenwassen`, `tuinonderhoud`,
`was-en-strijk`, `autoreiniging`, `leegstandsbeheer` (under `/wonen/`),
`kantoorschoonmaak`, `sportschool-schoonmaak` (under `/zakelijk/`) — are
**not written yet**. They render as short, honest "coming soon" pages via
a shared dynamic route (`src/pages/wonen/[slug].astro`,
`src/pages/zakelijk/[slug].astro`, and the `/en/` equivalents), each with
a working WhatsApp CTA naming the service, so the mega-menu never links
to a 404 while these are being written. To turn one into a full page,
give it its own `index.astro` next to the others (same pattern as
`/wonen/schoonmaak`) — the dynamic route's `getStaticPaths` already
excludes any slug once it stops being a "stub" in `src/data/routes.ts`.

**Trust/legal pages** (`src/pages/[slug].astro` / `src/pages/en/[slug].astro`,
driven by `src/data/routes.ts`):

- Written in full: `/veiligheid`, `/veelgestelde-vragen`, `/privacy`,
  `/reviews`, `/bedrijfsgegevens`, `/cookies` (+ `/en/` equivalents)
- Honest `[[ TO POPULATE ]]` stubs, still `index,follow` per the brief:
  `/over-ons`, `/algemene-voorwaarden`, `/disclaimer`, `/klachten`,
  `/toegankelijkheid`, `/vacatures`

`/terms/` and `/cookie-policy/` (the old paths) 301-redirect to
`/algemene-voorwaarden/` and `/cookies/` at the nginx layer on the server.

## Key files

```
src/data/company.ts     single source of truth for identity, KvK, BTW, insurance figure
src/data/routes.ts       the site map as data — drives the mega-menu, footer, stub pages
src/data/images.ts       every Figure slot — src:'' until photography lands
src/data/reviews.ts      empty array, typed so an unverified entry can't compile
src/layouts/Base.astro   <head>: lang, canonical, hreflang, OG, JSON-LD
src/layouts/Service.astro  shell for service/hub pages (breadcrumbs, hero, closing CTA)
src/layouts/Legal.astro    shell for trust/legal pages (68ch column)
src/components/Header.astro  the mega-menu (Your needs / Services / Company)
src/components/Footer.astro  statutory block + legal links, sourced from company.ts
scripts/guards.mjs       the 12 postbuild guards from the brief + 6 from CR-01
```

Deviation from the brief's `src/content/{legal,services}/{nl,en}/*.md`
content-collection plan: given the scope of this pass, page copy lives as
typed data/props inside the `.astro` files themselves rather than in a
separate Markdown content collection. Functionally equivalent (no copy is
hardcoded in a shared component), but if a real CMS-editing workflow is
wanted later, migrating to content collections is a clean follow-up.

## Replacing a photo — use a new filename

`/images/*` is served `public, max-age=31536000, immutable`. Overwriting a
file in place therefore does **not** reach anyone: browsers and the CDN
keep serving the old bytes until the year is up. Replacing artwork means a
**new filename** (e.g. `...-v2.jpg`) and updating `src/data/images.ts` to
point at it. This bit us on the hero image on 18 Sept 2026.

## Adding a photo

Every image is a placeholder until a real photo lands — see
`src/data/images.ts`. Save the file into `public/images/` using a
**descriptive, hyphenated filename** (the brief is explicit: never
`hero-1.jpg` — `scripts/guards.mjs` guard 11 fails the build on that
pattern), then set that slot's `src`. Property-management-tone slots
(`heroPortfolio`, `survey`, `oneRoof`, `sectorResidential`,
`sectorCommercial`, `aiPlaceholder`, `vveHero`, `zakelijkHero`) still need
photography — see the brief's §6.2 image direction (buildings as the
subject, empty and architectural, natural daylight, no task-in-progress).

## Build guards

`npm run guards` implements the brief's 12 postbuild checks. As of this
build: **0 failing, 1 expected warning** — `company.ts` still holds
`[[ TO POPULATE ]]` for the legal entity name, address, KvK and BTW
number. That's a warning rather than a hard failure here (so the site can
still deploy with the gap clearly marked); flip it to a hard `fail()` in
`scripts/guards.mjs` once those values are real, ahead of a proper launch
gate.

## Hosting

Deployed to the existing EC2 instance behind nginx (`https://dscliving.nl`,
Let's Encrypt cert, Cloudflare proxied in front) rather than the brief's
S3 + CloudFront target — that's a separate infrastructure migration, not
attempted in this pass. nginx's `try_files` already resolves clean
directory URLs correctly, so the brief's CloudFront Function §11 doesn't
apply here; if S3/CloudFront is still wanted, that Function is exactly
what the brief specifies and can be lifted as-is.

**Cloudflare's managed robots.txt is overwriting this repo's `robots.txt`
on every request** — confirmed live: `curl https://dscliving.nl/robots.txt`
shows Cloudflare's own AI-crawler block list appended after this site's
`Content-Signal` directive, disallowing ClaudeBot/GPTBot/CCBot/etc exactly
as the brief warned it might. **Action needed in the Cloudflare
dashboard**: turn off the managed robots.txt feature (Security → Settings,
or the Bots section, depending on plan) so `public/robots.txt` actually
takes effect.

## Outstanding — brief Part 14

- **Company details** — entity name, KvK, BTW, registered address, all
  `[[ TO POPULATE ]]` in `src/data/company.ts` and the pages that render
  from it (footer, `/bedrijfsgegevens`, `/en/company-details`, JSON-LD).
- **Insurance figure** — the site states €1m (`company.liabilityCover`).
  Per the brief: confirm the AVB limit and whether it covers damage to
  property while being worked on; if excluded, the claim needs to come
  off before launch.
- **Screening policy** — confirm every employee actually provides a
  certificate of conduct (VOG) before their first visit; it's the
  strongest line on `/veiligheid` and it has to be true.
- **Terms** — two sets (consumer and business), with the 14-day
  WhatsApp-distance-contract withdrawal mechanism the brief specifies
  (§10.3) built into the flow, not just written into the terms text.
  `/algemene-voorwaarden` is currently a stub.
- **Keyword volumes** — the terms in the brief's Part 3 are unverified;
  check Ahrefs/Semrush/Keyword Planner before committing further build
  order beyond priority 1.
- **Photography** — see "Adding a photo" above.
- **Priority 2/3 service pages** — currently stubs; see "Site map" above.
- **Package ladder, VvE tiers, founding customers** — flagged in the
  brief as "to populate" on `/wonen`; not built this pass since no
  figures were supplied.
- **Google Business Profile, Search Console, directory listings** — brief
  Part 13, not a developer task but flagged as higher-priority than most
  of the remaining build work.

## Change Request 01 — open items (16 Sept 2026)

Built and deployed, but these need real-world confirmation, as CR-01
itself says Parts 5–7 should wait on them:

- **Membership (€20/month)** must genuinely deliver what the homepage
  lists: a maintained property record, real priority scheduling, a 24/7
  support line (with AI disclosure if an assistant answers it), and a
  member rate card visibly lower than the non-member rate. The figure
  lives in `company.membership`.
- **DSC Capital tax section**: no URL was supplied, so
  `company.dscCapitalUrl` is empty and the CTA renders as "website coming
  soon" instead of a dead link. Before relying on this section, confirm
  the claim stays scoped to tax (not Wft-regulated investment advice),
  DSC Capital has its own professional indemnity cover, and whoever signs
  returns has RB or NOB membership.
- **Partner disclosure**: the employment claim now promises that
  partner-delivered work is disclosed before booking. That commitment
  needs to exist in the WhatsApp templates and the standard proposal.
- **Registered address**: the city was previously set to Hoofddorp as an
  assumption; it is now `[[ TO POPULATE ]]` like the rest of the address.
- **Meta descriptions** still describe staff as "in loondienst" /
  "employed", per the v3 brief's instruction to leave metadata unchanged.
  The homepage meta description was the one exception: it advertised the
  €89 fee that no longer exists, so it now says "Lidmaatschap vanaf €20".
- **Safety page** no longer has a link from the homepage (CR-01 Part 4).
  If it underperforms in Search Console, one text link from `/` fixes it.

## WhatsApp

Unchanged mechanism: every CTA opens `wa.me` with a prefilled message,
`target="_blank" rel="noopener"`, no form submits anywhere. Service pages
and stub pages now pass a message naming the specific service
(`src/lib/whatsapp.ts` → `serviceEnquiryMessage`), so the enquiry source
is readable in the inbox, per brief §10.3. To change the WhatsApp number,
edit `WA_NUMBER` in `src/lib/whatsapp.ts`.
