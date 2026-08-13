import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Capabilities } from '@/components/sections/Capabilities'
import { ClosingCta } from '@/components/sections/ClosingCta'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ShowcaseGrid } from '@/components/sections/ShowcaseGrid'

export default function App() {
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
        <Hero />
        <HowItWorks />
        <Capabilities />
        <ShowcaseGrid />
        <ClosingCta />
      </main>

      <SiteFooter />
    </>
  )
}
