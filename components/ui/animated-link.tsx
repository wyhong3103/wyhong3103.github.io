import React from 'react'

type AnimatedLinkProps = {
  href: string
  title: string
  gradient?: string
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  title,
  gradient,
}) => {
  const gradients: Record<string, string> = {
    mmu: 'from-blue-500 to-red-500 hover:from-blue-700 hover:to-red-700',
    iccv: 'from-[#C02A75] to-[#F47A1F] hover:from-[#9c225f] hover:to-[#d16718]',
    grab: 'from-green-500 to-green-600 hover:from-green-700 hover:to-green-800',
    moneylion:
      'from-cyan-400 to-cyan-600 hover:from-cyan-600 hover:to-cyan-800',
    cf: 'from-purple-400 to-purple-600 hover:from-purple-700 hover:to-purple-900',
  }

  // Base classes for the dashed underline
  const underlineStyles =
    'border-b-2 border-dashed transition-colors duration-200'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        gradient
          ? `inline-block ${underlineStyles} border-current bg-gradient-to-r ${gradients[gradient]} bg-clip-text font-bold text-transparent`
          : `inline-block ${underlineStyles} border-zinc-700 text-zinc-700 hover:border-black hover:text-black dark:border-zinc-400 dark:text-zinc-100 dark:hover:border-zinc-100 dark:hover:text-zinc-100`
      }
    >
      {title}
    </a>
  )
}
export default AnimatedLink
