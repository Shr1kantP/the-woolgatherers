"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServiceItem {
  title: string;
  collapsedColor: string;
  expandedColor: string;
  image: string;
  subServices: string[];
}

const serviceData: ServiceItem[] = [
  {
    title: "Brand Building, Design & Management",
    collapsedColor: "#C1652F", // burnt orange
    expandedColor: "#D68458", // lightened burnt orange (~25-30%)
    image: "/images/service/tab-1-image.png",
    subServices: [
      "Brand Strategy",
      "Visual Identity & Packaging",
      "Communication Design",
      "ATL & BTL Campaigns",
      "New Product Development",
    ],
  },
  {
    title: "Social Media",
    collapsedColor: "#4A2A5C", // deep purple
    expandedColor: "#6F4B82", // lightened mauve
    image: "/images/service/tab-2-image.png",
    subServices: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Community Management",
      /* "Influencer Campaigns",
      "Performance Marketing", */
    ],
  },
  {
    title: "Websites",
    collapsedColor: "#6E6B3A", // olive
    expandedColor: "#938F5F", // lightened olive
    image: "/images/service/tab-3-image.png",
    subServices: [
      "UI/UX Design",
      "Responsive Web Development",
      "Digital Experiences",
      /*"Webflow & Custom CMS",
      "Website Optimization & SEO", */

    ],
  },
  {
    title: "Photography & Videography",
    collapsedColor: "#7A1F1F", // maroon
    expandedColor: "#A14242", // lightened maroon
    image: "/images/host_4thslide.jpg",
    subServices: [
      "Commercial Photography",
      "Brand Films & Video Production",
      "Product & Editorial Shoots",
      "Post-Production & Grading",
      "Art Direction",
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
          const targetHeight = window.innerWidth < 768 ? 120 : 200;
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
    <div ref={containerRef} className="relative w-full overflow-hidden flex flex-col bg-[#1A0D26]">
      {serviceData.map((service, index) => {
        return (
          <div
            key={service.title}
            ref={(el) => { bandsRef.current[index] = el; }}
            style={{ backgroundColor: service.collapsedColor }}
            className="w-full flex flex-col transition-colors duration-500 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] cursor-pointer select-none overflow-hidden"
            onClick={() => handleToggle(index)}
          >
            {/* Collapsed Header / Label */}
            <div
              ref={(el) => { headerRefs.current[index] = el; }}
              className="relative w-full h-[120px] md:h-[200px] flex items-center p-6 sm:p-8 md:p-10"
            >
              <h3
                className="text-[#F5EDE4] font-normal leading-none"
                style={{
                  fontFamily: '"Futura", system-ui, sans-serif',
                  fontSize: "clamp(28px, 5vw, 40px)",
                }}
              >
                {service.title}
              </h3>
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
                  className="w-full text-[#1A1208] font-bold tracking-tight mb-8 sm:mb-12 text-left"
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "clamp(32px, 6vw, 56px)",
                    lineHeight: 1.1,
                  }}
                >
                  {service.title}
                </h4>

                {/* Sub-services and Image Layout */}
                <div className="w-full flex flex-col md:flex-row gap-8 items-end justify-between">
                  {/* Left Column: Sub-services List */}
                  <div className="w-full md:w-[35%] flex flex-col justify-end pb-2 pl-6 sm:pl-16 md:pl-24">
                    <ul className="list-none p-0 m-0 text-left flex flex-col gap-2">
                      {service.subServices.map((sub, i) => (
                        <li
                          key={i}
                          className="text-[#1A1208] font-normal leading-relaxed"
                          style={{
                            fontFamily: "var(--font-sans), sans-serif",
                            fontSize: "clamp(14px, 2vw, 15px)",
                          }}
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Representative Image */}
                  <div className="w-full md:w-[65%] flex justify-end">
                    <div className="relative w-full max-w-3xl aspect-[16/6] bg-black/10 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 65vw, 800px"
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
