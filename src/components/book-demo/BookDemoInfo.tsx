import { Check, Phone } from 'lucide-react'

import { AudioMeter } from '@/components/sections/AudioMeter'
import { IconCircle } from '@/components/ui/icon-circle'
import {
  BOOK_DEMO_BUBBLE,
  BOOK_DEMO_CALL,
  BOOK_DEMO_HERO,
  BOOK_DEMO_TRUST,
} from '@/content/book-demo'
import { cn } from '@/lib/utils'

/** The call-progress card sitting beside the mascot. */
function CallStatusCard() {
  return (
    <div className="w-full max-w-[17rem] rounded-2xl border border-white/10 bg-navy-900/80 p-4 shadow-card-lg backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <IconCircle size="md" className="bg-brand-600 text-white">
          <Phone aria-hidden="true" />
        </IconCircle>
        <AudioMeter className="opacity-90" />
      </div>

      <p className="mt-3 text-base font-semibold text-white">{BOOK_DEMO_CALL.title}</p>

      <ul className="mt-2.5 flex flex-col gap-2">
        {BOOK_DEMO_CALL.steps.map((step) => (
          <li key={step.label} className="flex items-center justify-between gap-3 text-sm">
            <span className={cn(step.done ? 'text-white/90' : 'text-frost-500')}>{step.label}</span>
            {step.done ? (
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="size-5 shrink-0 rounded-full border-2 border-white/25"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * The mascot art with its speech bubble anchored fully above the image (not
 * overlapping the head), offset toward the right so the tail points back
 * down at the mascot.
 */
function Mascot() {
  return (
    <div className="relative shrink-0">
      <img
        src="/images/ivrrex-bookdemo-thumbsup.png"
        width={983}
        height={1105}
        alt="IVRRex, the xDial AI agent, wearing a headset and giving a thumbs up."
        className="h-auto w-[13rem] select-none sm:w-[15rem] lg:w-[16rem]"
        loading="lazy"
        decoding="async"
        draggable={false}
      />

      <div className="absolute right-[-1.5rem] bottom-full mb-4 w-[11rem] rounded-2xl border border-white/15 bg-navy-900/90 px-3.5 py-3 shadow-card-lg backdrop-blur-sm sm:right-[-1rem] sm:w-[12rem]">
        <p className="text-sm leading-snug font-semibold text-white">{BOOK_DEMO_BUBBLE[0]}</p>
        <p className="mt-1 text-xs text-frost-300">{BOOK_DEMO_BUBBLE[1]}</p>
        <span
          aria-hidden="true"
          className="absolute -bottom-2 left-7 size-4 rotate-45 border-r border-b border-white/15 bg-navy-900"
        />
      </div>
    </div>
  )
}

/** The left column: pitch, checklist, mascot and call card, trust badges. */
export function BookDemoInfo() {
  return (
    <div className="hidden flex-col md:flex">
      <h1 className="split-h1 text-pretty text-white">
        {BOOK_DEMO_HERO.headline.lead}
        <span className="text-brand-500">{BOOK_DEMO_HERO.headline.accent}</span>
      </h1>

      <p className="mt-2 max-w-md text-base text-frost-300">{BOOK_DEMO_HERO.paragraph}</p>

      <ul className="mt-4 flex flex-col gap-3">
        {BOOK_DEMO_HERO.checklist.map(({ title, description }) => (
          <li key={title} className="flex items-start gap-3">
            <IconCircle size="md" className="mt-0.5 bg-brand-600 text-white">
              <Check aria-hidden="true" strokeWidth={3} />
            </IconCircle>
            <span className="min-w-0 pt-0.5">
              <span className="block text-base font-bold text-white">{title}</span>
              <span className="mt-0.5 block text-sm text-frost-300">{description}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-20 flex flex-col items-center gap-5 sm:mt-24 sm:flex-row sm:items-end sm:gap-6">
        <Mascot />
        <CallStatusCard />
      </div>

      <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-white/10 pt-4">
        {BOOK_DEMO_TRUST.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex items-center gap-2.5">
            <IconCircle size="sm" className="bg-brand-600 text-white">
              <Icon aria-hidden="true" />
            </IconCircle>
            <span className="text-sm text-white/85">
              {title} {description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
