/* eslint-disable @typescript-eslint/no-unused-vars */

import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { blogs } from "@/data/blogs";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock } from 'lucide-react';
import type { InferGetStaticPropsType } from "next";
import { getStaticProps } from "next/dist/build/templates/pages";

// Correct PageProps Type Inference
export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function BlogPostPage({ params }: PageProps) {
  const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) return notFound();

  const springConfig = {
    type: "spring",
    stiffness: 400,
    damping: 15,
    mass: 0.8
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0A0A0B] text-white relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-8">
            {/* Hero Section */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {blog.title}
                </motion.h1>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <time dateTime={blog.date}>{blog.date}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>5 min read</span>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <motion.span key={tag} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="px-3 py-1.5 text-sm bg-white/10 backdrop-blur-xl text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
            {/* Content */}
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="prose dark:prose-invert prose-lg max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                {blog.content}
              </ReactMarkdown>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({ params: { id: blog.id.toString() } }));
}