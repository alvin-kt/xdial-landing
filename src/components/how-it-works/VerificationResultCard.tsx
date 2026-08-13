import { CircleCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { HIW_RESULT } from '@/content/how-it-works'
import { SiteLink } from '@/lib/router'
import { cn } from '@/lib/utils'

/** Step 03 — the structured benefits report the team receives. */
export function VerificationResultCard() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,11.5rem)_minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-6">
        {/* ------------------------------------------------ result badge -- */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-success-bg/70 px-5 py-8 text-center">
          <CircleCheck aria-hidden="true" className="size-14 text-success-fg" strokeWidth={1.5} />
          <p className="text-eyebrow text-success-fg uppercase">
            {HIW_RESULT.badge.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* ---------------------------------------------------- benefits -- */}
        <dl className="flex flex-col justify-center">
          {HIW_RESULT.benefits.map((row, index) => (
            <div
              key={row.label}
              className={cn(
                'flex items-baseline justify-between gap-4 py-2.5',
                index > 0 && 'border-t border-ink-200/70',
              )}
            >
              <dt className="text-sm text-ink-600">{row.label}</dt>
              <dd
                className={cn(
                  'text-sm font-medium tabular',
                  'highlight' in row ? 'text-success-fg' : 'text-ink-900',
                )}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* ------------------------------------------------ call details -- */}
        <dl className="flex flex-col justify-center gap-4 lg:border-l lg:border-ink-200 lg:pl-6">
          {HIW_RESULT.callDetails.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50">
                <Icon aria-hidden="true" className="size-4 text-brand-600" />
              </span>
              <div className="min-w-0">
                <dt className="text-meta text-ink-500">{label}</dt>
                <dd className="text-sm font-medium text-ink-900">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      {/* Offset past the badge column so the actions sit under the report. */}
      <div className="mt-5 grid gap-3 border-t border-ink-200 pt-5 sm:grid-cols-2 lg:ml-[13rem]">
        {HIW_RESULT.actions.map(({ icon: Icon, label, href }) => (
          <Button key={label} asChild variant="outline" size="cta" className="text-brand-600">
            <SiteLink href={href}>
              <Icon aria-hidden="true" />
              {label}
            </SiteLink>
          </Button>
        ))}
      </div>
    </div>
  )
}
