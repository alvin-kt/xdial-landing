import { useState } from 'react'

import { Container } from '@/components/layout/Container'
import { SiteFooterExpanded } from '@/components/layout/SiteFooterExpanded'
import { SupportCategoryCards } from '@/components/support/SupportCategoryCards'
import { SupportForm } from '@/components/support/SupportForm'
import { SupportHero } from '@/components/support/SupportHero'
import { SupportSidebar } from '@/components/support/SupportSidebar'
import {
  SUPPORT_FOOTER_COLUMNS,
  SUPPORT_LEGAL_NAV,
  type SupportCategoryId,
} from '@/content/support'

export function SupportPage() {
  const [category, setCategory] = useState<SupportCategoryId>('issue')

  return (
    <>
      <SupportHero />
      <div className="bg-mist">
        <SupportCategoryCards active={category} onSelect={setCategory} />

        <Container>
          <div className="-mt-6 grid gap-6 pb-16 lg:grid-cols-[minmax(0,1fr)_23.5rem] lg:gap-6 lg:pb-20">
            <SupportForm category={category} />
            <SupportSidebar />
          </div>
        </Container>
      </div>

      <SiteFooterExpanded columns={SUPPORT_FOOTER_COLUMNS} legalNav={SUPPORT_LEGAL_NAV} />
    </>
  )
}
