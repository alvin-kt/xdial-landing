import { ArrowRight, ShieldAlert } from 'lucide-react'

import { SUPPORT_SIDEBAR } from '@/content/support'
import { SiteLink } from '@/lib/router'

export function SupportSidebar() {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
        <h2 className="text-h3">{SUPPORT_SIDEBAR.heading}</h2>

        <ul className="mt-5 flex flex-col gap-5">
          {SUPPORT_SIDEBAR.items.map(({ icon: Icon, title, description, link, cta }) => (
            <li key={title} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50">
                <Icon aria-hidden="true" className="size-5 text-brand-600" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-ink-900">{title}</h3>
                {link ? (
                  <SiteLink
                    href={link.href}
                    className="mt-1 block text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    {link.label}
                  </SiteLink>
                ) : null}
                <p className="mt-1 text-sm text-ink-600">{description}</p>
                {cta ? (
                  <SiteLink
                    href={cta.href}
                    className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    {cta.label}
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </SiteLink>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card">
        <div className="flex items-start gap-3.5">
          <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50">
            <ShieldAlert aria-hidden="true" className="size-5 text-brand-600" />
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-ink-900">
              {SUPPORT_SIDEBAR.securityConcern.title}
            </h3>
            <p className="mt-1 text-sm text-ink-600">{SUPPORT_SIDEBAR.securityConcern.description}</p>
            <SiteLink
              href={`mailto:${SUPPORT_SIDEBAR.securityConcern.email}`}
              className="mt-1.5 block text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              {SUPPORT_SIDEBAR.securityConcern.email}
            </SiteLink>
            <p className="mt-1 text-sm text-ink-600">{SUPPORT_SIDEBAR.securityConcern.note}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
