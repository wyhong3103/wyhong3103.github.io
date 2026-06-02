'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Magnetic } from '@/components/ui/magnetic'
import { Timeline } from '@/components/ui/timeline'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import AnimatedLink from '@/components/ui/animated-link'
import { SOCIAL_LINKS } from './data'
import Blogs from '@/components/ui/blogs'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24 text-zinc-500 dark:text-zinc-400"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-1 flex-col gap-5" id="top">
          <div className="mt-16 mb-4 flex flex-col items-start gap-6 sm:flex-col sm:gap-8">
            <div className="flex flex-col items-start">
              <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-50">
                Yen Hong
              </h1>
            </div>
          </div>
          <p className="text-justify">
            Machine Learning Engineer at{' '}
            <AnimatedLink
              href="https://www.grab.com/"
              title="Grab"
              // gradient="grab"
            />
            , working on ETA and pricing models. Passionate about cool
            algorithms and building real-world systems.
          </p>
          <p className="text-justify">
            I graduated from{' '}
            <AnimatedLink
              href="https://www.mmu.edu.my/"
              title="MMU"
              // gradient="mmu"
            />{' '}
            in CS where I also did research at the{' '}
            <AnimatedLink href="https://viprlab.github.io/" title="ViPr Lab" />{' '}
            for my final-year project on aesthetic image cropping, supervised by{' '}
            <AnimatedLink
              href="https://mmuexpert.mmu.edu.my/lkwong"
              title="Dr. Wong Lai Kuan"
            />
            . This{' '}
            <AnimatedLink
              href="https://arxiv.org/abs/2510.22528v1"
              title="work"
            />{' '}
            was published in the{' '}
            <AnimatedLink
              href="https://mipi-challenge.org/MIPI2025/"
              title="MIPI Workshop"
            />{' '}
            at{' '}
            <AnimatedLink
              href="https://iccv.thecvf.com/"
              title="ICCV"
              // gradient="iccv"
            />
            .
          </p>

          <p className="text-justify">
            Beyond academia, I've completed two machine learning-focused
            internships. I worked as a Data Scientist Intern at{' '}
            <AnimatedLink
              href="https://www.moneylion.com/"
              title="MoneyLion"
              // gradient="moneylion"
            />
            , and later as a Machine Learning Engineer Intern at{' '}
            <AnimatedLink
              href="https://www.grab.com/"
              title="Grab"
              // gradient="grab"
            />
            .
          </p>

          <p className="text-justify">
            I enjoy{' '}
            <AnimatedLink
              href="https://codeforces.com/profile/wyhong3103"
              title="coding competitively"
            />{' '}
            and{' '}
            <AnimatedLink
              href="https://github.com/wyhong3103"
              title="building cool side projects"
            />
            . Always open to discussing ML, tech, or collaboration
            opportunities.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3
          className="mb-5 font-[family-name:var(--font-playfair-display)] text-2xl font-medium text-zinc-900 dark:text-white"
          id="news"
        >
          News
        </h3>
        <Timeline />
      </motion.section>

      <Blogs />

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3
          className="mb-5 font-[family-name:var(--font-playfair-display)] text-2xl font-medium text-zinc-900 dark:text-white"
          id="connect"
        >
          Connect
        </h3>
        <div className="flex flex-wrap items-center justify-start gap-2">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
