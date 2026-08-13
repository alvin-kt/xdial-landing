import { ArrowRight, Calendar, Play } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { CLOSING_CTA } from '@/content/product'
import { SiteLink } from '@/lib/router'

export function ClosingCta() {
  return (
    <section id="pricing" className="bg-mist">
      <Container>
        <div className="overflow-hidden rounded-2xl bg-navy-850 px-6 py-8 sm:px-8 sm:py-9 lg:px-10">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-10">
            <span
              aria-hidden="true"
              className="hidden size-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600/15 ring-1 ring-brand-500/25 lg:flex"
            >
              <Calendar className="size-8 text-brand-500" />
            </span>

            <h2 className="flex-1 text-h2 text-white">
              <span className="block">{CLOSING_CTA.heading.lead}</span>
              <span className="block text-brand-500">{CLOSING_CTA.heading.accent}</span>
            </h2>

            <div className="flex shrink-0 flex-col items-start gap-4 lg:items-center">
              <Button asChild variant="brand" size="cta" className="w-full sm:w-auto">
                <SiteLink href={CLOSING_CTA.primaryCta.href}>
                  {CLOSING_CTA.primaryCta.label}
                  <ArrowRight aria-hidden="true" />
                </SiteLink>
              </Button>
              <SiteLink
                href={CLOSING_CTA.secondaryCta.href}
                className="inline-flex items-center gap-2 text-base text-white/85 transition-colors hover:text-white"
              >
                {CLOSING_CTA.secondaryCta.label}
                <span
                  aria-hidden="true"
                  className="flex size-5 items-center justify-center rounded-full border border-white/50"
                >
                  <Play className="size-2 translate-x-px fill-current" />
                </span>
              </SiteLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
