import Blog from "@/lib/models/blog";
import { connectDB } from "@/lib/mongodb";

export default async function handler(req, res) {
  await connectDB();

  const { slug } = req.query; // ✅ Get slug from query (works for /api/blog/[slug])

  try {
    const blog = await Blog.findOne({ slug }).lean();

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    blog._id = blog._id.toString();

    return res.status(200).json(blog);
  } catch (err) {
    console.error("Error fetching blog by slug:", err);
    return res.status(500).json({ error: "Failed to fetch blog" });
  }
}
