"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StaggeredMenu from './StaggeredMenu';

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M10 2.5 2 9h2v8.5h5v-5h2v5h5V9h2L10 2.5Z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const handleReservationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-concierge"));
  };

  const menuItems = [
    { label: "Services", ariaLabel: "Services Section", link: "/#services" },
    { label: "Residents", ariaLabel: "View Residents", link: "/work" },
    { label: "Hosts", ariaLabel: "Hosts Section", link: "/#hosts" },
    { label: "Links", ariaLabel: "Footer Links", link: "/#footer" },
    { label: "Reservations", ariaLabel: "Make a Reservation", link: "#", onClick: handleReservationsClick }
  ];

  const socialItems = [
    { label: "[Instagram]", link: "https://instagram.com/thewoolgatherers" },
    { label: "[LinkedIn]", link: "https://linkedin.com/company/thewoolgatherers" }
  ];

  const logoElement = (
    <Link
      href="/"
      aria-label="Home"
      className="rounded-full w-10 h-10 bg-[#E8291C] text-[#F5E9D0] hover:opacity-85 transition-opacity flex items-center justify-center"
    >
      <HomeIcon />
    </Link>
  );

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#F5E9D0"
      openMenuButtonColor="#E8291C"
      changeMenuColorOnOpen={true}
      colors={['#E8291C', '#F5E9D0', '#120F17']}
      accentColor="#E8291C"
      logoElement={logoElement}
      isFixed={true}
    />
  );
}
