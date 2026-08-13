import { INTEGRATIONS } from '@/content/product'

export function Integrations() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-sky-tint p-5 sm:p-7">
      {/* The mascot is pinned to the bottom-right corner. Only the last row sits
          low enough to collide with it, so the reservation lives there rather
          than on the whole column — the tiles get the full width. */}
      <div className="relative z-10 flex h-full flex-col">
        <h3 className="text-h3">
          {INTEGRATIONS.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-2.5 text-base text-ink-600">{INTEGRATIONS.subheading}</p>

        <ul className="mt-6 flex flex-wrap gap-2.5">
          {INTEGRATIONS.targets.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex min-w-[4.5rem] flex-col items-center gap-2 rounded-xl border border-ink-200/80 bg-white px-3 py-3 text-center shadow-card"
            >
              <Icon aria-hidden="true" className="size-5 text-brand-600" />
              <span className="text-[0.8125rem] leading-tight font-medium whitespace-nowrap text-ink-700">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] text-ink-600 sm:pr-32 lg:mt-auto lg:pt-6 lg:pr-40">
          {INTEGRATIONS.assurances.map((item, index) => (
            <li key={item} className="flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className="size-1 rounded-full bg-ink-400" />
              ) : null}
              {item}
            </li>
          ))}
        </ul>
      </div>

      <img
        src="/images/dino-thumbsup.png"
        width={186}
        height={212}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-2 bottom-0 hidden h-auto w-[8rem] select-none pixelated sm:block lg:w-[9.5rem]"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  )
}
