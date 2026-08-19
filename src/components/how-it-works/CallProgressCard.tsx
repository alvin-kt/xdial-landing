import { AudioMeter } from '@/components/sections/AudioMeter'
import { HIW_CALL_PANEL } from '@/content/how-it-works'

/** Step 02 — the live call panel, with the agent shown mid-verification. */
export function CallProgressCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
        <div className="flex w-full shrink-0 justify-center bg-gradient-to-b from-sky-tint to-white px-6 pt-6 sm:w-auto sm:bg-gradient-to-r sm:px-7 sm:py-6">
          <img
            src="/images/ivrrex-calling.png"
            width={923}
            height={1203}
            alt=""
            aria-hidden="true"
            className="h-28 w-auto select-none sm:h-36"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>

        <div className="min-w-0 flex-1 px-5 pb-6 sm:px-0 sm:pr-7 sm:pb-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h4 className="text-h3">{HIW_CALL_PANEL.title}</h4>
            <p className="text-h3 text-ink-900 tabular">{HIW_CALL_PANEL.elapsed}</p>
          </div>
          <p className="mt-1.5 text-base text-ink-600">{HIW_CALL_PANEL.status}</p>

          <div
            role="progressbar"
            aria-label={HIW_CALL_PANEL.title}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={HIW_CALL_PANEL.progress}
            className="mt-5 h-2 overflow-hidden rounded-full bg-ink-200"
          >
            <div
              className="h-full rounded-full bg-[#12a150]"
              style={{ width: `${HIW_CALL_PANEL.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Decorative call audio, echoing the waveform in the reference render. */}
      <AudioMeter className="pointer-events-none absolute right-5 bottom-2.5 hidden opacity-45 sm:flex" />
    </div>
  )
}
