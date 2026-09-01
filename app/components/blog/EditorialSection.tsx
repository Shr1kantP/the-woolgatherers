'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EditorialCard } from './EditorialCard';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

import { Oswald } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'] });

const DUMMY_EDITORIALS = [
  {
    id: '1',
    title: 'Framing your artwork',
    description: 'Our guide to hanging and displaying your print perfectly.',
    imageUrl: 'https://images.unsplash.com/photo-1579547621113-e4bb35220c54?auto=format&fit=crop&q=80&w=800',
    href: '/blog/1',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Hanging your artwork',
    description: 'Our simple guide to displaying your print perfectly.',
    imageUrl: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800',
    href: '/blog/2',
  },
  {
    id: '3',
    title: 'What to look out for when you\'re buying a print',
    description: 'This guide explores what defines a high-quality print, from paper and ink to colour accuracy and resolution.',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
    href: '/blog/3',
  },
];

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
          {DUMMY_EDITORIALS.map((post, index) => (
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
