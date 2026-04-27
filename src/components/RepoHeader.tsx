export function RepoHeader() {
  return (
    <header className="rounded-md border border-gh-border bg-gh-card px-4 py-3 shadow-[0_1px_0_rgba(1,4,9,0.6)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gh-text">
          <span className="text-gh-muted" aria-hidden>
            #
          </span>
          <span className="font-semibold text-[#58a6ff] hover:underline">manvir-dhesi</span>
          <span className="text-gh-muted">/</span>
          <span className="font-semibold text-[#58a6ff] hover:underline">portfolio</span>
        </div>
        <div className="flex gap-2 text-xs">
          <div className="flex items-center gap-1 rounded-md border border-gh-border bg-gh-bg px-2 py-1 text-gh-muted">
            <span aria-hidden>*</span> 42
          </div>
          <div className="flex items-center gap-1 rounded-md border border-gh-border bg-gh-bg px-2 py-1 text-gh-muted">
            <span aria-hidden>Y</span> 7
          </div>
        </div>
      </div>
    </header>
  )
}
