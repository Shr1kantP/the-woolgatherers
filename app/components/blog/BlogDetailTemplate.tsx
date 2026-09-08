import Image from "next/image";
import type { ContentBlock } from "./BlogPost";

export interface BlogDetailData {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  contributor: {
    name: string;
    initials: string;
    avatar: string;
  };
  heroImage: string;
  heroImageAlt: string;
  body: ContentBlock[];
}

function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5 text-[13px] leading-[1.48] text-[#151515] sm:text-sm">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={`${block.type}-${index}`}>{block.content}</p>;
        }

        if (block.type === "heading") {
          return <h2 key={`${block.type}-${index}`} className="pt-3 font-sans text-xl font-bold leading-tight sm:text-2xl">{block.content}</h2>;
        }

        if (block.type === "list") {
          return (
            <ul key={`${block.type}-${index}`} className="list-none space-y-3 pl-0">
              {block.items.map((item, itemIndex) => <li key={`${index}-${itemIndex}`}>{item}</li>)}
            </ul>
          );
        }

        if (block.type === "table") {
          return (
            <div key={`${block.type}-${index}`} className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse border border-[#151515]/35 text-left text-xs">
                <thead>
                  <tr>
                    {block.headers.map((header) => <th key={header} className="border border-[#151515]/35 px-3 py-2 font-bold">{header}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => <td key={cellIndex} className="border border-[#151515]/35 px-3 py-2 align-top">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default function BlogDetailTemplate({ blog }: { blog: BlogDetailData }) {
  return (
    <main className="min-h-screen bg-[#f6f2ec] px-6 pb-24 pt-28 text-[#151515] sm:px-10 sm:pt-36 lg:px-[6.5vw]">
      <div className="mx-auto max-w-[1160px]">
        <header className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[7vw]">
          <div className="pt-1">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#151515]/75">
              <span>{blog.category}</span><span aria-hidden="true">|</span><time dateTime={blog.date}>{blog.date}</time><span aria-hidden="true">|</span><span>{blog.readTime}</span>
            </div>
            <h1 className="max-w-[13ch] font-sans text-[clamp(3rem,5.3vw,5.6rem)] font-black leading-[0.88] tracking-[-0.065em]">{blog.title}</h1>
            <div className="mt-8 flex items-center gap-3">
              <Image src={blog.contributor.avatar} alt={`${blog.contributor.name} profile`} width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
              <div className="leading-tight">
                <p className="text-[10px] text-[#151515]/55">Contributor</p>
                <p className="mt-1 text-xs font-bold">{blog.contributor.name}</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[1.22/1] overflow-hidden bg-[#202020]">
            <Image src={blog.heroImage} alt={blog.heroImageAlt} fill priority className="object-cover grayscale contrast-125" sizes="(max-width: 1023px) 100vw, 50vw" />
          </div>
        </header>

        <div className="pt-7 sm:pt-8 lg:pt-10">
          <article className="mx-auto w-full max-w-[980px] text-left">
            <ArticleBody blocks={blog.body} />
          </article>
        </div>
      </div>
    </main>
  );
}
