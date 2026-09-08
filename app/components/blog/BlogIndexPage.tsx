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
    <main className="font-inter min-h-screen overflow-x-hidden bg-[#210026] px-7 pb-20 pt-24 text-[#F5E9D0] sm:px-8 sm:pt-28 lg:px-[2.2vw]">
      <div className="mx-auto max-w-[1600px]">
        <header aria-labelledby="blog-heading" className="mb-8 sm:mb-12">
          <h1 id="blog-heading" className="font-heading font-bold uppercase leading-none text-[clamp(42px,10vw,100px)] text-[#F5E9D0]">
            Stories
          </h1>
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
