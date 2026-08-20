"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface Project {
  id: string;
  name: string;
  industry: string;
  tags: string[];
  image?: string;
  /** If true, the card shows logo + body text instead of a photo */
  hasTextCard?: boolean;
  logo?: string;
  description?: string;
  /** If true, this card spans both columns */
  fullWidth?: boolean;
  /** Optional right-side description shown beside full-width cards */
  sideDescription?: string;
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

const projects: Project[] = [
  {
    id: "kumbaya",
    name: "KUMABAYA",
    industry: "Food & Beverage (Kombucha)",
    tags: ["Packaging", "Content Production", "Social Media"],
    image: "/images/detailed_page/Kumbaya/DSCF9683.jpg",
    hasTextCard: false,
  },
  {
    id: "peps",
    name: "PEPS",
    industry: "Mattress & Sleep Products",
    tags: ["Content Marketing", "Social Media"],
    image: "/images/detailed_page/Peps/Peps Dream makers playlist.jpg",
  },
  {
    id: "motion",
    name: "MOTION DESIGN",
    industry: "Cross-Industry",
    tags: ["Motion Graphics", "Brand Films", "Animation"],
    image: "/images/detailed_page/MTR/MTR 2.jpg",
    fullWidth: true,
    sideDescription:
      "A curated body of motion work created for brands across textiles, FMCG, food, and lifestyle. Combining animation, typography, transitions, and storytelling to elevate presentations, corporate films, product launches, and digital campaigns.",
  },
  {
    id: "tavana",
    name: "TAVANA",
    industry: "Architecture & Real Estate",
    tags: ["Brand Building", "Brand Identity"],
    image: "/images/detailed_page/Tavana/tavana 1.png",
  },
  {
    id: "santhi",
    name: "SANTHI TEXTILES",
    industry: "Textiles & Fabrics",
    tags: ["Brand Communication", "Corporate Films", "Motion Design"],
    image: "/images/detailed_page/Wingreens/wingreens 3.jpg",
  },
];

/* ─── Tag pill ───────────────────────────────────────────────────────────── */

function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-[#F5F0E8]/40 px-3 py-[3px] text-[#F5F0E8]"
      style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(9px, 1.8vw, 11px)" }}
    >
      {label}
    </span>
  );
}

/* ─── Standard card (photo top, meta bottom) ─────────────────────────────── */

function StandardCard({ project }: { project: Project }) {
  const cardContent = (
    <article className="flex flex-col h-full">
      {/* Photo */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        ) : (
          <div className="h-full w-full bg-[#2a1a3a]" />
        )}
      </div>

      {/* Meta */}
      <div className="pt-4 pb-2">
        <h3
          className="font-bold uppercase leading-none text-[#F5F0E8] mb-1 transition-colors group-hover:text-[#C9A84C]"
          style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(16px, 3.5vw, 22px)" }}
        >
          {project.name}
        </h3>
        <p
          className="text-[#F5F0E8]/60 mb-3"
          style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(10px, 2vw, 13px)" }}
        >
          Industry: {project.industry}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>
    </article>
  );

  return (
    <Link href={`/work/${project.id}`} className="group block h-full">
      {cardContent}
    </Link>
  );
}

/* ─── Text card (Kumbaya first-slot logo + description variant) ──────────── */

function TextCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.id}`} className="group block">
      <article className="flex flex-col">
        {/* Cream box mimicking the design screenshot */}
        <div
          className="relative w-full flex flex-col justify-between p-6 sm:p-8"
          style={{ aspectRatio: "4/3", background: "#F5F0E8" }}
        >
          {project.logo && (
            <div className="flex justify-center items-start pt-2">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          )}
          {project.description && (
            <div
              className="text-[#1A0D26] text-center"
              style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(11px, 2.2vw, 13px)", lineHeight: 1.65 }}
            >
              <p>{project.description}</p>
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="pt-4 pb-2">
          <h3
            className="font-bold uppercase leading-none text-[#F5F0E8] mb-1 transition-colors group-hover:text-[#C9A84C]"
            style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(16px, 3.5vw, 22px)" }}
          >
            {project.name}
          </h3>
          <p
            className="text-[#F5F0E8]/60 mb-3"
            style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(10px, 2vw, 13px)" }}
          >
            Industry: {project.industry}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ─── Full-width card (Motion Design) ───────────────────────────────────── */

function FullWidthCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.id}`} className="group block col-span-1 sm:col-span-2">
      <article>
        {/* Image — full width, shorter aspect ratio */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="100vw"
            />
          ) : (
            <div className="h-full w-full bg-[#2a1a3a]" />
          )}
        </div>

        {/* Meta: name+industry+tags on left, description on right */}
        <div className="pt-4 pb-2 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
          <div className="flex-shrink-0">
            <h3
              className="font-bold uppercase leading-none text-[#F5F0E8] mb-1 transition-colors group-hover:text-[#C9A84C]"
              style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(16px, 3.5vw, 22px)" }}
            >
              {project.name}
            </h3>
            <p
              className="text-[#F5F0E8]/60 mb-3"
              style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(10px, 2vw, 13px)" }}
            >
              Industry: {project.industry}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>

          {project.sideDescription && (
            <p
              className="text-[#F5F0E8]/70 max-w-xl transition-colors group-hover:text-[#F5F0E8]"
              style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(11px, 2vw, 13px)", lineHeight: 1.65 }}
            >
              {project.sideDescription}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
/* ─── Section ────────────────────────────────────────────────────────────── */

export default function Work() {
  // Separate out the full-width item; render remaining in a 2-col grid
  const topPair = projects.slice(0, 2);       // Kumbaya + Peps
  const motionCard = projects[2];             // Motion Design (full-width)
  const bottomPair = projects.slice(3, 5);   // Tavana + Santhi Textiles

  return (
    <section
      className="relative bg-[#1A0D26] text-[#F5F0E8]"
      style={{
        paddingTop: "clamp(3rem, 7vw, 5.5rem)",
        paddingBottom: "clamp(3rem, 7vw, 5.5rem)",
        paddingLeft: "clamp(1.25rem, 5vw, 4rem)",
        paddingRight: "clamp(1.25rem, 5vw, 4rem)",
      }}
    >
      {/* ── Heading ── */}
      <h2
        className="font-bold uppercase leading-none mb-8 sm:mb-12"
        style={{
          fontFamily: "Oswald, sans-serif",
          fontSize: "clamp(42px, 10vw, 100px)",
          color: "#C9A84C",
          letterSpacing: "-0.01em",
        }}
      >
        WORK
      </h2>

      {/* ── Top 2-col row: Kumbaya + Peps ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
        {topPair.map((project) =>
          project.hasTextCard ? (
            <TextCard key={project.id} project={project} />
          ) : (
            <StandardCard key={project.id} project={project} />
          )
        )}
      </div>

      {/* ── Full-width row: Motion Design ── */}
      <div className="mb-8 sm:mb-10">
        <FullWidthCard project={motionCard} />
      </div>

      {/* ── Bottom 2-col row: Tavana + Santhi Textiles ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {bottomPair.map((project) => (
          <StandardCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
