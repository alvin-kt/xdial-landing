import { Clock, ShieldCheck } from 'lucide-react'

import { ROUTES } from './navigation'
import type { FeatureItem } from './types'

export const HERO = {
  eyebrow: 'The AI employee for',
  /** Split so the second line can take the brand accent colour. */
  headline: { lead: 'Insurance Verification,', accent: 'Automated.' },
  paragraph:
    'xDial calls insurance companies, navigates the phone system, speaks with representatives, verifies patient benefits, and delivers a structured verification report—without your staff spending time on the phone.',
  primaryCta: { label: 'Book a Demo', href: ROUTES.bookDemo },
} as const

/** The proof points sitting under the hero calls-to-action. */
export const HERO_HIGHLIGHTS = [
  { icon: Clock, title: 'Save Hours', description: 'Per verification' },
  { icon: ShieldCheck, title: 'Improve Accuracy', description: 'Get reliable data' },
] as const satisfies readonly FeatureItem[]

/**
 * The two neon captions in the hero illustration. The reference render has
 * these flattened into the artwork; they are rebuilt as live text so they stay
 * sharp, selectable and translatable.
 */
export const HERO_BUBBLES = {
  agent: { lines: ['IVRREX', 'HAS THIS.'], tone: 'green' },
  payer: { lines: ['YOUR CALL IS', 'VERY IMPORTANT', 'TO US...'], tone: 'pink' },
} as const
