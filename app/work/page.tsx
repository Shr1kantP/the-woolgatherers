import Work from "../components/Work";
import Footer from "../components/footer";
import SmoothScroll from "../components/smoothscroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | The Woolgatherers",
  description:
    "A selection of brand-building, design, and content projects by The Woolgatherers.",
};

export default function WorkPage() {
  return (
    <SmoothScroll>
      <main className="relative z-0">
        <Work />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
