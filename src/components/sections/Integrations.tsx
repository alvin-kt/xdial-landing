import { INTEGRATIONS } from '@/content/product'

/**
 * The integrations panel, measured off the reference render
 * (`assets/design/first.png` — a 1024px page with a 960px content column, so
 * every measurement below is the reference value × 1.25 for our 1200px row).
 * The `xl:` variants are the ones that carry those numbers; below xl the panel
 * is narrower than the reference ever was, so it keeps its own tighter rhythm.
 */
export function Integrations() {
  return (
    <div className="relative flex h-full overflow-hidden rounded-2xl bg-sky-tint p-5 sm:p-7 xl:px-10 xl:pt-12 xl:pb-6">
      {/* Copy and mascot share the row, as in the reference: the mascot takes
          the height of the panel and the copy holds what is left. */}
      <div className="@container flex min-w-0 flex-1 flex-col">
        {/* Two forced lines. The reference sets this a step up from a card
            title — 19px of cap-and-descender on its 960px column, and a 25px
            line step, which is `text-h3` exactly once scaled. It only fits
            from xl, where the copy column is wide enough to hold "Seamlessly
            integrate with" on one line. */}
        <h3 className="text-h4 xl:text-h3">
          {INTEGRATIONS.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-2 text-[0.8125rem] text-ink-600 xl:text-sm">{INTEGRATIONS.subheading}</p>

        {/* Equal-width tiles sharing whatever the mascot leaves. The switch to
            a single row is keyed to this column's own width rather than the
            viewport's, since the mascot is what decides how much is left. From
            xl they take the reference's own size — ~52px on its column, 25px
            apart — instead of stretching across whatever the column has, with
            just enough width for the 12px label the reference sets. */}
        <ul className="mt-5 grid grid-cols-2 gap-2 xl:max-w-[25rem] xl:gap-6 @[17.5rem]:grid-cols-4">
          {INTEGRATIONS.targets.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex min-w-0 flex-col items-center gap-1.5 rounded-lg border border-ink-200/80 bg-white px-1.5 py-2.5 text-center shadow-card"
            >
              <Icon aria-hidden="true" className="size-5 text-brand-600" strokeWidth={2} />
              <span className="text-[0.6875rem] leading-tight font-medium text-ink-700 xl:text-xs">
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* Sits directly under the tiles, as in the reference — never pushed to
            the foot of the panel, so no gap opens up when the row is taller
            than this column's content. */}
        <ul className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[0.6875rem] text-ink-600 xl:mt-7 xl:text-[0.8125rem]">
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

      {/* Stretched past the panel's padding on four sides so the mascot stands
          the full height of the card, as in the reference; `contain` keeps the
          pixel art's proportions inside that box, and `bottom` stands it on the
          panel's bottom edge.

          The box is width-bound, so its width is what sets the mascot's size:
          at xl, 254px renders the artwork 213×256, which is the reference's
          178×205 scaled by 1.25. The artwork only fills the middle ~84% of the
          file (23px of the 309px are transparent on the left, 26px on the
          right), so the negative margins that cancel the panel's padding leave
          it sitting ~21px inside the panel's right edge — the reference's 15px,
          near enough. */}
      <img
        src="/images/dino-thumbsup.png"
        width={309}
        height={319}
        alt=""
        aria-hidden="true"
        /* Backs off between lg and xl, where the panel is at its narrowest and
           the heading would otherwise break mid-line; the left trim goes with
           it there, since that range has the least room to spare beside the
           mascot. */
        className="pointer-events-none -mt-3 -mr-7 -mb-5 -ml-2 hidden w-[56%] max-w-[20rem] shrink-0 self-stretch object-contain object-bottom select-none pixelated sm:-mt-5 sm:-mb-7 sm:block lg:ml-0 lg:w-[48%] xl:-mt-12 xl:-mr-10 xl:-mb-6 xl:w-[15.875rem]"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  )
}
