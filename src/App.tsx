import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CheckRunPill } from './components/CheckRunPill'
import { ContributionTiles } from './components/ContributionTiles'
import { diffFiles } from './data'
import { DiffFile } from './components/DiffFile'
import { MergeBox } from './components/MergeBox'
import { PageLoader } from './components/PageLoader'
import { PortfolioOverview } from './components/PortfolioOverview'
import { PrHeadline } from './components/PrHeadline'
import { PrTabs } from './components/PrTabs'
import { RepoHeader } from './components/RepoHeader'
import { Sidebar } from './components/Sidebar'
import { StickyProfileBar } from './components/StickyProfileBar'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1650)
    return () => window.clearTimeout(timer)
  }, [])

  const stagger = {
    hidden: { opacity: 0, y: 12 },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.08 },
    }),
  }

  return (
    <main className="min-h-screen bg-gh-bg text-gh-text">
      <PageLoader show={isLoading} />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(31,111,235,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(137,87,229,0.14),transparent_35%)]"
      />

      <div className="mx-auto w-full max-w-[1280px] px-4 py-6 md:px-6">
        <StickyProfileBar />

        <motion.div animate="show" className="space-y-4" custom={0} initial="hidden" variants={stagger}>
          <RepoHeader />
        </motion.div>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="space-y-4">
            <motion.div animate="show" custom={1} initial="hidden" variants={stagger}>
              <PrHeadline />
            </motion.div>
            <motion.div animate="show" custom={2} initial="hidden" variants={stagger}>
              <PortfolioOverview />
            </motion.div>
            <motion.div animate="show" custom={2} initial="hidden" variants={stagger}>
              <ContributionTiles />
            </motion.div>
            <motion.div animate="show" custom={2} initial="hidden" variants={stagger}>
              <CheckRunPill />
            </motion.div>
            <motion.div animate="show" custom={2} initial="hidden" variants={stagger}>
              <PrTabs />
            </motion.div>
            <motion.div animate="show" className="space-y-4" custom={3} initial="hidden" variants={stagger}>
              {diffFiles.map((file, index) => (
                <DiffFile defaultOpen={index === 0 || index === 1} file={file} key={file.id} />
              ))}
            </motion.div>
            <motion.div animate="show" custom={4} initial="hidden" variants={stagger}>
              <MergeBox />
            </motion.div>
          </div>

          <motion.div animate="show" custom={2} initial="hidden" variants={stagger}>
            <Sidebar />
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default App
