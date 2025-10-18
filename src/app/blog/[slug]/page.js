"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/app/Home/component/Header";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch blog post");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Unable to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // ---------------------------
  // Loading Screen
  // ---------------------------
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
        <motion.div
          className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <p className="mt-4 font-semibold text-lg">Loading post...</p>
      </div>
    );
  }

  // ---------------------------
  // Error or Not Found
  // ---------------------------
  if (error || !post) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 text-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {error || "Post Not Found"}
        </h1>
        <Link href="/blog" className="text-pink-600 hover:underline font-medium">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // ---------------------------
  // Blog Content
  // ---------------------------
  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] text-gray-200"
          : "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-gray-900"
      }`}
    >
      {/* Header with Dark Mode Toggle */}
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className="max-w-3xl mx-auto px-6 md:px-0 py-10">
        <Link
          href="/blog"
          className={`block mb-6 font-medium ${
            darkMode
              ? "text-pink-400 hover:text-pink-300"
              : "text-pink-600 hover:text-pink-500"
          } transition-colors duration-300`}
        >
          ← Back to Blog
        </Link>

        {/* Blog Image */}
        {post.Image && (
          <motion.img
            src={post.Image}
            alt={post.title}
            className="rounded-2xl w-full h-72 object-cover mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        )}

        {/* Title & Date */}
        <h1
          className={`text-4xl font-bold leading-tight mb-3 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {post.title}
        </h1>

        <p
          className={`text-sm mb-8 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>

        {/* Blog Content */}
        <div
          className={`prose prose-lg max-w-none leading-relaxed ${
            darkMode
              ? "prose-invert text-gray-300"
              : "text-gray-700 prose-headings:text-gray-800"
          }`}
          dangerouslySetInnerHTML={{
            __html: post.content || post.teaser || "No content available.",
          }}
        />
      </div>
    </div>
  );
}
