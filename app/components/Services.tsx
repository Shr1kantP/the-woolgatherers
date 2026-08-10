"use client";
import React from "react";

export default function Services() {
  const services = [
    { label: "Social Media", bg: "bg-[#4E2E5E]" },
    { label: "Websites", bg: "bg-[#65603D]" },
    { label: "Photography & Videography", bg: "bg-[#7E1D1A]" },
  ];

  return (
    <section className="relative bg-[#1A0D26] text-[#F5F0E8] overflow-hidden">
      <div className="w-full py-0">
        <div className="bg-[#C35A2A] px-10 py-16 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
          <h2 className="w-full font-bold tracking-tight" style={{ fontFamily: "Futura, sans-serif", fontSize: "32px", lineHeight: 1.1 }}>
            Brand Building, Design & Management
          </h2>
        </div>

        <div className="mt-0 space-y-0">
          {services.map((service) => (
            <div key={service.label} className={`${service.bg} px-10 py-16 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]`}>
              <h3 className="font-semibold leading-tight" style={{ fontFamily: "Futura, sans-serif", fontSize: "32px" }}>
                {service.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
