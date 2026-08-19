import { useState } from 'react'

import { Container } from '@/components/layout/Container'
import { SupportCategoryCards } from '@/components/support/SupportCategoryCards'
import { SupportForm } from '@/components/support/SupportForm'
import { SupportHero } from '@/components/support/SupportHero'
import { SupportSidebar } from '@/components/support/SupportSidebar'
import type { SupportCategoryId } from '@/content/support'

export function SupportPage() {
  const [category, setCategory] = useState<SupportCategoryId>('issue')

  return (
    <>
      <SupportHero />
      <div className="bg-mist">
        <SupportCategoryCards active={category} onSelect={setCategory} />

        <Container>
          <div className="-mt-4 grid grid-cols-1 gap-6 pb-16 lg:grid-cols-[minmax(0,1fr)_23.5rem] lg:gap-6 lg:pb-20">
            <SupportForm category={category} />
            <SupportSidebar />
          </div>
        </Container>
      </div>
    </>
  )
}
