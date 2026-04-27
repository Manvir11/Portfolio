import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { DiffFileData, DiffLine } from '../types'
import { InlineComment } from './InlineComment'

function lineToneClass(line: DiffLine) {
  if (line.tone === 'amber') {
    return 'bg-[#3f2f1d] text-[#e3b341]'
  }

  if (line.tone === 'muted') {
    return 'bg-[#21262d] text-gh-muted'
  }

  return 'bg-[#12261e] text-gh-green'
}

type DiffFileProps = {
  file: DiffFileData
  defaultOpen?: boolean
}

type TypedDiffLineProps = {
  line: DiffLine
  shouldType: boolean
  index: number
}

function TypedDiffLine({ line, shouldType, index }: TypedDiffLineProps) {
  const [visibleChars, setVisibleChars] = useState(shouldType ? 0 : line.content.length)

  useEffect(() => {
    if (!shouldType) {
      setVisibleChars(line.content.length)
      return
    }

    setVisibleChars(0)
    const delay = 120 + index * 45
    const timer = window.setTimeout(() => {
      let current = 0
      const interval = window.setInterval(() => {
        current += 2
        setVisibleChars(Math.min(current, line.content.length))
        if (current >= line.content.length) {
          window.clearInterval(interval)
        }
      }, 13)
    }, delay)

    return () => window.clearTimeout(timer)
  }, [index, line.content, shouldType])

  return (
    <div className={`px-6 py-1.5 font-mono text-[12px] leading-5 ${lineToneClass(line)}`}>
      {line.content.slice(0, visibleChars)}
    </div>
  )
}

export function DiffFile({ file, defaultOpen = true }: DiffFileProps) {
  const [open, setOpen] = useState(defaultOpen)
  const [revealedOnce, setRevealedOnce] = useState(defaultOpen)

  useEffect(() => {
    if (open && !revealedOnce) {
      setRevealedOnce(true)
    }
  }, [open, revealedOnce])

  const animateTypingNow = open && revealedOnce

  return (
    <div className="overflow-hidden rounded-md border border-gh-border bg-gh-card shadow-[0_1px_0_rgba(1,4,9,0.6)]">
      <button
        className="group flex w-full items-center justify-between border-b border-gh-border bg-[#161b22] px-4 py-2 text-left transition-colors hover:bg-[#1f2630]"
        onClick={() => setOpen((state) => !state)}
        type="button"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs text-gh-muted transition-transform">{open ? 'v' : '>'}</span>
          <span className="text-sm text-[#58a6ff] group-hover:underline">{file.path}</span>
          {file.draft && (
            <span className="rounded-full border border-[#e3b341] px-2 py-0.5 text-xs text-[#e3b341]">
              [Draft]
            </span>
          )}
        </div>
        <span className="rounded-full border border-gh-border px-2 py-0.5 text-xs text-gh-green">
          +{file.additions} -0
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className="overflow-hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="divide-y divide-gh-border">
              {file.lines.map((line, index) => (
                <TypedDiffLine
                  index={index}
                  key={line.content}
                  line={line}
                  shouldType={animateTypingNow}
                />
              ))}
            </div>
            {file.path.includes('sidewalk-nav-robot.py') && <InlineComment />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
