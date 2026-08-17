import { LinkedInIcon, XIcon } from '@/components/icons'
import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/layout/Container'
import {
  COPYRIGHT,
  EXPANDED_LEGAL_NAV,
  FOOTER_SOCIAL,
  FOOTER_TAGLINE,
  ROUTES,
} from '@/content/navigation'
import type { IconComponent, NavLink } from '@/content/types'
import { SiteLink } from '@/lib/router'

const SOCIAL_ICONS: Record<(typeof FOOTER_SOCIAL)[number]['label'], IconComponent> = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
}

interface FooterColumn {
  readonly heading: string
  readonly links: readonly NavLink[]
}

interface FooterBadge {
  readonly icon: IconComponent
  /** `\n`-separated, rendered on two lines as in the reference. */
  readonly label: string
}

interface SiteFooterExpandedProps {
  columns: readonly FooterColumn[]
  /** The HIPAA/BAA marks under the tagline — Security only. */
  badges?: readonly FooterBadge[]
  /** Support appends its own "Support" link to the shared legal row. */
  legalNav?: readonly NavLink[]
}

/**
 * The full, multi-column footer used by Security and Support. Richer than
 * the single-row `SiteFooter` the marketing pages use — those keep their own
 * reference-matched layout — so this is a separate component rather than a
 * variant of it.
 */
export function SiteFooterExpanded({
  columns,
  badges,
  legalNav = EXPANDED_LEGAL_NAV,
}: SiteFooterExpandedProps) {
  return (
    <footer className="bg-navy-950">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_2.4fr] lg:gap-12 lg:py-14">
          <div>
            <SiteLink
              href={ROUTES.home}
              className="inline-block rounded-sm"
              aria-label="xDial — home"
            >
              <Logo />
            </SiteLink>
            <p className="mt-4 max-w-[15rem] text-sm text-frost-500">{FOOTER_TAGLINE}</p>

            {badges ? (
              <ul className="mt-5 flex items-center gap-4 border-t border-white/10 pt-5">
                {badges.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="size-5 shrink-0 text-frost-300" />
                    <span className="text-[0.8125rem] leading-tight font-medium text-white">
                      {label.split('\n').map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:gap-x-8">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-frost-500 uppercase">
                  {column.heading}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <SiteLink
                        href={link.href}
                        className="text-sm text-white/85 transition-colors hover:text-white"
                      >
                        {link.label}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="col-span-2 border-white/10 sm:col-span-1 sm:border-l sm:pl-8">
              <p className="text-[0.6875rem] font-semibold tracking-[0.08em] text-frost-500 uppercase">
                Stay Connected
              </p>
              <p className="mt-4 max-w-[13rem] text-sm text-white/85">
                Get updates, product news, and helpful resources.
              </p>
              <ul className="mt-4 flex items-center gap-3">
                {FOOTER_SOCIAL.map(({ label, href }) => {
                  const Icon = SOCIAL_ICONS[label]
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="flex size-8 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/35 hover:bg-white/5"
                      >
                        <Icon className="size-4" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.6875rem] text-frost-500">{COPYRIGHT}</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {legalNav.map((link, index) => (
                <li key={link.label} className="flex items-center gap-3">
                  {index > 0 ? <span className="text-white/15">|</span> : null}
                  <SiteLink
                    href={link.href}
                    className="text-[0.6875rem] text-frost-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
