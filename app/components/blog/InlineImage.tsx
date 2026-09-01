import React from 'react';

interface InlineImageProps {
  url: string;
  alt: string;
  caption?: string;
}

export const InlineImage: React.FC<InlineImageProps> = ({ url, alt, caption }) => {
  return (
    <figure className="my-10 flex flex-col items-center">
      <img src={url} alt={alt} className="max-w-full h-auto rounded-sm" />
      {caption && (
        <figcaption className="mt-3 text-sm italic text-gray-500 text-center max-w-2xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
