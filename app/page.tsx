/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Cpu, Globe, Rocket, Terminal, Shield } from 'lucide-react'
import Link from 'next/link'
import PageTransition from './components/PageTransition'

export default function Home() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern frameworks and best practices for building scalable web applications",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Latest advancements in artificial intelligence and practical applications",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Computing",
      description: "Cloud platforms, serverless architecture, and deployment strategies",
      gradient: "from-green-600 to-teal-500"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "DevOps",
      description: "Continuous integration, deployment, and infrastructure as code",
      gradient: "from-orange-600 to-red-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Security best practices and protecting digital assets",
      gradient: "from-indigo-600 to-blue-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Emerging Tech",
      description: "Exploring cutting-edge technologies and future trends",
      gradient: "from-pink-600 to-rose-500"
    }
  ]

  const springConfig = {
    type: "spring",
    stiffness: 400,
    damping: 15,
    mass: 0.8
  }

  // For tap animations, we'll use a faster config
  const tapConfig = {
    type: "spring",
    stiffness: 600,
    damping: 15,
    mass: 0.5
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springConfig}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 gradient-text leading-tight">
                Welcome to TechManiac
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 px-4">
                Your gateway to the latest in technology, development, and innovation
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-4 sm:px-0"
              >
                <Link 
                  href="/blogs"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                  text-white rounded-full font-medium transition-all duration-150 w-full sm:w-auto justify-center"
                >
                  Explore Blogs
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ x: -2 }}
                    transition={{ type: "spring", stiffness: 800, damping: 15 }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springConfig}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text">
                Explore Our Content
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 px-4">
                Comprehensive guides and insights across various tech domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springConfig, delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: springConfig
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl 
                    cursor-pointer select-none transform transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    whileTap={{ scale: 0.95, rotate: -5 }}
                    transition={springConfig}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center 
                      bg-gradient-to-r ${feature.gradient} text-white mb-3 sm:mb-4`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
