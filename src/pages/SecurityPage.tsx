import { SecurityContactBanner } from '@/components/security/SecurityContactBanner'
import { SecurityFeatureCards } from '@/components/security/SecurityFeatureCards'
import { SecurityHero } from '@/components/security/SecurityHero'
import { SecurityPractices } from '@/components/security/SecurityPractices'

export function SecurityPage() {
  return (
    <>
      <SecurityHero />
      <SecurityFeatureCards />
      <SecurityPractices />
      <SecurityContactBanner />
    </>
  )
}
