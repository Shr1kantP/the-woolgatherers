"use client";

import Image from "next/image";

/* ─── Types ──────────────────────────────────────────────────────────────── */

export interface RelatedProject {
  thumbnail: string;
  title: string;
  industry: string;
  tags: string[];
}

export interface ProjectData {
  logo: string;
  title: string;
  industry: string;
  tags: string[];
  heroImage: string;
  overview: string;
  gallery: [string, string, string, string, string, string, string, string, string];
  relatedProjects: [RelatedProject, RelatedProject, RelatedProject];
}

interface ProjectTemplateProps {
  project: ProjectData;
}

/* ─── Pill Badge ─────────────────────────────────────────────────────────── */

function PillBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-[#F5F0E8]/40 px-4 py-[5px] text-[#F5F0E8]"
      style={{ fontFamily: "Inter-Medium, sans-serif", fontSize: "clamp(10px, 1.8vw, 13px)" }}
    >
      {label}
    </span>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function ProjectTemplate({ project }: ProjectTemplateProps) {
  const {
    logo,
    title,
    industry,
    tags,
    heroImage,
    overview,
    gallery,
    relatedProjects,
  } = project;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1A0D26] text-[#F5F0E8]">

      {/* ════════════════════════════════════════════════════════════════════
          HEADER SECTION — 2-column grid ~40/60
          ════════════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] min-h-[70vh] md:min-h-[85vh]">

        {/* ── Left column: text content ── */}
        <div
          className="relative flex flex-col justify-start"
          style={{
            paddingLeft: "clamp(1.25rem, 5vw, 4rem)",
            paddingRight: "clamp(1.25rem, 3vw, 3rem)",
            paddingTop: "clamp(3rem, 7vw, 5.5rem)",
          }}
        >
          {/* Title & Logo inline */}
          <div className="flex items-center gap-6 mt-16 sm:mt-20 md:mt-0 flex-wrap">
            <h1
              className="font-bold uppercase leading-[0.9] tracking-tight text-[#F5F0E8]"
              style={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "clamp(36px, 6vw, 64px)",
              }}
            >
              {title}
            </h1>
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 flex-shrink-0">
              <Image
                src={logo}
                alt={`${title} logo`}
                fill
                className="object-contain"
                sizes="120px"
              />
            </div>
          </div>

          {/* Industry subtitle */}
          <p
            className="mt-3 text-[#F5F0E8]/70"
            style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(13px, 2.2vw, 17px)" }}
          >
            Industry: {industry}
          </p>

          {/* Service tag pill */}
          <div className="mt-5">
            <PillBadge label={tags[0]} />
          </div>
        </div>

        {/* ── Right column: hero image ── */}
        <div
          className="relative w-full flex flex-col justify-start"
          style={{
            paddingTop: "clamp(3rem, 7vw, 5.5rem)",
            paddingRight: "clamp(1.25rem, 5vw, 4rem)",
            paddingLeft: "clamp(1.25rem, 3vw, 3rem)",
          }}
        >
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/2" }}>
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 60vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          PROJECT OVERVIEW ROW — 2-column ~20/80
          ════════════════════════════════════════════════════════════════════ */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4 md:gap-8"
        style={{
          paddingLeft: "clamp(1.25rem, 5vw, 4rem)",
          paddingRight: "clamp(1.25rem, 5vw, 4rem)",
          paddingTop: "clamp(2rem, 5vw, 4rem)",
          paddingBottom: "clamp(2rem, 5vw, 4rem)",
        }}
      >
        <h2
          className="font-bold text-[#F5F0E8]"
          style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(14px, 2.2vw, 18px)" }}
        >
          Project Overview
        </h2>
        <p
          className="italic text-[#F5F0E8]/70 leading-relaxed"
          style={{
            fontFamily: "Instrument Serif, serif",
            fontSize: "clamp(14px, 2.4vw, 20px)",
            lineHeight: 1.65,
          }}
        >
          {overview}
        </p>
      </div>

      {/* Thin full-width divider */}
      <div
        className="w-full h-px bg-[#F5F0E8]/15"
        style={{
          marginLeft: "clamp(1.25rem, 5vw, 4rem)",
          marginRight: "clamp(1.25rem, 5vw, 4rem)",
        }}
      />

      {/* ════════════════════════════════════════════════════════════════════
          GALLERY SECTION — 9-image mosaic grid
          ════════════════════════════════════════════════════════════════════ */}
      <div
        className="max-w-[1200px] mx-auto w-full"
        style={{
          paddingLeft: "clamp(2rem, 10vw, 8rem)",
          paddingRight: "clamp(2rem, 10vw, 8rem)",
          paddingTop: "clamp(2rem, 5vw, 4rem)",
        }}
      >
        <div className="flex flex-col gap-4">

          {/* ── Row 1: 2 equal columns, medium height ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GalleryImage src={gallery[0]} alt={`${title} gallery 1`} aspectRatio="4/3" />
            <GalleryImage src={gallery[1]} alt={`${title} gallery 2`} aspectRatio="4/3" />
          </div>

          {/* ── Row 2: full width, larger height ── */}
          <div className="grid grid-cols-1 gap-4">
            <GalleryImage src={gallery[2]} alt={`${title} gallery 3`} aspectRatio="16/9" />
          </div>

          {/* ── Row 3: 2 equal columns, taller than row 1 ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GalleryImage src={gallery[3]} alt={`${title} gallery 4`} aspectRatio="3/4" />
            <GalleryImage src={gallery[4]} alt={`${title} gallery 5`} aspectRatio="3/4" />
          </div>

          {/* ── Row 4: asymmetric 2×2 mosaic block ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left column: short top (img 6) + tall bottom (img 8) */}
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={gallery[5]}
                  alt={`${title} gallery 6`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
              <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4/5" }}>
                <Image
                  src={gallery[7]}
                  alt={`${title} gallery 8`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right column: tall top (img 7) + short bottom (img 9) */}
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4/5" }}>
                <Image
                  src={gallery[6]}
                  alt={`${title} gallery 7`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
              <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={gallery[8]}
                  alt={`${title} gallery 9`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          RELATED PROJECTS SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <div
        className="max-w-[1200px] mx-auto w-full"
        style={{
          paddingLeft: "clamp(2rem, 10vw, 8rem)",
          paddingRight: "clamp(2rem, 10vw, 8rem)",
          paddingTop: "clamp(3rem, 7vw, 5.5rem)",
          paddingBottom: "clamp(3rem, 7vw, 5.5rem)",
        }}
      >
        <h2
          className="font-bold text-[#F5F0E8] mb-8"
          style={{
            fontFamily: "Futura, sans-serif",
            fontSize: "clamp(18px, 3vw, 28px)",
          }}
        >
          Related Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {relatedProjects.map((rp) => (
            <article key={rp.title} className="flex flex-col">
              {/* Thumbnail */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={rp.thumbnail}
                  alt={rp.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
              </div>

              {/* Meta */}
              <div className="pt-4 pb-2">
                <h3
                  className="font-bold uppercase leading-none text-[#F5F0E8] mb-1"
                  style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(14px, 2.5vw, 18px)" }}
                >
                  {rp.title}
                </h3>
                <p
                  className="text-[#F5F0E8]/60 mb-3"
                  style={{ fontFamily: "Futura, sans-serif", fontSize: "clamp(10px, 1.8vw, 12px)" }}
                >
                  Industry: {rp.industry}
                </p>
                <div className="flex flex-wrap gap-2">
                  {rp.tags.map((t) => (
                    <PillBadge key={t} label={t} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}

/* ─── Gallery Image helper ───────────────────────────────────────────────── */

function GalleryImage({
  src,
  alt,
  aspectRatio,
}: {
  src: string;
  alt: string;
  aspectRatio: string;
}) {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 767px) 100vw, 50vw"
      />
    </div>
  );
}
