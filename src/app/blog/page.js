"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../Home/component/Header";

const Blog = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Fetch blogs from your API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blog"); // your API route
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    }
    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 text-white">
        <motion.div
          className="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <p className="mt-6 font-semibold text-lg animate-pulse">
          Loading Blog...
        </p>
      </div>
    );

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] text-white"
          : "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-black"
      } transition-all duration-700`}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Glowing Backgrounds */}
      <div className="absolute -top-20 -left-20 w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-r from-pink-400 to-purple-600 opacity-20 blur-[130px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-tr from-purple-500 to-pink-300 opacity-20 blur-[100px] rounded-full animate-pulse pointer-events-none" />

      <section className="pt-28 pb-20 px-6 sm:px-10 lg:px-20 relative z-10">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Blog & Insights
          </h1>
          <p
            className={`mt-4 text-base sm:text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Thoughts, tutorials, and experiments in code, automation, and design.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id} // MongoDB uses _id
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                darkMode ? "bg-[#1b1b2f]" : "bg-white"
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.Image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p
                  className={`text-sm mb-2 ${
                    darkMode ? "text-pink-300" : "text-pink-500"
                  }`}
                >
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <h2 className="text-xl font-bold mb-3">{blog.title}</h2>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {blog.teaser}
                </p>
                <motion.a
                  href={`/blog/${blog.slug}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300"
                >
                  Read More →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
