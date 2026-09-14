"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blob } from "@/app/lib/blob";

interface ServiceItem {
  title: string;
  collapsedColor: string;
  expandedColor: string;
  image: string;
  subServices: string[];
}

const serviceData: ServiceItem[] = [
  {
    title: "BRAND BUILDING, DESIGN & STRATEGY",
    collapsedColor: "#260421",
    expandedColor: "#260421",
    image: blob("/images/service/tab-1-image.jpg"),
    subServices: [
      "BRAND STRATEGY",
      "VISUAL IDENTITY & PACKAGING",
      "COMMUNICATION DESIGN",
      "ATL & BTL CAMPAIGNS",
      "NEW PRODUCT DEVELOPMENT",
    ],
  },
  {
    title: "SOCIAL MEDIA",
    collapsedColor: "#2D062A",
    expandedColor: "#2D062A",
    image: blob("/images/service/tab-3-image.jpg"),
    subServices: [
      "SOCIAL MEDIA STRATEGY",
      "CONTENT CREATION & CURATION",
      "COMMUNITY MANAGEMENT",
      /* "INFLUENCER CAMPAIGNS",
      "PERFORMANCE MARKETING", */
    ],
  },
  {
    title: "WEBSITES",
    collapsedColor: "#3A092B",
    expandedColor: "#3A092B",
    image: blob("/images/service/tab-2-image.jpg"),
    subServices: [
      "UI/UX DESIGN",
      "RESPONSIVE WEB DEVELOPMENT",
      "DIGITAL EXPERIENCES",
      /*"WEBFLOW & CUSTOM CMS",
      "WEBSITE OPTIMIZATION & SEO", */

    ],
  },
  {
    title: "PHOTOGRAPHY & VIDEOGRAPHY",
    collapsedColor: "#47102D",
    expandedColor: "#47102D",
    image: blob("/images/service/tab-4-image.webp"),
    subServices: [
      "COMMERCIAL PHOTOGRAPHY",
      "BRAND FILMS & VIDEO PRODUCTION",
      "PRODUCT & EDITORIAL SHOOTS",
      "POST-PRODUCTION & GRADING",
      "ART DIRECTION",
    ],
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const keyRef = useRef<HTMLDivElement | null>(null);
  const bandsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentOuterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentInnerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const headerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Setup GSAP Accordion panel animations
  const handleToggle = (index: number) => {
    const isOpening = openIndex !== index;
    const nextIndex = isOpening ? index : null;

    bandsRef.current.forEach((band, i) => {
      if (!band) return;

      const outer = contentOuterRefs.current[i];
      const inner = contentInnerRefs.current[i];
      const header = headerRefs.current[i];

      const targetBg = i === nextIndex ? serviceData[i].expandedColor : serviceData[i].collapsedColor;

      // Animate background color of the band
      gsap.to(band, {
        backgroundColor: targetBg,
        duration: 0.6,
        ease: "power2.inOut",
      });

      if (header) {
        if (i === nextIndex) {
          gsap.to(header, {
            height: 0,
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
          });
        } else {
          const targetHeight = window.innerWidth < 768 ? 90 : 140;
          gsap.to(header, {
            height: targetHeight,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
          });
        }
      }

      if (outer && inner) {
        if (i === nextIndex) {
          // Open transition
          gsap.killTweensOf([outer, inner]);

          // Animate height of outer container
          gsap.fromTo(outer,
            { height: outer.offsetHeight },
            {
              height: "auto",
              duration: 0.6,
              ease: "power2.inOut",
              onComplete: () => ScrollTrigger.refresh(),
            }
          );

          // Staggered fade in/up of inner content
          gsap.fromTo(inner,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.15,
              ease: "power2.out",
            }
          );
        } else {
          // Close transition
          gsap.killTweensOf([outer, inner]);

          gsap.to(outer, {
            height: 0,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => ScrollTrigger.refresh(),
          });

          gsap.to(inner, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: "power2.in",
          });
        }
      }
    });

    setOpenIndex(nextIndex);
  };

  // Setup scroll trigger for the traveling key SVG
  useEffect(() => {
    if (!containerRef.current || !keyRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const keyElement = keyRef.current;

    // Set initial key rotation (tip-down is 180 degrees if default is tip-up)
    gsap.set(keyElement, { rotation: 180, xPercent: -50, yPercent: -50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      }
    });

    // Move the key down along the container height
    tl.fromTo(keyElement,
      { top: "0%" },
      { top: "100%", ease: "none" }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex flex-col bg-[#1D0121]">
      <div className="w-full px-6 pt-32 pb-2 sm:px-8 sm:pt-16 sm:pb-4 md:px-10 md:pt-20 md:pb-4">
        <h2
          className="text-[#d6dee9] font-normal text-left leading-none"
          style={{ fontFamily: '"Jersey 15", system-ui, sans-serif', fontSize: "70px" }}
        >
          OUR SERVICES
        </h2>
      </div>
      {serviceData.map((service, index) => {
        return (
          <div
            key={service.title}
            ref={(el) => { bandsRef.current[index] = el; }}
            style={{ backgroundColor: service.collapsedColor }}
            className="group w-full flex flex-col transition-colors duration-500 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] cursor-pointer select-none overflow-hidden"
            onClick={() => handleToggle(index)}
          >
            {/* Collapsed Header / Label */}
            <div
              ref={(el) => { headerRefs.current[index] = el; }}
              className="relative w-full h-[90px] md:h-[140px] flex items-center justify-between p-4 sm:p-6 md:p-10 gap-2 sm:gap-4"
            >
              <h3
                className="text-[#d6dee9] font-normal leading-tight whitespace-normal break-words sm:whitespace-normal overflow-hidden text-ellipsis"
                style={{
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: "clamp(18px, 3.5vw, 34px)",
                }}
              >
                {service.title}
              </h3>
              <div className="w-8 h-8 md:w-10 md:h-10 text-[#d6dee9] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Expanded Content Area */}
            <div
              ref={(el) => { contentOuterRefs.current[index] = el; }}
              className="w-full h-0 overflow-hidden"
            >
              <div
                ref={(el) => { contentInnerRefs.current[index] = el; }}
                className="px-6 pb-12 sm:px-8 sm:pb-16 md:px-10 md:pb-20 flex flex-col opacity-0"
              >
                {/* Large Title */}
                <h4
                  className="w-full text-[#d6dee9] font-medium tracking-normal mb-10 sm:mb-16 text-left"
                  style={{
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: "clamp(26px, 4vw, 48px)",
                    lineHeight: 1.1,
                  }}
                >
                  {service.title}
                </h4>

                {/* Sub-services and Image Layout */}
                <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-between">
                  {/* Left Column: Sub-services List */}
                  <div className="w-full md:w-[40%] flex flex-col justify-center pb-2">
                    <ul className="list-none p-0 m-0 text-left flex flex-col gap-1">
                      {service.subServices.map((sub, i) => (
                        <li
                          key={i}
                          className="text-[#d6dee9] font-medium leading-relaxed"
                          style={{
                            fontFamily: '"Inter", system-ui, sans-serif',
                            fontSize: "clamp(16px, 2.5vw, 22px)",
                          }}
                        >
                          ~{sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Representative Image */}
                  <div className="w-full md:w-[60%] flex justify-end">
                    <div className="relative w-full max-w-3xl aspect-[16/6] bg-black/10 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 60vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
