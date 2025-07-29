'use client'

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Blog } from "../types/blog";

interface BlogContentProps {
  blog: Blog;
}

export default function BlogContent({ blog }: BlogContentProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Simple Header with Back Button */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </Link>
        </div>
      </header>

      {/* Clean Article Layout */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6"
          >
            {blog.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {blog.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden mb-12 shadow-lg"
          >
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover" 
              priority 
            />
          </motion.div>
        </header>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none 
                     prose-headings:text-gray-900 dark:prose-headings:text-gray-100
                     prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                     prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                     prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 
                     prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                     prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
                     prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-950/20 
                     prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-r-lg
                     prose-img:rounded-lg prose-img:shadow-md
                     prose-li:text-gray-700 dark:prose-li:text-gray-300"
        >
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeHighlight]}
          >
            {blog.content}
          </ReactMarkdown>
        </motion.div>

        {/* Back to Articles Footer */}
        <motion.footer 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </motion.footer>
      </article>
    </div>
  );
}
