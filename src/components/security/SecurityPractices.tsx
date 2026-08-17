import { Container } from '@/components/layout/Container'
import { SECURITY_PRACTICES, SECURITY_PRACTICES_HEADING } from '@/content/security'

export function SecurityPractices() {
  return (
    <section className="bg-mist pb-12 lg:pb-16">
      <Container>
        <div className="rounded-2xl border border-ink-200 bg-white px-6 py-10 sm:px-8 lg:px-10">
          <h2 className="text-center text-h2">{SECURITY_PRACTICES_HEADING}</h2>

          <ul className="mt-9 grid gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
            {SECURITY_PRACTICES.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex flex-col items-center text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-brand-50">
                  <Icon aria-hidden="true" className="size-6 text-brand-600" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-[0.8125rem] text-ink-600">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
