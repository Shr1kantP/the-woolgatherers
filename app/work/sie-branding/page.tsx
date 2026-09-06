import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIE Branding | The Woolgatherers",
  description: "Crafted the visual identity for a California-based interior design studio, in collaboration with Siya Golecha.",
};

const sieBrandingProject: ProjectData = {
  logo: "/images/detailed_page/SIE_BRANDING/SIE LOGO 2.JPG",
  title: "STUDIO INSIDE EYE",
  industry: "Interior Design",
  tags: ["Brand Identity"],
  heroImage: "/images/detailed_page/SIE_BRANDING/SIE MOCK 3.JPG",
  overview:
    "Crafted the visual identity for a California-based interior design studio. The identity embraces a contemporary aesthetic while capturing the tactile nature of interior design through thoughtful typography, material-inspired textures, and a refined visual language. Done in collaboration with Siya Golecha.",
  gallery: [
    "/images/detailed_page/SIE_BRANDING/SIE LOGO 2.JPG",
    "/images/detailed_page/SIE_BRANDING/SIE.JPG",
    "/images/detailed_page/SIE_BRANDING/SIE MOCK 4.JPG",
    "/images/detailed_page/SIE_BRANDING/SIE MOCK 2.JPG",
    "/images/detailed_page/SIE_BRANDING/SIE BUSINESS ACRD 1.JPG",
    "/images/detailed_page/SIE_BRANDING/SIE MOCK 3.JPG",
    "/images/detailed_page/SIE_BRANDING/SIE MOCK.JPG"
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/SIE/SIE_0.JPG",
      title: "SIE WEBSITE",
      industry: "Interior Design",
      tags: ["Website Design"],
    },
    {
      thumbnail: "/images/detailed_page/Tavana/tavana 1.png",
      title: "TAVANA",
      industry: "Real Estate",
      tags: ["Brand Building", "Identity"],
    }
  ],
};

export default function SieBrandingPage() {
  return <ProjectTemplate project={sieBrandingProject} />;
}
