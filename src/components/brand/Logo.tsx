import { cn } from '@/lib/utils'

interface LogoProps {
  /** `light` for the dark header/CTA surfaces, `dark` for the light footer. */
  tone?: 'light' | 'dark'
  /** `sm` is the compact footer lockup; `lg` is the expanded footer's larger mark. */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * The xDial AI lockup.
 *
 * The supplied artwork (`assets/xDial Logo 1.png`) is a stacked mark-over-
 * wordmark drawn in white on black; it ships here cropped to its content with
 * the black keyed out, so it sits directly on the navy surfaces. On the light
 * footer the same file is placed on a navy tile — recolouring the wordmark
 * would lose the gold-to-blue "AI" gradient.
 */
export function Logo({ tone = 'light', size = 'md', className }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center',
        tone === 'dark' &&
          (size === 'sm'
            ? 'rounded-lg bg-navy-950 px-2 py-1'
            : 'rounded-xl bg-navy-950 px-2.5 py-2'),
        className,
      )}
    >
      <img
        src="/images/xdial-logo.png"
        width={847}
        height={781}
        alt="xDial AI"
        className={cn(
          'w-auto select-none',
          size === 'sm' ? 'h-6' : size === 'lg' ? 'h-14 lg:h-16' : 'h-10 lg:h-11',
        )}
        draggable={false}
      />
    </span>
  )
}
