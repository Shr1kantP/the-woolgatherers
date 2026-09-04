"use client";

import { useEffect, useRef } from "react";
import gsap from "../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CARDS = [
  { src: "/images/Res_stories/mtr_res_stories.jpg",  alt: "MTR brand work",     rotate: -4, yOffset: 40  },
  { src: "/images/Res_stories/wing_res_stories.jpg", alt: "Wing brand work",    rotate: 2,  yOffset: 0   },
  { src: "/images/Res_stories/studio-inside-eye.jpg",  alt: "Sie brand work", rotate: 6,  yOffset: -40 },
];

export default function Resident_stories() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef   = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
       cardsRef.current.forEach(c => {
         if (c) {
           gsap.set(c, { y: 0, opacity: 1, scale: 1 });
         }
       });
       return;
    }

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    // Refresh once all images inside the section have loaded
    const tryRefresh = () => {
      const allLoaded = Array.from(section.querySelectorAll("img"))
        .every((img) => (img as HTMLImageElement).complete);
      if (allLoaded) ScrollTrigger.refresh();
    };

    const ctx = gsap.context(() => {
      // Hide cards initially, positioned below the divider
      gsap.set(cards, {
        y: 200, // starting below the divider line
        opacity: 0,
        scale: 0.9,
        transformOrigin: "bottom center"
      });

      // Pin the entire section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1500", // Tune for scroll duration
          pin: true,
          scrub: 0.5, // slightly smooth scrubbing
          invalidateOnRefresh: true,
        }
      });

      // Animate cards up one by one
      cards.forEach((card, index) => {
        const targetYOffset = CARDS[index].yOffset;
        tl.to(card, {
          y: targetYOffset, // End at the specific staggered Y offset
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }, index * 0.7); // Stagger
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
      style={{ backgroundColor: "#220319" }}
      className="relative w-full min-h-screen text-[#f5f3f6] flex flex-col overflow-hidden"
    >
      
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 pt-32 pb-12 flex-1 flex flex-col justify-center h-full relative">
        
        {/* Main Content Area (Two Columns on Desktop) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between w-full relative z-10 flex-1 gap-12 lg:gap-8">
          
          {/* Left Column (Headline) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center z-20">
            <h2
              className="uppercase m-0 font-extrabold"
              style={{
                fontFamily: "var(--font-jersey-15), system-ui, sans-serif",
                fontSize: "clamp(36px, 5vw, 76px)",
                lineHeight: "1",
                color: "#f5f3f6",
                letterSpacing: "0.02em"
              }}
            >
              OVER <span style={{ color: "#D4A24E" }}>100</span> BRANDS HAVE PASSED
              <br />
              THROUGH THESE HALLS.
            </h2>
          </div>

          {/* Right Column (Cards) */}
          <div className="w-full lg:w-[50%] flex flex-row items-center justify-center lg:justify-end z-10 pb-12">
            {CARDS.map((card, i) => (
              <div
                key={card.src}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="relative rounded-[6px] shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                style={{
                  width: "clamp(120px, 20vw, 260px)",
                  aspectRatio: "1/1",
                  transform: `rotate(${card.rotate}deg)`,
                  // Stagger horizontally: negative margin to overlap
                  marginLeft: i === 0 ? "0" : "clamp(-20px, -3vw, -40px)",
                  zIndex: i + 1,
                  willChange: "transform, opacity",
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="block w-full h-full object-cover rounded-[6px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Area (Divider + Text) */}
        {/* We give this a background and z-20 so cards can animate from behind it. */}
        <div className="w-full mt-8 lg:mt-auto pt-8 z-20 relative bg-[#220319]">
          <hr className="border-t border-[#D4A24E] opacity-40 mb-6 sm:mb-8" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pb-8">
            <h3
              className="uppercase font-bold m-0 shrink-0"
              style={{
                fontFamily: "var(--font-jersey-15), system-ui, sans-serif",
                letterSpacing: "0.04em",
                fontSize: "clamp(24px, 4vw, 42px)",
                color: "#f5f3f6",
              }}
            >
              RESIDENT STORIES
            </h3>

            <p
              className="m-0 uppercase"
              style={{
                fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                fontSize: "clamp(10px, 1vw, 13px)",
                color: "#d1c9d3",
                letterSpacing: "0.04em",
                lineHeight: "1.5",
                maxWidth: "600px",
              }}
            >
              A selection of brands, ideas, and transformations that have passed through these halls.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
