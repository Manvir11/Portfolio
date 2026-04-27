import { AnimatePresence, motion } from 'framer-motion'

type PageLoaderProps = {
  show: boolean
}

const steps = [
  'Checking CI pipeline',
  'Reviewing robotics benchmarks',
  'Running portfolio diff view',
]

export function PageLoader({ show }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117]/95 px-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className="w-full max-w-xl rounded-lg border border-gh-border bg-gh-card p-5 shadow-2xl"
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-wide text-gh-muted">Preparing PR Portfolio...</p>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  className="rounded-md border border-gh-border bg-gh-bg px-3 py-2 text-sm text-gh-text"
                  initial={{ opacity: 0, x: -8 }}
                  key={step}
                  transition={{ delay: index * 0.25, duration: 0.25 }}
                >
                  <span className="mr-2 text-gh-green">✓</span>
                  {step}
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{ scaleX: [0.1, 1] }}
              className="mt-4 h-1 origin-left rounded-full bg-[#58a6ff]"
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
