"use client";
import React from "react";
import ImageTrail from "./ImageTrail";

const logos = [
  "/images/Guests/Ellipse 45.png",
  "/images/Guests/Ellipse 47.png",
  "/images/Guests/Ellipse 49.png",
  "/images/Guests/icon_512x512.6461e0 1.png",
  "/images/Guests/image 42.png",
  "/images/Guests/image 43.png",
  "/images/Guests/image 44.png",
  "/images/Guests/image 45.png",
  "/images/Guests/image 46.png",
  "/images/Guests/image 47.png",
  "/images/Guests/image 48.png",
  "/images/Guests/image 49.png",
  "/images/Guests/Logo-3_1 1.png",
  "/images/Guests/Rectangle 40292.png",
  "/images/Guests/Rectangle 40293.png",
];

export default function Guests() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] bg-[#2E0A38] overflow-hidden select-none">
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
