import { useState } from 'react'
import Link from 'next/link'
import { AnimatedBackground } from './animated-background'
import { BLOG_POSTS } from '@/app/data'
import { motion } from 'motion/react'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const partitionBatches = (blogs: any[]) => {
  const batches: any[][] = []

  for (let i = 0; i < blogs.length; i++) {
    if (i % 3 === 0) {
      batches.push([])
    }
    const post = blogs[i]
    batches[batches.length - 1].push(
      <Link
        key={post.uid}
        className="-mx-3 rounded-xl px-3 py-3"
        href={post.link}
        data-id={post.uid}
      >
        <div className="flex flex-col space-y-1">
          <h4 className="text-md text-zinc-900 dark:text-zinc-200">
            {post.title}
          </h4>
          <p className="text-zinc-500 dark:text-zinc-400">{post.description}</p>
        </div>
      </Link>,
    )
  }

  return batches.map((batch, index) => (
    <motion.section
      key={index}
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      style={{ margin: 0, padding: 0 }} // remove default spacing
      className="flex flex-col space-y-0"
    >
      <AnimatedBackground
        enableHover
        className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
      >
        {batch}
      </AnimatedBackground>
    </motion.section>
  ))
}

export default function Blogs() {
  const [shown, setShown] = useState(1)
  const blogs = partitionBatches(BLOG_POSTS)
  return (
    <>
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3
          className="mb-3 font-[family-name:var(--font-playfair-display)] text-2xl font-medium text-zinc-900 dark:text-white"
          id="blogs"
        >
          Blogs
        </h3>
        <div>
          {blogs.slice(0, Math.min(blogs.length, shown)).map((batch) => batch)}
          {shown < blogs.length && (
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
        </div>
      </motion.section>
    </>
  )
}
