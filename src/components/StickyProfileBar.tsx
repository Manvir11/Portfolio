export function StickyProfileBar() {
  return (
    <div className="sticky top-3 z-30 mb-4 rounded-md border border-gh-border bg-[#161b22e6] px-4 py-2 shadow-[0_8px_24px_rgba(1,4,9,0.4)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-gh-border bg-[#21262d]" />
          <div>
            <p className="text-sm font-semibold text-gh-text">Manvir Dhesi</p>
            <p className="text-xs text-gh-muted">Robotics + AI Builder | Brampton, ON</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-gh-border px-2 py-0.5 text-xs text-gh-muted">
            Open to internships
          </span>
          <a
            className="rounded-md border border-[#1f6feb77] bg-[#1f6feb22] px-3 py-1 text-xs font-medium text-[#79c0ff] transition-colors hover:bg-[#1f6feb33]"
            href="mailto:manvirsinghdhesi2011@gmail.com"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
