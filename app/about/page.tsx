'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src="/images/image.jpg"
                alt="Shubham Mukherjee"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-lg font-semibold">Full Stack Developer</p>
                <p className="text-sm">Based in India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              whileHover={{ scale: 1.05 }}
            >
              Shubham Mukherjee
            </motion.h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6 relative">
              Full Stack Developer passionate about creating modern web applications and exploring new technologies.
              <motion.span 
                className="absolute -left-6 top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                👨‍💻
              </motion.span>
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Python' },
                  { name: 'Java'},
                  { name: 'React'},
                  { name: 'Next.js' },
                  { name: 'TypeScript'},
                  { name: 'Node.js' },
                  { name: 'Tailwind CSS'},
                  { name: 'MongoDB'},
                  { name: 'Oracle Cloud'},
                  { name: 'Google Cloud' },
                  { name: 'C++' }
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/shubhammukherjee17", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/theshubhammukherjee", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com/ImShubham1817", label: "Twitter" },
                  { icon: Mail, href: "mailto:mukherjeeshubham18@gmail.com", label: "Email" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-600 transition-colors relative group"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}