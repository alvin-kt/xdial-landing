import {
  BookText,
  ClipboardCheck,
  FileCheck,
  Monitor,
  Phone,
  ShieldCheck,
  Shuffle,
  User,
} from 'lucide-react'

import { DialpadIcon, HashCircleIcon } from '@/components/icons'

import { ROUTES } from './navigation'
import type { FeatureItem, ProcessStep } from './types'

/** The agent's product name, used in several headings. */
export const AGENT_NAME = 'IVRRex'

export const HOW_IT_WORKS = {
  heading: { lead: 'How ', accent: AGENT_NAME, trail: ' Works' },
  subheading: ["Your new patient's benefits.", 'Verified automatically.'],
} as const

export const PROCESS_STEPS = [
  { icon: Phone, label: 'AI places\nthe call' },
  { icon: DialpadIcon, label: 'Navigates the\nphone system' },
  { icon: User, label: 'Speaks with\nrepresentative' },
  { icon: ClipboardCheck, label: 'Collects\ninformation' },
  { icon: FileCheck, label: 'Verification\ncomplete' },
] as const satisfies readonly ProcessStep[]

export const CAPABILITIES = {
  heading: ['Built for accurate,', 'reliable verification.'],
} as const

export const CAPABILITY_ITEMS = [
  { icon: Phone, title: 'Calls the payer', description: 'AI places the call for you' },
  {
    icon: ShieldCheck,
    title: 'Verifies benefits',
    description: 'Coverage, deductibles, copays, coinsurance, and more',
  },
  {
    icon: DialpadIcon,
    title: 'Navigates the phone system',
    description: 'Through IVR and phone menus',
  },
  {
    icon: HashCircleIcon,
    title: 'Captures reference number',
    description: 'For every verification',
  },
  { icon: User, title: 'Speaks naturally', description: 'With insurance representatives' },
  { icon: FileCheck, title: 'Generates report', description: 'Structured results you can trust' },
] as const satisfies readonly FeatureItem[]

export const INTEGRATIONS = {
  heading: ['Seamlessly integrate with', 'your existing systems.'],
  subheading: 'Send verification results where you need them.',
  targets: [
    { icon: BookText, label: 'EHR' },
    { icon: Monitor, label: 'RCM Systems' },
    { icon: ClipboardCheck, label: 'EMR' },
    { icon: Shuffle, label: 'Custom Workflows' },
  ],
  assurances: ['API First', 'Webhooks', 'Secure Data', 'HIPAA Ready'],
} as const

export const CLOSING_CTA = {
  heading: {
    lead: 'Give your team back their time.',
    accent: `Let ${AGENT_NAME} handle insurance verification.`,
  },
  primaryCta: { label: 'Book a Demo', href: ROUTES.bookDemo },
} as const
