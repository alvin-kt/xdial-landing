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

/**
 * A filled-in form with a green confirmation badge on its corner — the mark the
 * reference design uses for the "request goes in" beat. Deliberately squarer
 * and field-lined so it reads apart from the completed-report document below.
 */
export function FormCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Form sheet, left open at the lower-right corner for the badge. */}
      <path d="M18.75 13.4V5.4a1.65 1.65 0 0 0-1.65-1.65H6.9A1.65 1.65 0 0 0 5.25 5.4v13.2a1.65 1.65 0 0 0 1.65 1.65h5.3" />
      {/* Two filled rows: a label tick with its value, then a pair of entries. */}
      <path d="M8.6 7.5v2M8.6 8.5h6.9" />
      <path d="M8.6 12.2h2.7M13.6 12.2h1.9" />
      {/* Confirmation badge, drawn over the sheet's lower corner. */}
      <circle cx="17.2" cy="17.2" r="4.05" fill="#ffffff" stroke="var(--color-success-fg)" />
      <path d="m15.4 17.25 1.25 1.25 2.35-2.5" stroke="var(--color-success-fg)" />
    </svg>
  )
}

/**
 * A lined document with a green confirmation badge on its corner — the mark the
 * reference design uses wherever a request has been submitted or completed.
 *
 * Two-tone by design: the page takes `currentColor` like any other icon, while
 * the badge stays green so the "done" signal survives on blue or dark tiles.
 */
export function DocumentCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Page with a folded top-right corner. */}
      <path d="M13.25 2.75H6.4a1.65 1.65 0 0 0-1.65 1.65v15.2a1.65 1.65 0 0 0 1.65 1.65h5.1" />
      <path d="M13.25 2.75 18.5 8v5.1" />
      <path d="M13.25 2.75V7a1 1 0 0 0 1 1h4.25" />
      <path d="M8 9.9h4.4M8 13.1h4.4M8 16.3h2.8" />
      {/* Confirmation badge, drawn over the page's lower corner. */}
      <circle cx="17.2" cy="17.2" r="4.05" fill="#ffffff" stroke="var(--color-success-fg)" />
      <path d="m15.4 17.25 1.25 1.25 2.35-2.5" stroke="var(--color-success-fg)" />
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
