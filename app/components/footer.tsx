"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  "Content Production",
  "Brand Building",
  "Social Media",
  "Web Design & Dev",
];

export default function Footer() {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer id="footer" className="relative z-30 min-h-screen w-full overflow-x-hidden bg-[#5D1515] text-[#F5E9D0] flex flex-col">
      <div className="mx-auto w-full max-w-[2600px] px-4 sm:px-8 lg:px-10 pb-8 pt-10 sm:pt-12 flex-grow flex flex-col justify-center">

        {/* "Ready to Check in" SVG heading */}
        <div className="flex justify-center mb-8 md:mb-12">
          <Image
            src="/images/footer/readytext.svg"
            alt="Ready to Check in"
            width={500}
            height={220}
            priority
            className="h-auto object-contain"
            style={{ width: "min(600px, 88vw)" }}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-32 w-full max-w-6xl mx-auto ">

          {/* Left: Service nav list */}
          <div className="hidden md:flex flex-1 justify-start md:translate-x-8 lg:translate-x-16">
            <nav
              aria-label="Footer services"
              className="flex flex-col gap-3 font-medium text-left text-[#F5E9D0]"
              style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)" }}
            >
              {navItems.map((item) => (
                <div key={item} className="py-[2px] transition-colors hover:text-[#F0C766] cursor-pointer">
                  {item}
                </div>
              ))}
            </nav>
          </div>

          {/* Center: Concierge bell */}
          <div
            className="flex flex-col items-center cursor-pointer shrink-0 md:translate-x-8 lg:translate-x-5"
            onClick={() => window.dispatchEvent(new CustomEvent("open-concierge"))}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
          >
            <div
              className={`relative flex items-center justify-center transition-transform duration-200 ${isPressed ? "scale-[0.98]" : "scale-100"}`}
              style={{
                width: "min(480px, 80vw)",
                height: "min(320px, 54vw)",
              }}
              onMouseDown={() => setIsPressed(true)}
              onMouseUp={() => setIsPressed(false)}
              onTouchStart={() => { setIsPressed(true); setIsHovered(true); }}
              onTouchEnd={() => { setIsPressed(false); setIsHovered(false); }}
            >
              <Image
                src="/images/footer/bell/bell_not_clicked.png"
                alt="Concierge bell"
                width={400}
                height={400}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ${isPressed ? "opacity-0" : "opacity-100"}`}
              />
              <Image
                src="/images/footer/bell/bell_pressed.png"
                alt="Concierge bell pressed"
                width={400}
                height={400}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ${isPressed ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            {/* Hover / tap label */}
            <p
              aria-hidden="true"
              className={`-mt-4 sm:-mt-6 uppercase tracking-[0.28em] text-[#F5E9D0]/80 transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}
              style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" }}
            >
              CLICK TO CHECK IN
            </p>
          </div>

          {/* Right: Social links */}
          <div className="hidden md:flex flex-1 justify-start pl-4 md:pl-2 lg:pl-8">
            <div className="flex flex-col items-center gap-6">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-[#F5E9D0] transition-colors hover:text-[#F0C766]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[27px] w-[27px] lg:h-[31px] lg:w-[31px] fill-none stroke-current stroke-[1.5]">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-[#F5E9D0] transition-colors hover:text-[#F0C766]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true" className="h-[27px] w-[27px] lg:h-[31px] lg:w-[31px] fill-current">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile only: Nav and Social links (below bell on small screens) */}
          <div className="flex md:hidden w-full justify-between items-start px-4">
            <nav
              aria-label="Footer services"
              className="flex flex-col gap-2 text-left font-medium text-[#F5E9D0]"
              style={{ fontSize: "clamp(0.8rem, 4vw, 1rem)" }}
            >
              {navItems.map((item) => (
                <div key={item} className="py-[2px]">
                  {item}
                </div>
              ))}
            </nav>
            <div className="flex flex-col items-center gap-4">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-[#F5E9D0]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-current stroke-[1.5]">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-[#F5E9D0]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true" className="h-8 w-8 fill-current">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

       
        {/* 
        <div className="mt-8 sm:mt-12 mb-4 flex justify-center">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-concierge"))}
            className="transition-transform duration-200 hover:scale-[1.03] focus:outline-none cursor-pointer"
          >
            <Image
              src="/images/footer/footer-button.png"
              alt="Request A Stay"
              width={260}
              height={80}
              className="h-auto w-auto object-contain drop-shadow-md"
            />
          </button>
        </div>
        */}
      </div>

      {/* Full-bleed decorative ribbon */}
      <div className="relative w-full overflow-hidden shrink-0 mt-auto" aria-hidden="true">
        <Image
          src="/images/footer/bottom_x.svg"
          alt=""
          width={1440}
          height={60}
          className="w-full h-auto object-cover opacity-95"
          style={{ minWidth: "100%" }}
        />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F5E9D0]/20 shrink-0">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-4 sm:px-8 lg:px-10 pb-6 pt-4 text-[#F5E9D0]/80 sm:flex-row sm:items-center sm:justify-between"
             style={{ fontSize: "clamp(0.65rem, 1.6vw, 0.75rem)" }}>
          <div>© 2026 The Woolgatherers. All rights reserved.</div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#" className="transition-opacity hover:opacity-100 hover:text-[#F0C766]">
              Privacy Policy
            </a>
            <a href="#" className="transition-opacity hover:opacity-100 hover:text-[#F0C766]">
              Terms of Service
            </a>
            <a href="#" className="transition-opacity hover:opacity-100 hover:text-[#F0C766]">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
