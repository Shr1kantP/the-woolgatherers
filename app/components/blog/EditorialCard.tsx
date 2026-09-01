'use client';

import React from 'react';
import Link from 'next/link';

export interface EditorialCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  isFeatured?: boolean;
  theme?: 'light' | 'dark';
}

import ShinyText from '../ShinyText';

export const EditorialCard: React.FC<EditorialCardProps> = ({
  title,
  description,
  imageUrl,
  href,
  isFeatured,
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';
  return (
    <Link href={href} className="group block w-full h-full cursor-pointer">
      <article className="flex flex-col h-full">
        {/* Image Container: 3:2 aspect ratio for horizontal rectangle */}
        <div className="relative w-full aspect-[3/2] overflow-hidden bg-zinc-900 mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle accent tag/border could be added here, keeping it clean for now */}
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-grow relative">
          {isFeatured && (
            <div className="mb-2 text-xs font-bold uppercase tracking-wider">
              <ShinyText text="✨ Featured Article" speed={3} color="#a0aec0" shineColor="#ffffff" />
            </div>
          )}
          {/* Title: Inter/sans font, ~16px gap above (mb-4 on image = 1rem = 16px) */}
          <h3
            className={`text-2xl md:text-[clamp(1.25rem,2vw,1.75rem)] leading-tight mb-2 transition-colors duration-300 line-clamp-2 font-sans font-semibold ${
              isDark ? 'text-[#F5E9D0] group-hover:text-white' : 'text-gray-900 group-hover:text-gray-600'
            }`}
          >
            {title}
          </h3>

          {/* Description: Inter/sans font, muted tone, ~8px gap above (mb-2 on title = 0.5rem = 8px) */}
          <p className={`text-sm md:text-base leading-snug line-clamp-3 font-sans font-medium ${
            isDark ? 'text-[#F5E9D0]/70' : 'text-gray-600'
          }`}>
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
};
