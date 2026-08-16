"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "./Services" },
  { label: "Residents", href: "./work" },
  { label: "Hosts", href: "./components/hosts/HostsSection" },
  { label: "Links", href: "./components/footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Desktop pill */}
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto hidden sm:flex items-center gap-1 rounded-full bg-[#F5E9D0] px-2 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
      >
        {/* Home icon */}
        <Link
          href="/"
          aria-label="Home"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8291C] text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8291C]/60"
        >
          <HomeIcon />
        </Link>

        {/* Nav links */}
        <ul className="flex items-center">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block px-4 py-2 font-heading text-[#E8291C] uppercase tracking-[0.12em] text-[0.7rem] transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8291C]/50 rounded-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Reservations CTA */}
        <a
          href="#reservations"
          className="ml-1 flex items-center justify-center rounded-full bg-[#E8291C] px-5 py-2 font-heading text-white uppercase tracking-[0.12em] text-[0.7rem] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8291C]/60"
        >
          Reservations
        </a>
      </nav>

      {/* Mobile pill — home + hamburger only */}
      <div className="pointer-events-auto flex sm:hidden items-center gap-2 rounded-full bg-[#F5E9D0] px-2 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.18)]">
        <Link
          href="/"
          aria-label="Home"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8291C] text-white"
        >
          <HomeIcon />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#E8291C] hover:bg-[#E8291C]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8291C]/50 transition-colors"
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 rounded-2xl bg-[#F5E9D0] shadow-[0_8px_32px_rgba(0,0,0,0.22)] p-4 flex flex-col gap-1 sm:hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 font-heading text-[#E8291C] uppercase tracking-[0.12em] text-[0.75rem] hover:bg-[#E8291C]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8291C]/50"
            >
              {label}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={() => setMenuOpen(false)}
            className="mt-1 flex items-center justify-center rounded-full bg-[#E8291C] px-5 py-3 font-heading text-white uppercase tracking-[0.12em] text-[0.75rem] hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8291C]/60"
          >
            Reservations
          </a>
        </div>
      )}
    </header>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M10 2.5 2 9h2v8.5h5v-5h2v5h5V9h2L10 2.5Z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-current">
      <rect x="2" y="5" width="16" height="1.8" rx="0.9" />
      <rect x="2" y="9.1" width="16" height="1.8" rx="0.9" />
      <rect x="2" y="13.2" width="16" height="1.8" rx="0.9" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M4.22 4.22a.75.75 0 0 1 1.06 0L10 8.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L11.06 10l4.72 4.72a.75.75 0 1 1-1.06 1.06L10 11.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L8.94 10 4.22 5.28a.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
}
