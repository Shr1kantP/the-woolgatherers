"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect touch device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position out of screen
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    const onMouseEnterInteractive = () => {
      gsap.to(cursor, { scale: 1.3, duration: 0.15 });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(cursor, { scale: 1.0, duration: 0.15 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Hide default cursor globally
    const style = document.createElement("style");
    style.innerHTML = `
      body, a, button, select, input, textarea, [role='button'] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Attach hover animations to interactive elements
    const attachInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, select, input, textarea, [role='button']"
      );
      interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };

    attachInteractiveListeners();

    // Re-attach listeners when DOM changes (e.g. page navigation)
    const observer = new MutationObserver(attachInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ willChange: "transform" }}
    >
      <img
        src="/images/floating_key.svg"
        alt="Cursor Key"
        className="w-15 h-auto select-none" // Reduced size for comfortable mouse cursor usage (24px width)
      />
    </div>
  );
}
