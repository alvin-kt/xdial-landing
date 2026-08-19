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
    <div className="flex min-h-dvh flex-col bg-mist md:min-h-screen">
      <Container className="flex flex-1 flex-col">
        <div className="flex items-center justify-end gap-4 py-3 sm:py-5">
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

        <div className="grid flex-1 grid-cols-1 place-items-center gap-8 pb-4 md:items-stretch md:gap-10 md:pb-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:pb-8">
          <LoginInfo />

          <div className="flex w-full flex-col items-center justify-center">
            <LoginForm />

            <p className="mt-3 text-center text-sm text-ink-600 md:mt-5">
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
