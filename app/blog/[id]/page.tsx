'use client'

import { motion } from 'framer-motion'
import { blogs } from '@/data/blogs'
import PageTransition from '@/components/PageTransition'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function BlogPost() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const params = useParams()
  const blog = blogs.find(b => b.id === params.id)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.title,
          url: window.location.href,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
          <Link 
            href="/blogs"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Return to Blogs
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <PageTransition>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Share"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-full transition-colors ${
                isBookmarked ? 'text-blue-600' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              title="Bookmark"
            >
              <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <motion.div 
            className="relative w-full h-[400px] rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {blog.title}
          </motion.h1>

          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          <motion.div 
            className="prose dark:prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {blog.content}
          </motion.div>
        </motion.div>
      </article>
    </PageTransition>
  )
}