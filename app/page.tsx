import Hero from "./components/hero";
import Residency from "./components/Residency";
import Guests from "./components/Guests";
import HostsSection from "./components/hosts/HostsSection";
import Services from "./components/Services";
import Resident_stories from "./components/Resident_stories";
import SmoothScroll from "./components/smoothscroll";
import Footer from "./components/footer";
import ScrollBouncingKey from "./components/ScrollBouncingKey";

export default function Home() {
  return (
    <SmoothScroll>
      {/*
        position:relative on main is essential — ScrollBouncingKey uses
        position:absolute inside it so top/left values are relative to the
        full page height, not just the viewport.
      */}
      <main className="relative z-0">
        {/* Bouncing key lives inside main so it scrolls with the page */}
        <ScrollBouncingKey />
        <Hero />
        <Residency />
        <Guests />
        <Services />
        <Resident_stories />
        <HostsSection />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
