import { ArrowRight, Play } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { HeroBubble } from '@/components/sections/HeroBubble'
import { Button } from '@/components/ui/button'
import { HERO, HERO_BUBBLES, HERO_HIGHLIGHTS } from '@/content/hero'
import { SiteLink } from '@/lib/router'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden hero-scene">
      {/* Perspective floor, fading out before it reaches the copy. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid" />

      <Container className="relative">
        {/* The headline is the widest element in the copy column, so the split
            favours it — it must hold "Insurance Verification," on one line. */}
        <div className="grid items-center gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,1fr)] lg:gap-10 lg:py-14">
          {/* ------------------------------------------------------ copy -- */}
          <div className="max-w-xl lg:max-w-none">
            <p className="text-eyebrow text-white/90 uppercase">{HERO.eyebrow}</p>

            <h1 className="mt-4 text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.06] font-bold tracking-[-0.03em] text-pretty text-white">
              <span className="block">{HERO.headline.lead}</span>
              <span className="block text-brand-500">{HERO.headline.accent}</span>
            </h1>

            <p className="mt-6 max-w-[30.5rem] text-lead text-frost-300">{HERO.paragraph}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild variant="brand" size="cta">
                <SiteLink href={HERO.primaryCta.href}>
                  {HERO.primaryCta.label}
                  <ArrowRight aria-hidden="true" />
                </SiteLink>
              </Button>
              <Button asChild variant="brandOutline" size="cta">
                <SiteLink href={HERO.secondaryCta.href}>
                  <span
                    aria-hidden="true"
                    className="flex size-6 items-center justify-center rounded-full border border-white/60"
                  >
                    <Play className="size-2.5 translate-x-px fill-current" />
                  </span>
                  {HERO.secondaryCta.label}
                </SiteLink>
              </Button>
            </div>

            <ul className="mt-9 grid gap-5 sm:grid-cols-3 sm:gap-4 lg:mt-10">
              {HERO_HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-center gap-2.5">
                  <Icon aria-hidden="true" className="size-6 shrink-0 text-brand-500" />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">{title}</span>
                    <span className="block text-[0.8125rem] text-frost-500">{description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* --------------------------------------------------- artwork -- */}
          <div className="relative mx-auto w-full max-w-[38rem] lg:mx-0 lg:max-w-none">
            {/* Captions sit in their own row so they never overlap the mascots
                and the artwork below stays at its natural aspect ratio. */}
            <div className="relative z-10 flex items-end justify-between gap-3 px-[3%] pb-5 sm:pb-7">
              <HeroBubble
                lines={HERO_BUBBLES.agent.lines}
                tone={HERO_BUBBLES.agent.tone}
                tailX="22%"
                className="w-[43%] max-w-[12rem]"
              />
              <HeroBubble
                lines={HERO_BUBBLES.payer.lines}
                tone={HERO_BUBBLES.payer.tone}
                tailX="14%"
                className="w-[50%] max-w-[14rem]"
              />
            </div>

            {/* Bleeds past the container gutter on wide screens, as in the
                reference where the scene runs toward the page edge. */}
            <div className="relative lg:-mr-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-8 -inset-y-10 hero-art-halo"
              />
              <img
                src="/images/hero-mascots.png"
                width={566}
                height={310}
                alt="IVRRex, the xDial AI agent, calmly wearing a headset while an angry desk phone shouts hold-music platitudes back at it."
                className="relative block h-auto w-full max-w-[41rem] select-none"
                fetchPriority="high"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
