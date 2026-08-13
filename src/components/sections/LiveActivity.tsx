import { Check } from 'lucide-react'

import { AudioMeter } from '@/components/sections/AudioMeter'
import { LIVE_ACTIVITY } from '@/content/demo-data'
import { AGENT_NAME } from '@/content/product'
import { cn } from '@/lib/utils'

export function LiveActivity() {
  return (
    <div className="rounded-2xl bg-navy-750 p-4 shadow-card-lg sm:p-5">
      <h3 className="px-1 text-h4 text-white">{LIVE_ACTIVITY.title}</h3>

      <ul className="mt-3.5 divide-y divide-white/8 overflow-hidden rounded-xl border border-white/8 bg-navy-800">
        {LIVE_ACTIVITY.entries.map((entry) => (
          <li key={entry.message} className="flex items-center gap-2.5 px-3 py-2">
            <img
              src="/images/dino-sprite.png"
              width={24}
              height={24}
              alt=""
              aria-hidden="true"
              className="size-5 shrink-0 select-none pixelated"
              loading="lazy"
              decoding="async"
              draggable={false}
            />

            <span
              className={cn(
                'min-w-0 flex-1 text-sm',
                entry.complete ? 'font-semibold text-neon-green' : 'text-white/90',
              )}
            >
              {entry.message}
            </span>

            <span className="flex shrink-0 items-center justify-end">
              {entry.speaking ? (
                <AudioMeter />
              ) : entry.state === 'done' ? (
                <Check aria-hidden="true" className="size-4 text-neon-green" />
              ) : null}
            </span>

            <time className="w-[4.75rem] shrink-0 text-right text-meta text-frost-500 tabular">
              {entry.time}
            </time>
          </li>
        ))}
      </ul>

      {/* ------------------------------------------------------- footnote -- */}
      <div className="mt-4 flex items-end gap-2">
        <p className="relative flex-1 rounded-xl border border-neon-green/35 bg-neon-green/[0.06] px-4 py-3 text-base text-white">
          <span className="font-semibold">{AGENT_NAME}</span> handled this call so your team
          doesn&apos;t have to.
        </p>
        <img
          src="/images/dino-cheer.png"
          width={56}
          height={57}
          alt=""
          aria-hidden="true"
          className="size-12 shrink-0 select-none pixelated sm:size-14"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
    </div>
  )
}
