import { CircleCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { IconCircle } from '@/components/ui/icon-circle'
import { HIW_RESULT } from '@/content/how-it-works'
import { SiteLink } from '@/lib/router'
import { cn } from '@/lib/utils'

/** Step 03 — the structured benefits report the team receives. */
export function VerificationResultCard() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card sm:p-6">
      {/* Column split, gaps and the divider's position are measured off the
          reference render (a 960px content column against our 1200px one, so
          ×1.25): a 148px badge, then the report, then the call details behind
          the rule. The badge was a third too wide, which pushed everything
          right of it out of place. */}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,9.25rem)_minmax(0,0.81fr)_minmax(0,1fr)] lg:gap-5">
        {/* ------------------------------------------------ result badge -- */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-success-bg/70 px-3 py-8 text-center">
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
          {HIW_RESULT.benefits.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4 py-1.5">
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
        <dl className="flex flex-col justify-center gap-4 lg:border-l lg:border-ink-200 lg:pl-5">
          {HIW_RESULT.callDetails.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <IconCircle size="sm" className="mt-0.5 bg-brand-50 text-brand-600">
                <Icon aria-hidden="true" />
              </IconCircle>
              <div className="min-w-0">
                <dt className="text-meta text-ink-500">{label}</dt>
                <dd className="text-sm font-medium text-ink-900">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      {/* Offset past the badge column so the actions sit under the report,
          and with no rule above them — the reference runs the buttons straight
          on from the details. */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-5 lg:ml-[10.5rem]">
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
