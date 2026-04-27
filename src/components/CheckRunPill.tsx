import { useEffect, useState } from 'react'

type Status = 'queued' | 'in_progress' | 'success'

const statusCopy: Record<Status, { label: string; dot: string; text: string }> = {
  queued: { label: 'Queued', dot: 'bg-gh-muted', text: 'Checks have not started yet.' },
  in_progress: { label: 'In progress', dot: 'bg-[#1f6feb]', text: 'Running quality checks and tests...' },
  success: { label: 'Success', dot: 'bg-gh-green', text: 'All checks passed. Ready for review.' },
}

export function CheckRunPill() {
  const [status, setStatus] = useState<Status>('queued')

  useEffect(() => {
    if (status !== 'in_progress') {
      return
    }

    const timer = window.setTimeout(() => setStatus('success'), 1400)
    return () => window.clearTimeout(timer)
  }, [status])

  const nextState = () => {
    if (status === 'queued') {
      setStatus('in_progress')
      return
    }

    if (status === 'in_progress') {
      setStatus('success')
      return
    }

    setStatus('queued')
  }

  const current = statusCopy[status]

  return (
    <button
      className="flex w-full items-center justify-between rounded-md border border-gh-border bg-gh-card px-3 py-2 text-left shadow-[0_1px_0_rgba(1,4,9,0.6)] transition-colors hover:bg-[#1b2430]"
      onClick={nextState}
      type="button"
    >
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${current.dot}`} />
        <div>
          <p className="text-sm font-medium text-gh-text">Checks: {current.label}</p>
          <p className="text-xs text-gh-muted">{current.text}</p>
        </div>
      </div>
      <span className="text-xs text-gh-muted">click</span>
    </button>
  )
}
