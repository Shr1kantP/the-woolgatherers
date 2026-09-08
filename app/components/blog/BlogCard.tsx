import Image from "next/image";
import Link from "next/link";
import type { BlogIndexPost } from "./BlogPosts";

export interface BlogCardProps extends BlogIndexPost {
  featured?: boolean;
}

export default function BlogCard({
  badge,
  image,
  imageAlt = "",
  gradientClass,
  date,
  title,
  excerpt,
  href,
  featured = false,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5d1515] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f6f2ec]"
    >
      <article className="flex h-full flex-col">
        <div className={`relative isolate overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-[0.78/1]"} ${gradientClass}`}>
          {image ? (
            <Image src={image} alt={imageAlt || title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes={featured ? "(max-width: 1024px) 100vw, 56vw" : "(max-width: 639px) 82vw, (max-width: 1024px) 45vw, 25vw"} />
          ) : (
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center font-heading text-[clamp(3rem,9vw,7rem)] leading-none text-white/90 drop-shadow-sm">
              {featured ? "+" : "W"}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col pt-3">
          <div className="flex items-baseline justify-between gap-3 text-[#1a0d26]/55">
            <span className="font-inter text-sm italic">{badge}</span>
            <time dateTime={date} className="shrink-0 text-[10px] font-medium uppercase tracking-[0.08em]">
              {date}
            </time>
          </div>
          <h2 className="font-inter mt-2 text-[clamp(1.25rem,1.8vw,1.65rem)] leading-[1.05] text-[#1a0d26] transition-colors group-hover:text-[#5d1515]">
            {title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-[#1a0d26]/80">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
