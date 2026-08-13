import type { SVGProps } from 'react'

/**
 * Typographic reconstructions of the customer logo marks in the reference
 * design. The supplied assets are 15–25px rasters, so these are redrawn as
 * vectors to stay sharp; swap in the official files when the partners provide
 * them (see `src/content/partners.ts`).
 */

/** Kipu Health — a six-spoke asterisk. */
export function KipuMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {[0, 60, 120].map((angle) => (
        <rect
          key={angle}
          x="10.75"
          y="2.5"
          width="2.5"
          height="19"
          rx="1.25"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
    </svg>
  )
}

/** Osborne Chiropractic — a rounded cross. */
export function OsborneMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="10.4" y="2.8" width="3.2" height="18.4" rx="1.6" />
      <rect x="2.8" y="10.4" width="18.4" height="3.2" rx="1.6" />
    </svg>
  )
}

/** Transparent Billing — a shield with an inset check. */
export function TransparentMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 1.9 3.6 4.8v6.4c0 4.9 3.4 9.4 8.4 10.9 5-1.5 8.4-6 8.4-10.9V4.8L12 1.9Z"
        fill="currentColor"
      />
      <path
        d="m8.4 11.9 2.7 2.7 4.9-5"
        fill="none"
        stroke="#08162a"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
