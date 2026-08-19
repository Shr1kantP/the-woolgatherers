"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent) => void;
};

export interface PillNavProps {
  logo: string | React.ReactNode;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#120F17',
  hoveredPillTextColor = '#120F17',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | HTMLDivElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, {
          scale: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' });
        gsap.to(navItems, {
          width: 'auto',
          duration: 0.6,
          ease
        });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const isExternalLink = (href: string) =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#');

  const isRouterLink = (href?: string) => href && !isExternalLink(href);

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor,
    ['--nav-h']: '42px',
    ['--logo']: '36px',
    ['--pill-pad-x']: '18px',
    ['--pill-gap']: '3px'
  } as React.CSSProperties;

  return (
    <div className={`relative z-50 w-full md:w-auto flex flex-col items-center ${className}`} style={cssVars}>
      <nav
        className="flex items-center gap-2 rounded-full p-[3px] bg-[var(--base)] md:bg-transparent md:p-0 md:rounded-none md:gap-0"
        aria-label="Primary"
      >
        {isRouterLink(items?.[0]?.href) ? (
          <Link
            href={items[0].href}
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            role="menuitem"
            ref={el => {
              logoRef.current = el;
            }}
            className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden"
            style={{
              width: 'var(--nav-h)',
              height: 'var(--nav-h)',
              background: 'var(--pill-bg, #000)'
            }}
          >
            {typeof logo === 'string' ? (
              <img src={logo} alt={logoAlt} ref={el => { logoImgRef.current = el; }} className="w-full h-full object-cover block" />
            ) : (
              <div ref={el => { logoImgRef.current = el; }} className="w-full h-full flex items-center justify-center text-white">
                {logo}
              </div>
            )}
          </Link>
        ) : (
          <a
            href={items?.[0]?.href || '#'}
            aria-label="Home"
            onMouseEnter={handleLogoEnter}
            ref={el => {
              logoRef.current = el as HTMLElement;
            }}
            className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden"
            style={{
              width: 'var(--nav-h)',
              height: 'var(--nav-h)',
              background: 'var(--pill-bg, #000)'
            }}
          >
            {typeof logo === 'string' ? (
              <img src={logo} alt={logoAlt} ref={el => { logoImgRef.current = el; }} className="w-full h-full object-cover block" />
            ) : (
              <div ref={el => { logoImgRef.current = el; }} className="w-full h-full flex items-center justify-center text-white">
                {logo}
              </div>
            )}
          </a>
        )}

        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex ml-2"
          style={{
            height: 'var(--nav-h)',
            background: 'var(--base, #000)'
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const isReservations = item.label === "Reservations";

              const pillStyle: React.CSSProperties = {
                background: isReservations ? 'var(--pill-bg, #000)' : 'transparent',
                color: isReservations ? 'var(--hover-text, #fff)' : 'var(--pill-text, var(--base, #000))',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)'
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: 'var(--pill-bg, #000)',
                      willChange: 'transform'
                    }}
                    aria-hidden="true"
                    ref={el => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1] font-heading uppercase tracking-[0.12em] text-[0.7rem]"
                      style={{ willChange: 'transform' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block font-heading uppercase tracking-[0.12em] text-[0.7rem]"
                      style={{
                        color: 'var(--hover-text, #fff)',
                        willChange: 'transform, opacity'
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                      style={{ background: 'var(--pill-bg, #000)' }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses =
                'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0';

              if (item.onClick) {
                return (
                  <li key={item.label} role="none" className="flex h-full">
                    <button
                      role="menuitem"
                      onClick={item.onClick}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </button>
                  </li>
                );
              }

              return (
                <li key={item.href} role="none" className="flex h-full">
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative ml-2"
          style={{
            width: 'var(--nav-h)',
            height: 'var(--nav-h)',
            background: 'var(--pill-bg, #000)'
          }}
        >
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: 'var(--base, #fff)' }}
          />
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: 'var(--base, #fff)' }}
          />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[3.5em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top"
        style={{
          ...cssVars,
          background: 'var(--base, #f0f0f0)'
        }}
      >
        <ul className="list-none m-0 p-[3px] flex flex-col gap-[3px]">
          {items.map(item => {
            const isReservations = item.label === "Reservations";
            const defaultStyle: React.CSSProperties = {
              background: isReservations ? 'var(--pill-bg)' : 'transparent',
              color: isReservations ? 'var(--hover-text, #fff)' : 'var(--pill-text, #fff)'
            };
            const hoverIn = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
              if (isReservations) return; // Keep red background
              e.currentTarget.style.background = 'var(--pill-bg)';
              e.currentTarget.style.color = 'var(--hover-text, #fff)';
            };
            const hoverOut = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
              if (isReservations) return;
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--pill-text, #fff)';
            };

            const linkClasses =
              'block w-full text-center py-3 px-4 text-[16px] font-heading uppercase tracking-[0.12em] text-[0.75rem] rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer';

            if (item.onClick) {
              return (
                <li key={item.label}>
                  <button
                    className={linkClasses}
                    style={defaultStyle}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      item.onClick?.(e);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            }

            return (
              <li key={item.href}>
                {isRouterLink(item.href) ? (
                  <Link
                    href={item.href}
                    className={linkClasses}
                    style={defaultStyle}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={linkClasses}
                    style={defaultStyle}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

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

export default function Navbar() {
  const pathname = usePathname();

  const handleReservationsClick = (e: React.MouseEvent) => {
    window.dispatchEvent(new CustomEvent("open-concierge"));
  };

  const navItems: PillNavItem[] = [
    { label: "Services", href: "/#services" },
    { label: "Residents", href: "/work" },
    { label: "Hosts", href: "/#hosts" },
    { label: "Links", href: "/#footer" },
    { label: "Reservations", href: "#", onClick: handleReservationsClick }
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full md:w-auto max-w-md">
        <PillNav
          logo={<HomeIcon />}
          logoAlt="Home"
          items={navItems}
          activeHref={pathname}
          ease="power3.easeOut"
          baseColor="#F5E9D0"
          pillColor="#E8291C"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#E8291C"
        />
      </div>
    </header>
  );
}
