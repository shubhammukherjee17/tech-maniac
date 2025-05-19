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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <motion.h1 
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                whileHover={{ scale: 1.02 }}
              >
                Get in Touch
              </motion.h1>
              <p className="text-gray-300 mb-8 text-lg">
                Have a question or want to work together? Feel free to reach out!
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'mukherjeeshubham18@gmail.com',
                    color: 'blue'
                  },
                  {
                    icon: MessageSquare,
                    title: 'Social Media',
                    content: '@ImShubham1817 on Twitter',
                    color: 'purple'
                  },
                  {
                    icon: Clock,
                    title: 'Response Time',
                    content: 'Within 24 hours',
                    color: 'green'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className={`p-4 bg-${item.color}-900/30 rounded-xl transform transition-transform group-hover:scale-110`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-lg">{item.title}</h3>
                      <p className="text-gray-300">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {[
                  { id: 'name', type: 'text', label: 'Name' },
                  { id: 'email', type: 'email', label: 'Email' }
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label 
                      htmlFor={field.id} 
                      className="block text-sm font-medium mb-2 text-white"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formState[field.id as keyof typeof formState]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder-gray-400 hover:bg-white/10"
                      required
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none placeholder-gray-400 hover:bg-white/10"
                    required
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
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