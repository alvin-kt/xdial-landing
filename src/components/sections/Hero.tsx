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

            <ul className="mt-9 grid gap-5 sm:grid-cols-2 sm:gap-4 lg:mt-10">
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
          {/* The captions overhang the artwork, so the column reserves room
              above it for them to rise into. */}
          <div className="relative mx-auto w-full max-w-[38rem] pt-11 lg:mx-0 lg:max-w-none">
            {/* Bleeds past the container gutter on wide screens, as in the
                reference where the scene runs toward the page edge. */}
            <div className="relative lg:-mr-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-8 -inset-y-10 hero-art-halo"
              />
              <img
                src="/images/hero-mascots.png"
                width={384}
                height={256}
                alt="IVRRex, the xDial AI agent, calmly wearing a headset while an angry desk phone shouts hold-music platitudes back at it."
                className="relative block h-auto w-full max-w-[41rem] select-none"
                fetchPriority="high"
                decoding="async"
                draggable={false}
              />

              {/* Each caption is anchored to its speaker: percentages are read
                  off the artwork, so the tails keep pointing at the right head
                  as the image scales. `bottom` clears the head, `tailX` lands
                  the notch on it. */}
              <HeroBubble
                lines={HERO_BUBBLES.agent.lines}
                tone={HERO_BUBBLES.agent.tone}
                tailX="76%"
                className="absolute bottom-[90%] left-[4%] z-10 w-[40%] max-w-[11.5rem]"
              />
              <HeroBubble
                lines={HERO_BUBBLES.payer.lines}
                tone={HERO_BUBBLES.payer.tone}
                tailX="58%"
                className="absolute bottom-[81%] left-[57%] z-10 w-[41%] max-w-[13rem]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
