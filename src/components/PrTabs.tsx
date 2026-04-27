const tabs = ['Conversation', 'Commits (3)', 'Checks', 'Files changed (4)']

export function PrTabs() {
  return (
    <div className="flex items-end gap-1 border-b border-gh-border">
      {tabs.map((tab) => {
        const active = tab === 'Files changed (4)'
        return (
          <button
            className={`rounded-t-md border px-3 py-2 text-sm ${
              active
                ? 'border-gh-border border-b-gh-bg bg-gh-bg text-gh-text'
                : 'border-transparent text-gh-muted hover:text-gh-text'
            }`}
            key={tab}
            type="button"
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
