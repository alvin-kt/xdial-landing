import { Container } from '@/components/layout/Container'
import { SECURITY_PRACTICES, SECURITY_PRACTICES_HEADING } from '@/content/security'

export function SecurityPractices() {
  return (
    <section className="bg-mist pb-12 lg:pb-16">
      <Container>
        <div className="rounded-2xl border border-ink-200 bg-white px-6 py-8 sm:px-8 lg:px-10">
          <div className="flex items-center gap-5">
            <span aria-hidden="true" className="h-px flex-1 bg-ink-200" />
            <h2 className="shrink-0 text-h2">{SECURITY_PRACTICES_HEADING}</h2>
            <span aria-hidden="true" className="h-px flex-1 bg-ink-200" />
          </div>

          <ul className="mt-8 grid gap-x-2 gap-y-10 sm:grid-cols-3 sm:divide-x sm:divide-ink-200 lg:grid-cols-6">
            {SECURITY_PRACTICES.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex flex-col items-center px-4 text-center">
                <Icon aria-hidden="true" className="size-11 text-brand-500" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
