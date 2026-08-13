/**
 * Sample output shown in the product screenshots on the page.
 *
 * This is illustrative demo content, not real patient data — the names, member
 * IDs and reference numbers are fabricated and match the reference design.
 * Keep it that way: never put live PHI in the marketing bundle.
 */
import type { ActivityEntry, ReportRow } from './types'

export const VERIFICATION_REPORT = {
  title: 'Verification Complete',
  status: 'Completed',
  patient: {
    name: 'John Smith',
    initials: 'JS',
    memberId: 'ABC123456789',
    plan: 'PPO',
  },
  benefitsHeading: 'Benefits',
  benefits: [
    { label: 'Deductible (Individual)', value: '$1,500.00' },
    { label: 'Deductible (Family)', value: '$3,000.00' },
    { label: 'Coinsurance', value: '20%' },
    { label: 'Copay', value: '$25.00' },
    { label: 'Out of Pocket Max', value: '$5,000.00' },
    { label: 'Prior Authorization', value: 'Required' },
  ] as const satisfies readonly ReportRow[],
  payer: {
    label: 'Insurance Company',
    name: 'Blue Cross Blue Shield',
  },
  callDetails: [
    { label: 'Date of Service', value: '05/15/2025' },
    { label: 'Call Date / Time', value: 'May 15, 2025 10:23 AM' },
    { label: 'Reference Number', value: 'BCBS-57839284' },
    { label: 'Representative', value: 'Amanda L.' },
    { label: 'Call Duration', value: '08:42' },
  ] as const satisfies readonly ReportRow[],
  actions: {
    download: 'Download PDF',
    send: 'Send to EHR',
  },
} as const

interface LiveActivityContent {
  readonly title: string
  readonly entries: readonly ActivityEntry[]
}

export const LIVE_ACTIVITY: LiveActivityContent = {
  title: 'IVRRex Live Activity',
  entries: [
    { message: 'Placing call to Blue Cross Blue Shield...', time: '10:12 AM', state: 'done' },
    { message: 'Navigating the phone system...', time: '10:12 AM', state: 'done' },
    { message: 'On hold... (defeating hold music 🎵)', time: '10:13 AM', state: 'done' },
    {
      message: 'Speaking with representative...',
      time: '10:14 AM',
      state: 'active',
      speaking: true,
    },
    { message: 'Collecting benefits and details...', time: '10:15 AM', state: 'active' },
    { message: 'Verification complete! 🎉', time: '10:16 AM', state: 'done', complete: true },
  ],
}
