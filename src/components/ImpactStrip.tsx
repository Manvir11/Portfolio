const metrics = [
  { label: 'SegFormer-B0 mIoU', value: '92%' },
  { label: 'Control loop', value: '20 Hz' },
  { label: 'Sidewalk reliability', value: '97%' },
  { label: 'Built projects', value: '4' },
]

export function ImpactStrip() {
  return (
    <section className="rounded-md border border-gh-border bg-gh-card p-3 shadow-[0_1px_0_rgba(1,4,9,0.6)]">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {metrics.map((metric) => (
          <div className="rounded-md border border-gh-border bg-gh-bg px-3 py-2" key={metric.label}>
            <p className="text-xs text-gh-muted">{metric.label}</p>
            <p className="text-sm font-semibold text-gh-text">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
