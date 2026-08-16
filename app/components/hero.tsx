"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Meadow with tree and mountains"
        fill
        priority
        className="object-cover"
      />

      {/* Decorative upper frame — hidden on small phones, visible from sm up */}
      <div className="absolute right-[52%] sm:right-[58%] top-5 sm:top-10 z-[25]"
           style={{ width: "clamp(120px, 38vw, 260px)", height: "clamp(100px, 28vw, 260px)", position: "absolute" }}>
        <Image
          src="/images/hero/upper-frame.png"
          alt="Decorative upper frame"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Bottom gradient for text contrast */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-[5]" />

      {/* Floating key — scaled down on mobile, shifted in from edge */}
      <div
        id="hero-key"
        className="absolute z-30"
        style={{
          left: "clamp(8px, 8vw, 15%)",
          top: "2%",
          width: "clamp(80px, 15vw, 250px)",
        }}
      >
        <Image
          src="/images/floating_key.svg"
          alt="The Woolgatherers key"
          width={200}
          height={600}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      {/* Main heading — scales fluidly, stays inside viewport */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center px-2 sm:px-6 pb-[40px] sm:pb-[60px]">
        <h1
          className="font-heading text-white uppercase leading-[0.85] tracking-tight text-center w-full"
          style={{ fontSize: "clamp(32px, 12vw, 140px)" }}
        >
          THE WOOLGATHERERS
        </h1>
      </div>
    </section>
  );
}
