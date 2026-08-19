import { Mail } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { IconCircle } from '@/components/ui/icon-circle'
import { SUPPORT_HERO } from '@/content/support'
import { SiteLink } from '@/lib/router'

export function SupportHero() {
  return (
    <section className="relative overflow-hidden hero-scene">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:py-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-eyebrow text-brand-500 uppercase">{SUPPORT_HERO.eyebrow}</p>

            <h1 className="mt-4 hero-h1 text-pretty text-white">
              {SUPPORT_HERO.headline.lead}
              <span className="text-brand-500">{SUPPORT_HERO.headline.accent}</span>
            </h1>

            <p className="mt-5 max-w-[19rem] text-lead text-frost-300">{SUPPORT_HERO.paragraph}</p>

            <div className="mt-8 flex items-center gap-3.5">
              <IconCircle
                size="md"
                className="bg-brand-600/15 text-brand-400 ring-1 ring-brand-500/25"
              >
                <Mail aria-hidden="true" />
              </IconCircle>
              <p className="text-base">
                <span className="block text-frost-300">{SUPPORT_HERO.email.lead}</span>
                <SiteLink
                  href={`mailto:${SUPPORT_HERO.email.address}`}
                  className="font-semibold text-brand-400 hover:text-brand-300"
                >
                  {SUPPORT_HERO.email.address}
                </SiteLink>
              </p>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center lg:mx-0 lg:ml-auto lg:justify-start">
            <img
              src="/images/ivrrex-support-thumbsup-shirt.png"
              width={1257}
              height={1180}
              alt="IVRRex, the xDial AI agent, wearing a headset and giving a thumbs up."
              className="relative z-0 h-auto w-[80%] max-w-[24rem] -translate-x-1/3 -translate-y-12 select-none"
              fetchPriority="high"
              decoding="async"
              draggable={false}
            />

            {/* Speech bubble, anchored beside the mascot's mouth. */}
            <div className="absolute top-[34%] right-[10%] z-10 w-[50%] max-w-[11.5rem] rounded-lg border border-navy-700 bg-navy-850 px-3 py-2.5 shadow-card sm:top-[28%]">
              <p className="text-sm font-bold text-white">{SUPPORT_HERO.bubble[0]}</p>
              <p className="mt-0.5 text-xs text-frost-300">{SUPPORT_HERO.bubble[1]}</p>
              <span
                aria-hidden="true"
                className="absolute top-1/2 -left-1.5 size-3 -translate-y-1/2 rotate-45 border-b border-l border-navy-700 bg-navy-850"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
