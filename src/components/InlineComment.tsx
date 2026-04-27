export function InlineComment() {
  return (
    <div className="mx-6 my-4 rounded-md border border-gh-border bg-gh-card p-3 text-sm shadow-[0_1px_0_rgba(1,4,9,0.6)]">
      <div className="mb-2 flex items-center gap-2 text-xs">
        <div className="h-6 w-6 rounded-full bg-[#21262d]" />
        <span className="font-semibold text-gh-text">octo-reviewer</span>
        <span className="text-gh-muted">commented</span>
      </div>
      <p className="leading-relaxed text-gh-text">
        97% reliability on public sidewalks -- impressive engineering for someone still in high school.
      </p>
      <div className="mt-3 inline-flex items-center rounded-full border border-gh-border bg-gh-bg px-2 py-0.5 text-xs text-gh-muted">
        <span aria-hidden>+1</span>
        <span className="ml-1">3</span>
      </div>
    </div>
  )
}
