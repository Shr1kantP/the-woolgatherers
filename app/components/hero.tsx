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

      <div className="absolute right-[55%] xs:right-[60%] top-6 sm:top-10 z-25 h-[160px] xs:h-[200px] sm:h-[250px] w-[48%] sm:w-[45%]">
        <Image
          src="/images/hero/upper-frame.png"
          alt="Decorative upper frame"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-[5]" />

      <div
        id="hero-key"
        className="absolute z-30"
        style={{ left: "15%", top: "2%", width: "clamp(220px, 35vw, 450px)" }}
      >
        <Image
          src="/images/floating_key.svg"
          alt="The Woolgatherers key"
          width={400}
          height={800}
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center px-4 sm:px-8 pb-[60px]">
        <h1 className="font-heading text-white uppercase leading-[0.85] text-[14vw] md:text-[10vw] tracking-tight text-center">
          THE WOOLGATHERERS
        </h1>
      </div>
    </section>
  );
}
