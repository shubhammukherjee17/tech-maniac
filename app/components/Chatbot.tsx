'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  content: string
  isUser: boolean
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hi! I'm TechManiac AI. How can I help you today?", isUser: false }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isTyping) return

    // Add user message
    const userMessage = { content: input.trim(), isUser: true }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Common tech-related responses
    const responses = {
      greetings: ["Hi!", "Hello!", "Hey there!", "Greetings!"],
      programming: "I can help you with programming questions across various languages like JavaScript, Python, React, and more.",
      web: "I can assist with web development topics including frontend frameworks, backend technologies, and best practices.",
      mobile: "I can guide you through mobile app development using React Native, Flutter, or native platforms.",
      ai: "I can explain AI and machine learning concepts, frameworks, and implementation details.",
      cloud: "I can help with cloud computing platforms like AWS, Azure, or Google Cloud.",
      devops: "I can assist with DevOps practices, tools, and automation strategies.",
      default: "I'm here to help with any tech-related questions you might have. Feel free to ask about programming, web development, mobile apps, AI, cloud computing, or DevOps!"
    }

    // Simple response logic
    const input_lower = input.toLowerCase()
    let response = ""

    if (input_lower.includes("hello") || input_lower.includes("hi") || input_lower.includes("hey")) {
      response = responses.greetings[Math.floor(Math.random() * responses.greetings.length)]
    } else if (input_lower.includes("programming") || input_lower.includes("code")) {
      response = responses.programming
    } else if (input_lower.includes("web") || input_lower.includes("website")) {
      response = responses.web
    } else if (input_lower.includes("mobile") || input_lower.includes("app")) {
      response = responses.mobile
    } else if (input_lower.includes("ai") || input_lower.includes("machine learning")) {
      response = responses.ai
    } else if (input_lower.includes("cloud")) {
      response = responses.cloud
    } else if (input_lower.includes("devops")) {
      response = responses.devops
    } else {
      response = responses.default
    }

    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: response,
        isUser: false
      }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      {/* Chat Button with Pulse Effect */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg z-50 group"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full">
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">TechManiac AI</h3>
                    <p className="text-xs text-white/80">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages with Improved Styling */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                        : 'bg-white dark:bg-gray-800 shadow-sm rounded-bl-none border border-gray-100 dark:border-gray-700'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input with Enhanced Design */}
            <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-500/50 placeholder-gray-400 dark:placeholder-gray-500"
                  disabled={isTyping}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isTyping}
                  className={`p-2 rounded-full ${
                    isTyping
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25'
                  } text-white transition-shadow`}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}