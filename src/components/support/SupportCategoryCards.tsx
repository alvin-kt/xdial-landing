import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { SUPPORT_CATEGORIES, type SupportCategoryId } from '@/content/support'
import { cn } from '@/lib/utils'

interface SupportCategoryCardsProps {
  active: SupportCategoryId
  onSelect: (id: SupportCategoryId) => void
}

/** The three entry points into the form below, one of which stays selected. */
export function SupportCategoryCards({ active, onSelect }: SupportCategoryCardsProps) {
  return (
    <div className="relative z-10 bg-mist">
      <Container>
        <ul className="grid -translate-y-14 gap-5 sm:grid-cols-3 sm:gap-6">
          {SUPPORT_CATEGORIES.map(({ id, icon: Icon, title, description }) => {
            const isActive = id === active
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => onSelect(id)}
                  aria-pressed={isActive}
                  className={cn(
                    'flex w-full flex-col items-start rounded-2xl border bg-white px-7 py-8 text-left shadow-card-lg transition-colors',
                    isActive
                      ? 'border-brand-500 ring-1 ring-brand-500'
                      : 'border-ink-200 hover:border-brand-300',
                  )}
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-brand-50">
                    <Icon aria-hidden="true" className="size-7 text-brand-600" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-h3 text-ink-900">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-600">{description}</p>
                  <span className="mt-4 flex size-8 items-center justify-center rounded-full text-brand-600">
                    <ArrowRight aria-hidden="true" className="size-5" />
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}
