'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, Clock } from 'lucide-react'
import PageTransition from '@/components/PageTransition'
import { useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Have a question or want to work together? Feel free to reach out!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'mukherjeeshubham18@gmail.com',
                  description: 'Send me an email anytime'
                },
                {
                  icon: MessageSquare,
                  title: 'Social Media',
                  content: '@ItsShubhamDev on Twitter',
                  description: 'Follow me on social platforms'
                },
                {
                  icon: Clock,
                  title: 'Response Time',
                  content: 'Within 24 hours',
                  description: 'I try to respond as quickly as possible'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-sm transition-shadow duration-200"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {item.content}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-800"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name', type: 'text', label: 'Name', placeholder: 'Your full name' },
                  { id: 'email', type: 'email', label: 'Email', placeholder: 'your.email@example.com' }
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label 
                      htmlFor={field.id} 
                      className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      value={formState[field.id as keyof typeof formState]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500 dark:placeholder-gray-400"
                      required
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or question..."
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-500 dark:placeholder-gray-400"
                    required
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 font-medium"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}