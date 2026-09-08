import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailTemplate from "../../components/blog/BlogDetailTemplate";
import { detailedBlogPosts } from "../../components/blog/blogDetailPosts";

interface BlogDetailRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return detailedBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = detailedBlogPosts.find((item) => item.slug === slug);

  return {
    title: post ? `${post.title} | The Woolgatherers` : "Story | The Woolgatherers",
    description: post?.title,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailRouteProps) {
  const { slug } = await params;
  const post = detailedBlogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailTemplate blog={post} />;
}
