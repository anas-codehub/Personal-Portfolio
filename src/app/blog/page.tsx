"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    title: "Understanding React Hooks",
    date: "August 10, 2025",
    excerpt:
      "A deep dive into React Hooks and how to use them effectively in modern web apps.",
    slug: "react-hooks",
  },
  {
    title: "Next.js 15: What’s New",
    date: "July 22, 2025",
    excerpt:
      "Explore the new features of Next.js 15 and how to leverage them for faster, better web apps.",
    slug: "nextjs-15",
  },
  {
    title: "Tailwind CSS Tricks",
    date: "June 30, 2025",
    excerpt:
      "Boost your UI development speed with these Tailwind CSS hacks and best practices.",
    slug: "tailwind-tricks",
  },
];

const BlogPage = () => {
  return (
    <section className="w-full min-h-screen bg-[#0D1117] text-white px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-mono text-green-400 mb-12"
        >
          &gt;_ Blog
        </motion.h1>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0F141B] border border-green-400 p-6 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
            >
              <h2 className="text-2xl font-mono text-green-400 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4 text-sm">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-green-400 font-mono hover:text-green-500 underline"
              >
                Read More &gt;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
