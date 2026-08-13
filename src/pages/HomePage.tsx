import { Capabilities } from '@/components/sections/Capabilities'
import { ClosingCta } from '@/components/sections/ClosingCta'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ShowcaseGrid } from '@/components/sections/ShowcaseGrid'

export function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Capabilities />
      <ShowcaseGrid />
      <ClosingCta />
    </>
  )
}
