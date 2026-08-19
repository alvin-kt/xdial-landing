import { ChevronDown, UserRound } from 'lucide-react'

import { DocumentCheckIcon } from '@/components/icons'
import { IconCircle } from '@/components/ui/icon-circle'

import { HIW_REQUEST_FORM } from '@/content/how-it-works'

/**
 * Step 01 — the intake form, rebuilt as static markup rather than a screenshot
 * so it stays sharp and readable at every width. The fields are illustrative,
 * so they are inert text in a boxed row instead of real form controls.
 */
export function RequestFormCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,11rem)]">
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <UserRound aria-hidden="true" className="size-5 text-brand-600" />
            <h4 className="text-h4">{HIW_REQUEST_FORM.title}</h4>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-3">
            {HIW_REQUEST_FORM.fields.map((field) => (
              <div key={field.label}>
                <dt className="text-meta text-ink-500">{field.label}</dt>
                <dd className="mt-1.5 flex h-10 items-center gap-1.5 rounded-md border border-ink-200 bg-white px-2 text-meta text-ink-900">
                  <span className="min-w-0 truncate">{field.value}</span>
                  {'select' in field ? (
                    <ChevronDown aria-hidden="true" className="ml-auto size-4 text-ink-400" />
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Confirmation rail — the same beat as "Submitted" in the hero strip. */}
        <div className="flex flex-col items-center justify-center gap-4 border-t border-ink-200 bg-mist px-6 py-7 text-center lg:border-t-0 lg:border-l">
          <IconCircle size="lg" className="bg-white text-brand-600 shadow-step">
            <DocumentCheckIcon aria-hidden="true" />
          </IconCircle>
          <p className="text-sm text-ink-600">
            {HIW_REQUEST_FORM.confirmation.lead}
            <span className="font-medium text-brand-600">
              {HIW_REQUEST_FORM.confirmation.accent}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
