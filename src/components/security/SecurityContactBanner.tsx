import { ArrowRight, Check, Mail, Shield } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { SECURITY_CONTACT } from '@/content/security'
import { SiteLink } from '@/lib/router'

export function SecurityContactBanner() {
  return (
    <section className="bg-mist pb-12 lg:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-brand-100/80 px-6 pt-7 pb-6 sm:py-9 sm:pr-8 sm:pl-0 lg:pr-10">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
              <img
                src="/images/ivrrex-security-arms-crossed.png"
                width={1222}
                height={1210}
                alt=""
                aria-hidden="true"
                className="h-44 w-auto shrink-0 self-center select-none sm:-my-4 sm:-translate-x-2 sm:h-52 lg:-my-6 lg:h-56"
                loading="lazy"
                decoding="async"
                draggable={false}
              />

              <div>
                <h2 className="text-h2">{SECURITY_CONTACT.heading}</h2>
                <p className="mt-2 max-w-xl text-base text-ink-600">{SECURITY_CONTACT.paragraph}</p>

                <div className="mt-4 flex flex-col items-start gap-2 sm:mt-5 sm:flex-row sm:items-center sm:gap-4">
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
