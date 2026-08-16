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

    // Returns the exact number of pixels the track overflows the container.
    // Both the tween target and the ScrollTrigger end use this same function
    // so they can never drift out of sync.
    const getScrollDistance = () =>
      track.scrollWidth - container.clientWidth;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            // end is derived from the same measurement as the tween target —
            // no hardcoded pixel value, no multiplier cap.
            end: () => "+=" + getScrollDistance(),
            pin: true,
            scrub: 0.1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    }, section);

    // Debounced resize handler: recalculate everything if panel sizes change.
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
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
