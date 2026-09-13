import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
import { blob } from "@/app/lib/blob";

export const metadata: Metadata = {
  title: "SIE Website | The Woolgatherers",
  description: "Designed an interactive website for Studio Inside Eye featuring a Canvas Moodboard Generator.",
};

const sieWebsiteProject: ProjectData = {
  logo: blob("/images/detailed_page/SIE/SIE-Website-logo.webp"),
  title: "SIE WEBSITE",
  industry: "Interior Design",
  tags: ["Website Design"],
  heroImage: blob("/images/detailed_page/SIE/sie-web-thumbnail.jpeg"),
  overview:
    "Designed an interactive website that extends the studio's identity into a digital experience. A key feature is the Canvas Moodboard Generator, allowing visitors to create their own moodboards or explore curated design styles to better understand the studio's aesthetic and approach.",
  gallery: [
    blob("/images/detailed_page/SIE/SIEWEBSITE1.webp"),
    blob("/images/detailed_page/SIE/SIEWEBSITE2.webp"),
    blob("/images/detailed_page/SIE/SIEWEBSITE3.webp"),
    blob("/images/detailed_page/SIE/SIEWEBSITE4.webp"),
    blob("/images/detailed_page/SIE/SIEWEBSITE0.webp"),
    blob("/images/detailed_page/SIE/SIEWEBSITE00.webp"),
    blob("/images/detailed_page/SIE/SIE_0.JPG"),
    blob("/images/detailed_page/SIE/SIE_8.webp"),
    blob("/images/detailed_page/SIE/SIEBUSINESSACRD.JPG"),
    blob("/images/detailed_page/SIE/SIELOGO1.JPG"),
    blob("/images/detailed_page/SIE/SIEPATTERNS.JPG"),
  ],
  galleryLayout: "sie-website",
  relatedProjects: [
    {
      thumbnail: blob("/images/detailed_page/SIE_BRANDING/SIE MOCK 3.JPG"),
      title: "SIE BRANDING",
      industry: "Interior Design",
      tags: ["Brand Identity"],
    },
    {
      thumbnail: blob("/images/detailed_page/Tavana/tavana 1.webp"),
      title: "TAVANA",
      industry: "Real Estate",
      tags: ["Brand Building", "Identity"],
    }
  ],
};

export default function SieWebsitePage() {
  return <ProjectTemplate project={sieWebsiteProject} />;
}
