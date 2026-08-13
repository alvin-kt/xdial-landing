import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { HIW_SUMMARY } from '@/content/how-it-works'

/**
 * The one-line recap of the page: four beats, left to right. The agent's beat
 * uses the mascot portrait where the others use a line icon.
 */
export function RequestToResult() {
  return (
    <section className="bg-mist">
      <Container>
        <div className="rounded-2xl border border-ink-200 bg-white/70 px-5 py-9 sm:px-8">
          <h2 className="text-center text-h2">{HIW_SUMMARY.heading}</h2>

          <ol className="mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between">
            {HIW_SUMMARY.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:gap-4"
              >
                <div className="flex max-w-[13rem] flex-col items-center text-center lg:w-40">
                  <span className="flex size-16 items-center justify-center overflow-hidden rounded-full bg-sky-tint">
                    {'image' in step ? (
                      <img
                        src={step.image}
                        width={314}
                        height={314}
                        alt=""
                        aria-hidden="true"
                        className="size-15 object-contain select-none"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    ) : (
                      <step.icon aria-hidden="true" className="size-9 text-brand-600" />
                    )}
                  </span>

                  <span className="mt-3.5 text-base font-semibold text-ink-900">{step.title}</span>
                  <span className="mt-1 text-sm text-ink-600">{step.description}</span>
                </div>

                {index < HIW_SUMMARY.steps.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-6 hidden size-5 shrink-0 text-brand-600 lg:block"
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
