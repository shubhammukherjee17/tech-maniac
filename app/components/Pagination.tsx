interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}
import { motion } from 'framer-motion'

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center space-x-2 my-8"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
      >
        Previous
      </motion.button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <motion.button
          key={page}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700'
          }`}
        >
          {page}
        </motion.button>
      ))}
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
      >
        Next
      </motion.button>
    </motion.div>
  )
}