import type { Metadata } from "next";
import BlogIndexPage from "../components/blog/BlogIndexPage";
import { blogIndexPosts } from "../components/blog/BlogPosts";

export const metadata: Metadata = {
  title: "Stories | The Woolgatherers",
  description: "Notes, ideas, and observations from The Woolgatherers residency.",
};

export default function BlogPage() {
  return <BlogIndexPage posts={blogIndexPosts} />;
}
