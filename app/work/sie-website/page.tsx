import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIE Website | The Woolgatherers",
  description: "A deep dive into the digital presence crafted for Studio Inside Eye.",
};

const sieWebsiteProject: ProjectData = {
  logo: "/images/detailed_page/SIE/SIE LOGO 1.JPG",
  title: "SIE WEBSITE",
  industry: "Web Design & Development",
  tags: ["Web Design", "UI/UX", "Digital Experience"],
  heroImage: "/images/detailed_page/SIE/SIE WEBSITE 4.png",
  overview:
    "A deep dive into the digital presence crafted for Studio Inside Eye, blending structured aesthetics with immersive web experiences.",
  gallery: [
    "/images/detailed_page/SIE/SIE WEBSITE 1.png",
    "/images/detailed_page/SIE/SIE WEBSITE 2.png",
    "/images/detailed_page/SIE/SIE WEBSITE 3.png",
    "/images/detailed_page/SIE/SIE 8.png"
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
