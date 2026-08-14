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
              measure to itself; two, then one, as the column narrows.

              Type is measured off the reference render (a 960px content column
              against our 1200px one, so ×1.25): a 13px title over a 12px
              description, which is the size step between them that gives the
              pair its hierarchy — they were the same size here. */}
          <ul className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-9">
            {CAPABILITY_ITEMS.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-3">
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 size-[1.375rem] shrink-0 text-brand-600"
                />
                <div className="min-w-0">
                  <h3 className="text-[0.8125rem] leading-snug font-semibold text-ink-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-[0.75rem] text-ink-600">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
