import type { NavLink } from './types'

export const PRIMARY_NAV = [
  { label: 'Product', href: '#product' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Healthcare', href: '#for-healthcare' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
] as const satisfies readonly NavLink[]

export const FOOTER_NAV = [
  { label: 'Product', href: '#product' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Healthcare', href: '#for-healthcare' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
] as const satisfies readonly NavLink[]

export const LEGAL_NAV = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
  { label: 'HIPAA', href: '#hipaa' },
] as const satisfies readonly NavLink[]

export const COPYRIGHT = '© 2025 xDial AI, LLC. All rights reserved.'
