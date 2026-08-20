import { useEffect } from 'react'

import { Footer } from '@/components/layout/Footer'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { ROUTES } from '@/content/navigation'
import { useRouter } from '@/lib/router'
import { BookDemoPage } from '@/pages/BookDemoPage'
import { HomePage } from '@/pages/HomePage'
import { HowItWorksPage } from '@/pages/HowItWorksPage'
import { LoginPage } from '@/pages/LoginPage'
import { SupportPage } from '@/pages/SupportPage'

/**
 * Page titles are set per route so history entries stay tellable apart.
 * Every route shares the same header and footer, except Book a Demo and
 * Login, which build their own minimal top bar so nothing competes with
 * their single call to action — and omit the footer too, since both
 * reference designs fit in one screen with none.
 */
const PAGES = {
  [ROUTES.home]: {
    component: HomePage,
    title: 'xDial — Insurance Verification, Automated',
    header: true,
    footer: true,
  },
  [ROUTES.howItWorks]: {
    component: HowItWorksPage,
    title: 'How It Works — xDial',
    header: true,
    footer: true,
  },
  [ROUTES.support]: {
    component: SupportPage,
    title: 'Support — xDial',
    header: true,
    footer: true,
  },
  [ROUTES.bookDemo]: {
    component: BookDemoPage,
    title: 'Book a Demo — xDial',
    header: false,
    footer: false,
  },
  [ROUTES.login]: {
    component: LoginPage,
    title: 'Log In — xDial',
    header: false,
    footer: false,
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

      {page.header ? <SiteHeader /> : null}

      <main id="main">
        <Page />
      </main>

      {page.footer ? <Footer /> : null}
    </>
  )
}
