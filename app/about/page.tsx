'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              About Me
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Get to know the person behind TechManiac and my journey in technology.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <Image
                  src="/images/image.jpg"
                  alt="Shubham Mukherjee"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Shubham Mukherjee
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Full Stack Developer passionate about creating modern web applications and exploring new technologies. 
                  I enjoy sharing knowledge through writing and helping others learn about the latest developments in tech.
                </p>
              </div>
              
              {/* Skills Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Python', 'Java', 'React', 'Next.js', 'TypeScript', 'Node.js', 
                    'Tailwind CSS', 'MongoDB', 'Oracle Cloud', 'Google Cloud', 'C++'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connect Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/shubhammukherjee17", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/theshubhammukherjee", label: "LinkedIn" },
                    { icon: Twitter, href: "https://twitter.com/ImShubham1817", label: "Twitter" },
                    { icon: Mail, href: "mailto:mukherjeeshubham18@gmail.com", label: "Email" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      whileHover={{ y: -2 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group relative"
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Why TechManiac?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                TechManiac is my platform to share insights, tutorials, and thoughts about the rapidly evolving world of technology. 
                Whether you&apos;re a beginner starting your coding journey or an experienced developer looking to stay updated with the latest trends, 
                you&apos;ll find valuable content here. I believe in making complex topics accessible and helping others grow in their tech careers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}