import { Lock } from 'lucide-react'

import { SECURITY_ORBIT } from '@/content/security'
import { cn } from '@/lib/utils'

const ORBIT_POSITION: Record<(typeof SECURITY_ORBIT)[number]['position'], string> = {
  'top-left': 'top-[6%] left-0',
  'top-right': 'top-[6%] right-0',
  'bottom-left': 'bottom-[6%] left-0',
  'bottom-right': 'bottom-[6%] right-0',
}

/**
 * The shield-and-lock mark, with four satellite icons orbiting it — cloud,
 * infrastructure, access and audit, the four pillars the page details below.
 * Built from primitives rather than a raster crop so it stays crisp and
 * recolourable.
 */
export function SecurityShield() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      {/* Faint guide ring the satellites sit on. */}
      <div
        aria-hidden="true"
        className="absolute inset-[9%] rounded-full border border-dashed border-white/10"
      />

      {/* Ambient glow behind the shield. */}
      <div
        aria-hidden="true"
        className="absolute inset-[16%] rounded-full bg-brand-500/25 blur-3xl"
      />

      {/* Shield body. */}
      <svg
        viewBox="0 0 200 220"
        className="absolute inset-[20%] size-[60%] drop-shadow-[0_18px_40px_rgba(23,91,240,0.45)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="shield-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2b7bf7" />
            <stop offset="100%" stopColor="#0e2e6e" />
          </linearGradient>
        </defs>
        <path
          d="M100 6 L184 38 V104 C184 156 148 196 100 214 C52 196 16 156 16 104 V38 Z"
          fill="url(#shield-fill)"
          stroke="#6ba2ff"
          strokeWidth="3"
        />
      </svg>
      <Lock
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-[13%] -translate-x-1/2 -translate-y-[58%] text-white"
        strokeWidth={2}
      />

      {/* Pedestal the shield floats above. */}
      <div
        aria-hidden="true"
        className="absolute bottom-[16%] left-1/2 h-3 w-[46%] -translate-x-1/2 rounded-full bg-brand-500/50 blur-md"
      />

      {SECURITY_ORBIT.map(({ icon: Icon, position }) => (
        <span
          key={position}
          className={cn(
            'absolute flex size-11 items-center justify-center rounded-full border border-white/15 bg-navy-900/90 shadow-card sm:size-14',
            ORBIT_POSITION[position],
          )}
        >
          <Icon aria-hidden="true" className="size-5 text-brand-400 sm:size-6" />
        </span>
      ))}
    </div>
  )
}
