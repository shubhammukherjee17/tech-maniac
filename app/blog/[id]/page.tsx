'use client'

import { motion } from 'framer-motion'
import { blogs } from '@/data/blogs'
import PageTransition from '@/components/PageTransition'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function BlogPost() {
  const params = useParams()
  const blog = blogs.find(b => b.id === params.id)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
          <Link 
            href="/blogs"
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Blogs
          </Link>
        </div>
      </div>
    )
  }
  return (
    <PageTransition>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          href="/blogs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
          <p className="text-gray-600 dark:text-gray-300">{blog.date}</p>

          <div className="prose dark:prose-invert max-w-none">
            {blog.content}
          </div>
        </motion.div>
      </article>
    </PageTransition>
  )
}