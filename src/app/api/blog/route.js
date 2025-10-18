import Blog from "@/lib/models/blog";
import { connectDB } from "@/lib/mongodb";

export async function GET(req) {
  await connectDB();

  try {
    const blogs = await Blog.find({}).sort({ date: -1 }).lean();
    console.log("Found blogs:", blogs.length);
    console.log("Blogs data:", blogs);

    const formatted = blogs.map(b => ({ ...b, _id: b._id.toString() }));
    return new Response(JSON.stringify(formatted), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
