import { Container } from '@/components/layout/Container'
import { SecurityShield } from '@/components/security/SecurityShield'
import { SECURITY_HERO } from '@/content/security'

export function SecurityHero() {
  return (
    <section className="relative overflow-hidden hero-scene">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid" />

      <Container className="relative">
        <div className="grid items-center gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:py-16">
          <div className="max-w-xl lg:max-w-none">
            <h1 className="text-[clamp(2.25rem,4.2vw,3.25rem)] leading-[1.1] font-bold tracking-[-0.03em] text-pretty text-white">
              <span className="block">
                {SECURITY_HERO.headline.lead}
                <span className="text-brand-500">{SECURITY_HERO.headline.brand}</span>
              </span>
              <span className="block">
                {SECURITY_HERO.headline.trail}
                <span className="text-brand-500">{SECURITY_HERO.headline.accent}</span>
              </span>
            </h1>

            <p className="mt-6 text-lg font-semibold text-white">{SECURITY_HERO.subheading}</p>
            <p className="mt-3 max-w-[32rem] text-base text-frost-300">{SECURITY_HERO.paragraph}</p>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {SECURITY_HERO.points.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-3">
                  <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-500" />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">{title}</span>
                    <span className="mt-1 block text-[0.8125rem] text-frost-500">
                      {description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <SecurityShield />
        </div>
      </Container>
    </section>
  )
}
