import { useMemo, useState } from 'react'

type ContributionEvent = {
  day: number
  level: 1 | 2 | 3 | 4
  title: string
  detail: string
}

type YearData = {
  year: string
  events: ContributionEvent[]
}

const DAYS = 7 * 30

const years: YearData[] = [
  {
    year: '2026',
    events: [
      { day: 6, level: 3, title: 'Shipped PR-style portfolio UI', detail: 'Built animated GitHub pull request themed portfolio experience.' },
      { day: 14, level: 2, title: 'Added Framer Motion loading sequence', detail: 'Created staged loader with CI-style status steps.' },
      { day: 37, level: 4, title: 'Implemented typing diff animation', detail: 'Diff lines now reveal with typing effect on first open.' },
      { day: 54, level: 3, title: 'Interactive checks state', detail: 'Added queued -> in progress -> success check-run simulation.' },
      { day: 71, level: 2, title: 'Sticky profile bar', detail: 'Made profile/contact strip remain visible while scrolling.' },
      { day: 95, level: 4, title: 'Built autonomous sidewalk nav stack', detail: 'Documented SegFormer + STM32 + OpenCV robotics architecture.' },
      { day: 136, level: 3, title: 'Self-journal LLM milestone', detail: 'Completed multi-session memory workflow in journal assistant.' },
      { day: 169, level: 2, title: 'Drafted drone autonomy module', detail: 'Started planning and pseudocode for self-driving drone project.' },
    ],
  },
  {
    year: '2025',
    events: [
      { day: 9, level: 2, title: 'Embedded systems foundation', detail: 'Focused on STM32 firmware and motor control fundamentals.' },
      { day: 31, level: 3, title: 'Computer vision experiments', detail: 'Benchmarked segmentation models for outdoor navigation scenes.' },
      { day: 57, level: 2, title: 'Realtime robotics loop', detail: 'Stabilized controller timing near 20 Hz on prototype hardware.' },
      { day: 83, level: 4, title: 'Sidewalk robot field tests', detail: 'Ran extended reliability tests on real public sidewalk routes.' },
      { day: 112, level: 3, title: 'FastAPI backend architecture', detail: 'Set up API services for AI features and auth integration.' },
      { day: 149, level: 2, title: 'Prompt engineering iteration', detail: 'Refined prompts for reflective, multi-turn journaling conversations.' },
    ],
  },
  {
    year: '2024',
    events: [
      { day: 12, level: 2, title: 'Started robotics portfolio track', detail: 'Defined focus areas in robotics, AI, and systems engineering.' },
      { day: 44, level: 3, title: 'Built first autonomous prototype', detail: 'Connected sensors, motor control, and basic path following logic.' },
      { day: 76, level: 2, title: 'OpenCV calibration work', detail: 'Improved camera calibration and perception reliability.' },
      { day: 103, level: 3, title: 'Firebase + auth integration', detail: 'Connected authentication and cloud persistence for user sessions.' },
      { day: 141, level: 2, title: 'DSA interview prep cycle', detail: 'Practiced problem solving and algorithm design for internships.' },
      { day: 186, level: 4, title: 'Public portfolio launch', detail: 'Published engineering portfolio and project writeups.' },
    ],
  },
]

function tileClass(level?: ContributionEvent['level']) {
  if (!level) return 'bg-[#161b22]'
  if (level === 1) return 'bg-[#0e4429]'
  if (level === 2) return 'bg-[#006d32]'
  if (level === 3) return 'bg-[#26a641]'
  return 'bg-[#39d353]'
}

export function ContributionTiles() {
  const [activeYear, setActiveYear] = useState(years[0].year)

  const selectedYear = years.find((item) => item.year === activeYear) ?? years[0]
  const eventMap = useMemo(() => new Map(selectedYear.events.map((event) => [event.day, event])), [selectedYear.events])

  return (
    <section className="rounded-md border border-gh-border bg-gh-card p-4 shadow-[0_1px_0_rgba(1,4,9,0.6)]">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-gh-text">Contribution Highlights</h2>
        <div className="flex gap-2">
          {years.map((year) => (
            <button
              className={`rounded-md border px-2.5 py-1 text-xs transition-colors ${
                activeYear === year.year
                  ? 'border-[#1f6feb77] bg-[#1f6feb22] text-[#79c0ff]'
                  : 'border-gh-border bg-gh-bg text-gh-muted hover:text-gh-text'
              }`}
              key={year.year}
              onClick={() => setActiveYear(year.year)}
              type="button"
            >
              {year.year}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-3 text-xs text-gh-muted">
        Hover a green tile to see what was shipped. Dark tiles represent quieter days.
      </p>

      <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto pb-1">
        {Array.from({ length: DAYS }).map((_, index) => {
          const event = eventMap.get(index)
          return (
            <div className="group relative" key={`${selectedYear.year}-${index}`}>
              <div
                className={`h-3.5 w-3.5 rounded-[2px] border border-[#1b1f24] ${tileClass(event?.level)} transition-transform group-hover:scale-110`}
              />
              {event && (
                <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden w-56 -translate-x-1/2 rounded-md border border-gh-border bg-[#0b0f14] p-2 text-xs text-gh-text shadow-2xl group-hover:block">
                  <p className="font-semibold">{event.title}</p>
                  <p className="mt-1 text-gh-muted">{event.detail}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
