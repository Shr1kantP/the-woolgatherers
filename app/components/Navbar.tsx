"use client";

import React from 'react';
import Link from 'next/link';
import StaggeredMenu from './StaggeredMenu';



export default function Navbar() {
  const handleReservationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-concierge"));
  };

  const menuItems = [
    { label: "Home", ariaLabel: "Home Page", link: "/#hero" },
    { label: "Residency", ariaLabel: "View Residents", link: "/work", badge: "Work" },
    /* { label: "Hosts", ariaLabel: "Hosts Section", link: "/#hosts" , onClick: handleReservationsClick, badge: "Contact" }, */
    { label: "Concierge", ariaLabel: "Make a Reservation", link: "#", onClick: handleReservationsClick, badge: "Contact" },
    { label: "Stories", ariaLabel: "Stories", link: "/blog", badge: "Blog" }
  ];

  const socialItems = [
    { label: "[Instagram]", link: "https://www.instagram.com/thewoolgatherers.co?stkn=MWowdzkxdXdubHBxeg%3D%3D&utm_source=qr" },
    { label: "[LinkedIn]", link: "https://linkedin.com/company/thewoolgatherers" }
  ];

  const currentMenuColor = '#F5E9D0';
  const currentHeaderColor = '#1D0121';

  const logoElement = (
    <Link
      href="/"
      aria-label="Home"
      className="hover:opacity-85 transition-opacity hidden md:flex items-center justify-center"
    >
      <span
        role="img"
        aria-label="The Woolgatherers Logo"
        className="h-10 w-10 bg-[#F5E9D0]"
        style={{
          maskImage: 'url("/images/logo/keyhole-white.svg")',
          maskPosition: 'center',
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          WebkitMaskImage: 'url("/images/logo/keyhole-white.svg")',
          WebkitMaskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
        }}
      />
    </Link>
  );

  const centerLogo = (
    <Link
      href="/"
      aria-label="The Woolgatherers home"
      className="absolute left-4 md:left-1/2 flex md:-translate-x-1/2 items-center justify-center transition-opacity hover:opacity-85"
    >
      <img
        src="/images/hero/woolgatherers-navbar.svg"
        alt="The Woolgatherers"
        className="h-[18px] md:h-[38px] w-auto"
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
      openMenuButtonColor="#400000"
      changeMenuColorOnOpen={true}
      colors={['#400000', '#F5E9D0', '#1D0121']}
      accentColor="#400000"
      logoElement={logoElement}
      centerLogo={centerLogo}
      headerColor={currentHeaderColor}
      isFixed={true}
    />
  );
}