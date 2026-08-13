import type { CSSProperties } from 'react'

import { cn } from '@/lib/utils'

interface HeroBubbleProps {
  lines: readonly string[]
  tone: 'green' | 'pink'
  /** Horizontal position of the tail, as a CSS length. */
  tailX: string
  className?: string
}

const TONE_COLOR: Record<HeroBubbleProps['tone'], string> = {
  green: 'var(--color-neon-green)',
  pink: 'var(--color-neon-pink)',
}

/**
 * A neon caption above the hero mascots.
 *
 * The reference design has these baked into the illustration raster; rebuilding
 * them as live text keeps the glow crisp at any density and keeps the words in
 * the DOM, so they are selectable, translatable and readable by screen readers.
 */
export function HeroBubble({ lines, tone, tailX, className }: HeroBubbleProps) {
  return (
    <p
      className={cn(
        'neon-bubble-tail neon-bubble px-3 py-2 text-center font-bold uppercase',
        'text-[0.8125rem] leading-[1.25] tracking-[0.01em] sm:text-[0.9375rem] lg:text-base',
        className,
      )}
      style={{ '--neon': TONE_COLOR[tone], '--tail-x': tailX } as CSSProperties}
    >
      {lines.map((line, index) => (
        <span key={line} className="block">
          {line}
          {index < lines.length - 1 ? ' ' : null}
        </span>
      ))}
    </p>
  )
}
