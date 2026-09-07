import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIE Website | The Woolgatherers",
  description: "Designed an interactive website for Studio Inside Eye featuring a Canvas Moodboard Generator.",
};

const sieWebsiteProject: ProjectData = {
  logo: "/images/detailed_page/SIE/SIELOGO1.JPG",
  title: "SIE WEBSITE",
  industry: "Interior Design",
  tags: ["Website Design"],
  heroImage: "/images/detailed_page/SIE/sie-web-thumbnail.jpeg",
  overview:
    "Designed an interactive website that extends the studio's identity into a digital experience. A key feature is the Canvas Moodboard Generator, allowing visitors to create their own moodboards or explore curated design styles to better understand the studio's aesthetic and approach.",
  gallery: [
    "/images/detailed_page/SIE/SIEWEBSITE1.png",
    "/images/detailed_page/SIE/SIEWEBSITE2.png",
    "/images/detailed_page/SIE/SIEWEBSITE3.png",
    "/images/detailed_page/SIE/SIEWEBSITE4.png",
    "/images/detailed_page/SIE/SIEWEBSITE0.png",
    "/images/detailed_page/SIE/SIEWEBSITE00.png",
    "/images/detailed_page/SIE/SIE_0.JPG",
    "/images/detailed_page/SIE/SIE_8.png",
    "/images/detailed_page/SIE/SIEBUSINESSACRD.JPG",
    "/images/detailed_page/SIE/SIELOGO1.JPG",
    "/images/detailed_page/SIE/SIEPATTERNS.JPG",
  ],
  galleryLayout: "sie-website",
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/SIE_BRANDING/SIE MOCK 3.JPG",
      title: "SIE BRANDING",
      industry: "Interior Design",
      tags: ["Brand Identity"],
    },
    {
      thumbnail: "/images/detailed_page/Tavana/tavana 1.png",
      title: "TAVANA",
      industry: "Real Estate",
      tags: ["Brand Building", "Identity"],
    }
  ],
};

export default function SieWebsitePage() {
  return <ProjectTemplate project={sieWebsiteProject} />;
}
