const blocks = [
  {
    title: 'Robotics Systems',
    body: 'Autonomous sidewalk navigation, embedded control, and hardware-software integration from prototype to reliable field tests.',
  },
  {
    title: 'AI Products',
    body: 'LLM-powered journaling systems with memory, safety-aware prompting, and user-centered conversational design.',
  },
  {
    title: 'Engineering Mindset',
    body: 'I focus on measurable outcomes, clear documentation, and fast iteration with real-world deployment constraints.',
  },
]

export function PortfolioOverview() {
  return (
    <section className="rounded-md border border-gh-border bg-gh-card p-4 shadow-[0_1px_0_rgba(1,4,9,0.6)]">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-gh-text">Portfolio Snapshot</h2>
        <span className="text-xs text-gh-muted">Beyond one project</span>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {blocks.map((block) => (
          <div className="rounded-md border border-gh-border bg-gh-bg p-3" key={block.title}>
            <h3 className="mb-1 text-sm font-semibold text-gh-text">{block.title}</h3>
            <p className="text-xs leading-5 text-gh-muted">{block.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
