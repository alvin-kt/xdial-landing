import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { IconCircle } from '@/components/ui/icon-circle'
import { SUPPORT_CATEGORIES, type SupportCategoryId } from '@/content/support'

interface SupportCategoryCardsProps {
  active: SupportCategoryId
  onSelect: (id: SupportCategoryId) => void
}

/** The three entry points into the form below, one of which stays selected. */
export function SupportCategoryCards({ active, onSelect }: SupportCategoryCardsProps) {
  return (
    <div className="relative z-10 bg-mist">
      <Container>
        <ul className="grid -translate-y-10 gap-5 sm:grid-cols-3 sm:gap-6">
          {SUPPORT_CATEGORIES.map(({ id, icon: Icon, title, description }) => {
            const isActive = id === active
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => onSelect(id)}
                  aria-pressed={isActive}
                  className="flex w-full flex-col items-center rounded-2xl border border-ink-200 bg-white px-6 py-9 text-center shadow-card-lg transition-colors hover:border-brand-500 hover:ring-1 hover:ring-brand-500"
                >
                  <IconCircle size="xl" className="bg-brand-50 text-brand-600">
                    <Icon aria-hidden="true" strokeWidth={1.75} />
                  </IconCircle>
                  <h3 className="mt-6 text-h3 text-ink-900">{title}</h3>
                  <p className="mt-2.5 text-base leading-relaxed text-ink-600">{description}</p>
                  <span className="mt-5 flex size-9 items-center justify-center rounded-full text-brand-600">
                    <ArrowRight aria-hidden="true" className="size-6" />
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
