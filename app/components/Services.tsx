"use client";
import React from "react";

export default function Services() {
  const services = [
    { label: "Social Media", bg: "bg-[#4E2E5E]" },
    { label: "Websites", bg: "bg-[#65603D]" },
    { label: "Photography & Videography", bg: "bg-[#7E1D1A]" },
  ];

  return (
    <section id="services" className="relative bg-[#1A0D26] text-[#F5F0E8] overflow-hidden">
      <div className="w-full py-0">
        <div className="bg-[#C35A2A] px-4 sm:px-8 md:px-10 py-8 sm:py-12 md:py-16 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
          <h2
            className="w-full font-bold tracking-tight"
            style={{
              fontFamily: "Futura, sans-serif",
              fontSize: "clamp(18px, 4vw, 32px)",
              lineHeight: 1.15,
            }}
          >
            Brand Building, Design &amp; Management
          </h2>
        </div>

        <div className="mt-0 space-y-0">
          {services.map((service) => (
            <div
              key={service.label}
              className={`${service.bg} px-4 sm:px-8 md:px-10 py-8 sm:py-12 md:py-16 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]`}
            >
              <h3
                className="font-semibold leading-tight"
                style={{
                  fontFamily: "Futura, sans-serif",
                  fontSize: "clamp(18px, 4vw, 32px)",
                }}
              >
                {service.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
