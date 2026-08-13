import { Container } from '@/components/layout/Container'
import { VerificationReport } from '@/components/sections/VerificationReport'
import { CAPABILITIES, CAPABILITY_ITEMS } from '@/content/product'

export function Capabilities() {
  return (
    <section id="product" className="bg-mist">
      <Container>
        <div className="grid items-start gap-10 py-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-12 lg:py-14">
          {/* -------------------------------------------------- capability list -- */}
          <div>
            <h2 className="text-h2">
              {CAPABILITIES.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <ul className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:mt-10">
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

          {/* ------------------------------------------------- sample output -- */}
          <VerificationReport />
        </div>
      </Container>
    </section>
  )
}
