import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SIE Branding | The Woolgatherers",
  description: "Crafted the visual identity for a California-based interior design studio, in collaboration with Siya Golecha.",
};

const sieBrandingProject: ProjectData = {
  logo: "/images/detailed_page/sie_branding/sie-branding-logo.webp",
  title: "STUDIO INSIDE EYE",
  industry: "Interior Design",
  tags: ["Brand Identity"],
  heroImage: "/images/detailed_page/sie_branding/sie-mock-3.jpg",
  overview:
    "Crafted the visual identity for a California-based interior design studio. The identity embraces a contemporary aesthetic while capturing the tactile nature of interior design through thoughtful typography, material-inspired textures, and a refined visual language. Done in collaboration with Siya Golecha.",
  gallery: [
    "/images/detailed_page/sie_branding/sie-logo-2.jpg",
    "/images/detailed_page/sie_branding/sie.jpg",
    "/images/detailed_page/sie_branding/sie-mock-4.jpg",
    "/images/detailed_page/sie_branding/sie-mock-2.jpg",
    "/images/detailed_page/sie_branding/sie-business-acrd-1.jpg",
    "/images/detailed_page/sie_branding/sie-mock-3.jpg",
    "/images/detailed_page/sie_branding/sie-mock.jpg"
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/sie/sie_0.jpg",
      title: "SIE WEBSITE",
      industry: "Interior Design",
      tags: ["Website Design"],
    },
    {
      thumbnail: "/images/detailed_page/tavana/tavana-1.webp",
      title: "TAVANA",
      industry: "Real Estate",
      tags: ["Brand Building", "Identity"],
    }
  ],
};

export default function SieBrandingPage() {
  return <ProjectTemplate project={sieBrandingProject} />;
}
