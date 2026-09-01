import React from 'react';
import { InlineImage } from './InlineImage';

export type ContentBlock =
  | { type: 'paragraph'; content: React.ReactNode }
  | { type: 'heading'; content: string }
  | { type: 'image'; url: string; alt: string; caption?: string }
  | { type: 'list'; leadIn?: string; items: React.ReactNode[] };

export interface BlogPostData {
  date: string;
  title: string;
  subtitle: string;
  author?: string;
  heroImage: string;
  heroImageAlt: string;
  body: ContentBlock[];
}

interface BlogPostProps {
  post: BlogPostData;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const {
    date,
    title,
    subtitle,
    author,
    heroImage,
    heroImageAlt,
    body,
  } = post;

  const blocksToShow = body;

  return (
    <article className="max-w-4xl mx-auto px-4 pt-4 pb-12 font-sans">
      {/* Header Section */}
      <header className="mb-6 text-center flex flex-col items-center">
        <time className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4 block">
          {date}
        </time>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4 leading-tight max-w-3xl">
          {title}
        </h1>
        <p className="text-xl md:text-2xl italic text-gray-600 font-light max-w-2xl mb-4">
          {subtitle}
        </p>
      </header>

      {/* Hero Image */}
      <div className="mb-6 w-full">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full h-auto object-cover max-h-[70vh] rounded-sm mx-auto"
        />
      </div>

      {/* Credits & Share */}
      <div className="w-full flex items-center justify-between text-sm font-medium text-gray-500 uppercase tracking-widest mb-12">
        <div>{author && <span>By {author}</span>}</div>
        <button aria-label="Share this post" className="hover:text-gray-900 transition-colors flex items-center" title="Share">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256">
            <path d="M237.66,106.34l-80-80A8,8,0,0,0,144,32V72C66.21,73.18,22.45,123.63,11.26,177.34a8,8,0,0,0,13,7.91c29-23.71,62.38-34.87,119.78-37.16V192a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,237.66,106.34ZM160,172.69V136a8,8,0,0,0-8-8c-52,0-85.34,10.66-112.59,28.84,9.2-34.42,39-65.43,103.88-68.74a8,8,0,0,0,7.66-7.16l.05-1V43.31L218.69,112Z"></path>
          </svg>
        </button>
      </div>

      {/* Body Content */}
      <div className="max-w-[680px] mx-auto text-lg md:text-xl leading-relaxed text-gray-800">
        {blocksToShow.map((block, index) => {
          switch (block.type) {
            case 'paragraph':
              return (
                <p key={index} className="mb-6">
                  {block.content}
                </p>
              );
            case 'heading':
              return (
                <h2
                  key={index}
                  className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mt-12 mb-6"
                >
                  {block.content}
                </h2>
              );
            case 'image':
              return (
                <InlineImage
                  key={index}
                  url={block.url}
                  alt={block.alt}
                  caption={block.caption}
                />
              );
            case 'list':
              return (
                <div key={index} className="mb-6">
                  {block.leadIn && (
                    <p className="font-bold mb-4">{block.leadIn}</p>
                  )}
                  <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            default:
              return null;
          }
        })}

      </div>
    </article>
  );
};
