import Blog from "@/lib/models/blog";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();

  try {
    const blogs = await Blog.find({}).sort({ date: -1 }).lean();
    const formatted = blogs.map(b => ({ ...b, _id: b._id.toString() }));

    return new Response(JSON.stringify(formatted), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching all blogs:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), { status: 500 });
  }
}
