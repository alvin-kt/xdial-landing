import { Mail } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { SUPPORT_HERO } from '@/content/support'
import { SiteLink } from '@/lib/router'

export function SupportHero() {
  return (
    <section className="relative overflow-hidden pb-20 hero-scene sm:pb-24 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid" />

      <Container className="relative">
        <div className="grid items-center gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:py-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-eyebrow text-brand-500 uppercase">{SUPPORT_HERO.eyebrow}</p>

            <h1 className="mt-4 text-[clamp(2.25rem,4.8vw,3.75rem)] leading-[1.1] font-bold tracking-[-0.03em] text-pretty text-white">
              {SUPPORT_HERO.headline.lead}
              <span className="text-brand-500">{SUPPORT_HERO.headline.accent}</span>
            </h1>

            <p className="mt-5 max-w-[19rem] text-lead text-frost-300">{SUPPORT_HERO.paragraph}</p>

            <div className="mt-8 flex items-center gap-3.5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-600/15 ring-1 ring-brand-500/25">
                <Mail aria-hidden="true" className="size-5.5 text-brand-400" />
              </span>
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

          <div className="relative mx-auto w-full max-w-[24rem] lg:mx-0 lg:ml-auto">
            {/* Speech bubble, anchored above the mascot's head. */}
            <div className="relative z-10 mx-auto mb-[-1.1rem] w-[85%] rounded-2xl border border-white/12 bg-navy-900/90 px-5 py-4 shadow-card-lg backdrop-blur-sm sm:ml-16">
              <p className="text-lg font-semibold text-white">{SUPPORT_HERO.bubble[0]}</p>
              <p className="mt-1 text-sm text-frost-300">{SUPPORT_HERO.bubble[1]}</p>
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-10 size-4 rotate-45 border-r border-b border-white/12 bg-navy-900"
              />
            </div>

            <img
              src="/images/ivrrex-thumbsup.png"
              width={326}
              height={302}
              alt="IVRRex, the xDial AI agent, wearing a headset and giving a thumbs up."
              className="relative mx-auto h-auto w-[92%] max-w-[22rem] select-none"
              fetchPriority="high"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
