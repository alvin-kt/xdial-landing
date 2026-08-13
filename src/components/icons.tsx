import type { SVGProps } from 'react'

/**
 * Local icon marks for the two glyphs in the reference design that have no
 * close equivalent in lucide. They follow lucide's conventions — a 24×24
 * viewBox, `currentColor`, and a 2px stroke — so they can be dropped into the
 * same slots and sized with the same `size-*` utilities.
 */

/** A telephone keypad: the 3×3 dot grid used for "navigates the phone system". */
export function DialpadIcon(props: SVGProps<SVGSVGElement>) {
  const positions = [6, 12, 18]
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {positions.map((cy) =>
        positions.map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.85" />),
      )}
    </svg>
  )
}

/** A hash enclosed in a ring, for "captures reference number". */
export function HashCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9.25" />
      <path d="M10.1 8.1 9.2 15.9M14.8 8.1l-.9 7.8M8.4 10.6h7.2M8 13.4h7.2" />
    </svg>
  )
}
