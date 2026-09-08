import BlogCard from "./BlogCard";
import type { BlogIndexPost } from "./BlogPosts";

interface BlogIndexPageProps {
  posts: BlogIndexPost[];
}

export default function BlogIndexPage({ posts }: BlogIndexPageProps) {
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const moreStories = posts.filter((post) => post.id !== featuredPost?.id);

  if (!featuredPost) {
    return null;
  }

  return (
    <main className="font-inter min-h-screen overflow-hidden bg-[#f6f2ec] px-7 pb-20 pt-24 text-[#1a0d26] sm:px-8 sm:pt-28 lg:px-[2.2vw]">
      <div className="mx-auto max-w-[1600px]">
        <header aria-labelledby="blog-heading" className="mx-auto mb-7 max-w-[390px] text-center sm:mb-8">
          <h1 id="blog-heading" className="font-inter whitespace-nowrap text-[clamp(2rem,8vw,4.2rem)] leading-[0.95] tracking-[0] text-[#210026]">
            Stories & Events
          </h1>
          <p className="mt-3 text-sm leading-[1.3] text-[#1a0d26]/85 sm:text-base">
            Discover the Woolgatherers journal, an editorial space rooted in craft, culture, and storytelling.
          </p>
        </header>

        <section aria-labelledby="stories-heading">
          <h2 id="stories-heading" className="sr-only">Stories</h2>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible lg:grid-cols-4 lg:gap-[1.1vw]">
            {[featuredPost, ...moreStories].map((post) => (
              <div key={post.id} className="w-[82vw] shrink-0 snap-start sm:w-auto">
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
