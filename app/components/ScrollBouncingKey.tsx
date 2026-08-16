"use client";

/**
 * ScrollBouncingKey
 * -----------------
 * Key SVG bounces left↔right (DVD-screensaver zigzag, horizontal only)
 * as the user scrolls. Y position advances downward in sync with scroll.
 *
 * Performance notes
 * -----------------
 * - Animates `xPercent`/`yPercent` (i.e. CSS transform: translate) ONLY.
 *   transform is GPU-composited — zero layout/reflow cost per frame.
 * - `left` and `top` are set once via gsap.set() and never touched again.
 * - `will-change: transform` hints the browser to promote the layer early.
 * - No rotation, no scale, no rotationY.
 * - scrub: 1 for slight smoothing without adding perceived lag.
 *
 * Mobile (<768px): key hidden entirely — bouncing over narrow copy is bad UX.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Bounds (as % of viewport width) ─────────────────────────────────────────
// Kept away from the full-bleed "THE WOOLGATHERERS" headline.
// Key is ~160px wide (~12vw on 1280px screen).
// LEFT_X / RIGHT_X are the `left` anchor. xPercent shifts within that.
const LEFT_VW  = 5;   // % from left edge at the left bound
const RIGHT_VW = 75;  // % from left edge at the right bound

// Number of left↔right bounce legs across the full scroll
const LEGS = 8;

export default function ScrollBouncingKey() {
  const keyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const key = keyRef.current;
    if (!key) return;

    let ctx: gsap.Context | null = null;

    const init = () => {
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // ── DESKTOP ≥768px ───────────────────────────────────────────────────
        mm.add("(min-width: 768px)", () => {
          const mainEl   = document.querySelector("main")   as HTMLElement | null;
          const footerEl = document.querySelector("footer") as HTMLElement | null;
          if (!mainEl) return;

          const vh     = window.innerHeight;
          const scrollH = document.body.scrollHeight;

          // Y: start just inside the hero, end just before the footer
          const yStart = vh * 0.12;   // px from page top
          const yEnd   = footerEl
            ? footerEl.getBoundingClientRect().top + window.scrollY - 180
            : scrollH * 0.88;

          // Anchor the element once with left/top — never animated again.
          // All movement goes through `x` and `y` (CSS transform) only.
          gsap.set(key, {
            position: "absolute",
            top:      yStart,
            left:     `${LEFT_VW}vw`,
            x:        0,
            y:        0,
          });

          // Total Y distance the key must travel (in px)
          const yTravel = yEnd - yStart;

          // ── Timeline ──────────────────────────────────────────────────────
          const tl = gsap.timeline({
            scrollTrigger: {
              scroller:           document.body,
              trigger:            mainEl,
              start:              "top top",
              end:                () => {
                const fTop = footerEl
                  ? footerEl.getBoundingClientRect().top + window.scrollY
                  : scrollH;
                return `+=${fTop - vh * 0.12}`;
              },
              scrub:              1,
              invalidateOnRefresh: true,
            },
          });

          // Y: single linear tween — `y` offset from the anchored `top`
          // transform: translateY is composited, zero reflow
          tl.fromTo(
            key,
            { y: 0 },
            { y: yTravel, ease: "none", duration: LEGS },
            0
          );

          // X: LEGS sequential tweens alternating between x=0 (left bound)
          // and x = (RIGHT_VW - LEFT_VW)vw (right bound)
          // `x` is CSS translateX — composited, zero reflow
          const xTravel = `${RIGHT_VW - LEFT_VW}vw`;

          for (let i = 0; i < LEGS; i++) {
            const goingRight = i % 2 === 0;
            tl.to(
              key,
              {
                x:        goingRight ? xTravel : 0,
                ease:     "sine.inOut",
                duration: 1,
              },
              i  // each leg occupies its own 1-unit slot in the timeline
            );
          }

          return () => tl.kill();
        });

        // ── MOBILE <768px — hide ─────────────────────────────────────────────
        mm.add("(max-width: 767px)", () => {
          gsap.set(key, { autoAlpha: 0 });
          return () => gsap.set(key, { autoAlpha: 1 });
        });
      });
    };

    // One rAF so Lenis + ScrollTrigger are ready before we build the timeline
    const rafId = requestAnimationFrame(init);

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset:         0,
        pointerEvents: "none",
        zIndex:        40,
        overflow:      "visible",
      }}
    >
      <div
        ref={keyRef}
        style={{
          position:      "absolute",
          width:         "clamp(130px, 12vw, 160px)",
          pointerEvents: "none",
          // Only transform is ever animated — promote to its own GPU layer
          willChange:    "transform",
        }}
      >
        {/* Plain <img> so the browser renders SVG as vector — always crisp */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/floating_key.svg"
          alt=""
          className="w-full h-auto drop-shadow-2xl select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
