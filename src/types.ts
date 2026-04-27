export type DiffLineTone = 'green' | 'amber' | 'muted'

export type DiffLine = {
  tone?: DiffLineTone
  content: string
  withInlineComment?: boolean
}

export type DiffFileData = {
  id: string
  path: string
  additions: number
  draft?: boolean
  lines: DiffLine[]
}
