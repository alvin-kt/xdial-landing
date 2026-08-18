import { ArrowRight, Check, Mail, Shield } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { SECURITY_CONTACT } from '@/content/security'
import { SiteLink } from '@/lib/router'

export function SecurityContactBanner() {
  return (
    <section className="bg-mist pb-12 lg:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-brand-50/60 px-6 py-8 sm:px-8 sm:py-9 lg:px-10">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <img
                src="/images/ivrrex-thumbsup.png"
                width={326}
                height={302}
                alt=""
                aria-hidden="true"
                className="h-24 w-auto shrink-0 select-none sm:h-28"
                loading="lazy"
                decoding="async"
                draggable={false}
              />

              <div>
                <h2 className="text-h2">{SECURITY_CONTACT.heading}</h2>
                <p className="mt-2 max-w-xl text-base text-ink-600">{SECURITY_CONTACT.paragraph}</p>

                <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Button asChild variant="brand" size="cta">
                    <SiteLink href={SECURITY_CONTACT.cta.href}>
                      {SECURITY_CONTACT.cta.label}
                      <ArrowRight aria-hidden="true" />
                    </SiteLink>
                  </Button>
                  <SiteLink
                    href={`mailto:${SECURITY_CONTACT.email}`}
                    className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    <Mail aria-hidden="true" className="size-4" />
                    {SECURITY_CONTACT.email}
                  </SiteLink>
                </div>
              </div>
            </div>

            <span
              aria-hidden="true"
              className="relative hidden shrink-0 items-center justify-center rounded-full lg:flex"
            >
              <Shield className="size-44 text-brand-200/70" strokeWidth={1} />
              <Check className="absolute size-16 text-brand-600" strokeWidth={3.5} />
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
