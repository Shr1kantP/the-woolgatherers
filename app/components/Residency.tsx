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
      className="relative bg-[#210026] text-[#F5F0E8] overflow-hidden"
      style={{ paddingTop: "clamp(3rem, 8vw, 6rem)", paddingBottom: "clamp(3rem, 8vw, 6rem)" }}
    >

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE + TABLET  (< lg) — matches the reference screenshot exactly
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden px-5 sm:px-8 md:px-10 flex flex-col gap-6">

        {/* 1. Top Header: THE RESIDENTS */}
        <div className="w-full pt-2 pb-4">
          <h2
            ref={headingRef}
            className="uppercase font-bold leading-none text-left"
            style={{
              fontFamily: '"Jersey 15", system-ui, serif',
              letterSpacing: "-0.02em",
              color: "#F5F0E8",
            }}
          >
            <span className="block text-[clamp(24px,6vw,32px)] leading-none mb-1">THE</span>
            <span className="block text-[clamp(48px,11vw,64px)] leading-none">RESIDENTS</span>
          </h2>
        </div>

        {/* 2. Top Row: Landscape Stamp on Left, Paragraph 1 on Right */}
        <div className="grid grid-cols-12 gap-4 items-center">
          <div ref={leftImgRef} className="col-span-5">
            <Image
              src="/images/resident-image-topleft.png"
              alt="Landscape stamp"
              width={160}
              height={300}
              className="w-[100%] h-auto object-cover"
              style={{ display: "block" }}
            />
          </div>
          <div ref={para1Ref} className="col-span-7 -ml-4 md:-ml-8 lg:-ml-12">
            <p style={{ ...bodyFont, fontSize: "clamp(13px, 3.5vw, 21px)" }}>
              We help brands find clarity, build distinct identities, and grow through
              thoughtful strategy, design, content, and digital experiences.
            </p>
          </div>
        </div>

        {/* 3. Bottom Row: Left Paragraph and Right Rotated Ticket */}
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Bottom Left Column */}
          <div ref={para2Ref} className="col-span-6 pr-1">
            <p style={bodyFont}>
              Over the years, we&apos;ve worked with startups, family businesses,
              challenger brands, and category leaders alike.
            </p>
          </div>

          {/* Bottom Right Column */}
          <div className="col-span-6 flex justify-end overflow-visible">
            <div ref={rightImgRef} style={{ transform: "rotate(4deg)", transformOrigin: "center center" }} className="w-[140%] translate-x-[-15%] origin-center">
              <Image
                src="/images/resident-image-bottomright.png"
                alt="The Woolgatherers stamp"
               width={160}
              height={300}
                className="w-full h-auto object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* 4. Bottom Full-Width Quote */}
        <div className="w-full text-center pt-8 pb-4">
          <p
            className="leading-snug"
            style={{
              ...bodyFont,
              fontSize: "clamp(18px, 5vw, 24px)",
              textAlign: "center",
            }}
          >
            Every brand&apos;s journey is different.
            <br />
            Every stay is thoughtfully designed.
          </p>
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP  (lg+) — original layout, completely untouched
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 py-12">
          
          {/* 1. Top Row: Landscape stamp on the left, paragraph 1 on the right */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div ref={leftImgRef} className="col-span-4 col-start-2">
              <Image
                src="/images/resident-image-topleft.png"
                alt="Landscape stamp"
                width={160}
                height={300}
                className="w-[90%] h-auto object-cover"
                style={{ display: "block", transform: "rotate(-2deg)" }}
              />
            </div>
            <div ref={para1Ref} className="col-span-6 col-start-6 -ml-4">
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 21, lineHeight: 1.5, color: "#F5F0E8" }}>
                We help brands find clarity, build distinct<br />
                identities, and grow through thoughtful<br />
                strategy, design, content, and digital<br />
                experiences.
              </p>
            </div>
          </div>

          {/* 2. Middle Row: Centered "THE RESIDENCY" heading */}
          <div className="py-6 text-center">
            <h2
              ref={headingRef}
              className="uppercase font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(64px, 8vw, 120px)",
                fontFamily: '"Jersey 15", serif',
                color: "#F5F0E8",
              }}
            >
              THE RESIDENCY
            </h2>
          </div>

          {/* 3. Bottom Row: Left paragraph and right rotated ticket + quote */}
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Bottom Left Column */}
            <div ref={para2Ref} className="col-span-4 col-start-2 pt-8">
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.5, color: "#F5F0E8" }}>
                Over the years, we&apos;ve worked with startups, family businesses, challenger brands,
                and category leaders alike.
              </p>
            </div>

            {/* Bottom Right Column */}
            <div className="col-span-4 col-start-8 flex flex-col gap-6 items-end text-right overflow-visible">
              <div ref={rightImgRef} style={{ transform: "rotate(4deg)", transformOrigin: "center center" }} className="w-[90%] translate-x-0 origin-center">
                <Image
                  src="/images/resident-image-bottomright.png"
                  alt="The Woolgatherers stamp"
                  width={160}
                  height={300}
                  className="w-full h-auto object-cover"
                  style={{ display: "block" }}
                />
              </div>
              <div className="w-[90%] translate-x-[-120%] -translate-y-[200px]">
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.5, color: "#F5F0E8" }}>
                  Every brand&apos;s journey is different. Every stay is thoughtfully designed.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
