import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { HIW_CTA } from '@/content/how-it-works'
import { SiteLink } from '@/lib/router'

export function HowItWorksCta() {
  return (
    <section id="pricing" className="bg-mist pb-12 lg:pb-16">
      <Container>
        <div className="overflow-hidden rounded-2xl bg-navy-950 pr-6 sm:pr-8 lg:pr-10">
          <div className="flex flex-col items-center gap-5 py-8 lg:flex-row lg:items-center lg:gap-8 lg:py-0">
            <img
              src="/images/ivrrex-thumbsup.png"
              width={1026}
              height={1217}
              alt=""
              aria-hidden="true"
              className="-mb-4 h-44 w-auto shrink-0 -translate-x-2 select-none sm:h-52 lg:-my-6 lg:h-64"
              loading="lazy"
              decoding="async"
              draggable={false}
            />

            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-h2 text-white">
                <span className="block">{HIW_CTA.heading.lead}</span>
                <span className="block text-brand-500">{HIW_CTA.heading.accent}</span>
              </h2>
              <p className="mt-3 text-base text-frost-300">{HIW_CTA.paragraph}</p>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-5">
              <Button asChild variant="brand" size="cta" className="w-full sm:w-auto">
                <SiteLink href={HIW_CTA.cta.href}>
                  {HIW_CTA.cta.label}
                  <ArrowRight aria-hidden="true" />
                </SiteLink>
              </Button>

              <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                {HIW_CTA.assurances.map(({ icon: Icon, label }, index) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="size-4.5 text-brand-500" />
                    <span className="text-sm text-white/85">{label}</span>
                    {index < HIW_CTA.assurances.length - 1 ? (
                      <span aria-hidden="true" className="ml-2 text-white/30">
                        •
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
