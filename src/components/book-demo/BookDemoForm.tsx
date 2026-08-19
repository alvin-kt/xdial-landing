import { ArrowRight, ChevronDown, Lock } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { Button } from '@/components/ui/button'
import { BOOK_DEMO_FORM } from '@/content/book-demo'
import { cn } from '@/lib/utils'

const inputClass =
  'h-11 w-full rounded-lg border border-ink-200 bg-white px-3.5 text-sm text-ink-900 placeholder:text-ink-400 transition-colors outline-none focus:border-brand-500 focus:ring-3 focus:ring-brand-500/15'

function Required() {
  return (
    <span aria-hidden="true" className="text-red-500">
      *
    </span>
  )
}

export function BookDemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const f = BOOK_DEMO_FORM.fields

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-card-lg sm:p-7">
      {submitted ? (
        <div className="flex flex-col items-center py-10 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-success-bg">
            <ArrowRight aria-hidden="true" className="size-6 rotate-45 text-success-fg" />
          </span>
          <h2 className="mt-5 text-h3">You're on the list.</h2>
          <p className="mt-2 max-w-sm text-sm text-ink-600">
            Thanks for your interest in xDial — a member of our team will reach out shortly to
            schedule your demo.
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-h3">{BOOK_DEMO_FORM.title}</h1>
          <p className="mt-1.5 max-w-md text-sm text-ink-600">{BOOK_DEMO_FORM.paragraph}</p>

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-ink-900">
                  {f.firstName.label}
                  <Required />
                </span>
                <input
                  type="text"
                  required
                  placeholder={f.firstName.placeholder}
                  className={cn(inputClass, 'mt-1.5')}
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink-900">
                  {f.lastName.label}
                  <Required />
                </span>
                <input
                  type="text"
                  required
                  placeholder={f.lastName.placeholder}
                  className={cn(inputClass, 'mt-1.5')}
                />
              </label>
            </div>

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
                {f.company.label}
                <Required />
              </span>
              <input
                type="text"
                required
                placeholder={f.company.placeholder}
                className={cn(inputClass, 'mt-1.5')}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-ink-900">{f.jobTitle.label}</span>
              <input
                type="text"
                placeholder={f.jobTitle.placeholder}
                className={cn(inputClass, 'mt-1.5')}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-ink-900">
                {f.volume.label}
                <Required />
              </span>
              <span className="relative mt-1.5 block">
                <select required defaultValue="" className={cn(inputClass, 'appearance-none pr-9')}>
                  <option value="" disabled>
                    {f.volume.placeholder}
                  </option>
                  {f.volume.options.map((option) => (
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
              <span className="text-sm font-medium text-ink-900">{f.notes.label}</span>
              <textarea
                rows={2}
                placeholder={f.notes.placeholder}
                className={cn(inputClass, 'mt-1.5 h-auto resize-y py-3')}
              />
            </label>

            <Button type="submit" variant="brand" size="cta" className="w-full">
              {BOOK_DEMO_FORM.submit.label}
              <ArrowRight aria-hidden="true" />
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-center text-[0.8125rem] text-ink-500">
              <Lock aria-hidden="true" className="size-3.5 shrink-0" />
              {BOOK_DEMO_FORM.disclaimer}
            </p>
          </form>
        </>
      )}
    </div>
  )
}
