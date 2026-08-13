import { cn } from '@/lib/utils'

interface LogoProps {
  /** `light` for the dark header/CTA surfaces, `dark` for the light footer. */
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * The xDial lockup: the crossed-stroke "X" mark plus the wordmark.
 *
 * Rebuilt as vector + live text because the supplied asset
 * (`assets/codia-studio-31m446.SVG`) is a 27×30px raster and would not survive
 * being scaled up on a high-density display.
 */
export function Logo({ tone = 'light', className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <XMark className="size-7 shrink-0" />
      <span
        className={cn(
          'text-[1.375rem] leading-none font-bold tracking-[-0.02em]',
          tone === 'light' ? 'text-white' : 'text-ink-900',
        )}
      >
        xDial
      </span>
    </span>
  )
}

/** The mark on its own — two tapered strokes crossing, in two brand blues. */
export function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="xdial-mark-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="xdial-mark-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#60a5fa" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Back stroke: top-right to bottom-left. */}
      <path
        d="M25.4 3.6a2.9 2.9 0 0 1 .6 4.3L10.7 27.2a2.9 2.9 0 1 1-4.5-3.6L21.5 4.3a2.9 2.9 0 0 1 3.9-.7Z"
        fill="url(#xdial-mark-b)"
      />
      {/* Front stroke: top-left to bottom-right, notched at the crossing. */}
      <path
        d="M6.6 3.6a2.9 2.9 0 0 1 3.9.7l4.6 5.8-3.7 4.6-5.4-6.8a2.9 2.9 0 0 1 .6-4.3Zm10.1 13.7 3.7-4.6 5.6 7a2.9 2.9 0 1 1-4.5 3.6l-4.8-6Z"
        fill="url(#xdial-mark-a)"
      />
    </svg>
  )
}
