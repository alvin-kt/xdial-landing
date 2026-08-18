import { ArrowRight, ChevronRight, Play } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { IconCircle } from '@/components/ui/icon-circle'
import { HIW_HERO, HIW_PIPELINE } from '@/content/how-it-works'
import { SiteLink } from '@/lib/router'

export function HowItWorksHero() {
  return (
    <section id="top" className="relative overflow-hidden hero-scene">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid" />

      <Container className="relative">
        {/* The artwork carries its own headroom, so the section only needs a
            slim gap under the header. */}
        <div className="grid gap-10 pt-6 pb-12 sm:pt-7 sm:pb-14 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,1fr)] lg:items-end lg:gap-10 lg:pt-7 lg:pb-14">
          {/* ------------------------------------------------------ copy -- */}
          <div className="max-w-xl lg:max-w-none">
            <p className="text-eyebrow text-brand-500 uppercase">{HIW_HERO.eyebrow}</p>

            <h1 className="mt-4 hero-h1 text-pretty text-white">
              <span className="block">{HIW_HERO.headline.lead}</span>
              <span className="block text-brand-500">{HIW_HERO.headline.accent}</span>
            </h1>

            <p className="mt-6 max-w-[29rem] text-lead text-frost-300">{HIW_HERO.paragraph}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild variant="brand" size="cta">
                <SiteLink href={HIW_HERO.primaryCta.href}>
                  {HIW_HERO.primaryCta.label}
                  <ArrowRight aria-hidden="true" />
                </SiteLink>
              </Button>
              <Button asChild variant="brandOutline" size="cta">
                <SiteLink href={HIW_HERO.secondaryCta.href}>
                  <span
                    aria-hidden="true"
                    className="flex size-6 items-center justify-center rounded-full border border-white/60"
                  >
                    <Play className="size-2.5 translate-x-px fill-current" />
                  </span>
                  {HIW_HERO.secondaryCta.label}
                </SiteLink>
              </Button>
            </div>
          </div>

          {/* ------------------------------- artwork and status pipeline -- */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Scaled to the reference, where the scene is the dominant element
                of the hero and runs out past the container gutter. */}
            {/* The bleed grows with the viewport: it only ever eats the gutter
                and the margin outside it, so the payer's building never gets
                clipped by the section's right edge. */}
            <div className="relative mx-auto w-full max-w-[38rem] lg:mx-0 lg:-mr-10 lg:max-w-none xl:-mr-16 2xl:-mr-24 2xl:w-[110%]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-6 -inset-y-8 hero-art-halo"
              />
              <img
                src="/images/ivrrex-call-flow.png"
                width={1577}
                height={647}
                alt="IVRRex, the xDial AI agent, on a call that runs through the phone network to an insurance company."
                className="relative block h-auto w-full hero-art-fade select-none"
                fetchPriority="high"
                decoding="async"
                draggable={false}
              />
            </div>

            {/* The three states a verification moves through, mirroring the
                stages detailed further down the page. */}
            <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 sm:gap-x-3 lg:flex-nowrap lg:justify-between">
              {HIW_PIPELINE.map(({ icon: Icon, title, description, tone }, index) => (
                <li key={title} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                  <IconCircle
                    size="md"
                    className={
                      tone === 'brand' ? 'bg-brand-600 text-white' : 'bg-[#12a150] text-white'
                    }
                  >
                    <Icon
                      aria-hidden="true"
                      /* The closing check is drawn heavier, as in the reference. */
                      strokeWidth={title === 'Complete' ? 3 : undefined}
                    />
                  </IconCircle>
                  <span className="min-w-0">
                    <span className="block text-base font-semibold whitespace-nowrap text-white">
                      {title}
                    </span>
                    <span className="block text-sm whitespace-nowrap text-frost-500">
                      {description}
                    </span>
                  </span>

                  {index < HIW_PIPELINE.length - 1 ? (
                    <ChevronRight
                      aria-hidden="true"
                      className="hidden size-4 shrink-0 text-white/30 sm:ml-1 sm:block"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
