import { ArrowLeft } from 'lucide-react'

import { BookDemoForm } from '@/components/book-demo/BookDemoForm'
import { BookDemoInfo } from '@/components/book-demo/BookDemoInfo'
import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/layout/Container'
import { ROUTES } from '@/content/navigation'
import { SiteLink } from '@/lib/router'

/**
 * A dedicated, chrome-free conversion page: no site header or footer, just a
 * minimal top bar back to the marketing site and the demo-request form
 * itself, so nothing competes with the single call to action.
 */
export function BookDemoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden hero-scene">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid" />

      <Container className="relative flex min-h-screen flex-col">
        <div className="flex items-center justify-end gap-6 py-5 sm:py-6">
          <SiteLink
            href={ROUTES.home}
            className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to xDial
          </SiteLink>
          <SiteLink href={ROUTES.home} className="rounded-sm" aria-label="xDial — home">
            <Logo />
          </SiteLink>
        </div>

        <div className="grid flex-1 gap-10 pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14 lg:pb-10">
          <BookDemoInfo />
          <BookDemoForm />
        </div>
      </Container>
    </div>
  )
}
