import { Container } from '@/components/layout/Container'
import { CAPABILITIES, CAPABILITY_ITEMS } from '@/content/product'

export function Capabilities() {
  return (
    <section id="product" className="bg-mist">
      <Container>
        <div className="py-12 lg:py-14">
          <h2 className="text-h2">
            {CAPABILITIES.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Three across on wide viewports now that the list has the full
              measure to itself; two, then one, as the column narrows. */}
          <ul className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-x-10">
            {CAPABILITY_ITEMS.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-3">
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 size-[1.375rem] shrink-0 text-brand-600"
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
                  <p className="mt-0.5 text-sm text-ink-600">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
