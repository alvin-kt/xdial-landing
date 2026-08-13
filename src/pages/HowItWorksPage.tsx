import { HowItWorksCta } from '@/components/how-it-works/HowItWorksCta'
import { HowItWorksHero } from '@/components/how-it-works/HowItWorksHero'
import { RequestToResult } from '@/components/how-it-works/RequestToResult'
import { VerificationSteps } from '@/components/how-it-works/VerificationSteps'

export function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <VerificationSteps />
      <RequestToResult />
      <HowItWorksCta />
    </>
  )
}
