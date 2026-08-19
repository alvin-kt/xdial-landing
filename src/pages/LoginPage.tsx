import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { LoginForm } from '@/components/login/LoginForm'
import { LoginInfo } from '@/components/login/LoginInfo'
import { Button } from '@/components/ui/button'
import { LOGIN_HELP, LOGIN_SIGNUP_PROMPT } from '@/content/login'
import { ROUTES } from '@/content/navigation'
import { SiteLink } from '@/lib/router'

/**
 * A dedicated, chrome-free auth page: no site header or footer, just the
 * split hero/form layout from the reference. The dark info panel carries the
 * "back to site" link via its logo, so nothing else competes with the form.
 */
export function LoginPage() {
  return (
    <div className="min-h-screen bg-mist">
      <Container>
        <div className="flex items-center justify-end gap-4 py-6 sm:py-7">
          <span className="hidden text-sm text-ink-600 sm:inline">
            {LOGIN_SIGNUP_PROMPT.question}
          </span>
          <Button
            asChild
            variant="outline"
            size="nav"
            className="border-brand-200 text-brand-700 hover:bg-brand-50"
          >
            <SiteLink href={ROUTES.bookDemo}>
              {LOGIN_SIGNUP_PROMPT.cta}
              <ArrowRight aria-hidden="true" />
            </SiteLink>
          </Button>
        </div>

        <div className="grid gap-8 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-10 lg:pb-20">
          <LoginInfo />

          <div className="flex flex-col items-center lg:pt-6">
            <LoginForm />

            <p className="mt-7 text-center text-sm text-ink-600">
              {LOGIN_HELP.prompt}{' '}
              <a
                href={LOGIN_HELP.href}
                className="font-medium text-brand-600 transition-colors hover:text-brand-700"
              >
                {LOGIN_HELP.linkLabel}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
