"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Resident_stories() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const images = [
    "/images/Res_stories/mtr_res_stories.jpg",
    "/images/Res_stories/wing_res_stories.jpg",
    "/images/Res_stories/sie_res_stories.jpg",
      ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      ScrollTrigger.getAll().forEach((st) => {
        const trigger = st.vars.trigger as Element | undefined;
        if (trigger && section.contains(trigger)) st.kill();
      });
      return;
    }

    const loadImages = () => {
      const allLoaded = Array.from(section.querySelectorAll("img")).every((img) => (img as HTMLImageElement).complete);
      if (allLoaded) {
        ScrollTrigger.refresh();
      }
    };

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        card.style.zIndex = String(index + 1);
        card.style.position = "relative";
        card.style.transformOrigin = "center top";
        card.style.willChange = "transform, filter";
      });

      cards.forEach((card, index) => {
        const start = window.innerWidth < 768 ? "top 20%" : "top 15%";
        const pinDistance = Math.max(window.innerHeight * 6.2, 700);

        ScrollTrigger.create({
          trigger: card,
          start,
          end: () => `+=${pinDistance}`,
          pin: true,
          pinSpacing: false,
          scrub: false,
          invalidateOnRefresh: true,
        });

        if (index > 0) {
          card.style.transform = "translateY(0)";
          card.style.opacity = "1";
          card.style.filter = "none";
        }
      });

      ScrollTrigger.refresh();
    }, section);

    Array.from(section.querySelectorAll("img")).forEach((img) => {
      if ((img as HTMLImageElement).complete) return;
      img.addEventListener("load", loadImages, { once: true });
      img.addEventListener("error", loadImages, { once: true });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        const trigger = st.vars.trigger as Element | undefined;
        if (trigger && section.contains(trigger)) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#2E0A38" }}
      className="w-full overflow-hidden py-16 text-white md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <h2
          style={{
            fontFamily: "var(--font-jersey-15), system-ui, sans-serif",
            color: "#f5f3f6",
            fontSize: "80px",
			textAlign:"center",
            lineHeight: 1.02,
            letterSpacing: "0.02em",
          }}
          className="mb-10 text-left uppercase font-extrabold"
        >
          OVER 100 BRANDS
          <br />
          HAVE PASSED THROUGH
          <br />
          THESE HALLS.
        </h2>

        <div className="relative pb-12">
          <div
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
            className="relative mx-auto overflow-hidden border-0 bg-transparent"
            style={{
              width: "min(68vw, 330px)",
              height: "min(68vw, 330px)",
              transform: "rotate(-2deg)",
              marginTop: 0,
              border: "none",
              boxShadow: "none",
              borderRadius: 0,
              flexShrink: 0,
            }}
          >
            <img src={images[0]} alt="studio car" className="block h-full w-full object-cover rounded-[4px]" />
          </div>

          <div
            ref={(el) => {
              cardsRef.current[1] = el;
            }}
            className="relative overflow-hidden border-0 bg-transparent"
            style={{
             width: "min(68vw, 330px)",
              height: "min(68vw, 330px)",
              transform: "rotate(-7deg)",
              marginTop: "440px",
              marginLeft: "clamp(0px, 3vw, 28px)",
              border: "none",
              boxShadow: "none",
              borderRadius: 0,
              flexShrink: 0,
            }}
          >
            <img src={images[1]} alt="fashion trio" className="block h-full w-full object-cover rounded-[4px]" />
          </div>

          <div
            ref={(el) => {
              cardsRef.current[2] = el;
            }}
            className="relative ml-auto overflow-hidden border-0 bg-transparent"
            style={{
             width: "min(68vw, 330px)",
              height: "min(68vw, 330px)",
              transform: "rotate(7deg)",
              marginTop: "440px",
              marginRight: "clamp(0px, 3vw, 28px)",
              border: "none",
              boxShadow: "none",
              borderRadius: 0,
              flexShrink: 0,
            }}
          >
            <img src={images[2]} alt="food overhead" className="block h-full w-full object-cover rounded-[4px]" />
          </div>
        </div>

        <div className="mt-12 text-right md:mt-20">
          <h3
            style={{
              fontFamily: "var(--font-jersey-15), system-ui, sans-serif",
              letterSpacing: "0.02em",
              fontSize: "68px",
            }}
            className="mb-4 uppercase font-bold"
          >
            RESIDENT STORIES
          </h3>

          <p
            className="ml-auto max-w-2xl text-[14px] uppercase tracking-[0.02em] md:text-[14px]"
            style={{ fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif", textAlign: "right" }}
          >
            <span style={{ fontWeight: 400, fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}>A SELECTION OF </span>
            <strong style={{ fontWeight: 700, fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}>BRANDS, IDEAS, AND TRANSFORMATIONS</strong>
            <br />
            <span style={{ fontWeight: 400, fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}>THAT HAVE PASSED THROUGH THESE HALLS.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
