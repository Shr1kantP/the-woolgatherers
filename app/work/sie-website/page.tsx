import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIE Website | The Woolgatherers",
  description: "A deep dive into the digital presence crafted for Studio Inside Eye.",
};

const sieWebsiteProject: ProjectData = {
  logo: "/images/detailed_page/SIE/SIELOGO1.JPG",
  title: "SIE WEBSITE",
  industry: "Web Design & Development",
  tags: ["Web Design", "UI/UX", "Digital Experience"],
  heroImage: "/images/detailed_page/SIE/SIELOGO1.JPG",
  overview:
    "A deep dive into the digital presence crafted for Studio Inside Eye, blending structured aesthetics with immersive web experiences.",
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
    "/images/detailed_page/SIE/SIEPATTERNS.JPG"
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/SIE_BRANDING/SIE MOCK 3.JPG",
      title: "SIE BRANDING",
      industry: "Design & Visual Identity",
      tags: ["Brand Building", "Brand Identity"],
    },
    {
      thumbnail: "/images/detailed_page/Tavana/tavana 1.png",
      title: "TAVANA",
      industry: "Architecture & Real Estate",
      tags: ["Brand Building", "Brand Identity"],
    }
  ],
};

export default function SieWebsitePage() {
  return <ProjectTemplate project={sieWebsiteProject} />;
}
