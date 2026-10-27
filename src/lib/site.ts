export const COMPANY = {
  name: 'Ledger Portal',
  legal: 'Ledger Portal Private Limited',
  tagline: 'Every rupee, on the right side of the book.',
  address: '214, Kasturba Gandhi Marg, Connaught Place, New Delhi 110001',
  phone: '+91 11 4155 2800',
  supportPhone: '+91 11 4155 2801',
  email: 'hello@ledgerportal.in',
  support: 'support@ledgerportal.in',
  hours: 'Monday–Saturday, 9:30 AM – 6:30 PM IST',
  gstin: '07AABCL1234P1Z5',
  cin: 'U62013DL2024PTC428901',
}

export const RELEASE = {
  version: '1.0.0',
  date: '27 October 2026',
  mac: {
    file: 'LedgerPortal-mac.dmg',
    label: 'macOS',
    detail: '12 Monterey or later · Intel & Apple silicon',
    size: 'DMG installer',
  },
  win: {
    file: 'LedgerPortal-x64.zip',
    label: 'Windows',
    detail: 'Windows 10 and 11 · 64-bit',
    size: 'Portable zip',
  },
}

export type Platform = 'mac' | 'win' | 'other'

export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'other'
  const ua = navigator.userAgent
  if (/Windows/i.test(ua)) return 'win'
  if (/Mac OS X|Macintosh/i.test(ua)) return 'mac'
  return 'other'
}

export function downloadHref(file: string) {
  return `/downloads/${file}`
}
