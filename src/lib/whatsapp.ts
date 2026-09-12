// The only conversion path on this site. Every CTA opens WhatsApp with a
// prefilled message — there is no form that submits anywhere.
//
// To change the WhatsApp number: edit WA_NUMBER below (digits only, no '+',
// no spaces). Nothing else needs to change.
const WA_NUMBER = '31621313588'

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const waMessages = {
  audit: `Hi DSC Living, I'd like to book a free home audit.`,
  auditWithPostcode: `Hi DSC Living, I'd like to book a free home audit. My postcode is: `,
  question: `Hi DSC Living, I have a question.`,
  direct: `Hi DSC Living, I have a question.`,
} as const

// Analytics: fire a cookieless custom event (Plausible) for every outbound
// WhatsApp click, labelled by where the click happened. This is the only
// conversion metric in phase 1.
export function trackWaClick(location: string) {
  if (typeof window === 'undefined') return
  const plausible = (window as unknown as { plausible?: (event: string, opts?: { props?: Record<string, string> }) => void }).plausible
  if (typeof plausible === 'function') {
    plausible('WhatsApp Click', { props: { location } })
  }
}
