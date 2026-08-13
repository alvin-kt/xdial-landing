import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { HOW_IT_WORKS, PROCESS_STEPS } from '@/content/product'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-mist">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10 lg:py-14">
          {/* ------------------------------------------------- section intro -- */}
          <div className="flex flex-col">
            <h2 className="text-h2">
              {HOW_IT_WORKS.heading.lead}
              <span className="text-brand-500">{HOW_IT_WORKS.heading.accent}</span>
              {HOW_IT_WORKS.heading.trail}
            </h2>
            <p className="mt-3 text-lead text-ink-600">
              {HOW_IT_WORKS.subheading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            {/* Pixel-art mascot. The source is a cropped scene, so the left
                edge is faded to read as an intentional vignette. */}
            <img
              src="/images/dino-run.png"
              width={267}
              height={118}
              alt=""
              aria-hidden="true"
              className="mt-8 h-auto w-full max-w-[21rem] select-none pixelated lg:mt-auto lg:pt-6"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>

          {/* ------------------------------------------------------- steps -- */}
          <ol className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:flex lg:items-start lg:gap-x-1">
            {PROCESS_STEPS.map(({ icon: Icon, label }, index) => (
              <li
                key={label}
                className="relative flex flex-col items-center text-center lg:min-w-0 lg:flex-1"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-white shadow-step lg:size-[4.5rem]">
                  <Icon aria-hidden="true" className="size-7 text-brand-600 lg:size-[2.125rem]" />
                </span>

                <span className="mt-4 flex size-7 items-center justify-center rounded-full bg-current text-brand-600">
                  <span className="text-[0.8125rem] leading-none font-semibold text-white">
                    {index + 1}
                  </span>
                </span>

                <span className="mt-3 text-base font-medium whitespace-pre-line text-ink-700">
                  {label}
                </span>

                {/* Connector, shown only when the steps sit on one row. */}
                {index < PROCESS_STEPS.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute top-8 hidden size-4 text-ink-400 lg:-right-2 lg:block"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
