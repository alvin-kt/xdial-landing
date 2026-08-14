import { INTEGRATIONS } from '@/content/product'

export function Integrations() {
  return (
    <div className="relative flex h-full overflow-hidden rounded-2xl bg-sky-tint p-5 sm:p-7">
      {/* Copy and mascot share the row, as in the reference: the mascot takes
          the height of the panel and the copy holds what is left. */}
      <div className="@container flex min-w-0 flex-1 flex-col">
        <h3 className="text-h4">
          {INTEGRATIONS.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-2 text-[0.8125rem] text-ink-600">{INTEGRATIONS.subheading}</p>

        {/* Equal-width tiles sharing whatever the mascot leaves. The switch to
            a single row is keyed to this column's own width rather than the
            viewport's, since the mascot is what decides how much is left. */}
        <ul className="mt-5 grid grid-cols-2 gap-2 @[17.5rem]:grid-cols-4">
          {INTEGRATIONS.targets.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex min-w-0 flex-col items-center gap-1.5 rounded-lg border border-ink-200/80 bg-white px-1.5 py-2.5 text-center shadow-card"
            >
              <Icon aria-hidden="true" className="size-4 text-brand-600" />
              <span className="text-[0.6875rem] leading-tight font-medium text-ink-700">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[0.6875rem] text-ink-600 lg:mt-auto lg:pt-5">
          {INTEGRATIONS.assurances.map((item, index) => (
            <li key={item} className="flex items-center gap-2.5">
              {index > 0 ? (
                <span aria-hidden="true" className="size-1 rounded-full bg-ink-400" />
              ) : null}
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Stretched past the panel's padding on three sides so the mascot stands
          the full height of the card, as in the reference; `contain` keeps the
          pixel art's proportions inside that box. */}
      <img
        src="/images/dino-thumbsup.png"
        width={309}
        height={319}
        alt=""
        aria-hidden="true"
        /* Backs off between lg and xl, where the panel is at its narrowest and
           the heading would otherwise break mid-line. */
        className="pointer-events-none -mt-3 -mr-4 -mb-5 hidden w-[56%] max-w-[20rem] shrink-0 self-stretch object-contain object-bottom select-none pixelated sm:-mt-5 sm:-mb-7 sm:block lg:w-[48%] xl:w-[56%]"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  )
}
