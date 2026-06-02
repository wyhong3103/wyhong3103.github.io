'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Header() {
  const navItems = [
    { name: 'Home', href: '/#top' },
    { name: 'News', href: '/#news' },
    { name: 'Blogs', href: '/#blogs' },
    { name: 'Connect', href: '/#connect' },
  ]

  return (
    <div className="fixed top-8 right-0 left-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white/70 p-2 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/70 dark:shadow-2xl"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="rounded-full px-5 py-2 text-sm font-medium text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </motion.nav>
    </div>
  )
}
