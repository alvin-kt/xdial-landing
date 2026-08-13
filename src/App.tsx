import { useEffect } from 'react'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { ROUTES } from '@/content/navigation'
import { useRouter } from '@/lib/router'
import { HomePage } from '@/pages/HomePage'
import { HowItWorksPage } from '@/pages/HowItWorksPage'

/** Page titles are set per route so history entries stay tellable apart. */
const PAGES = {
  [ROUTES.home]: {
    component: HomePage,
    title: 'xDial — Insurance Verification, Automated',
  },
  [ROUTES.howItWorks]: {
    component: HowItWorksPage,
    title: 'How It Works — xDial',
  },
} as const

export default function App() {
  const { path } = useRouter()
  // Anything unrecognised falls back to the landing page.
  const page = PAGES[path as keyof typeof PAGES] ?? PAGES[ROUTES.home]
  const Page = page.component

  useEffect(() => {
    document.title = page.title
  }, [page.title])

  return (
    <>
      <a
        href="#main"
        className="sr-only text-brand-700 focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-100 focus-visible:rounded-md focus-visible:bg-white focus-visible:px-4 focus-visible:py-2 focus-visible:font-medium focus-visible:shadow-card-lg"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Page />
      </main>

      <SiteFooter hipaaBadge={path === ROUTES.howItWorks} />
    </>
  )
}
