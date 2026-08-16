"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Residency() {
  const headingRef  = useRef<HTMLHeadingElement | null>(null);
  const para1Ref    = useRef<HTMLDivElement | null>(null);
  const para2Ref    = useRef<HTMLDivElement | null>(null);
  const leftImgRef  = useRef<HTMLDivElement | null>(null);
  const rightImgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    if (prefersReduced) {
      gsap.set(
        [para1Ref.current, para2Ref.current, headingRef.current, leftImgRef.current, rightImgRef.current],
        { y: 0, opacity: 1 }
      );
      return;
    }

    const tweens: gsap.core.Tween[] = [];

    const fadeUp = (el: HTMLElement | null, delay = 0) => {
      if (!el) return;
      tweens.push(
        gsap.fromTo(el, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, delay, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
        })
      );
    };

    const fadeUpScale = (el: HTMLElement | null) => {
      if (!el) return;
      gsap.set(el, { y: 60, opacity: 0, scale: 1.05 });
      tweens.push(
        gsap.to(el, {
          y: 0, opacity: 1, scale: 1, duration: 1.05, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
        })
      );
    };

    fadeUp(headingRef.current);
    fadeUp(para1Ref.current, 0.05);
    fadeUp(para2Ref.current, 0.1);
    fadeUpScale(leftImgRef.current);
    fadeUpScale(rightImgRef.current);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tweens.forEach((t) => t.kill?.());
    };
  }, []);

  /* ─────────────────────────────────────────────────────────────────────────
     Shared font shorthand
  ───────────────────────────────────────────────────────────────────────── */
  const bodyFont: React.CSSProperties = {
    fontFamily: "Inter, ui-sans-serif, sans-serif",
    fontSize: "clamp(13px, 3.5vw, 16px)",
    lineHeight: 1.6,
    color: "#F5F0E8",
  };

  return (
    <section
      className="relative bg-[#30093f] text-[#F5F0E8] overflow-hidden"
      style={{ paddingTop: "clamp(3rem, 8vw, 6rem)", paddingBottom: "clamp(3rem, 8vw, 6rem)" }}
    >

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE + TABLET  (< lg) — matches the reference screenshot exactly
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden px-5 sm:px-8 md:px-10">

        {/* 1. Heading — left-aligned, two-line, large */}
        <h2
          ref={headingRef}
          className="uppercase font-bold leading-none mb-8 sm:mb-10"
          style={{
            fontFamily: '"Jersey 15", system-ui, serif',
            fontSize: "clamp(48px, 14vw, 96px)",
            letterSpacing: "-0.02em",
            color: "#F5F0E8",
          }}
        >
          THE<br />RESIDENCY
        </h2>

        {/* 2. Two-column zone: tall stamp left | text + rotated stamp right */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start">

          {/* Left col — tall portrait stamp image */}
          <div ref={leftImgRef} className="w-full">
            <Image
              src="/images/resident-image-topleft.png"
              alt="Landscape stamp"
              width={200}
              height={380}
              className="w-full h-auto object-cover"
              style={{ display: "block" }}
            />
          </div>

          {/* Right col — para1 text on top, rotated stamp below */}
          <div className="flex flex-col gap-5 sm:gap-7 pt-1">
            <div ref={para1Ref}>
              <p style={bodyFont}>
                We help brands find clarity, build distinct identities, and grow through
                thoughtful strategy, design, content, and digital experiences.
              </p>
            </div>

            <div ref={rightImgRef} style={{ transform: "rotate(3deg)", transformOrigin: "center center" }}>
              <Image
                src="/images/resident-image-bottomright.png"
                alt="The Woolgatherers stamp"
                width={160}
                height={280}
                className="w-full h-auto object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* 3. Para 2 — below the image row, left-aligned */}
        <div ref={para2Ref} className="mt-6 sm:mt-8" style={{ maxWidth: "55%" }}>
          <p style={bodyFont}>
            Over the years, we&apos;ve worked with startups, family businesses,
            challenger brands, and category leaders alike.
          </p>
        </div>

        {/* 4. Full-width italic quote at the bottom */}
        <div className="mt-10 sm:mt-14 border-t border-[#F5F0E8]/20 pt-8 sm:pt-10">
          <p
            className="text-center"
            style={{
              fontFamily: '"Instrument Serif", "Times New Roman", serif',
              fontStyle: "italic",
              fontSize: "clamp(20px, 5.5vw, 36px)",
              lineHeight: 1.25,
              color: "#F5F0E8",
            }}
          >
            Every brand&apos;s journey is different.<br />
            Every stay is thoughtfully designed.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP  (lg+) — original layout, completely untouched
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-start mt-16">

            <div className="col-span-3" />

            <div className="col-span-3 flex items-start">
              <div className="w-full">
                <div ref={para1Ref} className="prose prose-lg max-w-prose ml-auto text-left text-[#F5F0E8]">
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 20, lineHeight: 1.45 }}>
                    We help brands find clarity, build distinct identities, and grow through thoughtful
                    strategy, design, content, and digital experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <h2
                ref={headingRef}
                className="w-full text-center uppercase tracking-tight"
                style={{
                  fontSize: "clamp(48px, 8vw, 120px)",
                  lineHeight: 1,
                  letterSpacing: "-1px",
                  fontFamily: '"Jersey 15", serif',
                }}
              >
                THE RESIDENCY
              </h2>
            </div>

            <div className="col-span-4 mt-0 lg:mt-32">
              <div ref={para2Ref} className="max-w-md text-left text-[#F5F0E8]"
                style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.45 }}>
                <p>
                  Over the years, we&apos;ve worked with startups, family businesses, challenger brands,
                  and category leaders alike.
                </p>
              </div>
            </div>

            <div className="col-span-4 col-start-9" />

            <div className="col-span-4 col-start-1 mt-10 lg:mt-0">
              <div className="max-w-xs text-left text-[#F5F0E8]"
                style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.45 }}>
                <p>Every brand&apos;s journey is different. Every stay is thoughtfully designed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop decorative stamps — absolutely positioned as before */}
        <div aria-hidden className="pointer-events-none">
          <div
            ref={leftImgRef}
            className="absolute"
            style={{
              left: "clamp(8px, 4vw, 120px)",
              top: "clamp(1.5rem, 5vh, 5rem)",
              transform: "rotate(-2deg)",
              zIndex: 20,
            }}
          >
            <Image
              src="/images/resident-image-topleft.png"
              alt=""
              width={250}
              height={300}
              style={{ objectFit: "cover", display: "block", width: "clamp(160px, 16vw, 250px)", height: "auto" }}
            />
          </div>

          <div
            ref={rightImgRef}
            className="absolute"
            style={{
              right: "clamp(8px, 4vw, 120px)",
              bottom: "clamp(1.5rem, 5vh, 5rem)",
              transform: "rotate(12deg)",
              zIndex: 20,
            }}
          >
            <Image
              src="/images/resident-image-bottomright.png"
              alt=""
              width={250}
              height={300}
              style={{ objectFit: "cover", display: "block", width: "clamp(160px, 16vw, 250px)", height: "auto" }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
