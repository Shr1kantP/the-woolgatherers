"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#1D0121]">
      {/* Video frame container — inset from edges, smaller on mobile */}
      <div className="absolute inset-[16px] sm:inset-[40px] rounded-[8px] overflow-hidden z-0">
        {/* Desktop Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero-bg-desktop.png"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover hidden sm:block"
        >
          <source src="/images/hero/hero-vid.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/mobile-bg.png"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover block sm:hidden"
        >
          <source src="/images/hero/hero-vid-mob.mp4" type="video/mp4" />
        </video>

        {/* Subtle overlay */}
        <div className="absolute inset-0 z-[1] bg-black/5 pointer-events-none" />

        {/* Inner edge feather — lighter blur on mobile, same on desktop */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            boxShadow: "inset 0 0 24px 10px #1D0121",
          }}
        />
      </div>

      {/* Stacked frame cards */}
      <div className="absolute z-[25] left-1/2 -translate-x-1/2 top-[10%] w-[min(78vw,380px)] sm:left-[4vw] sm:translate-x-0 sm:top-[20%] sm:w-[clamp(200px,22vw,280px)]">
        <Image
          src="/images/hero/upper-frame-1.png"
          alt="A residency for brands"
          width={320}
          height={178}
          priority
          className="h-auto w-full"
        />
      </div>

      {/* Check-in frame opens the concierge form */}
      <button
        type="button"
        aria-label="Open concierge check-in form"
        onClick={() => window.dispatchEvent(new CustomEvent("open-concierge"))}
        className="absolute z-[26] left-1/2 -translate-x-1/2 top-[38%] w-[min(78vw,380px)] cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5E9D0] focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:left-[4vw] sm:translate-x-0 sm:top-[50%] sm:w-[clamp(200px,22vw,280px)]"
      >
        <Image
          src="/images/hero/lower-frame-1.png"
          alt="Your room is ready. Check in below."
          width={520}
          height={278}
          className="h-auto w-full"
        />
      </button>

      {/* Bottom gradient — seamless transition into next section (#1D0121) */}
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#1D0121] via-[#1D0121]/60 to-transparent z-[10] pointer-events-none" />
    </section>
  );
}
