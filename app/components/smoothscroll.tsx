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

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return <>{children}</>;
}