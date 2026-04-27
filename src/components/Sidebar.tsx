const skills = ['Python', 'C', 'STM32', 'SegFormer', 'OpenCV', 'FastAPI', 'Firebase', 'LLMs', 'DSA']

export function Sidebar() {
  return (
    <aside className="space-y-4">
      <section className="rounded-md border border-gh-border bg-gh-card p-4 shadow-[0_1px_0_rgba(1,4,9,0.6)]">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gh-muted">Reviewers</h2>
        <div className="space-y-2">
          {['octo-mentor', 'robotics-lead', 'ai-reviewer'].map((name) => (
            <div className="flex items-center gap-2 text-sm" key={name}>
              <div className="h-6 w-6 rounded-full border border-gh-border bg-[#21262d]" />
              <span className="text-gh-text">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-md border border-gh-border bg-gh-card p-4 shadow-[0_1px_0_rgba(1,4,9,0.6)]">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gh-muted">Labels</h2>
        <div className="flex flex-wrap gap-2">
          {['robotics', 'AI/ML', 'open-to-intern'].map((label) => (
            <span className="rounded-full border border-gh-border bg-gh-bg px-2 py-0.5 text-xs text-gh-muted" key={label}>
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-md border border-gh-border bg-gh-card p-4 shadow-[0_1px_0_rgba(1,4,9,0.6)]">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gh-muted">Skills</h2>
        <ul className="grid grid-cols-2 gap-1 text-sm text-gh-text">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
