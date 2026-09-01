import React from 'react';
import { BlogPost } from '../../components/blog/BlogPost';
import { samplePost } from '../../components/blog/SamplePost';
import SmoothScroll from '../../components/smoothscroll';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';
import EditorialSection from '../../components/blog/EditorialSection';

export default function SingleBlogPage({ params }: { params: { id: string } }) {
  // We use samplePost for now, but in the future you'd fetch data based on params.id
  
  return (
    <SmoothScroll>
      <main className="relative z-0 min-h-screen flex flex-col bg-[#faf9f6]">
        <Navbar />
        {/* We need padding to push content below fixed navbar */}
        <div className="pt-24 flex-grow">
          <BlogPost post={samplePost} />
          
          <div className="mt-16 mb-8 border-t border-gray-200"></div>
          
          <EditorialSection title="READ MORE" theme="light" />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
