export function MergeBox() {
  return (
    <section className="rounded-md border border-gh-border bg-gh-card p-4 shadow-[0_1px_0_rgba(1,4,9,0.6)]">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full border border-[#8957e5] bg-[#1f1637] px-3 py-1 text-xs font-semibold text-[#c297ff]">
          Draft
        </span>
        <button
          className="rounded-md border border-gh-border bg-gh-bg px-3 py-1.5 text-sm text-gh-muted transition-colors hover:bg-[#21262d]"
          type="button"
        >
          Mark as ready
        </button>
      </div>
      <p className="mb-2 text-sm text-[#79c0ff]">Ready for robotics / AI research internship review.</p>
      <p className="text-xs text-gh-muted">manvirsinghdhesi2011@gmail.com -- open to research internships.</p>
    </section>
  )
}
