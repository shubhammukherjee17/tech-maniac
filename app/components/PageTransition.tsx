'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode
  mode?: 'slide' | 'fade' | 'scale' | 'slideUp' | 'slideDown' | 'elastic'
}

export default function PageTransition({
  children,
  mode = 'slide'
}: PageTransitionProps) {
  const pathname = usePathname()

  const animations = {
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 }
    },
    slideDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95, y: 10 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, y: -10 }
    },
    elastic: {
      initial: { opacity: 0, scale: 0.9, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 1.1, y: -20 }
    }
  }

  const transitions = {
    slide: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.3
    },
    slideUp: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 0.4
    },
    slideDown: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      duration: 0.4
    },
    fade: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.3
    },
    scale: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.4
    },
    elastic: {
      type: "spring",
      stiffness: 400,
      damping: 15,
      duration: 0.5
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={animations[mode].initial}
        animate={animations[mode].animate}
        exit={animations[mode].exit}
        transition={transitions[mode]}
        className="min-h-screen w-full relative"
      >
        {/* Background gradient effect */}
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-transparent via-blue-50/5 to-purple-50/5 dark:from-transparent dark:via-blue-900/5 dark:to-purple-900/5 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content wrapper */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}