"use client";
import React from "react";
import ImageTrail from "./ImageTrail";

const logos = [
 
  "/images/Guests/cureveda.png",
  "/images/Guests/gap.png",
  "/images/Guests/jimmys.png",
  "/images/Guests/mtr.png",
  "/images/Guests/nua.png",
  "/images/Guests/peps.png",
  "/images/Guests/sathi.png",
  "/images/Guests/sfs.png",
  "/images/Guests/vahdam.png",
  "/images/Guests/wingreens.png",
];

export default function Guests() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] bg-[#220319] overflow-hidden select-none">
      {/* Top right "Drag to Explore" tag */}
      <div className="absolute top-6 right-6 md:top-10 md:right-12 z-30 text-right pointer-events-none flex flex-col items-end">
        <span className="font-semibold uppercase tracking-wider text-[#F5F0E8]/80 text-[12px] md:text-[14px] leading-none mb-1.5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          DRAG TO EXPLORE
        </span>
        <span className="font-light text-[#F5F0E8]/60 text-[13px] md:text-[15px] max-w-[160px] md:max-w-[200px] leading-snug" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Our growing wall of incredible partners.
        </span>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <h2
          className="font-semibold uppercase text-white text-center flex items-center justify-center h-full w-full mx-auto max-w-7xl px-4 py-8 md:px-10 md:py-20"
          style={{
            letterSpacing: "0.02em",
            fontFamily: '"Jersey 15", serif',
            fontSize: "clamp(40px, 12vw, 98px)",
            lineHeight: 1.05,
          }}
        >
          Selected Residents
        </h2>
      </div>
      <div className="absolute inset-0 z-20">
        <ImageTrail items={logos} variant={1} />
      </div>
    </section>
  );
}
