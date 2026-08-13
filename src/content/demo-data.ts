/**
 * Sample output shown in the product screenshots on the page.
 *
 * This is illustrative demo content, not real patient data — the names, member
 * IDs and reference numbers are fabricated and match the reference design.
 * Keep it that way: never put live PHI in the marketing bundle.
 */
import type { ActivityEntry } from './types'

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
