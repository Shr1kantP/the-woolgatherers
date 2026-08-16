"use client";

import { useEffect, useRef } from "react";
import gsap from "../../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HostCard1 from "./HostCard1";
import HostCard2 from "./HostCard2";
import HostCard3 from "./HostCard3";
import HostCard4 from "./HostCard4";

const CARDS = 4;
// How many extra viewport-heights each card is pinned for on mobile/tablet.
// 1.0 = card stays visible for exactly one full scroll-length before the next slides in.
const MOBILE_PIN_SLOT = 1.0;

export default function HostsSection() {
  const sectionRef    = useRef<HTMLElement | null>(null);
  const containerRef  = useRef<HTMLDivElement | null>(null);
  const trackRef      = useRef<HTMLDivElement | null>(null);
  const mobileRef     = useRef<HTMLDivElement | null>(null);
  const mobileCards   = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section   = sectionRef.current;
    const container = containerRef.current;
    const track     = trackRef.current;
    const mobileEl  = mobileRef.current;
    if (!section || !container || !track || !mobileEl) return;

    const getScrollDistance = () => track.scrollWidth - container.clientWidth;

    const mm  = gsap.matchMedia();
    const ctx = gsap.context(() => {

      // ── DESKTOP (≥ 1024 px): unchanged horizontal scroll ──────────────
      mm.add("(min-width: 1024px)", () => {
        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
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

      // ── MOBILE + TABLET (< 1024 px): vertical sticky-scroll ───────────
      mm.add("(max-width: 1023px)", () => {
        const cards = mobileCards.current.filter(Boolean) as HTMLDivElement[];
        if (!cards.length) return;

        // Stack cards so later ones sit visually on top
        cards.forEach((card, i) => {
          card.style.zIndex   = String(i + 1);
          card.style.position = "relative";
        });

        const slotPx = () => Math.round(window.innerHeight * MOBILE_PIN_SLOT);

        const triggers = cards.map((card) =>
          ScrollTrigger.create({
            trigger          : card,
            start            : "top top",
            end              : () => `+=${slotPx()}`,
            pin              : true,
            pinSpacing       : false,
            invalidateOnRefresh: true,
          })
        );

        ScrollTrigger.refresh();

        return () => triggers.forEach((t) => t.kill());
      });

    }, section);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    /*
     * The section height on mobile/tablet must accommodate the pin zone:
     * 100vh (first card visible) + (CARDS - 1) × MOBILE_PIN_SLOT × 100vh
     * On desktop the section is h-screen (GSAP pins it anyway).
     */
    <section
      ref={sectionRef}
      className="hosts-section relative z-10 w-full overflow-hidden bg-[#3F022F]"
      style={{
        // Mobile/tablet: tall enough for all 4 pin slots
        // Desktop (lg+) overridden to h-screen via the class below
      }}
      aria-label="The Hosts"
    >

      {/* ── MOBILE + TABLET (< lg): vertical sticky-scroll stack ─────────── */}
      <div
        ref={mobileRef}
        className="lg:hidden"
        style={{ minHeight: `calc(100vh + ${(CARDS - 1) * MOBILE_PIN_SLOT * 100}vh)` }}
      >
        {([
          <HostCard1 key="1" />,
          <HostCard2 key="2" />,
          <HostCard3 key="3" />,
          <HostCard4 key="4" />,
        ] as React.ReactElement[]).map((card, i) => (
          <div
            key={i}
            ref={(el) => { mobileCards.current[i] = el; }}
            className="w-full"
          >
            {card}
          </div>
        ))}
      </div>

      {/* ── DESKTOP (lg+): pinned horizontal scroll — untouched ──────────── */}
      <div
        ref={containerRef}
        className="hidden lg:flex sticky top-0 h-screen w-full overflow-hidden bg-[#3F022F]"
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
