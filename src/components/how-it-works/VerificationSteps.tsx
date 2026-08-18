import { ClipboardCheck } from 'lucide-react'

import { CallProgressCard } from '@/components/how-it-works/CallProgressCard'
import { RequestFormCard } from '@/components/how-it-works/RequestFormCard'
import { VerificationResultCard } from '@/components/how-it-works/VerificationResultCard'
import { Container } from '@/components/layout/Container'
import { HIW_HEADING, HIW_STEPS } from '@/content/how-it-works'

/** Each stage's copy paired with the panel that illustrates it. */
const STAGES = [
  { step: HIW_STEPS[0], Card: RequestFormCard },
  { step: HIW_STEPS[1], Card: CallProgressCard },
  { step: HIW_STEPS[2], Card: VerificationResultCard },
] as const

export function VerificationSteps() {
  return (
    <section id="how-it-works" className="bg-mist">
      <Container>
        <div className="py-12 lg:py-16">
          <h2 className="text-center text-h2">{HIW_HEADING}</h2>

          <ol className="mt-10 flex flex-col gap-8 lg:mt-12 lg:gap-10">
            {STAGES.map(({ step, Card }, index) => (
              <li
                key={step.number}
                className="grid gap-5 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-10"
              >
                {/* ----------------------------------------- step copy -- */}
                <div className="relative flex gap-4 lg:pb-2">
                  {/* Dashed rail linking one step's number to the next. It
                        clears the gap between list items, so it reads as a
                        single line running down the column. */}
                  {index < STAGES.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-16 -bottom-10 left-6 hidden border-l border-dashed border-ink-200 lg:block"
                    />
                  ) : null}

                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-h4 font-bold text-brand-600"
                  >
                    {step.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-h3 text-balance">{step.title}</h3>
                    <p className="mt-2.5 max-w-[22rem] text-base text-ink-600">
                      {step.description}
                    </p>

                    {'note' in step ? (
                      <p className="mt-6 flex items-start gap-3 text-sm text-ink-600">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-step">
                          <ClipboardCheck aria-hidden="true" className="size-4 text-brand-600" />
                        </span>
                        <span className="max-w-[13rem] pt-1.5">{step.note}</span>
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* ---------------------------------------- step panel -- */}
                <Card />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
