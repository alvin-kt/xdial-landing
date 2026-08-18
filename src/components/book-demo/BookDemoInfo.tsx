import { Check, Phone } from 'lucide-react'

import { AudioMeter } from '@/components/sections/AudioMeter'
import { IconCircle } from '@/components/ui/icon-circle'
import { BOOK_DEMO_CALL, BOOK_DEMO_HERO, BOOK_DEMO_TRUST } from '@/content/book-demo'
import { cn } from '@/lib/utils'

/** The call-progress card sitting beside the mascot. */
function CallStatusCard() {
  return (
    <div className="w-full max-w-[22rem] rounded-2xl border border-white/10 bg-navy-900/80 p-5 shadow-card-lg backdrop-blur-sm sm:p-6">
      <div className="flex items-center gap-3">
        <IconCircle size="md" className="bg-brand-600 text-white">
          <Phone aria-hidden="true" />
        </IconCircle>
        <AudioMeter className="opacity-90" />
      </div>

      <p className="mt-4 text-lg font-semibold text-white">{BOOK_DEMO_CALL.title}</p>

      <ul className="mt-3 flex flex-col gap-2.5">
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
      <h1 className="hero-h1 text-pretty text-white">
        {BOOK_DEMO_HERO.headline.lead}
        <span className="text-brand-500">{BOOK_DEMO_HERO.headline.accent}</span>
      </h1>

      <p className="mt-5 max-w-md text-lead text-frost-300">{BOOK_DEMO_HERO.paragraph}</p>

      <ul className="mt-8 flex flex-col gap-5">
        {BOOK_DEMO_HERO.checklist.map(({ title, description }) => (
          <li key={title} className="flex items-start gap-3.5">
            <IconCircle size="md" className="mt-0.5 bg-brand-600 text-white">
              <Check aria-hidden="true" strokeWidth={3} />
            </IconCircle>
            <span className="min-w-0">
              <span className="block text-base font-semibold text-white">{title}</span>
              <span className="mt-0.5 block text-sm text-frost-300">{description}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-end">
        <img
          src="/images/ivrrex-thumbsup.png"
          width={326}
          height={302}
          alt="IVRRex, the xDial AI agent, wearing a headset and giving a thumbs up."
          className="h-auto w-[15rem] shrink-0 select-none sm:w-[17rem]"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <CallStatusCard />
      </div>

      <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-7">
        {BOOK_DEMO_TRUST.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex items-center gap-2">
            <Icon aria-hidden="true" className="size-4 text-brand-500" />
            <span className="text-sm text-white/85">
              {title} {description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
