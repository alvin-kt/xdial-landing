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
        {/* Sized off the reference render (`assets/design/first.png`, a 960px
            content column against our 1200px one, so ×1.25): an 11px row on a
            single line, 36px between links and 80px between the two groups,
            with 16px of padding above and below. */}
        <div className="flex flex-col gap-6 border-t border-ink-200 py-8 lg:flex-row lg:items-center lg:gap-20 lg:py-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-7">
            <SiteLink href={ROUTES.home} className="rounded-sm" aria-label="xDial — home">
              <Logo tone="dark" size="sm" />
            </SiteLink>
            <p className="text-[0.6875rem] leading-tight text-ink-600">{COPYRIGHT}</p>
          </div>

          {/* The reference sets these darker and semibold, and the legal links
              below them lighter and regular — the two groups are not the same
              treatment. */}
          <nav aria-label="Footer" className="lg:ml-auto">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 lg:gap-x-9">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <SiteLink
                    href={link.href}
                    className="text-[0.6875rem] leading-tight font-semibold text-ink-900 transition-colors hover:text-brand-600"
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
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 lg:gap-x-9">
                {LEGAL_NAV.map((link) => (
                  <li key={link.href}>
                    <SiteLink
                      href={link.href}
                      className="text-[0.6875rem] leading-tight text-ink-500 transition-colors hover:text-ink-900"
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
