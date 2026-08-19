import { Container } from '@/components/layout/Container'
import { SecurityShield } from '@/components/security/SecurityShield'
import { SECURITY_HERO } from '@/content/security'
import { cn } from '@/lib/utils'

export function SecurityHero() {
  return (
    <section className="relative overflow-hidden hero-scene">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:py-16">
          <div className="max-w-xl lg:max-w-none">
            <h1 className="hero-h1 text-pretty text-white">
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
            <p className="mt-3 max-w-[32rem] text-lead text-frost-300">{SECURITY_HERO.paragraph}</p>

            <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:divide-x sm:divide-white/10">
              {SECURITY_HERO.points.map(({ icon: Icon, title, description }, index) => (
                <li key={title} className={cn('flex items-start gap-3.5', index > 0 && 'sm:pl-6')}>
                  <Icon aria-hidden="true" className="size-6 shrink-0 text-brand-500" />
                  <span className="min-w-0 pt-1">
                    <span className="block text-base font-semibold text-white">{title}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-frost-300">
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
