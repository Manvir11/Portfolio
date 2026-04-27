export function PrHeadline() {
  return (
    <section className="rounded-md border border-gh-border bg-gh-card px-5 py-4 shadow-[0_1px_0_rgba(1,4,9,0.6)]">
      <div className="mb-3 inline-flex rounded-full border border-[#1f6feb55] bg-[#1f6feb22] px-2 py-0.5 text-xs font-medium text-[#79c0ff]">
        Candidate Spotlight
      </div>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h1 className="text-[30px] leading-[1.25] font-semibold tracking-[-0.02em] text-gh-text">
          feat: add Manvir Dhesi to the world
        </h1>
        <span className="rounded-full bg-gh-green px-3 py-0.5 text-xs font-semibold text-white">Open</span>
        <span className="text-base text-gh-muted">#1</span>
      </div>
      <p className="text-sm text-gh-muted">manvir-dhesi wants to merge 3 commits into main.</p>
    </section>
  )
}
