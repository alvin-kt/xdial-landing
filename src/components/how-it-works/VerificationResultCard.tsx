import { CircleCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { IconCircle } from '@/components/ui/icon-circle'
import { HIW_RESULT } from '@/content/how-it-works'
import { SiteLink } from '@/lib/router'
import { cn } from '@/lib/utils'

/** Step 03 — the structured benefits report the team receives. */
export function VerificationResultCard() {
  const [viewReport, downloadPdf] = HIW_RESULT.actions
  const ViewReportIcon = viewReport.icon
  const DownloadPdfIcon = downloadPdf.icon

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-card sm:p-6">
      {/* Column split and gaps are measured off the reference render (a 960px
          content column against our 1200px one, so ×1.25): a 148px badge,
          then the report, then the call details behind the rule. The report
          and call-details columns each carry their own action button, so the
          divider between them — and the columns' widths — run unbroken from
          the data straight through the button row. */}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,9.25rem)_minmax(0,1fr)] lg:gap-5">
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

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.81fr)_minmax(0,1fr)] lg:gap-5">
          {/* -------------------------------------------------- benefits -- */}
          <div className="flex flex-col">
            <dl className="flex flex-1 flex-col justify-center">
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

            <Button asChild variant="outline" size="cta" className="mt-6 w-full text-brand-600">
              <SiteLink href={viewReport.href}>
                <ViewReportIcon aria-hidden="true" />
                {viewReport.label}
              </SiteLink>
            </Button>
          </div>

          {/* ---------------------------------------------- call details -- */}
          <div className="flex flex-col lg:border-l lg:border-ink-200 lg:pl-5">
            <dl className="flex flex-1 flex-col justify-center gap-4">
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

            <Button asChild variant="outline" size="cta" className="mt-6 w-full text-brand-600">
              <SiteLink href={downloadPdf.href}>
                <DownloadPdfIcon aria-hidden="true" />
                {downloadPdf.label}
              </SiteLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
