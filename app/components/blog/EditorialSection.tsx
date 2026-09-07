'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EditorialCard } from './EditorialCard';
import { editorialPosts } from './BlogPosts';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

import { Oswald } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });

interface EditorialSectionProps {
  title?: string;
  theme?: 'light' | 'dark';
}

export default function EditorialSection({ title = 'STORIES', theme = 'dark' }: EditorialSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP ScrollTrigger animation removed temporarily to ensure visibility.
    // When using Lenis smooth scrolling, ScrollTrigger often requires specific integration 
    // to fire correctly, otherwise elements can remain stuck at opacity: 0.
  }, []);

  return (
    <section 
      id="stories"
      ref={sectionRef} 
      className="w-full pt-4 pb-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={headingRef}
          className={`text-4xl md:text-[clamp(2.5rem,5vw,4rem)] mb-12 md:mb-16 font-semibold ${oswald.className} ${theme === 'dark' ? 'text-[#F5E9D0]' : 'text-gray-900'}`}
        >
         {title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-12">
          {editorialPosts.map((post, index) => (
            <div 
              key={post.id} 
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <EditorialCard {...post} theme={theme} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
