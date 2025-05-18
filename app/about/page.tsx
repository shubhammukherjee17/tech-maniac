'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function AboutPage() {
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative group flex justify-center"
            >
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-600/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-full" />
                <Image
                  src="/images/image.jpg"
                  alt="Shubham Mukherjee"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-x-0 bottom-8 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <p className="text-lg font-semibold drop-shadow-lg">Full Stack Developer</p>
                  <p className="text-sm drop-shadow-lg">Based in India</p>
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
              <p className="text-gray-300 mb-6 relative">
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
                <h2 className="text-2xl font-semibold mb-3 text-white">Skills</h2>
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
                      className="px-4 py-2 bg-white/5 backdrop-blur-xl text-gray-300 rounded-full text-sm border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Connect with me</h2>
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
                      className="p-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-all duration-300 group relative"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}