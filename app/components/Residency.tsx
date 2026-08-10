"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// using plain images for exact placement (no postage stamp masks)

export default function Residency() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const para1Ref = useRef<HTMLDivElement | null>(null);
  const para2Ref = useRef<HTMLDivElement | null>(null);
  const leftImgRef = useRef<HTMLDivElement | null>(null);
  const rightImgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);

    if (prefersReduced) {
      gsap.set([para1Ref.current, para2Ref.current, headingRef.current, leftImgRef.current, rightImgRef.current], { y: 0, opacity: 1 });
      return;
    }

    const tlMain: any[] = [];

    if (headingRef.current) {
      tlMain.push(
        gsap.fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      );
    }

    if (para1Ref.current) {
      tlMain.push(
        gsap.fromTo(para1Ref.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: para1Ref.current, start: "top 85%", toggleActions: "play none none reverse" } })
      );
    }

    if (para2Ref.current) {
      tlMain.push(
        gsap.fromTo(para2Ref.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: para2Ref.current, start: "top 85%", toggleActions: "play none none reverse" } })
      );
    }

    if (leftImgRef.current) {
      gsap.set(leftImgRef.current, { y: 60, opacity: 0, scale: 1.05 });
      tlMain.push(
        gsap.to(leftImgRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: leftImgRef.current, start: "top 90%", toggleActions: "play none none reverse" },
        })
      );
    }

    if (rightImgRef.current) {
      gsap.set(rightImgRef.current, { y: 60, opacity: 0, scale: 1.05 });
      tlMain.push(
        gsap.to(rightImgRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: rightImgRef.current, start: "top 90%", toggleActions: "play none none reverse" },
        })
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tlMain.forEach((t) => t.kill && t.kill());
    };
  }, []);

  return (
    <section className="relative bg-[#30093f] text-[#F5F0E8] py-24 px-6 sm:px-10 lg:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-4 lg:col-span-3" />

          <div className="col-span-4 md:col-span-8 lg:col-span-3 flex items-start">
            <div className="w-full">
              <div ref={para1Ref} className="prose prose-lg max-w-prose ml-auto text-left text-[#F5F0E8]">
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 20, lineHeight: 1.45 }}>
                  We help brands find clarity, build distinct identities, and grow through thoughtful strategy, design, content, and digital experiences.
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

          <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-0 lg:mt-32">
            <div ref={para2Ref} className="max-w-md text-left text-[#F5F0E8]" style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.45 }}>
              <p>
                Over the years, we've worked with startups, family businesses, challenger brands, and category leaders alike.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9" />

          <div className="col-span-12 lg:col-span-4 lg:col-start-1 mt-10 lg:mt-0">
            <div className="max-w-xs text-left text-[#F5F0E8]" style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.45 }}>
              <p>Every brand's journey is different. Every stay is thoughtfully designed.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating stamps (visual accents) */}
      <div aria-hidden className="pointer-events-none">
        <div ref={leftImgRef} className="hidden lg:block absolute left-30 top-12" style={{ transform: "rotate(-2deg)", zIndex: 20 }}>
          <Image src="/images/resident-image-topleft.png" alt="" width={250} height={300} style={{ objectFit: "cover", display: "block" }} />
        </div>

        <div ref={rightImgRef} className="hidden lg:block absolute right-30 bottom-12" style={{ transform: "rotate(12deg)", zIndex: 20 }}>
          <Image src="/images/resident-image-bottomright.png" alt="" width={250} height={300} style={{ objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </section>
  );
}
