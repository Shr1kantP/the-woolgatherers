import EditorialSection from "../components/blog/EditorialSection";
import SmoothScroll from "../components/smoothscroll";
import Footer from "../components/footer";

export default function BlogPage() {
  return (
    <SmoothScroll>
      <main className="relative z-0 min-h-screen flex flex-col bg-[#18101F]">
        {/* Adjusted top padding to be smaller since the section has its own padding */}
        <div className="pt-24 flex-grow">
          <EditorialSection />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
