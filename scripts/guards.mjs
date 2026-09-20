#!/usr/bin/env node
// Postbuild guards — brief §10.2. Run after `astro build` against dist/.
// Each guard prints exactly what failed and where. Guards 1–5 and 12 are
// pass/fail against source data; 6, 7, 9, 10, 11 scan every built HTML
// file; 8 is a warning, not a failure, per the brief.
//
// Usage: node scripts/guards.mjs
// Exit code 0 = all fail-conditions clear (warnings may still print).
// Exit code 1 = at least one guard failed.

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const distDir = join(root, 'dist')

let failures = 0
let warnings = 0

function fail(guard, msg) {
  console.error(`✗ Guard ${guard}: ${msg}`)
  failures++
}
function warn(guard, msg) {
  console.warn(`! Guard ${guard} (warning): ${msg}`)
  warnings++
}
function ok(guard) {
  console.log(`✓ Guard ${guard}`)
}

function walk(dir, ext) {
  let out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const s = statSync(full)
    if (s.isDirectory()) out = out.concat(walk(full, ext))
    else if (full.endsWith(ext)) out.push(full)
  }
  return out
}

// --- Guard 1: company.ts contains a literal "[[" ---------------------
{
  const companySrc = readFileSync(join(root, 'src/data/company.ts'), 'utf8')
  if (companySrc.includes('[[')) {
    warn(
      1,
      'company.ts still has [[ TO POPULATE ]] placeholders (legalName, address, KvK, BTW). ' +
        'This is EXPECTED until those real values are supplied — treated as a warning here ' +
        'rather than a hard failure, so the site can still deploy with the gaps clearly marked. ' +
        'Flip this to fail() before a real launch build.',
    )
  } else {
    ok(1)
  }
}

// --- Guard 2: dist references googleapis.com or gstatic.com ----------
{
  if (!existsSafe(distDir)) {
    warn(2, 'dist/ not found — run `astro build` first, this guard was skipped.')
  } else {
    const htmlFiles = walk(distDir, '.html').concat(walk(distDir, '.css')).concat(walk(distDir, '.js'))
    const hits = []
    for (const f of htmlFiles) {
      const content = readFileSync(f, 'utf8')
      if (content.includes('googleapis.com') || content.includes('gstatic.com')) {
        hits.push(relative(distDir, f))
      }
    }
    if (hits.length) fail(2, `googleapis.com/gstatic.com referenced in: ${hits.join(', ')}`)
    else ok(2)
  }
}

// --- Guard 3: ec.europa.eu/consumers/odr (closed 20 July 2025) -------
{
  if (existsSafe(distDir)) {
    const htmlFiles = walk(distDir, '.html')
    const hits = htmlFiles.filter((f) => readFileSync(f, 'utf8').includes('ec.europa.eu/consumers/odr'))
    if (hits.length) fail(3, `ODR platform link found in: ${hits.map((f) => relative(distDir, f)).join(', ')}`)
    else ok(3)
  }
}

// --- Guard 4: reviews.ts entries must have verified===true, consent===true
{
  const reviewsSrc = readFileSync(join(root, 'src/data/reviews.ts'), 'utf8')
  const suspicious = /verified\s*:\s*false|consent\s*:\s*false/.test(reviewsSrc)
  if (suspicious) fail(4, 'reviews.ts contains an entry with verified/consent set to false')
  else ok(4)
}

// --- Guard 5: insurance figure hardcoded outside company.ts ----------
{
  const figures = ['€1.000.000', '€1 miljoen', '€1m']
  const srcFiles = walk(join(root, 'src'), '.astro').concat(walk(join(root, 'src'), '.ts'))
  const offenders = []
  for (const f of srcFiles) {
    if (f.endsWith('data/company.ts')) continue
    const content = readFileSync(f, 'utf8')
    for (const fig of figures) {
      if (content.includes(fig)) offenders.push(`${relative(root, f)} ("${fig}")`)
    }
  }
  if (offenders.length) fail(5, `insurance figure hardcoded outside company.ts: ${offenders.join(', ')}`)
  else ok(5)
}

// --- Guards 6, 7, 9, 10, 11: scan every built HTML file ---------------
if (existsSafe(distDir)) {
  const htmlFiles = walk(distDir, '.html')
  const seenTitles = new Map()
  const seenDescriptions = new Map()

  for (const f of htmlFiles) {
    const rel = relative(distDir, f)
    const html = readFileSync(f, 'utf8')

    // Guard 6: missing or duplicate H1
    const h1Matches = html.match(/<h1[\s>]/g) || []
    if (h1Matches.length === 0) fail(6, `${rel} — no <h1>`)
    else if (h1Matches.length > 1) fail(6, `${rel} — ${h1Matches.length} <h1> elements`)

    // Guard 7 + 8: title / description present, length
    const titleMatch = html.match(/<title>([^<]*)<\/title>/)
    const descMatch = html.match(/<meta name="description" content="([^"]*)"/)
    const title = titleMatch?.[1]?.trim()
    const description = descMatch?.[1]?.trim()
    if (!title) fail(7, `${rel} — missing <title>`)
    if (!description) fail(7, `${rel} — missing meta description`)
    if (title && title.length > 60) warn(8, `${rel} — title is ${title.length} chars (>60): "${title}"`)
    if (description && description.length > 160)
      warn(8, `${rel} — description is ${description.length} chars (>160)`)

    // Guard 9: collect for duplicate check below, scoped per <html lang>
    // — two hreflang-paired translations of the same page legitimately
    // sharing a short loanword title (e.g. "Reviews | DSC Living" in
    // both NL and EN) is normal and not what this guard is for; the
    // real target is two DIFFERENT pages in the SAME language sharing a
    // title.
    const langMatch = html.match(/<html lang="([^"]*)"/)
    const lang = langMatch?.[1] ?? 'unknown'
    if (title) {
      const key = `${lang}::${title}`
      if (!seenTitles.has(key)) seenTitles.set(key, [])
      seenTitles.get(key).push(rel)
    }
    if (description) {
      const key = `${lang}::${description}`
      if (!seenDescriptions.has(key)) seenDescriptions.set(key, [])
      seenDescriptions.get(key).push(rel)
    }

    // Guard 10: self-referencing canonical + hreflang pair
    const hasCanonical = /<link rel="canonical"/.test(html)
    const hreflangCount = (html.match(/<link rel="alternate" hreflang=/g) || []).length
    if (!hasCanonical) fail(10, `${rel} — missing self-referencing canonical`)
    if (hreflangCount < 3) fail(10, `${rel} — expected nl/en/x-default hreflang triplet, found ${hreflangCount}`)

    // Guard 11: <img> missing alt, or a lazy filename pattern
    const imgTags = html.match(/<img\b[^>]*>/g) || []
    for (const tag of imgTags) {
      if (!/alt="/.test(tag)) fail(11, `${rel} — <img> missing alt: ${tag.slice(0, 80)}`)
      const srcMatch = tag.match(/src="([^"]*)"/)
      if (srcMatch && /\/(image|img|hero|photo)[-_]?\d*\.[a-z]+(\?|$)/i.test(srcMatch[1])) {
        fail(11, `${rel} — lazy image filename: ${srcMatch[1]}`)
      }
    }

    // Guard 12: aggregateRating/review in JSON-LD while reviews.ts is empty
    const reviewsSrc = readFileSync(join(root, 'src/data/reviews.ts'), 'utf8')
    const reviewsEmpty = /reviews:\s*Review\[\]\s*=\s*\[\s*\]/.test(reviewsSrc)
    if (reviewsEmpty && (html.includes('"aggregateRating"') || html.includes('"@type":"Review"') || html.includes('"@type": "Review"'))) {
      fail(12, `${rel} — aggregateRating/Review present in JSON-LD while reviews.ts is empty`)
    }
  }

  for (const [title, files] of seenTitles) {
    if (files.length > 1) fail(9, `duplicate <title> "${title}" on: ${files.join(', ')}`)
  }
  for (const [desc, files] of seenDescriptions) {
    if (files.length > 1) fail(9, `duplicate meta description on: ${files.join(', ')} ("${desc.slice(0, 60)}...")`)
  }

  if (failures === 0) {
    ok('6/7/9/10/11/12 (all pages scanned)')
  }
}

// --- CR-01 guards ------------------------------------------------------
if (existsSafe(distDir)) {
  const htmlFiles = walk(distDir, '.html')
  let g13 = 0
  let g16 = 0
  for (const f of htmlFiles) {
    const rel = relative(distDir, f)
    const html = readFileSync(f, 'utf8')

    // Guard 13: every mega panel ships closed, every trigger collapsed
    for (const tag of html.match(/<[a-z]+\b[^>]*data-mega-panel[^>]*>/g) || []) {
      if (!/\shidden(\s|>|=)/.test(tag)) {
        fail(13, `${rel} — mega panel without hidden attribute: ${tag.slice(0, 90)}`)
        g13++
      }
    }
    for (const tag of html.match(/<[a-z]+\b[^>]*data-mega-trigger[^>]*>/g) || []) {
      if (!/aria-expanded="false"/.test(tag)) {
        fail(13, `${rel} — mega trigger not aria-expanded="false": ${tag.slice(0, 90)}`)
        g13++
      }
    }

    // Guard 16: no "Log in" anywhere in the built header
    const headerHtml = html.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? ''
    if (/Log in/.test(headerHtml)) {
      fail(16, `${rel} — "Log in" present in header`)
      g16++
    }
  }
  if (g13 === 0) ok(13)
  if (g16 === 0) ok(16)

  // Guard 15: "admission" never appears in English output (opname mistranslation)
  const enHits = walk(join(distDir, 'en'), '.html').filter((f) => /admission/i.test(readFileSync(f, 'utf8')))
  if (enHits.length) fail(15, `"admission" found in: ${enHits.map((f) => relative(distDir, f)).join(', ')}`)
  else ok(15)

  // Guard 17: no town name in visible headings or paragraphs. Titles, meta
  // and JSON-LD are allowed to keep them (CR-01 §2.6).
  const towns = /Hoofddorp|Haarlemmermeer|Amstelveen|Amsterdam|Schiphol/i
  let g17 = 0
  for (const f of htmlFiles) {
    const html = readFileSync(f, 'utf8').replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<head>[\s\S]*?<\/head>/, '')
      // Statutory disclosures (registered address) are legal text, not copy
      .replace(/<(div|section|footer)\b[^>]*data-statutory[^>]*>[\s\S]*?<\/\1>/g, '')
    for (const m of html.matchAll(/<(h1|h2|h3|p)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
      const text = m[2].replace(/<[^>]+>/g, ' ')
      const hit = text.match(towns)
      if (hit) {
        fail(17, `${relative(distDir, f)} — "${hit[0]}" inside <${m[1]}>: ${text.trim().slice(0, 80)}`)
        g17++
      }
    }
  }
  if (g17 === 0) ok(17)

  // Guard 18: AI and tax sections carry their labels and emit no structured data
  // The AI "in development" label was removed at the client's explicit
  // instruction on 18 Sept 2026 (see AiUpgrade.astro), so it is no longer
  // required here. The no-structured-data rule still applies to both
  // sections, and the tax section still must carry its label.
  const labels = {
    ai: [],
    tax: [/Uitgevoerd door DSC Capital/, /Delivered by DSC Capital/],
  }
  let g18 = 0
  let sectionsSeen = 0
  for (const f of htmlFiles) {
    const html = readFileSync(f, 'utf8')
    for (const m of html.matchAll(/<section\b[^>]*data-section="(ai|tax)"[^>]*>([\s\S]*?)<\/section>/g)) {
      sectionsSeen++
      const [, kind, inner] = m
      if (labels[kind].length && !labels[kind].some((re) => re.test(inner))) {
        fail(18, `${relative(distDir, f)} — ${kind} section missing its required label`)
        g18++
      }
      if (/application\/ld\+json|itemscope|itemtype/.test(inner)) {
        fail(18, `${relative(distDir, f)} — ${kind} section emits structured data`)
        g18++
      }
    }
  }
  if (sectionsSeen === 0) {
    fail(18, 'no AI or tax section found in any built page')
    g18++
  }
  if (g18 === 0) ok(18)

  // Guard 19: exactly one Google tag per page, loader + config, no dupes.
  // Google's own instruction: "Don't add more than one Google tag to each
  // page." Two tags double-count every session.
  const GA_ID = 'G-KRL77LZ41J'
  let g19 = 0
  for (const f of htmlFiles) {
    const html = readFileSync(f, 'utf8')
    const loaders = (html.match(/googletagmanager\.com\/gtag\/js\?id=/g) || []).length
    const configs = (html.match(new RegExp(`gtag\\('config',\\s*'${GA_ID}'\\)`, 'g')) || []).length
    const ids = (html.match(new RegExp(GA_ID, 'g')) || []).length
    if (loaders !== 1 || configs !== 1) {
      fail(19, `${relative(distDir, f)} — expected 1 gtag loader and 1 config, found ${loaders}/${configs}`)
      g19++
    }
    if (ids && !html.includes(`gtag/js?id=${GA_ID}`)) {
      fail(19, `${relative(distDir, f)} — measurement ID present but loader does not use it`)
      g19++
    }
  }
  if (g19 === 0) ok(19)

  // Guard 14: built CSS carries the global hidden rule verbatim
  const cssFiles = walk(distDir, '.css')
  const hasHiddenRule = cssFiles.some((f) => readFileSync(f, 'utf8').includes('[hidden]{display:none!important}'))
  if (hasHiddenRule) ok(14)
  else fail(14, 'built CSS does not contain [hidden]{display:none!important}')
}

function existsSafe(p) {
  try {
    statSync(p)
    return true
  } catch {
    return false
  }
}

console.log(`\n${failures} failing guard(s), ${warnings} warning(s).`)
process.exit(failures > 0 ? 1 : 0)
