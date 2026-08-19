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

      {/* Decorative upper frame */}
      <div className="absolute left-[95%] top-1/2 -translate-x-1/2 -translate-y-[70%] sm:translate-y-0 sm:left-auto sm:right-[45%] sm:top-20 z-[25] w-[85vw] max-w-[500px] sm:w-[clamp(160px,80vw,600px)] aspect-[1.62] sm:aspect-auto sm:h-[clamp(140px,38vw,320px)]"
           style={{ position: "absolute" }}>
        <Image
          src="/images/hero/upper-frame.png"
          alt="Decorative upper frame"
          fill
          priority
          className="object-contain object-right"
        />
      </div>

      {/* Bottom gradient for text contrast */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-[5]" />

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
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center px-2 sm:px-6 pb-[110px] sm:pb-[60px]">
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
