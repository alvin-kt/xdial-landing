import { SiteFooterExpanded } from '@/components/layout/SiteFooterExpanded'
import { SecurityContactBanner } from '@/components/security/SecurityContactBanner'
import { SecurityFeatureCards } from '@/components/security/SecurityFeatureCards'
import { SecurityHero } from '@/components/security/SecurityHero'
import { SecurityPractices } from '@/components/security/SecurityPractices'
import { SECURITY_FOOTER_BADGES, SECURITY_FOOTER_COLUMNS } from '@/content/security'

export function SecurityPage() {
  return (
    <>
      <SecurityHero />
      <SecurityFeatureCards />
      <SecurityPractices />
      <SecurityContactBanner />
      <SiteFooterExpanded columns={SECURITY_FOOTER_COLUMNS} badges={SECURITY_FOOTER_BADGES} />
    </>
  )
}
