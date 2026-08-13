import { KipuMark, OsborneMark, TransparentMark } from '@/components/brand/partner-marks'

import type { IconComponent } from './types'

export interface Partner {
  /** Company name, set as the primary line of the lockup. */
  readonly name: string
  /** The smaller qualifier beneath it. */
  readonly qualifier: string
  /** `tracked` renders the qualifier letter-spaced (Kipu), `caps` uppercases it. */
  readonly qualifierStyle: 'tracked' | 'caps' | 'plain'
  readonly mark?: IconComponent
}

export const TRUST_STRIP_LABEL = ['Trusted by healthcare providers', 'and RCM teams'] as const

/**
 * Customer logos.
 *
 * NOTE: these are typographic reconstructions matched to the reference design —
 * the supplied assets are 15–25px rasters. Replace them with the official
 * logo files supplied by each partner before this page goes live.
 */
export const PARTNERS: readonly Partner[] = [
  { name: 'Kipu', qualifier: 'Health', qualifierStyle: 'tracked', mark: KipuMark },
  { name: 'USPI', qualifier: 'Surgery Centers', qualifierStyle: 'plain' },
  { name: 'Osborne', qualifier: 'Chiropractic', qualifierStyle: 'caps', mark: OsborneMark },
  { name: 'Transparent', qualifier: 'Billing', qualifierStyle: 'plain', mark: TransparentMark },
]

export const PARTNERS_SUFFIX = 'and more...'
