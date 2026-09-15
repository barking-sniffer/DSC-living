// Shared by every dynamic [slug] route. Kept in one place rather than
// redefined locally in each — several sibling [slug].astro files
// defining an identically-named top-level helper triggered a build-time
// bundling collision ("lastSegment is not defined") in Astro's static
// path generation.
export function lastSegment(path: string): string {
  return path.split('/').filter(Boolean).pop()!
}
