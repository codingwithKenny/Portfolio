// src/lib/models/blog.js
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  teaser: String,
  slug: String,
  content: String,
  date: Date,
  image: String,
}, { collection: "blog" }); // <- force collection name

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
