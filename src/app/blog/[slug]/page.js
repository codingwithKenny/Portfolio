"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/app/Home/component/Header";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError("Invalid post slug.");
      return;
    }

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) throw new Error(`Failed to fetch blog post: ${res.status}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load blog post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 font-semibold text-lg">Loading post...</p>
      </div>
    );

  if (error || !post)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 text-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{error || "Post Not Found"}</h1>
        <Link
          href="/blog"
          className="text-pink-600 hover:underline font-medium text-lg"
        >
          ← Back to Blog
        </Link>
      </div>
    );

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        darkMode
          ? "bg-gray-900 text-gray-200"
          : "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-16">
        {/* Back Link */}
        <Link
          href="/blog"
          className={`block mb-8 mt-8 font-semibold text-lg ${
            darkMode ? "text-pink-300 hover:text-pink-200" : "text-pink-600 hover:text-pink-500"
          } transition-colors duration-300`}
        >
          ← Back to Blog
        </Link>

        {/* Blog Image */}
        {post.Image && (
          <img
            src={post.Image}
            alt={post.title || "Blog Image"}
            className="rounded-3xl w-full h-[500px] object-cover mb-12 shadow-lg"
          />
        )}

        {/* Title */}
        <h1 className={`text-5xl font-bold leading-tight mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
          {post.title || "Untitled Post"}
        </h1>

        {/* Date */}
        {formattedDate && (
          <p className={`text-gray-500 mb-12 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            {formattedDate}
          </p>
        )}

        {/* Blog Content with more spacing */}
        <div
          className={`prose prose-lg max-w-none leading-relaxed 
            prose-p:mb-10 
            prose-h2:mt-10 prose-h2:mb-6 
            prose-h3:mt-8 prose-h3:mb-4
            ${darkMode ? "prose-invert text-gray-300" : "text-gray-800 prose-headings:text-gray-900"}`}
          dangerouslySetInnerHTML={{ __html: post.content || "<p>No content available.</p>" }}
        />
      </div>
    </div>
  );
}
