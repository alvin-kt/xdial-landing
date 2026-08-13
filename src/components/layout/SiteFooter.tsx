import { ShieldCheck } from 'lucide-react'

import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/layout/Container'
import { COPYRIGHT, FOOTER_NAV, HIPAA_BADGE, LEGAL_NAV, ROUTES } from '@/content/navigation'
import { SiteLink } from '@/lib/router'

interface SiteFooterProps {
  /**
   * Shows the HIPAA compliance mark in place of the legal links, as the
   * How It Works reference design does.
   */
  hipaaBadge?: boolean
}

export function SiteFooter({ hipaaBadge = false }: SiteFooterProps) {
  return (
    <footer id="resources" className="bg-mist">
      <Container>
        <div className="flex flex-col gap-6 border-t border-ink-200 py-8 lg:flex-row lg:items-center lg:gap-10 lg:py-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <SiteLink href={ROUTES.home} className="rounded-sm" aria-label="xDial — home">
              <Logo tone="dark" />
            </SiteLink>
            <p className="text-meta text-ink-500">{COPYRIGHT}</p>
          </div>

          <nav aria-label="Footer" className="lg:ml-auto">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <SiteLink
                    href={link.href}
                    className="text-meta text-ink-600 transition-colors hover:text-ink-900"
                  >
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>

          {hipaaBadge ? (
            <p className="flex items-center gap-2.5">
              <ShieldCheck aria-hidden="true" className="size-7 shrink-0 text-brand-600" />
              <span className="text-sm leading-tight font-medium text-ink-900">
                {HIPAA_BADGE.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
          ) : (
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                {LEGAL_NAV.map((link) => (
                  <li key={link.href}>
                    <SiteLink
                      href={link.href}
                      className="text-meta text-ink-600 transition-colors hover:text-ink-900"
                    >
                      {link.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </Container>
    </footer>
  )
}
