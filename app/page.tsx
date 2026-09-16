import Hero from "./components/hero";
import Residency from "./components/Residency";
import Guests from "./components/Guests";
import HostsSection from "./components/hosts/HostsSection";
import Services from "./components/Services";
import Resident_stories from "./components/Resident_stories";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="relative z-0">
      <Hero />
      <Residency />
      <Services />
      <Guests />
      <Resident_stories />
      <HostsSection />
      <Footer />
    </main>
  );
}
