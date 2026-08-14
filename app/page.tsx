import Hero from "./components/hero";
import Residency from "./components/Residency";
import Guests from "./components/Guests";
import HostsSection from "./components/hosts/HostsSection";
import Services from "./components/Services";
import Resident_stories from "./components/Resident_stories";
import SmoothScroll from "./components/smoothscroll";
import Footer from "./components/footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative z-0">
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
