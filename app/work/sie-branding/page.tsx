import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIE Branding | The Woolgatherers",
  description: "A comprehensive look at the visual identity and brand architecture built for Studio Inside Eye.",
};

const sieBrandingProject: ProjectData = {
  logo: "/images/detailed_page/SIE_BRANDING/SIE LOGO 2.JPG",
  title: "SIE BRANDING",
  industry: "Design & Visual Identity",
  tags: ["Brand Building", "Brand Identity", "Design"],
  heroImage: "/images/detailed_page/SIE_BRANDING/SIE MOCK 3.JPG",
  overview:
    "A comprehensive look at the visual identity and brand architecture built for Studio Inside Eye.",
  gallery: [
    "/images/detailed_page/SIE_BRANDING/SIE MOCK 4.JPG",
    "/images/detailed_page/SIE_BRANDING/SIE MOCK 2.JPG",
    "/images/detailed_page/SIE_BRANDING/SIE BUSINESS ACRD 1.JPG"
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/SIE/SIE 8.png",
      title: "SIE WEBSITE",
      industry: "Web Design & Development",
      tags: ["Web Design", "UI/UX", "Digital Experience"],
    },
    {
      thumbnail: "/images/detailed_page/Tavana/tavana 1.png",
      title: "TAVANA",
      industry: "Architecture & Real Estate",
      tags: ["Brand Building", "Brand Identity"],
    }
  ],
};

export default function SieBrandingPage() {
  return <ProjectTemplate project={sieBrandingProject} />;
}
