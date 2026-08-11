import Hero from "./components/hero";
import Residency from "./components/Residency";
import Guests from "./components/Guests";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Residency />
      <Guests />
      <Services />
    </>
  );
}
