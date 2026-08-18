import { Container } from '@/components/layout/Container'
import { IconCircle } from '@/components/ui/icon-circle'
import { SECURITY_CARDS } from '@/content/security'

/** The four HIPAA/BAA/data/access cards that overlap the hero, as in the reference. */
export function SecurityFeatureCards() {
  return (
    <div className="relative z-10 bg-mist">
      <Container>
        <ul className="grid -translate-y-10 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SECURITY_CARDS.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex flex-col items-center rounded-2xl border border-ink-200 bg-white px-6 py-9 text-center shadow-card-lg"
            >
              <IconCircle size="xl" className="bg-brand-50 text-brand-600">
                <Icon aria-hidden="true" strokeWidth={1.75} />
              </IconCircle>
              <h3 className="relative mt-6 pb-3 text-h4 font-bold text-ink-900 after:absolute after:inset-x-0 after:bottom-0 after:mx-auto after:h-0.5 after:w-8 after:rounded-full after:bg-brand-500">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
