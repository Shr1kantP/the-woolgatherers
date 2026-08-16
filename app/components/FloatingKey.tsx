"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingKey() {
  const keyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = keyRef.current;
    if (!el) return;

    // Key size: ~120px wide — starts near left edge, ends near right edge
    // We animate translateX from 0vw to ~85vw across the full page scroll.
    // scaleX flips between +1 and -1 to simulate left/right flip as it travels.

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // Move from left (~5vw) to right (~85vw) across the whole page scroll
    // and flip scaleX at quarter, half, and three-quarter points
    tl.fromTo(
      el,
      { x: "0vw", scaleX: 1 },
      {
        x: "80vw",
        scaleX: 1,
        ease: "none",
        duration: 1,
      }
    );

    // Flip at roughly 25% scroll — face right
    tl.to(el, { scaleX: -1, duration: 0.01 }, 0.25);
    // Flip at roughly 50% scroll — face left again
    tl.to(el, { scaleX: 1, duration: 0.01 }, 0.5);
    // Flip at roughly 75% scroll — face right again
    tl.to(el, { scaleX: -1, duration: 0.01 }, 0.75);
    // Final flip at end
    tl.to(el, { scaleX: 1, duration: 0.01 }, 1);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars?.trigger === document.documentElement) st.kill();
      });
    };
  }, []);

  return (
    <div
      ref={keyRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: "6vh",
        left: "5vw",
        width: "clamp(80px, 10vw, 130px)",
        zIndex: 50,
        pointerEvents: "none",
        willChange: "transform",
        transformOrigin: "center center",
      }}
    >
      <Image
        src="/images/floating_key.svg"
        alt=""
        width={130}
        height={260}
        className="w-full h-auto drop-shadow-2xl"
        priority
      />
    </div>
  );
}
