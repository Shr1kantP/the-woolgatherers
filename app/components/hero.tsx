"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/hero-bg-desktop.png"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/hero/hero-vid.mp4" type="video/mp4" />
      </video>

      {/* Stacked frame cards */}
      <div className="absolute z-[25] left-1/2 -translate-x-1/2 top-[10%] w-[min(94vw,560px)] sm:left-[4vw] sm:translate-x-0 sm:top-[14%] sm:w-[clamp(280px,32vw,380px)]">
        <Image
          src="/images/hero/upper-frame-1.png"
          alt="A residency for brands"
          width={520}
          height={278}
          priority
          className="h-auto w-full"
        />
      </div>

      {/* Check-in frame opens the concierge form. */}
      <button
        type="button"
        aria-label="Open concierge check-in form"
        onClick={() => window.dispatchEvent(new CustomEvent("open-concierge"))}
        className="absolute z-[26] left-1/2 -translate-x-1/2 top-[38%] w-[min(94vw,560px)] cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF9F6] focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:left-[4vw] sm:translate-x-0 sm:top-[46%] sm:w-[clamp(280px,32vw,380px)]"
      >
        <Image
          src="/images/hero/lower-frame-1.png"
          alt="Your room is ready. Check in below."
          width={520}
          height={278}
          className="h-auto w-full"
        />
      </button>

      {/* Bottom gradient for text contrast */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent z-[5]" />

      {/* Floating key 
      <div
        id="hero-key"
        className="absolute z-30 left-1/2 -translate-x-1/2 top-[10%] w-[260px] rotate-[-90deg] sm:rotate-0 sm:left-[clamp(8px,8vw,15%)] sm:translate-x-0 sm:top-[2%] sm:w-[clamp(80px,15vw,250px)]"
      >
        <Image
          src="/images/floating_key.svg"
          alt="The Woolgatherers key"
          width={200}
          height={600}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div> */}

      {/* Main heading — kept at the bottom but pushed up slightly on mobile */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center px-2 sm:px-6 pb-[3vh] sm:pb-[1.5vh]">
        <h1
          className="font-heading text-[#FAF9F6] uppercase leading-[0.85] tracking-tight text-center w-full text-[clamp(64px,20vw,64px)] sm:text-[clamp(94px,48vw,132px)]"
        >
          THE WOOLGATHERERS
        </h1>
      </div> */}
    </section>
  );
}
