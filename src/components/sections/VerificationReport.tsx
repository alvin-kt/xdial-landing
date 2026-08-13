import { Download, Inbox } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { VERIFICATION_REPORT as R } from '@/content/demo-data'
import type { ReportRow } from '@/content/types'
import { cn } from '@/lib/utils'

/**
 * The sample verification report.
 *
 * Rendered as a real definition list rather than a screenshot so the figures
 * stay selectable and legible at every breakpoint. On narrow viewports the two
 * panels stack; the numeric column uses tabular figures so the amounts align.
 */
export function VerificationReport() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-card-lg sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-h4">{R.title}</h3>
        <Badge className="h-auto bg-success-bg px-3 py-1 text-[0.8125rem] text-success-fg">
          {R.status}
        </Badge>
      </div>

      {/* Equal columns: the call-detail panel needs as much room as the
          benefits panel to keep each label and its value on one line. */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {/* ------------------------------------------- patient + benefits -- */}
        <section className="rounded-xl border border-ink-200/70 p-4">
          <div className="flex items-center gap-3">
            <Avatar aria-hidden="true" className="size-10 after:border-0">
              <AvatarFallback className="bg-sky-tint text-[0.8125rem] font-semibold text-brand-600">
                {R.patient.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink-900">{R.patient.name}</p>
              <p className="text-[0.8125rem] text-ink-600">Member ID: {R.patient.memberId}</p>
              <p className="text-[0.8125rem] text-ink-600">Plan: {R.patient.plan}</p>
            </div>
          </div>

          <Separator className="my-3.5 bg-ink-200/70" />

          <h4 className="text-sm font-semibold text-ink-900">{R.benefitsHeading}</h4>
          <ReportRows rows={R.benefits} className="mt-2" />
        </section>

        {/* --------------------------------------------- payer + call log -- */}
        <section className="rounded-xl border border-ink-200/70 p-4">
          <p className="text-[0.8125rem] text-ink-500">{R.payer.label}</p>
          <p className="mt-0.5 text-sm font-semibold text-ink-900">{R.payer.name}</p>

          <ReportRows rows={R.callDetails} className="mt-4" gap="loose" mutedLabels />
        </section>
      </div>

      {/* -------------------------------------------------------- actions -- */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-10 gap-2 font-semibold text-brand-600"
        >
          <a href="#download-sample-report">
            <Download aria-hidden="true" />
            {R.actions.download}
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-10 gap-2 font-semibold text-brand-600"
        >
          <a href="#send-to-ehr">
            <Inbox aria-hidden="true" />
            {R.actions.send}
          </a>
        </Button>
      </div>
    </div>
  )
}

interface ReportRowsProps {
  rows: readonly ReportRow[]
  className?: string
  gap?: 'tight' | 'loose'
  mutedLabels?: boolean
}

function ReportRows({ rows, className, gap = 'tight', mutedLabels = false }: ReportRowsProps) {
  return (
    <dl className={cn('grid', gap === 'loose' ? 'gap-3' : 'gap-1.5', className)}>
      {rows.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-wrap items-baseline justify-between gap-x-2 text-[0.8125rem] leading-[1.45]"
        >
          {/* Both halves stay unbroken. If they cannot share a line the value
              drops to its own, still right-aligned — which reads far better
              than splitting a date or an amount mid-string. */}
          <dt className={cn('whitespace-nowrap', mutedLabels ? 'text-ink-500' : 'text-ink-600')}>
            {label}
          </dt>
          <dd className="ml-auto font-medium whitespace-nowrap text-ink-900 tabular">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
