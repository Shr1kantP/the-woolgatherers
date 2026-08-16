"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  "Content Production",
  "Brand Building",
  "Social Media",
  "Web Design & Dev",
];

const ribbonTextOlive = "A RESIDENCY FOR BRANDS •";
const ribbonTextPurple = "CURRENTLY ACCEPTING NEW GUESTS •";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#F5E9D0]/80 text-[#F5E9D0] transition-all duration-200 hover:border-[#F5E9D0] hover:bg-[#F5E9D0] hover:text-[#5D1515] hover:shadow-[0_0_0_4px_rgba(245,233,208,0.12)]"
    >
      <span className="transition-transform duration-200 group-hover:scale-110">{children}</span>
    </a>
  );
}

export default function Footer() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <footer className="relative z-30 min-h-screen w-full overflow-hidden bg-[#5D1515] text-[#F5E9D0]">
      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-12 sm:px-8 lg:px-10">
        <div className="flex justify-center">
          <Image
            src="/images/footer/readytext.svg"
            alt="Ready to Check in"
            width={500}
            height={220}
            priority
            className="h-auto w-[min(500px,88vw)] object-contain"
          />
        </div>

        <div className="mt-3 flex flex-col items-center justify-center gap-4">
          <nav aria-label="Footer services" className="w-full text-center text-[0.8rem] font-medium uppercase leading-relaxed tracking-[0.12em] text-[#F5E9D0]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              {navItems.map((item) => (
                <div key={item} className="py-[2px]">
                  {item}
                </div>
              ))}
            </div>
          </nav>

          <div
            className={`relative flex items-center justify-center transition-transform duration-200 ${isPressed ? "scale-[0.98]" : "scale-100"}`}
            style={{ width: "min(580px, 72vw)", height: "min(380px, 72vw)" }}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
          >
            <Image
              src="/images/footer/bell/bell_not_clicked.png"
              alt="Concierge bell"
              width={300}
              height={300}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ${isPressed ? "opacity-0" : "opacity-100"}`}
            />
            <Image
              src="/images/footer/bell/bell_pressed.png"
              alt="Concierge bell pressed"
              width={300}
              height={300}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ${isPressed ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <div className="flex items-center justify-center gap-8">
            <SocialLink href="https://instagram.com" label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.7]">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </SocialLink>
            <SocialLink href="https://linkedin.com" label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.9v8.7H5.5V9.8Zm5.15 0h2.77v1.18h.04c.39-.73 1.34-1.5 2.75-1.5 2.95 0 3.49 1.94 3.49 4.46v6.56h-2.9v-6.12c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.59-2.35 3.23v6.23h-2.9V9.8Z" />
              </svg>
            </SocialLink>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#F5DFA0]/65 bg-[#F0C766] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#5D1515] transition-all duration-200 hover:scale-[1.03] hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#F5E9D0]/70"
          >
            Request A Stay
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <Image
            src="/images/footer/bottom_x.svg"
            alt=""
            width={1800}
            height={60}
            className="w-[min(100%,1400px)] h-auto object-contain opacity-95"
          />
        </div>
      </div>

      <div className="border-t border-[#F5E9D0]/20">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 pb-6 pt-4 text-[0.7rem] uppercase tracking-[0.12em] text-[#F5E9D0]/80 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="">© 2026 The Woolgatherers. All rights reserved.</div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="transition-opacity hover:opacity-100">
              Privacy Policy
            </a>
            <a href="#" className="transition-opacity hover:opacity-100">
              Terms of Service
            </a>
            <a href="#" className="transition-opacity hover:opacity-100">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
