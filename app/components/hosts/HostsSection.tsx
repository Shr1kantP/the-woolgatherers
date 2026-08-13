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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".panel");
        if (!panels.length) return;

        const totalScroll = () => {
          const containerWidth = section.querySelector(".hosts-container")?.clientWidth ?? window.innerWidth;
          return Math.max(containerWidth * (panels.length - 1), 0);
        };

        const scrollTween = gsap.to(panels, {
          xPercent: (i) => -100 * i,
          ease: "none",
          duration: (i) => 0.5 * i,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + totalScroll(),
            pin: true,
            scrub: 0.1,
            invalidateOnRefresh: true,
          },
        });

        panels.forEach((panel) => {
          ScrollTrigger.create({
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left 25%",
            end: "right 25%",
            toggleClass: "stick",
          });
        });
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
      className="hosts-section relative z-20 w-full overflow-hidden md:h-[420vh]"
      aria-label="The Hosts"
    >
      <div className="hosts-container sticky top-0 h-screen w-full overflow-hidden md:block">
        <div className="host-track flex h-screen w-max md:flex">
          <HostCard1 />
          <HostCard2 />
          <HostCard3 />
          <HostCard4 />
        </div>
      </div>
    </section>
  );
}
