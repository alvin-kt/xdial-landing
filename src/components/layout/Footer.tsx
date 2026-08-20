import { LinkedInIcon, XIcon } from '@/components/icons'
import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/layout/Container'
import {
  COPYRIGHT,
  FOOTER_BADGES,
  FOOTER_COLUMNS,
  FOOTER_LEGAL_NAV,
  FOOTER_SOCIAL,
  FOOTER_TAGLINE,
  ROUTES,
} from '@/content/navigation'
import type { IconComponent } from '@/content/types'
import { SiteLink } from '@/lib/router'

const SOCIAL_ICONS: Record<(typeof FOOTER_SOCIAL)[number]['label'], IconComponent> = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
}

/**
 * The one footer every page shares: dark, multi-column, with the HIPAA/BAA
 * badges under the tagline. See `content/navigation.ts` for the shared
 * columns, badges and legal links.
 */
export function Footer() {
  return (
    <footer className="bg-navy-950">
      <Container className="px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 pt-6 pb-4 sm:gap-8 sm:pt-6 sm:pb-5 lg:grid-cols-[minmax(0,1fr)_2.5fr] lg:gap-9 lg:pt-8 lg:pb-6">
          <div>
            <SiteLink
              href={ROUTES.home}
              className="inline-block rounded-sm"
              aria-label="xDial — home"
            >
              <Logo size="lg" />
            </SiteLink>
            <p className="mt-2.5 max-w-[15rem] text-sm leading-snug text-frost-500 sm:mt-3">
              {FOOTER_TAGLINE}
            </p>

            <ul className="mt-2.5 flex items-center gap-4 border-t border-white/5 pt-2.5 sm:mt-3 sm:gap-5 sm:pt-3">
              {FOOTER_BADGES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon
                    aria-hidden="true"
                    className="size-8 shrink-0 text-frost-300 sm:size-9"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm leading-tight font-semibold text-white">
                    {label.split('\n').map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-5 sm:gap-y-8 sm:grid-cols-4 lg:gap-x-6">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <p className="text-sm font-bold tracking-[0.08em] text-white uppercase">
                  {column.heading}
                </p>
                <ul className="mt-2.5 flex flex-col gap-2 sm:mt-4 sm:gap-3">
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

            <div className="border-white/10 sm:border-l sm:pl-6">
              <p className="text-sm font-bold tracking-[0.08em] text-white uppercase">
                Stay Connected
              </p>
              <p className="mt-2 max-w-[13rem] text-sm text-white/85 sm:mt-4">
                Get updates, product news, and helpful resources.
              </p>
              <ul className="mt-2.5 flex items-center gap-3 sm:mt-4">
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

        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-4">
          <p className="text-[0.6875rem] text-frost-500">{COPYRIGHT}</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:gap-y-2">
              {FOOTER_LEGAL_NAV.map((link, index) => (
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
