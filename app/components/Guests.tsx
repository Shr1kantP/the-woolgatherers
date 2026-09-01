"use client";
import React from "react";
import ImageTrail from "./ImageTrail";

const logos = [
  "/images/Guests/Ellipse%2045.png",
  "/images/Guests/Ellipse%2047.png",
  "/images/Guests/Ellipse%2049.png",
  "/images/Guests/icon_512x512.6461e0%201.png",
  "/images/Guests/image%2042.png",
  "/images/Guests/image%2043.png",
  "/images/Guests/image%2044.png",
  "/images/Guests/image%2045.png",
  "/images/Guests/image%2046.png",
  "/images/Guests/image%2047.png",
  "/images/Guests/image%2048.png",
  "/images/Guests/image%2049.png",
  "/images/Guests/Logo-3_1%201.png",
  "/images/Guests/Rectangle%2040292.png",
  "/images/Guests/Rectangle%2040293.png",
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
