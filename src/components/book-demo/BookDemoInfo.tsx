import { Check, Phone } from 'lucide-react'

import { AudioMeter } from '@/components/sections/AudioMeter'
import { IconCircle } from '@/components/ui/icon-circle'
import { BOOK_DEMO_CALL, BOOK_DEMO_HERO, BOOK_DEMO_TRUST } from '@/content/book-demo'
import { cn } from '@/lib/utils'

/** The call-progress card sitting beside the mascot. */
function CallStatusCard() {
  return (
    <div className="w-full max-w-[22rem] rounded-2xl border border-white/10 bg-navy-900/80 p-4 shadow-card-lg backdrop-blur-sm sm:p-5">
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

/** The left column: pitch, checklist, mascot and call card, trust badges. */
export function BookDemoInfo() {
  return (
    <div className="flex flex-col">
      <h1 className="text-pretty text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.1] font-bold tracking-tight text-white">
        {BOOK_DEMO_HERO.headline.lead}
        <span className="text-brand-500">{BOOK_DEMO_HERO.headline.accent}</span>
      </h1>

      <p className="mt-3 max-w-md text-base text-frost-300">{BOOK_DEMO_HERO.paragraph}</p>

      <ul className="mt-5 flex flex-col gap-3">
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

      <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:items-end">
        <img
          src="/images/ivrrex-bookdemo-thumbsup.png"
          width={983}
          height={1105}
          alt="IVRRex, the xDial AI agent, wearing a headset and giving a thumbs up."
          className="h-auto w-[11rem] shrink-0 select-none sm:w-[12rem]"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <CallStatusCard />
      </div>

      <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-white/10 pt-5">
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
