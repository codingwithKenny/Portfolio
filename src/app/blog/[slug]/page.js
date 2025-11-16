export const dynamic = "force-dynamic"; // <--- THIS FIXES THE PRODUCTION ISSUE

import Blog from "@/lib/models/blog";
import { connectDB } from "@/lib/mongodb";
import Header from "@/app/Home/component/Header";
import Link from "next/link";

export default async function BlogPage({ params }) {
   
  const { slug } = params;

  await connectDB();

  const post = await Blog.findOne({ slug }).lean();

  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 text-center p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-pink-600 hover:underline font-medium text-lg">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
    : "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-gray-900 transition-colors duration-700">
      <Header />
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-16">
        <Link
          href="/blog"
          className="block mb-8 mt-8 font-semibold text-lg text-pink-600 hover:text-pink-500 transition-colors duration-300"
        >
          ← Back to Blog
        </Link>

        {post.Image && (
          <img
            src={post.Image}
            alt={post.title || "Blog Image"}
            className="rounded-3xl w-full h-[500px] object-cover mb-12 shadow-lg"
          />
        )}

        <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900">{post.title}</h1>

        {formattedDate && <p className="text-gray-500 mb-12">{formattedDate}</p>}

        <div
          className="prose prose-lg max-w-none leading-relaxed
            prose-p:mb-10
            prose-h2:mt-10 prose-h2:mb-6
            prose-h3:mt-8 prose-h3:mb-4
            text-gray-800 prose-headings:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content || "<p>No content available.</p>" }}
        />
      </div>
    </div>
  );
}
