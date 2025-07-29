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

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div 
                className="mb-6 inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="px-6 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400">
                  Welcome to the Future of Tech
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome to{" "}
                <span className="text-blue-600 dark:text-blue-400">TechManiac</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 sm:mb-16 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Your gateway to the latest in technology, development, and innovation
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/blogs"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 
                    text-white rounded-lg font-medium transition-all duration-200 text-lg shadow-sm hover:shadow-md"
                  >
                    Explore Blogs
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-4"
              >
                What We Cover
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Explore Our Content
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive guides and insights across various tech domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.gradient} text-white mb-6`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
