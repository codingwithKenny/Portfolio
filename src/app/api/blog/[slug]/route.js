import Blog from "@/lib/models/blog";
import { connectDB } from "@/lib/mongodb";

export async function GET(req, { params }) {
  const { slug } = params;
  await connectDB();

  try {
    const blog = await Blog.findOne({ slug }).lean();
    if (!blog) return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });

    return new Response(JSON.stringify({ ...blog, _id: blog._id.toString() }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch blog" }), { status: 500 });
  }
}
