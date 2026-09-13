import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
import { blob } from "@/app/lib/blob";

export const metadata: Metadata = {
  title: "SIE Branding | The Woolgatherers",
  description: "Crafted the visual identity for a California-based interior design studio, in collaboration with Siya Golecha.",
};

const sieBrandingProject: ProjectData = {
  logo: blob("/images/detailed_page/SIE_BRANDING/SIE-branding-logo.webp"),
  title: "STUDIO INSIDE EYE",
  industry: "Interior Design",
  tags: ["Brand Identity"],
  heroImage: blob("/images/detailed_page/SIE_BRANDING/SIE MOCK 3.JPG"),
  overview:
    "Crafted the visual identity for a California-based interior design studio. The identity embraces a contemporary aesthetic while capturing the tactile nature of interior design through thoughtful typography, material-inspired textures, and a refined visual language. Done in collaboration with Siya Golecha.",
  gallery: [
    blob("/images/detailed_page/SIE_BRANDING/SIE LOGO 2.JPG"),
    blob("/images/detailed_page/SIE_BRANDING/SIE.JPG"),
    blob("/images/detailed_page/SIE_BRANDING/SIE MOCK 4.JPG"),
    blob("/images/detailed_page/SIE_BRANDING/SIE MOCK 2.JPG"),
    blob("/images/detailed_page/SIE_BRANDING/SIE BUSINESS ACRD 1.JPG"),
    blob("/images/detailed_page/SIE_BRANDING/SIE MOCK 3.JPG"),
    blob("/images/detailed_page/SIE_BRANDING/SIE MOCK.JPG")
  ],
  relatedProjects: [
    {
      thumbnail: blob("/images/detailed_page/SIE/SIE_0.JPG"),
      title: "SIE WEBSITE",
      industry: "Interior Design",
      tags: ["Website Design"],
    },
    {
      thumbnail: blob("/images/detailed_page/Tavana/tavana 1.webp"),
      title: "TAVANA",
      industry: "Real Estate",
      tags: ["Brand Building", "Identity"],
    }
  ],
};

export default function SieBrandingPage() {
  return <ProjectTemplate project={sieBrandingProject} />;
}
