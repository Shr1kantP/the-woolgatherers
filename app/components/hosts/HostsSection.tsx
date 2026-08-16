"use client";

import { useEffect, useRef } from "react";
import gsap from "../../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HostCard1 from "./HostCard1";
import HostCard2 from "./HostCard2";
import HostCard3 from "./HostCard3";
import HostCard4 from "./HostCard4";

export default function HostsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!section || !container || !track) return;

    // The single source of truth: how far the track actually needs to travel.
    const getScrollDistance = () =>
      track.scrollWidth - container.clientWidth;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        // Tween the track as one unit — x end matches the ScrollTrigger end exactly.
        const scrollTween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            // Derived from the same measurement — can never drift out of sync.
            end: () => "+=" + getScrollDistance(),
            pin: true,
            scrub: 0.1,
            invalidateOnRefresh: true,
          },
        });

        // Per-panel "stick" class toggle driven by the horizontal scroll animation.
        const panels = gsap.utils.toArray<HTMLElement>(".panel");
        panels.forEach((panel) => {
          ScrollTrigger.create({
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left 25%",
            end: "right 25%",
            toggleClass: "stick",
          });
        });

        // Debounced resize handler — recalculates all distances and refreshes.
        let resizeTimer: ReturnType<typeof setTimeout>;
        const onResize = () => {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
          }, 150);
        };
        window.addEventListener("resize", onResize);

        // Return cleanup so matchMedia tears it down when the breakpoint exits.
        return () => {
          window.removeEventListener("resize", onResize);
          clearTimeout(resizeTimer);
        };
      });
    }, section);

    return () => {
      ctx.revert();
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hosts-section relative z-10 w-full overflow-hidden bg-[#3F022F] h-auto md:h-screen"
      aria-label="The Hosts"
    >
      {/* Mobile: simple vertical stack */}
      <div className="md:hidden flex flex-col w-full bg-[#3F022F]">
        <HostCard1 />
        <HostCard2 />
        <HostCard3 />
        <HostCard4 />
      </div>

      {/* Desktop: pinned horizontal scroll */}
      <div
        ref={containerRef}
        className="hosts-container hidden md:flex sticky top-0 h-screen w-full overflow-hidden bg-[#3F022F]"
      >
        <div
          ref={trackRef}
          className="host-track flex h-screen w-max bg-[#3F022F]"
        >
          <HostCard1 />
          <HostCard2 />
          <HostCard3 />
          <HostCard4 />
        </div>
      </div>
    </section>
  );
}
