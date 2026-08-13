import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/layout/Container'
import { COPYRIGHT, FOOTER_NAV, LEGAL_NAV } from '@/content/navigation'

export function SiteFooter() {
  return (
    <footer id="resources" className="bg-mist">
      <Container>
        <div className="flex flex-col gap-6 border-t border-ink-200 py-8 lg:flex-row lg:items-center lg:gap-10 lg:py-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Logo tone="dark" />
            <p className="text-meta text-ink-500">{COPYRIGHT}</p>
          </div>

          <nav aria-label="Footer" className="lg:ml-auto">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-meta text-ink-600 transition-colors hover:text-ink-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
              {LEGAL_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-meta text-ink-600 transition-colors hover:text-ink-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
