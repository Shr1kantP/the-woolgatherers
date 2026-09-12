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

  const handleBellClick = () => {
    window.dispatchEvent(new CustomEvent("open-concierge"));
  };

  return (
    <footer
      id="footer"
      className="relative z-30 min-h-screen w-full text-[#F5E9D0] flex flex-col -mt-[15vh] pt-[15vh]"
      style={{
        backgroundImage: "url('/images/footer/footer-bg.png')",
        backgroundColor: "#1F001B",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[2600px] px-4 sm:px-8 lg:px-10 pb-0 pt-10 sm:pt-12 flex flex-col items-center">

        {/* Ready to Check in */}
        <div className="flex justify-center mb-[10px] md:mb-4">
          <Image
            src="/images/footer/readytext.svg"
            alt="Ready to Check in"
            width={350}
            height={154}
            priority
            className="h-auto object-contain"
            style={{ width: "min(350px, 70vw)" }}
          />
        </div>

        {/* Main row: services | bell | socials */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-32 w-full max-w-6xl mx-auto">

          {/* Desktop: services list left */}
          <div className="hidden md:flex flex-1 justify-end">
            <nav
              aria-label="Footer services"
              className="flex flex-col gap-1 font-medium text-left text-[#F5E9D0] whitespace-nowrap"
              style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)" }}
            >
              {navItems.map((item) => (
                <div key={item} className="transition-colors hover:text-[#F0C766] cursor-pointer">
                  {item}
                </div>
              ))}
            </nav>
          </div>

          {/* Centre: bell + CTA */}
          <div className="flex flex-col items-center shrink-0">
            {/* Bell — clickable */}
            <button
              type="button"
              aria-label="Open concierge"
              onClick={handleBellClick}
              className="focus:outline-none cursor-pointer translate-x-[3px] md:translate-x-0"
            >
              <div
                className={`relative flex items-center justify-center transition-transform duration-200 ${isPressed ? "scale-[0.98]" : "scale-100"}`}
                style={{
                  width: "min(440px, 80vw)",
                  height: "min(280px, 55vw)",
                }}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => setIsPressed(false)}
                onTouchStart={() => setIsPressed(true)}
                onTouchEnd={() => setIsPressed(false)}
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
            </button>

            {/* CTA button — always visible, close to bell */}
            <button
              type="button"
              onClick={handleBellClick}
              className="-mt-6 md:mt-3 transition-transform duration-200 hover:scale-[1.03] focus:outline-none cursor-pointer"
            >
              <Image
                src="/images/footer/footer-button.png"
                alt="Request A Stay"
                width={440}
                height={136}
                className="h-auto w-[55vw] max-w-[200px] md:max-w-[220px] object-contain drop-shadow-md"
              />
            </button>
          </div>

          {/* Desktop: socials right */}
          <div className="hidden md:flex flex-1 justify-start">
            <div className="flex flex-col items-center gap-6">
              <a href="https://www.instagram.com/thewoolgatherers.co?stkn=MWowdzkxdXdubHBxeg%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-[#F5E9D0] transition-colors hover:text-[#F0C766]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[27px] w-[27px] lg:h-[31px] lg:w-[31px] fill-none stroke-current stroke-[1.5]">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/thewoolgatherers" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-[#F5E9D0] transition-colors hover:text-[#F0C766]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true" className="h-[27px] w-[27px] lg:h-[31px] lg:w-[31px] fill-current">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile: nav + socials row */}
          <div className="flex md:hidden w-full justify-center items-center gap-12 px-4">
            <nav
              aria-label="Footer services"
              className="flex flex-col gap-0 text-left font-medium text-[#F5E9D0] whitespace-nowrap"
              style={{ fontSize: "clamp(0.8rem, 4vw, 1rem)" }}
            >
              {navItems.map((item) => (
                <div key={item} className="py-[1px]">{item}</div>
              ))}
            </nav>
            <div className="flex flex-col items-center gap-4">
              <a href="https://www.instagram.com/thewoolgatherers.co?stkn=MWowdzkxdXdubHBxeg%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-[#F5E9D0]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-current stroke-[1.5]">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/thewoolgatherers" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-[#F5E9D0]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true" className="h-8 w-8 fill-current">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed decorative ribbon */}
      <div className="relative w-full overflow-hidden shrink-0 flex justify-center pb-4 md:pb-8 mt-6 md:mt-8" aria-hidden="true">
        <Image
          src="/images/footer/bottom_x.svg"
          alt=""
          width={1920}
          height={100}
          className="h-auto object-cover opacity-95 max-w-none w-[270%] sm:w-[270%] md:w-[180%] lg:w-[120%]"
        />
      </div>

      {/* Bottom bar */}
      <div className="shrink-0">
        <div
          className="mx-auto flex max-w-[1600px] flex-col gap-3 px-4 sm:px-8 lg:px-10 pb-24 md:pb-6 pt-4 text-[#F5E9D0]/80 sm:flex-row sm:items-center sm:justify-center text-center"
          style={{ fontSize: "clamp(0.65rem, 1.6vw, 0.75rem)" }}
        >
          <div className="sm:mr-4">© 2026 The Woolgatherers. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="transition-opacity hover:opacity-100 hover:text-[#F0C766]">Privacy Policy</a>
            <a href="#" className="transition-opacity hover:opacity-100 hover:text-[#F0C766]">Terms of Service</a>
            <a href="#" className="transition-opacity hover:opacity-100 hover:text-[#F0C766]">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
