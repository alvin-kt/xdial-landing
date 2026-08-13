import type { ComponentType, SVGProps } from 'react'

/**
 * Any icon that renders as an SVG sized by `className` — covers every
 * `lucide-react` icon as well as the local marks in `components/icons`.
 */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export interface NavLink {
  readonly label: string
  readonly href: string
}

/** A titled item with a one-line supporting description and an icon. */
export interface FeatureItem {
  readonly icon: IconComponent
  readonly title: string
  readonly description: string
}

/** One numbered stage of the verification call. */
export interface ProcessStep {
  readonly icon: IconComponent
  /** Rendered on two lines in the reference design; kept as written. */
  readonly label: string
}

/** A row in the sample verification report. */
export interface ReportRow {
  readonly label: string
  readonly value: string
}

export type ActivityState = 'done' | 'active' | 'pending'

/** One line of the live call log. */
export interface ActivityEntry {
  readonly message: string
  readonly time: string
  readonly state: ActivityState
  /** Renders the animated audio meter instead of a check mark. */
  readonly speaking?: boolean
  /** Highlights the terminal "Verification complete!" line. */
  readonly complete?: boolean
}
