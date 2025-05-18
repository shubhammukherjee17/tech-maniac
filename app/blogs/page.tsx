'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import BlogCard from '@/components/BlogCard'
import PageTransition from '@/components/PageTransition'
import { useState } from 'react'
import { blogs } from '@/data/blogs'

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [localBlogs] = useState(blogs)

  const categories = [
    'All',
    'Web Development',
    'Mobile Development',
    'AI & ML',
    'Cloud Computing',
    'DevOps',
    'Cybersecurity'
  ]

  const filteredBlogs = localBlogs.filter(blog => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = 
      selectedCategory === 'All' || 
      blog.tags.includes(selectedCategory)

    return matchesSearch && matchesCategory
  })

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0A0B] text-white relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Latest Blog Posts
            </h1>
            
            {/* Search and Categories */}
            <div className="space-y-6">
              <div className="max-w-xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border border-gray-200/10 bg-white/5 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 pl-12 text-white placeholder-gray-400"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={`category-${category}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-white/5 backdrop-blur-xl text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, i) => (
              <motion.div
                key={`blog-${blog.id}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <BlogCard 
                  blog={{
                    ...blog,
                    summary: blog.summary || '',
                    content: blog.content || '',
                    image: blog.image || '',
                    tags: blog.tags || []
                  }} 
                />
              </motion.div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 mt-12 py-8"
            >
              <div className="flex flex-col items-center gap-4">
                <Search className="w-12 h-12 text-gray-400" />
                <p>No blogs found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Clear filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}