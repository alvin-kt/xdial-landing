import type { NavLink } from './types'

/** Every page the client router knows about. */
export const ROUTES = {
  home: '/',
  howItWorks: '/how-it-works',
} as const

/**
 * Section links are written absolute (`/#product`) so they resolve back to the
 * home page from any route, rather than to a section of the current one.
 */
const SECTION_NAV = [
  { label: 'Product', href: '/#product' },
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'For Healthcare', href: '/#for-healthcare' },
  { label: 'Security', href: '/#security' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Resources', href: '/#resources' },
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
