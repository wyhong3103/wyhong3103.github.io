import { useState } from 'react'
import { motion } from 'motion/react'
import AnimatedLink from './animated-link'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type MonthYearProps = {
  monthYear: string
}

const MonthYear = ({ monthYear }: MonthYearProps) => {
  return (
    <h3 className="mb-1 text-base text-xs text-zinc-900 dark:text-zinc-200">
      {monthYear.toUpperCase()}
    </h3>
  )
}

const timelineData = [
  <div key={1} className="relative flex gap-4">
    <div className="relative z-10 flex-shrink-0">
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-400" />
    </div>
    <div className="relative bottom-1.5 flex-1 pb-0">
      <MonthYear monthYear="Jan 2026" />
      <div className="flex flex-col gap-2">
        <p>Joined Grab as an MLE. Solving impactful problems with cool solutions!</p>
      </div>
    </div>
  </div>,
  <div key={2} className="relative mt-8 flex gap-4">
    <div className="relative z-10 flex-shrink-0">
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-400" />
    </div>
    <div className="relative bottom-1.5 flex-1 pb-0">
      <MonthYear monthYear="Oct 2025" />
      <div className="flex flex-col gap-2">
        <p>
          Attended{' '}
          <AnimatedLink
            href="https://iccv.thecvf.com/virtual/2025/index.html"
            title="ICCV 2025"
          />{' '}
          at Honolulu. Had a{' '}
          <AnimatedLink href="/blog/hawaiyaiyai" title="great time" /> there!
        </p>
      </div>
    </div>
  </div>,
  <div key={3} className="relative mt-8 flex gap-4">
    <div className="relative z-10 flex-shrink-0">
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-400" />
    </div>
    <div className="relative bottom-1.5 flex-1 pb-0">
      <MonthYear monthYear="Aug 2025" />
      <div className="flex flex-col gap-2">
        <p>
          Attended{' '}
          <AnimatedLink href="https://www.oxfordml.school/" title="OxML 2025" />{' '}
          at Oxford. Read about my experience{' '}
          <AnimatedLink href="/blog/oxml-2025" title="here" />.
        </p>
      </div>
    </div>
  </div>,
  <div key={4} className="relative mt-8 flex gap-4">
    <div className="relative z-10 flex-shrink-0">
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-400" />
    </div>
    <div className="relative bottom-1.5 flex-1 pb-0">
      <MonthYear monthYear="Jul 2025" />
      <div className="flex flex-col gap-2">
        <p>Started Machine Learning Engineer internship at Grab.</p>
        <p>
          <AnimatedLink
            href="https://openaccess.thecvf.com/content/ICCV2025W/MIPI/papers/Wong_AesCrop_Aesthetic-driven_Cropping_Guided_by_Composition_ICCVW_2025_paper.pdf"
            title="Final Year Project"
          />{' '}
          accepted at{' '}
          <AnimatedLink
            href="https://mipi-challenge.org/MIPI2025/"
            title="ICCV MIPI Workshop 2025"
          />
          .
        </p>
      </div>
    </div>
  </div>,
  <div key={7} className="relative mt-8 flex gap-4">
    <div className="relative z-10 flex-shrink-0">
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-400" />
    </div>
    <div className="relative bottom-1.5 flex-1 pb-0">
      <MonthYear monthYear="Apr 2025" />
      <div className="flex flex-col gap-2">
        <p>Invited as a Guest Workshop Speaker at PLN 2025 (PEKOM).</p>
      </div>
    </div>
  </div>,
  <div key={8} className="relative mt-8 flex gap-4">
    <div className="relative z-10 flex-shrink-0">
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-400" />
    </div>
    <div className="relative bottom-1.5 flex-1 pb-0">
      <MonthYear monthYear="Dec 2024" />
      <div className="flex flex-col gap-2">
        <p>
          Advisor & Problem Author for CodeNection 2024. Authored this{' '}
          <AnimatedLink
            href="https://www.hackerrank.com/contests/codenection-2024-preliminary-round-open-category/challenges/cn24-15"
            title="problem"
          />
          . Solution available{' '}
          <AnimatedLink href="/codenection_2024_editorial.pdf" title="here" />.
        </p>
      </div>
    </div>
  </div>,
  <div key={11} className="relative mt-8 flex gap-4">
    <div className="relative z-10 flex-shrink-0">
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-400" />
    </div>
    <div className="relative bottom-1.5 flex-1 pb-0">
      <MonthYear monthYear="Jul 2024" />
      <div className="flex flex-col gap-2">
        <p>Started my Data Science internship at MoneyLion.</p>
      </div>
    </div>
  </div>,
  <div key={14} className="relative mt-8 flex gap-4">
    <div className="relative z-10 flex-shrink-0">
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-400" />
    </div>
    <div className="relative bottom-1.5 flex-1 pb-0">
      <MonthYear monthYear="Dec 2023" />
      <div className="flex flex-col gap-2">
        <p>
          Competition Lead for CodeNection 2023. Authored this{' '}
          <AnimatedLink
            href="https://www.hackerrank.com/contests/codenection-2023-final-round-open-category/challenges/cn-c18"
            title="problem"
          />
          . Solution available{' '}
          <AnimatedLink href="/codenection_2023_editorial.pdf" title="here" />.
        </p>
      </div>
    </div>
  </div>,

  <div key={16} className="relative mt-8 flex gap-4">
    <div className="relative z-10 flex-shrink-0">
      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-400" />
    </div>
    <div className="relative bottom-1.5 flex-1 pb-0">
      <MonthYear monthYear="Jun 2023" />
      <div className="flex flex-col gap-2">
        <p>
          Reached{' '}
          <AnimatedLink
            href="https://codeforces.com/profile/wyhong3103"
            title="Candidate Master"
          />{' '}
          (96th percentile) on Codeforces.
        </p>
      </div>
    </div>
  </div>,
]

const partitionBatches = (events: any[]) => {
  const batches: any[][] = []

  for (let i = 0; i < events.length; i++) {
    if (i % 3 === 0) {
      batches.push([])
    }
    const event = events[i]
    batches[batches.length - 1].push(event)
  }

  return batches.map((batch, index) => (
    <motion.div
      key={index}
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      style={{ margin: 0, padding: 0 }} // remove default spacing
    >
      {batch}
    </motion.div>
  ))
}

export const Timeline = () => {
  const [shown, setShown] = useState(1)
  const batches = partitionBatches(timelineData)

  return (
    <>
      <div className="relative mt-10 text-zinc-500 dark:text-zinc-400">
        <div className="absolute top-1 bottom-0 left-1.5 w-px bg-gray-300 dark:bg-gray-500" />
        {batches
          .slice(0, Math.min(batches.length, shown))
          .map((batch) => batch)}
      </div>
      {shown < batches.length && (
        <div className="mt-4 text-right">
          <button
            className="group inline-flex items-center text-sm font-medium text-zinc-600 transition-colors hover:cursor-pointer hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            onClick={() => setShown((prev) => prev + 1)}
          >
            Show More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
