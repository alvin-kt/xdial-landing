import { FileLock2, ShieldCheck } from 'lucide-react'

import type { IconComponent, NavLink } from './types'

/** Every page the client router knows about. */
export const ROUTES = {
  home: '/',
  howItWorks: '/how-it-works',
  support: '/support',
  bookDemo: '/book-a-demo',
  login: '/login',
} as const

/**
 * The site's single set of primary links, shared by the header and the
 * footer. Every entry is a real page route — none of these should ever
 * resolve to a mid-page anchor, so a click always lands at the top of the
 * destination page.
 */
export const PRIMARY_NAV = [
  { label: 'Insurance Verification', href: ROUTES.home },
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Support', href: ROUTES.support },
] as const satisfies readonly NavLink[]

export const COPYRIGHT = '© 2025 xDial AI, LLC. All rights reserved.'

/* -----------------------------------------------------------------------------
   The one footer every page shares: dark, multi-column, with the HIPAA/BAA
   badges under the tagline.
   -------------------------------------------------------------------------- */

export const FOOTER_TAGLINE =
  'AI-powered phone workflows that handle over-the-phone insurance verification so your team can focus on what matters most.'

interface FooterColumn {
  readonly heading: string
  readonly links: readonly NavLink[]
}

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Insurance Verification', href: ROUTES.home },
      { label: 'How It Works', href: ROUTES.howItWorks },
      { label: 'Integrations', href: '/#integrations' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/#about' },
      { label: 'Careers', href: '/#careers' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/#blog' },
      { label: 'Help Center', href: '/#help-center' },
      { label: 'Support', href: ROUTES.support },
    ],
  },
]

interface FooterBadge {
  readonly icon: IconComponent
  /** `\n`-separated, rendered on two lines as in the reference. */
  readonly label: string
}

export const FOOTER_BADGES: readonly FooterBadge[] = [
  { icon: ShieldCheck, label: 'HIPAA\nCompliant' },
  { icon: FileLock2, label: 'BAAs\nAvailable' },
]

export const FOOTER_SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'X', href: 'https://x.com' },
] as const

export const FOOTER_LEGAL_NAV = [
  { label: 'Privacy Policy', href: '/#privacy' },
  { label: 'Terms of Service', href: '/#terms' },
  { label: 'HIPAA Compliance', href: '/#hipaa' },
] as const satisfies readonly NavLink[]
