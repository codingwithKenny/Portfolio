import Blog from "@/lib/models/blog";
import { connectDB } from "@/lib/mongodb";
import { useRouter } from "next/router";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const router = useRouter();
    const { slug } = router.query;
    const blog = await Blog.findOne({ slug }).lean();

    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    blog._id = blog._id.toString(); // convert ObjectId to string

    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching blog by slug:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch blog" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
