"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StaggeredMenu from './StaggeredMenu';



export default function Navbar() {
  const pathname = usePathname();

  const handleReservationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-concierge"));
  };

  const menuItems = [
    { label: "Home", ariaLabel: "Home Page", link: "/#hero" },
    { label: "Residents", ariaLabel: "View Residents", link: "/work", badge: "Work" },
    /* { label: "Hosts", ariaLabel: "Hosts Section", link: "/#hosts" , onClick: handleReservationsClick, badge: "Contact" }, */
    { label: "Concierge", ariaLabel: "Make a Reservation", link: "#", badge: "Contact" },
    { label: "Stories", ariaLabel: "Stories", link: "/blog", badge: "Blog" }
  ];

  const socialItems = [
    { label: "[Instagram]", link: "https://instagram.com/thewoolgatherers.co" },
    { label: "[LinkedIn]", link: "https://linkedin.com/company/thewoolgatherers" }
  ];

  const isLightPage = pathname.match(/^\/blog\/.+/);
  const currentMenuColor = isLightPage ? '#120F17' : '#F5E9D0';

  const logoElement = (
    <Link
      href="/"
      aria-label="Home"
      className=" hover:opacity-85 transition-opacity flex items-center justify-center"
    >
      <img 
        src="/images/logo/keyhole-white.svg" 
        alt="The Woolgatherers Logo" 
        className={`w-10 h-10 ${isLightPage ? 'invert' : ''}`} 
      />
    </Link>
  );

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor={currentMenuColor}
      openMenuButtonColor="#D72F2F"
      changeMenuColorOnOpen={true}
      colors={['#D72F2F', '#F5E9D0', '#120F17']}
      accentColor="#D72F2F"
      logoElement={logoElement}
      isFixed={true}
    />
  );
}
