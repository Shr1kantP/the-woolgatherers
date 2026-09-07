import React from 'react';
import { notFound } from 'next/navigation';
import { BlogPost } from '../../components/blog/BlogPost';
import { blogPosts, editorialPosts } from '../../components/blog/BlogPosts';
import SmoothScroll from '../../components/smoothscroll';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';
import EditorialSection from '../../components/blog/EditorialSection';

export default async function SingleBlogPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.id];

  if (!post) {
    notFound();
  }

  const relatedPosts = editorialPosts.filter((item) => item.id !== resolvedParams.id).slice(0, 3);

  return (
    <SmoothScroll>
      <main className="relative z-0 min-h-screen flex flex-col bg-[#faf9f6]">
        <Navbar />
        <div className="pt-24 flex-grow">
          <BlogPost post={post} />

          <div className="mt-16 mb-8 border-t border-gray-200"></div>

          <EditorialSection title="READ MORE" theme="light" />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
