import { ArrowRight, Calendar } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { IconCircle } from '@/components/ui/icon-circle'
import { CLOSING_CTA } from '@/content/product'
import { SiteLink } from '@/lib/router'

export function ClosingCta() {
  return (
    <section id="pricing" className="bg-mist pb-12 lg:pb-16">
      <Container>
        <div className="overflow-hidden rounded-2xl bg-navy-850 px-6 py-8 sm:px-8 sm:py-9 lg:px-10">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-10">
            <IconCircle
              size="lg"
              aria-hidden="true"
              className="hidden bg-brand-600/15 text-brand-500 ring-1 ring-brand-500/25 lg:flex"
            >
              <Calendar />
            </IconCircle>

            <h2 className="flex-1 text-h2 text-white">
              <span className="block">{CLOSING_CTA.heading.lead}</span>
              <span className="block text-brand-500">{CLOSING_CTA.heading.accent}</span>
            </h2>

            <Button asChild variant="brand" size="cta" className="w-full shrink-0 sm:w-auto">
              <SiteLink href={CLOSING_CTA.primaryCta.href}>
                {CLOSING_CTA.primaryCta.label}
                <ArrowRight aria-hidden="true" />
              </SiteLink>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
