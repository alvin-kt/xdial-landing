import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { GoogleIcon, MicrosoftIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { LOGIN_FORM } from '@/content/login'
import { SiteLink } from '@/lib/router'
import { cn } from '@/lib/utils'

const inputClass =
  'h-11 w-full rounded-lg border border-ink-200 bg-white pr-3.5 pl-10 text-sm text-ink-900 placeholder:text-ink-400 transition-colors outline-none focus:border-brand-500 focus:ring-3 focus:ring-brand-500/15'

const ssoIcons = { google: GoogleIcon, microsoft: MicrosoftIcon, sso: Lock } as const

/** The right panel: the actual login card — credentials, then SSO. */
export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const f = LOGIN_FORM.fields

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-card-lg sm:p-7">
      <p className="text-center text-h3">
        <span aria-hidden="true">👋 </span>
        {LOGIN_FORM.greeting}
      </p>
      <p className="mt-1.5 text-center text-sm text-ink-600">{LOGIN_FORM.subheading}</p>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
        <label className="block">
          <span className="text-sm font-medium text-ink-900">{f.email.label}</span>
          <span className="relative mt-1.5 block">
            <Mail
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-ink-400"
            />
            <input
              type="email"
              autoComplete="email"
              required
              placeholder={f.email.placeholder}
              className={inputClass}
            />
          </span>
        </label>

        <label className="block">
          <span className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-ink-900">{f.password.label}</span>
            <SiteLink
              href="#"
              className="text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
            >
              {LOGIN_FORM.forgotPassword}
            </SiteLink>
          </span>
          <span className="relative mt-1.5 block">
            <Lock
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-ink-400"
            />
            <input
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              placeholder={f.password.placeholder}
              className={cn(inputClass, 'pr-10')}
            />
            <button
              type="button"
              onClick={() => setShowPassword((shown) => !shown)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-ink-400 transition-colors hover:text-ink-600"
            >
              {showPassword ? (
                <EyeOff aria-hidden="true" className="size-4" />
              ) : (
                <Eye aria-hidden="true" className="size-4" />
              )}
            </button>
          </span>
        </label>

        <Button type="submit" variant="brand" size="cta" className="w-full">
          {LOGIN_FORM.submit.label}
          <ArrowRight aria-hidden="true" />
        </Button>

        <div className="flex items-center gap-3 text-sm text-ink-500">
          <span aria-hidden="true" className="h-px flex-1 bg-ink-200" />
          {LOGIN_FORM.divider}
          <span aria-hidden="true" className="h-px flex-1 bg-ink-200" />
        </div>

        <div className="flex flex-col gap-3">
          {LOGIN_FORM.sso.map(({ label, provider }) => {
            const Icon = ssoIcons[provider]
            return (
              <button
                key={provider}
                type="button"
                className="flex h-11 items-center justify-center gap-2.5 rounded-lg border border-ink-200 bg-white text-sm font-medium text-ink-900 transition-colors hover:bg-mist"
              >
                <Icon aria-hidden="true" className="size-4.5 shrink-0" />
                {label}
              </button>
            )
          })}
        </div>

        <p className="flex items-center justify-center gap-1.5 text-center text-[0.8125rem] text-ink-500">
          <ShieldCheck aria-hidden="true" className="size-3.5 shrink-0 text-brand-600" />
          {LOGIN_FORM.trust}
        </p>
      </form>
    </div>
  )
}
