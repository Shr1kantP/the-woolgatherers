"use client";
import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const existingLenis = (window as any).__lenis as Lenis | undefined;

    if (existingLenis) {
      existingLenis.on("scroll", ScrollTrigger.update);
      return;
    }

    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    (window as any).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    // gsap.ticker passes elapsed time in milliseconds — pass it directly.
    // The previous `time * 1000` was multiplying ms × 1000, giving Lenis
    // wildly inflated timestamps and causing erratic / choppy scroll behaviour.
    const raf = (time: number) => {
      lenis.raf(time);
    };

    gsap.ticker.add(raf);
    // lagSmoothing(0) disables GSAP's built-in lag compensation so Lenis
    // handles its own timing — keeps scroll feeling consistent.
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return <>{children}</>;
}