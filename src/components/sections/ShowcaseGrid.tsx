import { Container } from '@/components/layout/Container'
import { Integrations } from '@/components/sections/Integrations'
import { LiveActivity } from '@/components/sections/LiveActivity'

/**
 * The paired showcase band: the live call log next to the integrations panel.
 * They share a row on desktop and stack on smaller viewports.
 */
export function ShowcaseGrid() {
  return (
    <section id="for-healthcare" className="bg-mist">
      <Container>
        <div className="grid items-stretch gap-6 pb-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1fr)] lg:pb-14">
          <LiveActivity />
          <Integrations />
        </div>
      </Container>
    </section>
  )
}
