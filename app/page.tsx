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

        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springConfig}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div 
                className="mb-6 inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...springConfig, delay: 0.1 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 0.9, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="relative px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-gray-200">
                    Welcome to the Future of Tech
                  </div>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.2 }}
              >
                Welcome to  {"TechManiac"}
                <span className="relative inline-block">
                  
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ ...springConfig, delay: 0.5 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.3 }}
              >
                Your gateway to the latest in technology,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  development
                </span>
                , and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  innovation
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.4 }}
                className="flex justify-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200" />
                  <Link 
                    href="/blogs"
                    className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                    text-white rounded-full font-medium transition-all duration-200 text-lg group-hover:shadow-lg group-hover:shadow-blue-500/25"
                  >
                    Explore Blogs
                    <motion.div
                      whileHover={{ x: 5 }}
                      whileTap={{ x: -2 }}
                      transition={{ type: "spring", stiffness: 800, damping: 15 }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-24 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springConfig}
              className="text-center mb-16 sm:mb-20"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.1 }}
                className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-gray-300 mb-4"
              >
                What We Cover
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Explore Our Content
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive guides and insights across various tech domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springConfig, delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    transition: springConfig
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-xl
                    border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl
                    transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    whileTap={{ scale: 0.95, rotate: -5 }}
                    transition={springConfig}
                    className={`relative w-14 h-14 rounded-xl flex items-center justify-center 
                      bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="relative text-xl sm:text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="relative text-base sm:text-lg text-gray-300">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/20 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
