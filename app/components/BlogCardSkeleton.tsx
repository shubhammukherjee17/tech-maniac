import { motion } from 'framer-motion'

export default function BlogCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"
          animate={{
            x: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex gap-2">
          {[12, 16].map((width, i) => (
            <motion.div
              key={i}
              className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full"
              style={{ width: `${width}%` }}
              animate={{
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        <motion.div
          className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg"
          style={{ width: '75%' }}
          animate={{
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.4
          }}
        />

        <motion.div
          className="space-y-2"
          animate={{
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.6
          }}
        >
          {[90, 80, 60].map((width, i) => (
            <div
              key={i}
              className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded"
              style={{ width: `${width}%` }}
            />
          ))}
        </motion.div>

        <motion.div
          className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded"
          style={{ width: '20%' }}
          animate={{
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.8
          }}
        />
      </div>
    </motion.div>
  )
}