"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { blob } from "@/app/lib/blob";

/* ─── Lazy video — only loads + plays when near viewport ─────────────────── */

function LazyVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          void el.play().catch(() => undefined);
          obs.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={active ? src : undefined}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      aria-label="Project video"
    />
  );
}

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
    name: "KUMABAYAH",
    industry: "Food & Beverage (Kombucha)",
    tags: ["Packaging", "Content Production", "Social Media"],
    image: blob("/images/detailed_page/Kumbaya/kumbayah packaging main.webp"),
    hasTextCard: false,
  },
  {
    id: "peps",
    name: "PEPS",
    industry: "Mattress & Sleep Products",
    tags: ["Content Marketing", "Social Media"],
    image: blob("/images/detailed_page/Peps/peps post 5.jpg"),
  },
  {
    id: "motion",
    name: "MOTION DESIGN",
    industry: "Cross-Industry",
    tags: ["Motion Graphics", "Brand Films", "Animation"],
    image: blob("/images/detailed_page/Santhi/santhi_motion.mp4"),
    fullWidth: true,
    sideDescription:
      "A curated body of motion work created for brands across textiles, FMCG, food, and lifestyle. Combining animation, typography, transitions, and storytelling to elevate presentations, corporate films, product launches, and digital campaigns.",
  },
  {
    id: "mtr-foods",
    name: "MTR FOODS",
    industry: "Food & Beverage",
    tags: ["Photography & Video Production"],
    image: blob("/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg"),
  },
  {
    id: "wingreens",
    name: "WINGREENS",
    industry: "Food & Beverage (Snacks)",
    tags: ["Brand Building", "Brand Identity"],
    image: blob("/images/detailed_page/Wingreens/wingreens 3.jpg"),
  },
  {
    id: "cureveda",
    name: "CUREVEDA",
    industry: "Wellness & Personal Care",
    tags: ["Content Production", "Brand Communication"],
    image: blob("/images/detailed_page/cureveda/cureveda_1.jpg"),
  },
  {
    id: "vahdam",
    name: "VAHDAM",
    industry: "Food & Beverage (Tea)",
    tags: ["Content Production", "Brand Communication"],
    image: blob("/images/detailed_page/Vahdam/vahdam_1.jpg"),
  },
  {
    id: "tavana",
    name: "TAVANAM",
    industry: "Architecture & Real Estate",
    tags: ["Brand Building", "Brand Identity"],
    image: blob("/images/detailed_page/Tavana/tavana 1.webp"),
  },
  {
    id: "santhi",
    name: "SANTHI TEXTILES",
    industry: "Textiles & Fabrics",
    tags: ["Brand Communication", "Corporate Films", "Motion Design"],
    image: blob("/images/detailed_page/Santhi/santhi_5.jpg"),
  },
  {
    id: "sie-branding",
    name: "SIE BRANDING",
    industry: "Design & Visual Identity",
    tags: ["Brand Building", "Brand Identity", "Design"],
    image: blob("/images/detailed_page/SIE_BRANDING/SIE MOCK 3.JPG"),
  },
  {
    id: "sie-website",
    name: "SIE WEBSITE",
    industry: "Web Design & Development",
    tags: ["Web Design", "UI/UX", "Digital Experience"],
    image: blob("/images/detailed_page/SIE/SIE_8.webp"),
  },
];

/* ─── Tag pill ───────────────────────────────────────────────────────────── */

function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-[#d6dee9]/40 px-3 py-[3px] text-[#d6dee9]"
      style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(9px, 1.8vw, 11px)" }}
    >
      {label}
    </span>
  );
}

/* ─── Standard card (photo top, meta bottom) ─────────────────────────────── */

function StandardCard({ project }: { project: Project }) {
  const cardContent = (
    <article className="flex flex-col h-full" style={{ contentVisibility: "auto", containIntrinsicSize: "0 420px" }}>
      {/* Photo */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            loading="lazy"
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
          className="font-bold uppercase leading-none text-[#d6dee9] mb-1 transition-colors group-hover:text-[#C9A84C]"
          style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(16px, 3.5vw, 22px)" }}
        >
          {project.name}
        </h3>
        <p
          className="text-[#d6dee9]/60 mb-3"
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
      <article className="flex flex-col" style={{ contentVisibility: "auto", containIntrinsicSize: "0 420px" }}>
        {/* Cream box mimicking the design screenshot */}
        <div
          className="relative w-full flex flex-col justify-between p-6 sm:p-8"
          style={{ aspectRatio: "4/3", background: "#d6dee9" }}
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
              className="text-[#1D0121] text-center"
              style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(11px, 2.2vw, 13px)", lineHeight: 1.65 }}
            >
              <p>{project.description}</p>
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="pt-4 pb-2">
          <h3
            className="font-bold uppercase leading-none text-[#d6dee9] mb-1 transition-colors group-hover:text-[#C9A84C]"
            style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(16px, 3.5vw, 22px)" }}
          >
            {project.name}
          </h3>
          <p
            className="text-[#d6dee9]/60 mb-3"
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
      <article style={{ contentVisibility: "auto", containIntrinsicSize: "0 360px" }}>
        {/* Image — full width, shorter aspect ratio */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
          {project.image ? (
            /\.(mp4|webm|ogg|mov)$/i.test(project.image) ? (
              <LazyVideo
                src={project.image}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.name}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="100vw"
              />
            )
          ) : (
            <div className="h-full w-full bg-[#2a1a3a]" />
          )}
        </div>

        {/* Meta: name+industry+tags on left, description on right */}
        <div className="pt-4 pb-2 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
          <div className="flex-shrink-0">
            <h3
              className="font-bold uppercase leading-none text-[#d6dee9] mb-1 transition-colors group-hover:text-[#C9A84C]"
              style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(16px, 3.5vw, 22px)" }}
            >
              {project.name}
            </h3>
            <p
              className="text-[#d6dee9]/60 mb-3"
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
              className="text-[#d6dee9]/70 max-w-xl transition-colors group-hover:text-[#d6dee9]"
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
  const topPair = projects.slice(0, 2);       // Kumbaya + Peps
  const motionCard = projects[2];             // Motion Design (full-width)
  const restProjects = projects.slice(3);     // All remaining projects

  return (
    <section
      className="relative bg-[#1D0121] text-[#d6dee9]"
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

      {/* ── Bottom rows: Remaining projects ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {restProjects.map((project) => (
          <StandardCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
