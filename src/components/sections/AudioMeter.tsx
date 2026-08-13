import { cn } from '@/lib/utils'

/** Bar heights in px, tracing the waveform shape in the reference design. */
const BARS = [4, 8, 5, 11, 6, 13, 7, 10, 5, 12, 8, 14, 6, 9, 5, 11, 7, 4] as const

interface AudioMeterProps {
  className?: string
}

/**
 * The blue waveform on the in-progress activity row.
 *
 * Purely decorative — the row's own text already says a call is in progress, so
 * this is hidden from assistive technology.
 */
export function AudioMeter({ className }: AudioMeterProps) {
  return (
    <span aria-hidden="true" className={cn('flex h-4 items-center gap-[2px]', className)}>
      {BARS.map((height, index) => (
        <span
          key={index}
          className="w-[2px] meter-bar rounded-full bg-brand-500"
          style={{
            height: `${height}px`,
            animationDelay: `${(index * 70) % 900}ms`,
          }}
        />
      ))}
    </span>
  )
}
