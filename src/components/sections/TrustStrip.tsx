import { Container } from '@/components/layout/Container'
import { PARTNERS, PARTNERS_SUFFIX, TRUST_STRIP_LABEL } from '@/content/partners'
import { cn } from '@/lib/utils'

export function TrustStrip() {
  return (
    <section aria-label="Customers" className="bg-navy-800">
      <Container>
        <div className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:gap-10 lg:py-6">
          <p className="max-w-[17.5rem] shrink-0 text-[0.8125rem] leading-[1.5] font-medium tracking-[0.055em] text-frost-500 uppercase">
            {TRUST_STRIP_LABEL.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-5 sm:gap-x-10 lg:flex-1 lg:justify-between">
            {PARTNERS.map(({ name, qualifier, qualifierStyle, mark: Mark }) => (
              <li key={name} className="flex items-center gap-2">
                {Mark ? <Mark aria-hidden="true" className="size-5 shrink-0 text-white" /> : null}
                <span>
                  <span className="block text-lg leading-tight font-semibold text-white">
                    {name}
                  </span>
                  <span
                    className={cn(
                      'block text-[0.6875rem] leading-tight text-white/70',
                      qualifierStyle === 'tracked' && 'tracking-[0.34em] uppercase',
                      qualifierStyle === 'caps' && 'tracking-[0.06em] uppercase',
                    )}
                  >
                    {qualifier}
                  </span>
                </span>
              </li>
            ))}
            <li className="text-sm text-frost-500">{PARTNERS_SUFFIX}</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
