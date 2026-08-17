import { ArrowRight, ChevronDown, Lock, ShieldAlert, UploadCloud, Wrench } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Button } from '@/components/ui/button'
import { SUPPORT_FORM, type SupportCategoryId } from '@/content/support'
import { cn } from '@/lib/utils'

const inputClass =
  'h-11 w-full rounded-lg border border-ink-200 bg-white px-3.5 text-sm text-ink-900 placeholder:text-ink-400 transition-colors outline-none focus:border-brand-500 focus:ring-3 focus:ring-brand-500/15'

const CATEGORY_COPY: Record<SupportCategoryId, { title: string; paragraph: string }> = {
  issue: { title: SUPPORT_FORM.title, paragraph: SUPPORT_FORM.paragraph },
  general: {
    title: 'General Support',
    paragraph: 'Have a question about xDial or need help using the platform? Tell us more below.',
  },
  security: {
    title: 'Security & Privacy',
    paragraph: 'Have a security, privacy, HIPAA, or compliance question? Tell us more below.',
  },
}

interface SupportFormProps {
  category: SupportCategoryId
}

/** A required-field asterisk, matched to the reference's red mark. */
function Required() {
  return (
    <span aria-hidden="true" className="text-red-500">
      *
    </span>
  )
}

export function SupportForm({ category }: SupportFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const copy = CATEGORY_COPY[category]
  const f = SUPPORT_FORM.fields

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-ink-200 bg-white px-6 py-16 text-center shadow-card">
        <span className="flex size-14 items-center justify-center rounded-full bg-success-bg">
          <Wrench aria-hidden="true" className="size-6 text-success-fg" />
        </span>
        <h3 className="mt-5 text-h3">Thanks — we've got it.</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-600">
          Our team will review your request and get back to you by email, usually within one
          business day.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-7">
      <div className="flex items-start gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50">
          <Wrench aria-hidden="true" className="size-5 text-brand-600" />
        </span>
        <div>
          <h2 className="text-h3">{copy.title}</h2>
          <p className="mt-1.5 max-w-md text-sm text-ink-600">{copy.paragraph}</p>
        </div>
      </div>

      <p className="mt-5 flex items-start gap-2.5 rounded-lg bg-brand-50/70 px-4 py-3 text-[0.8125rem] text-ink-700">
        <ShieldAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
        {SUPPORT_FORM.notice}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-ink-900">
              {f.fullName.label}
              <Required />
            </span>
            <input
              type="text"
              required
              placeholder={f.fullName.placeholder}
              className={cn(inputClass, 'mt-1.5')}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-ink-900">
              {f.workEmail.label}
              <Required />
            </span>
            <input
              type="email"
              required
              placeholder={f.workEmail.placeholder}
              className={cn(inputClass, 'mt-1.5')}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-ink-900">
              {f.organization.label}
              <Required />
            </span>
            <input
              type="text"
              required
              placeholder={f.organization.placeholder}
              className={cn(inputClass, 'mt-1.5')}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-ink-900">
              {f.issueType.label}
              <Required />
            </span>
            <span className="relative mt-1.5 block">
              <select required defaultValue="" className={cn(inputClass, 'appearance-none pr-9')}>
                <option value="" disabled>
                  {f.issueType.placeholder}
                </option>
                {f.issueType.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink-400"
              />
            </span>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-ink-900">
              {f.priority.label}
              <Required />
            </span>
            <span className="relative mt-1.5 block">
              <select required defaultValue="" className={cn(inputClass, 'appearance-none pr-9')}>
                <option value="" disabled>
                  {f.priority.placeholder}
                </option>
                {f.priority.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink-400"
              />
            </span>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-ink-900">{f.referenceId.label}</span>
            <input
              type="text"
              placeholder={f.referenceId.placeholder}
              className={cn(inputClass, 'mt-1.5')}
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-ink-900">
            {f.description.label}
            <Required />
          </span>
          <textarea
            required
            rows={5}
            placeholder={f.description.placeholder}
            className={cn(inputClass, 'mt-1.5 h-auto resize-y py-3')}
          />
        </label>

        <div>
          <span className="text-sm font-medium text-ink-900">{SUPPORT_FORM.attachments.label}</span>
          <label className="mt-1.5 flex cursor-pointer flex-col items-center gap-1.5 rounded-lg border border-dashed border-ink-200 bg-mist px-6 py-8 text-center transition-colors hover:border-brand-300">
            <UploadCloud aria-hidden="true" className="size-5 text-ink-400" />
            <p className="text-sm text-ink-700">
              <span className="font-medium text-brand-600">{SUPPORT_FORM.attachments.action}</span>{' '}
              {SUPPORT_FORM.attachments.trail}
            </p>
            <p className="text-[0.8125rem] text-ink-500">{SUPPORT_FORM.attachments.hint}</p>
            <input type="file" multiple className="sr-only" />
          </label>
        </div>

        <Button type="submit" variant="brand" size="cta" className="w-full">
          {SUPPORT_FORM.submit.label}
          <ArrowRight aria-hidden="true" />
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-center text-[0.8125rem] text-ink-500">
          <Lock aria-hidden="true" className="size-3.5 shrink-0" />
          {SUPPORT_FORM.disclaimer}
        </p>
      </form>
    </div>
  )
}
