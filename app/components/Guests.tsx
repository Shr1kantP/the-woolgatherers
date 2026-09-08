"use client";
import React, { useEffect, useRef, useState } from "react";

const logos = [
 
  "/images/Guests/cureveda.png",
  "/images/Guests/gap.png",
  "/images/Guests/jimmys.png",
  "/images/Guests/mtr.png",
  "/images/Guests/nua.png",
  "/images/Guests/peps.png",
  "/images/Guests/sathi.png",
  "/images/Guests/sfs.png",
  "/images/Guests/vahdam.png",
  "/images/Guests/wingreens.png",
  "/images/detailed_page/SIE_BRANDING/SIE-branding-logo.PNG",
  "/images/detailed_page/SIE/SIE-Website-logo.PNG",
];

interface ActiveLogo {
  src: string;
  x: number;
  y: number;
  visible: boolean;
}

function randomPosition(src: string): ActiveLogo {
  return {
    src,
    x: 12 + Math.random() * 76,
    y: 25 + Math.random() * 55,
    visible: false,
  };
}

function RandomResidentLogo() {
  const logoQueue = useRef<string[]>([]);
  const lastLogo = useRef<string | null>(null);

  const getNextLogo = () => {
    if (logoQueue.current.length === 0) {
      logoQueue.current = [...logos].sort(() => Math.random() - 0.5);

      if (logoQueue.current[0] === lastLogo.current && logoQueue.current.length > 1) {
        [logoQueue.current[0], logoQueue.current[1]] = [logoQueue.current[1], logoQueue.current[0]];
      }
    }

    const nextLogo = logoQueue.current.shift() as string;
    lastLogo.current = nextLogo;
    return nextLogo;
  };

  const [activeLogo, setActiveLogo] = useState<ActiveLogo>({
    src: logos[0],
    x: 50,
    y: 50,
    visible: false,
  });

  useEffect(() => {
    let fadeTimer: number | undefined;
    let showTimer: number | undefined;
    let cycleTimer: number | undefined;

    const cycleLogo = () => {
      setActiveLogo((current) => ({ ...current, visible: false }));
      showTimer = window.setTimeout(() => {
        setActiveLogo({ ...randomPosition(getNextLogo()), visible: true });
        cycleTimer = window.setTimeout(cycleLogo, 2400);
      }, 900);
    };

    fadeTimer = window.setTimeout(() => {
      setActiveLogo((current) => ({ ...current, visible: true }));
      cycleTimer = window.setTimeout(cycleLogo, 2400);
    }, 350);

    return () => {
      if (fadeTimer) window.clearTimeout(fadeTimer);
      if (showTimer) window.clearTimeout(showTimer);
      if (cycleTimer) window.clearTimeout(cycleTimer);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <img
        src={activeLogo.src}
        alt=""
        className="absolute h-24 w-32 object-contain transition-[opacity,transform] duration-[900ms] ease-in-out md:h-36 md:w-52"
        style={{
          left: `${activeLogo.x}%`,
          top: `${activeLogo.y}%`,
          opacity: activeLogo.visible ? 0.9 : 0,
          transform: `translate(-50%, -50%) scale(${activeLogo.visible ? 1 : 0.86})`,
        }}
      />
    </div>
  );
}

export default function Guests() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] bg-[#220319] overflow-hidden select-none">
      {/* Top right "Drag to Explore" tag */}
    
      <div className="absolute inset-0 z-10 pointer-events-none">
        <h2
          className="font-semibold uppercase text-[#FAF9F6] text-center flex items-center justify-center h-full w-full mx-auto max-w-7xl px-4 py-8 md:px-10 md:py-20"
          style={{
            letterSpacing: "0.02em",
            fontFamily: '"Jersey 15", serif',
            fontSize: "clamp(40px, 12vw, 98px)",
            lineHeight: 1.05,
          }}
        >
        Few Of Our Residents
        </h2>
      </div>
      <div className="absolute inset-0 z-10">
        <RandomResidentLogo />
      </div>
    </section>
  );
}
