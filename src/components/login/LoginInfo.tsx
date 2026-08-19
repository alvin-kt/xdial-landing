import { Logo } from '@/components/brand/Logo'
import { IconCircle } from '@/components/ui/icon-circle'
import { LOGIN_HERO } from '@/content/login'
import { ROUTES } from '@/content/navigation'
import { SiteLink } from '@/lib/router'

/**
 * The left panel: a dark card carrying its own scene (city skyline, rocket,
 * globe — `login-scene.png`) as a cover background, with the pitch copy laid
 * over it and the mascot bleeding off the bottom edge, as in the reference.
 */
export function LoginInfo() {
  return (
    <div
      className="relative isolate flex min-h-[30rem] flex-col overflow-hidden rounded-3xl bg-navy-950 bg-cover bg-top p-8 sm:p-10 lg:min-h-[42rem] lg:p-12"
      style={{ backgroundImage: 'url(/images/login-scene.png)' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-navy-950/40"
      />

      <SiteLink
        href={ROUTES.home}
        className="inline-block w-fit rounded-sm"
        aria-label="xDial — home"
      >
        <Logo />
      </SiteLink>

      <h1 className="mt-10 max-w-md text-[clamp(1.75rem,3.1vw,2.5rem)] leading-[1.15] font-bold tracking-tight text-pretty text-white lg:mt-12">
        <span className="block">{LOGIN_HERO.headline.line1}</span>
        <span className="block">
          {LOGIN_HERO.headline.line2}
          <span className="text-brand-500">{LOGIN_HERO.headline.accent}</span> ⚡
        </span>
      </h1>

      <p className="mt-5 max-w-sm text-lead text-frost-300">{LOGIN_HERO.paragraph}</p>

      <ul className="mt-8 flex flex-col gap-4">
        {LOGIN_HERO.checklist.map(({ icon: Icon, title }) => (
          <li key={title} className="flex items-center gap-3.5">
            <IconCircle size="sm" className="bg-brand-600 text-white">
              <Icon aria-hidden="true" />
            </IconCircle>
            <span className="text-base font-medium text-white">{title}</span>
          </li>
        ))}
      </ul>

      <img
        src="/images/ivrrex-login-thumbsup.png"
        width={1536}
        height={1024}
        alt="IVRRex, the xDial AI agent, giving a thumbs up at a laptop and saying: let's verify some benefits!"
        className="mt-auto -mb-8 -ml-8 w-[calc(100%+4rem)] max-w-none pt-8 select-none sm:-mb-10 sm:-ml-10 sm:w-[calc(100%+5rem)] lg:-mb-12 lg:-ml-12 lg:w-[calc(100%+6rem)]"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  )
}
