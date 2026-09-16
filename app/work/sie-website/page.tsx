import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SIE Website | The Woolgatherers",
  description: "Designed an interactive website for Studio Inside Eye featuring a Canvas Moodboard Generator.",
};

const sieWebsiteProject: ProjectData = {
  logo: "/images/detailed_page/sie/sie-website-logo.webp",
  title: "SIE WEBSITE",
  industry: "Interior Design",
  tags: ["Website Design"],
  heroImage: "/images/detailed_page/sie/sie-web-thumbnail.jpeg",
  overview:
    "Designed an interactive website that extends the studio's identity into a digital experience. A key feature is the Canvas Moodboard Generator, allowing visitors to create their own moodboards or explore curated design styles to better understand the studio's aesthetic and approach.",
  gallery: [
    "/images/detailed_page/sie/siewebsite1.webp",
    "/images/detailed_page/sie/siewebsite2.webp",
    "/images/detailed_page/sie/siewebsite3.webp",
    "/images/detailed_page/sie/siewebsite4.webp",
    "/images/detailed_page/sie/siewebsite0.webp",
    "/images/detailed_page/sie/siewebsite00.webp",
    "/images/detailed_page/sie/sie_0.jpg",
    "/images/detailed_page/sie/sie_8.webp",
    "/images/detailed_page/sie/siebusinessacrd.jpg",
    "/images/detailed_page/sie/sielogo1.jpg",
    "/images/detailed_page/sie/siepatterns.jpg",
  ],
  galleryLayout: "sie-website",
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/sie_branding/sie-mock-3.jpg",
      title: "SIE BRANDING",
      industry: "Interior Design",
      tags: ["Brand Identity"],
    },
    {
      thumbnail: "/images/detailed_page/tavana/tavana-1.webp",
      title: "TAVANA",
      industry: "Real Estate",
      tags: ["Brand Building", "Identity"],
    }
  ],
};

export default function SieWebsitePage() {
  return <ProjectTemplate project={sieWebsiteProject} />;
}
