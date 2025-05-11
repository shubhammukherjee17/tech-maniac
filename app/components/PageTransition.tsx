'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode
  mode?: 'slide' | 'fade' | 'scale'
}

export default function PageTransition({
  children,
  mode = 'slide'
}: PageTransitionProps) {
  const pathname = usePathname()

  const animations = {
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 }
    }
  }

  const transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: 0.3
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={animations[mode].initial}
        animate={animations[mode].animate}
        exit={animations[mode].exit}
        transition={transition}
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}