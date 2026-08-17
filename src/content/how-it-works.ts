import {
  Check,
  Clock,
  Download,
  FileText,
  HeartPulse,
  Lock,
  Phone,
  ShieldCheck,
  UserRound,
} from 'lucide-react'

import { DocumentCheckIcon, FormCheckIcon } from '@/components/icons'

import { ROUTES } from './navigation'
import type { IconComponent } from './types'

import { AGENT_NAME } from './product'

/* -----------------------------------------------------------------------------
   Hero
   -------------------------------------------------------------------------- */

export const HIW_HERO = {
  eyebrow: 'How it works',
  headline: { lead: 'Insurance Verification', accent: 'Without the Phone Work.' },
  paragraph:
    'xDial handles over-the-phone insurance verification from start to finish—so your team can focus on patients instead of payers.',
  primaryCta: { label: 'Book a Demo', href: ROUTES.bookDemo },
  secondaryCta: { label: 'Watch 60-Second Demo', href: '/#watch-a-verification' },
} as const

export type PipelineTone = 'brand' | 'green'

interface PipelineStage {
  readonly icon: IconComponent
  readonly title: string
  readonly description: string
  readonly tone: PipelineTone
}

/** The three-beat status strip under the hero copy. */
export const HIW_PIPELINE = [
  { icon: FileText, title: 'Submitted', description: 'Request received', tone: 'brand' },
  { icon: Clock, title: 'In Progress', description: `${AGENT_NAME} is working`, tone: 'green' },
  { icon: Check, title: 'Complete', description: 'Results delivered', tone: 'green' },
] as const satisfies readonly PipelineStage[]

/* -----------------------------------------------------------------------------
   The three numbered stages
   -------------------------------------------------------------------------- */

export const HIW_HEADING = 'How xDial Works'

export const HIW_STEPS = [
  {
    number: '01',
    title: 'Submit a Verification',
    description: 'Enter the patient and insurance information needed for the verification.',
    note: 'Patient + Insurance Information → xDial',
  },
  {
    number: '02',
    title: `${AGENT_NAME} Gets to Work`,
    description: 'xDial handles the insurance verification call from start to finish.',
  },
  {
    number: '03',
    title: 'Verification Complete',
    description:
      'Once complete, xDial organizes the information into a structured result your team can review.',
  },
] as const

/** Step 01 — the mock intake form. `wide` fields span the row on small screens. */
export const HIW_REQUEST_FORM = {
  title: 'New Verification Request',
  fields: [
    { label: 'Patient Name', value: 'Jane Smith' },
    { label: 'Date of Birth', value: '03/12/1985' },
    { label: 'Member ID', value: 'ABC123456789' },
    { label: 'Insurance Payer', value: 'Blue Cross Blue Shield', select: true },
    { label: 'Group Number', value: '123456' },
    { label: 'Relationship to Subscriber', value: 'Self', select: true },
  ],
  confirmation: { lead: 'Request submitted to ', accent: 'xDial' },
} as const

/** Step 02 — the in-progress call panel. */
export const HIW_CALL_PANEL = {
  title: 'Verification in progress...',
  status: 'Calling payer',
  elapsed: '03:47',
  /** Progress of the call, as a percentage of the bar's width. */
  progress: 86,
} as const

/** Step 03 — the structured benefits result. */
export const HIW_RESULT = {
  badge: ['Verification', 'Complete'],
  benefits: [
    { label: 'Coverage', value: 'Active', highlight: true },
    { label: 'Deductible', value: '$1,500.00' },
    { label: 'Deductible Met', value: '$625.00' },
    { label: 'Copay', value: '$25.00' },
    { label: 'Coinsurance', value: '20%' },
    { label: 'Prior Authorization', value: 'Not Required', highlight: true },
    { label: 'Reference Number', value: 'BCBS-57839284' },
  ],
  callDetails: [
    { icon: ShieldCheck, label: 'Insurance Company', value: 'Blue Cross Blue Shield' },
    { icon: Clock, label: 'Call Date / Time', value: 'May 15, 2025 10:23 AM' },
    { icon: Phone, label: 'Call Duration', value: '08:42' },
    { icon: UserRound, label: 'Representative', value: 'Amanda L.' },
  ],
  actions: [
    { icon: FileText, label: 'View Full Report', href: '/#full-report' },
    { icon: Download, label: 'Download PDF', href: '/#download-report' },
  ],
} as const

/* -----------------------------------------------------------------------------
   Summary strip and closing call to action
   -------------------------------------------------------------------------- */

export const HIW_SUMMARY = {
  heading: 'From Request to Result.',
  steps: [
    {
      icon: FormCheckIcon,
      title: 'Submit',
      description: 'Patient information goes in.',
    },
    {
      /** Rendered as the mascot portrait rather than a line icon. */
      image: '/images/ivrrex-head.png',
      title: `${AGENT_NAME} Calls`,
      description: 'xDial handles the phone work.',
    },
    {
      icon: ShieldCheck,
      title: 'Verify',
      description: 'Benefits information is collected.',
    },
    {
      icon: DocumentCheckIcon,
      title: 'Complete',
      description: 'Your team gets the results.',
    },
  ],
} as const

export const HIW_CTA = {
  heading: { lead: 'Your Staff Gets the Answer.', accent: 'Without Making the Call.' },
  paragraph: `Let ${AGENT_NAME} handle insurance verification.`,
  cta: { label: 'Book a Demo', href: ROUTES.bookDemo },
  assurances: [
    { icon: ShieldCheck, label: 'HIPAA Ready' },
    { icon: Lock, label: 'Secure' },
    { icon: HeartPulse, label: 'Built for Healthcare' },
  ],
} as const
