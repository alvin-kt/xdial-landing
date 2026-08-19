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
      className="relative isolate flex min-h-[26rem] flex-col overflow-hidden rounded-3xl bg-navy-950 bg-cover bg-top p-6 sm:p-8 lg:min-h-0 lg:p-9"
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

      <h1 className="mt-6 max-w-md text-[clamp(1.5rem,2.6vw,2.125rem)] leading-[1.15] font-bold tracking-tight text-pretty text-white lg:mt-7">
        <span className="block">{LOGIN_HERO.headline.line1}</span>
        <span className="block">
          {LOGIN_HERO.headline.line2}
          <span className="text-brand-500">{LOGIN_HERO.headline.accent}</span> ⚡
        </span>
      </h1>

      <p className="mt-3 max-w-sm text-base text-frost-300">{LOGIN_HERO.paragraph}</p>

      <ul className="mt-5 flex flex-col gap-2.5">
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
        className="mt-auto -mb-6 -ml-6 w-[calc(100%+3rem)] max-w-none pt-4 select-none sm:-mb-8 sm:-ml-8 sm:w-[calc(100%+4rem)] lg:-mb-9 lg:-ml-9 lg:w-[calc(100%+4.5rem)]"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  )
}
