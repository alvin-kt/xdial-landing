import type { NavLink } from './types'

/** Every page the client router knows about. */
export const ROUTES = {
  home: '/',
  howItWorks: '/how-it-works',
  security: '/security',
  support: '/support',
  bookDemo: '/book-a-demo',
} as const

/**
 * The site's single set of primary links, shared by the header and the
 * (non-expanded) footer. Written absolute (`/#product`) so `/#product`
 * resolves back to the home page from any route, rather than to a section of
 * the current one.
 */
const SECTION_NAV = [
  { label: 'Insurance Verification', href: '/#product' },
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Security', href: ROUTES.security },
  { label: 'Support', href: ROUTES.support },
] as const satisfies readonly NavLink[]

export const PRIMARY_NAV = SECTION_NAV
export const FOOTER_NAV = SECTION_NAV

export const LEGAL_NAV = [
  { label: 'Privacy', href: '/#privacy' },
  { label: 'Terms', href: '/#terms' },
  { label: 'HIPAA', href: '/#hipaa' },
] as const satisfies readonly NavLink[]

export const COPYRIGHT = '© 2025 xDial AI, LLC. All rights reserved.'

/** The compliance mark that closes the footer, stacked on two lines. */
export const HIPAA_BADGE = ['HIPAA', 'Ready'] as const

/* -----------------------------------------------------------------------------
   The expanded, multi-column footer used on Security and Support — richer
   than the single-row `SiteFooter` the marketing pages use, so it gets its
   own content and its own legal row.
   -------------------------------------------------------------------------- */

export const FOOTER_TAGLINE =
  'AI-powered phone workflows that handle over-the-phone insurance verification so your team can focus on what matters most.'

export const FOOTER_SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'X', href: 'https://x.com' },
] as const

export const EXPANDED_LEGAL_NAV = [
  { label: 'Privacy Policy', href: '/#privacy' },
  { label: 'Terms of Service', href: '/#terms' },
  { label: 'HIPAA Compliance', href: '/#hipaa' },
] as const satisfies readonly NavLink[]
