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

// Bilingual message builders for the new (v3) pages — each service page
// passes a message naming that specific service, so the enquiry source is
// readable in the inbox (brief §10.3), and the AI section's link names
// that interest specifically rather than reusing the generic audit text.
export function serviceEnquiryMessage(locale: 'nl' | 'en', serviceName: string): string {
  return locale === 'nl'
    ? `Hallo DSC Living, ik wil graag een gratis opname voor: ${serviceName}. Mijn postcode is: `
    : `Hi DSC Living, I'd like a free audit for: ${serviceName}. My postcode is: `
}

export function auditMessage(locale: 'nl' | 'en'): string {
  return locale === 'nl'
    ? 'Hallo DSC Living, ik wil graag een gratis opname plannen.'
    : waMessages.audit
}

export function whatsappQuestionMessage(locale: 'nl' | 'en'): string {
  return locale === 'nl' ? 'Hallo DSC Living, ik heb een vraag.' : waMessages.question
}

export function aiInterestMessage(locale: 'nl' | 'en'): string {
  return locale === 'nl'
    ? 'Hallo DSC Living, houd mij op de hoogte van de AI-functies zodra die beschikbaar zijn.'
    : "Hi DSC Living, please let me know when the AI features are live."
}

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
