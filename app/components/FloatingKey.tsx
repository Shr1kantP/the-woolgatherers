"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

// Bounce count — how many left↔right bounces across the full page scroll
const BOUNCES = 5;

export default function FloatingKey() {
  const keyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = keyRef.current;
    if (!el) return;

    const setup = () => {
      const lenis = (window as any).__lenis as Lenis | undefined;

      if (lenis) {
        ScrollTrigger.scrollerProxy(document.body, {
          scrollTop(value) {
            if (arguments.length && value !== undefined) {
              lenis.scrollTo(value, { immediate: true });
            }
            return lenis.scroll;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          pinType: "transform",
        });
        lenis.on("scroll", () => ScrollTrigger.update());
      }

      // ── Build keyframes ──────────────────────────────────────────────────────
      // We divide the scroll into BOUNCES equal segments.
      // On even segments: left edge → right edge (rotationY 0 → 180)
      // On odd segments:  right edge → left edge (rotationY 180 → 0)
      // y travels linearly from top to bottom the whole time.
      // Scale grows from 0.4 → 1 as the page progresses.

      const LEFT  = "0vw";
      const RIGHT = "76vw";

      // Build an array of {x, rotationY, scale} keyframe objects
      // progress values: 0, 1/BOUNCES, 2/BOUNCES … 1
      const xFrames: gsap.TweenVars[] = [];

      for (let i = 0; i <= BOUNCES; i++) {
        const prog = i / BOUNCES;
        const onLeft = i % 2 === 0;   // starts left, alternates
        xFrames.push({
          x: onLeft ? LEFT : RIGHT,
          rotationY: onLeft ? 0 : 180,
          scale: gsap.utils.interpolate(0.4, 1, prog),
          ease: "none",
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: document.body,
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.8,
        },
      });

      // y travels the full height independent of bounces
      tl.fromTo(el, { y: "0vh" }, { y: "82vh", ease: "none", duration: 1 }, 0);

      // x bounces — each segment is 1/BOUNCES of the total duration
      for (let i = 0; i < BOUNCES; i++) {
        const startProg = i / BOUNCES;
        const endProg   = (i + 1) / BOUNCES;
        const goingRight = i % 2 === 0;

        tl.fromTo(
          el,
          {
            x: goingRight ? LEFT : RIGHT,
            rotationY: goingRight ? 0 : 180,
            scale: gsap.utils.interpolate(0.4, 1, startProg),
          },
          {
            x: goingRight ? RIGHT : LEFT,
            rotationY: goingRight ? 180 : 0,
            scale: gsap.utils.interpolate(0.4, 1, endProg),
            ease: "sine.inOut",  // slight ease on each bounce leg for natural feel
            duration: 1 / BOUNCES,
          },
          startProg  // position in the timeline
        );
      }

      ScrollTrigger.refresh();
      return tl;
    };

    let tl: gsap.core.Timeline | undefined;
    const id = requestAnimationFrame(() => { tl = setup(); });

    return () => {
      cancelAnimationFrame(id);
      tl?.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={keyRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: "4vh",
        left: "0",          // x offset is driven entirely by GSAP
        width: "clamp(180px, 16vw, 220px)",
        zIndex: 50,
        pointerEvents: "none",
        willChange: "transform",
        transformOrigin: "center center",
        // Start hidden until JS sets initial scale to avoid flash at full size
        transform: "scale(0.4)",
      }}
    >
      {/* Plain img — browser renders SVG as vector, always crisp at any scale */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/floating_key.svg"
        alt=""
        className="w-full h-auto drop-shadow-2xl"
        draggable={false}
      />
    </div>
  );
}
