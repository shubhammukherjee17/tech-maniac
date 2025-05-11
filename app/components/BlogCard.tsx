'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Blog } from '@/types/blog'

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/20 dark:border-gray-700/30 h-[28rem] flex flex-col"
    >
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 max-w-[90%]">
          {blog.tags.slice(0, 2).map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 text-sm bg-white/10 backdrop-blur-lg text-white rounded-full border border-white/20 truncate hover:bg-white/20 transition-colors duration-300"
            >
              {tag}
            </motion.span>
          ))}
          {blog.tags.length > 2 && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-3 py-1 text-sm bg-white/10 backdrop-blur-lg text-white rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              +{blog.tags.length - 2}
            </motion.span>
          )}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 flex-shrink-0" />
          <time dateTime={blog.date}>{blog.date}</time>
        </div>

        <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {blog.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm flex-grow">
          {blog.summary}
        </p>

        <Link
          href={`/blog/${blog.id}`}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 mt-auto font-medium"
        >
          Read more 
          <motion.span
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}
