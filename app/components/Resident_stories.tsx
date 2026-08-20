"use client";

import { useEffect, useRef } from "react";
import gsap from "../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CARDS = [
  { src: "/images/Res_stories/mtr_res_stories.jpg",  alt: "MTR brand work",     rotate: "-2deg"  },
  { src: "/images/Res_stories/wing_res_stories.jpg", alt: "Wing brand work",    rotate: "-7deg"  },
  { src: "/images/Res_stories/sie_res_stories.jpg",  alt: "Sie brand work", rotate:  "7deg"  },
];

export default function Resident_stories() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef   = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    // Refresh once all images inside the section have loaded
    const tryRefresh = () => {
      const allLoaded = Array.from(section.querySelectorAll("img"))
        .every((img) => (img as HTMLImageElement).complete);
      if (allLoaded) ScrollTrigger.refresh();
    };

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        card.style.zIndex         = String(i + 1);
        card.style.position       = "relative";
        card.style.transformOrigin = "center top";
        card.style.willChange     = "transform";
      });

      // Pin distance scales with screen height so it works on both mobile and desktop
      const pinDistance = () => window.innerWidth < 768 ? window.innerHeight * 0.65 : Math.max(window.innerHeight * 3.5, 500);

      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger        : card,
          start          : "top 15%",
          end            : () => `+=${pinDistance()}`,
          pin            : true,
          pinSpacing     : false,
          invalidateOnRefresh: true,
        });
      });

      ScrollTrigger.refresh();
    }, section);

    Array.from(section.querySelectorAll("img")).forEach((img) => {
      if ((img as HTMLImageElement).complete) return;
      img.addEventListener("load",  tryRefresh, { once: true });
      img.addEventListener("error", tryRefresh, { once: true });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#2E0A38" }}
      className="resident-stories relative w-full overflow-hidden text-white"
    >
      {/*
        The outer div gives the section enough scroll height for all three pins.
        On mobile it's ~140vh, on desktop stays at 320vh.
      */}
      <div
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 min-h-[140vh] md:min-h-[320vh]"
      >
        <div className="sticky top-0 min-h-screen pt-8 sm:pt-10">

          {/* ── Heading ──────────────────────────────────────────────────── */}
          <h2
            className="mb-6 sm:mb-10 uppercase font-extrabold"
            style={{
              fontFamily   : "var(--font-jersey-15), system-ui, sans-serif",
              color        : "#f5f3f6",
              fontSize     : "clamp(28px, 8vw, 80px)",
              lineHeight   : 1.02,
              letterSpacing: "0.02em",
            }}
          >
            OVER 100 BRANDS
            <br />
            HAVE PASSED THROUGH
            <br />
            THESE HALLS.
          </h2>

          {/* ── Cards — one per row, centered, stacked vertically ────────── */}
          <div className="relative pb-12">
            {CARDS.map((card, i) => (
              <div
                key={card.src}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="relative overflow-hidden"
                style={{
                  /*
                   * Size: large on desktop, proportional on mobile.
                   * Expressed as min(viewport %, max-px) so it always fits.
                   */
                  width      : "min(72vw, 330px)",
                  height     : "min(72vw, 330px)",
                  transform  : `rotate(${card.rotate})`,
                  border     : "none",
                  boxShadow  : "none",
                  borderRadius: 0,
                  flexShrink : 0,

                  /* Alternate left / centre / right to keep the desktop stagger */
                  marginTop   : i === 0 ? 0 : "clamp(200px, 40vw, 440px)",
                  marginLeft  : i === 1 ? "clamp(0px, 3vw, 28px)"  : i === 2 ? "auto" : "auto",
                  marginRight : i === 2 ? "clamp(0px, 3vw, 28px)"  : i === 1 ? "auto" : "auto",
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="block h-full w-full object-cover rounded-[4px]"
                />
              </div>
            ))}
          </div>

          {/* ── Footer text ──────────────────────────────────────────────── */}
          <div className="mt-8 sm:mt-12 text-right">
            <h3
              className="mb-3 uppercase font-bold"
              style={{
                fontFamily   : "var(--font-jersey-15), system-ui, sans-serif",
                letterSpacing: "0.02em",
                fontSize     : "clamp(24px, 7vw, 68px)",
              }}
            >
              RESIDENT STORIES
            </h3>

            <p
              className="ml-auto uppercase tracking-[0.02em]"
              style={{
                fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                textAlign : "right",
                fontSize  : "clamp(10px, 2vw, 14px)",
                maxWidth  : "min(90vw, 640px)",
              }}
            >
              <span style={{ fontWeight: 400 }}>A SELECTION OF </span>
              <strong style={{ fontWeight: 700 }}>BRANDS, IDEAS, AND TRANSFORMATIONS</strong>
              <br />
              <span style={{ fontWeight: 400 }}>THAT HAVE PASSED THROUGH THESE HALLS.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
