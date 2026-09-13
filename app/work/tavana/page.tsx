import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
import { blob } from "@/app/lib/blob";

export const metadata: Metadata = {
  title: "Tavana | The Woolgatherers",
  description:
    "Developed the brand strategy and visual identity for a contemporary real estate company.",
};

const tavanaProject: ProjectData = {
  logo: blob("/images/detailed_page/Tavana/tavana 1.webp"),
  title: "TAVANAM",
  industry: "Real Estate",
  tags: ["Brand Building", "Identity"],
  heroImage: blob("/images/detailed_page/Tavana/tavana 1.webp"),
  overview:
    "Developed the brand strategy and visual identity for a contemporary real estate company. From defining the brand's positioning to crafting a cohesive visual system, the project established a modern, credible, and distinctive presence across every touchpoint.",
  gallery: [
    blob("/images/detailed_page/Tavana/tavana 3.webp"),
    blob("/images/detailed_page/Tavana/tavana 4.webp"),
    blob("/images/detailed_page/Tavana/tavana 5.webp"),
    blob("/images/detailed_page/Tavana/tavana 6.webp"),
    blob("/images/detailed_page/Tavana/tavana 1.webp"),
    /* blob("/images/detailed_page/Tavana/tavana 3.webp"),
    blob("/images/detailed_page/Tavana/tavana 4.webp"),
    blob("/images/detailed_page/Tavana/tavana 5.webp"), */
  ],
  relatedProjects: [
    {
      thumbnail: blob("/images/detailed_page/Kumbaya/kumbayah packaging main.webp"),
      title: "KUMABAYA",
      industry: "Food & Beverage (Kombucha)",
      tags: ["Packaging", "Content Production", "Social Media"],
    },
    {
      thumbnail: blob("/images/detailed_page/Peps/Peps Dream makers playlist.jpg"),
      title: "PEPS",
      industry: "Mattress & Sleep Products",
      tags: ["Content Marketing", "Social Media"],
    },
    {
      thumbnail: blob("/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg"),
      title: "MTR FOODS",
      industry: "Food & Beverage",
      tags: ["Photography & Video Production"],
    },
  ],
};

export default function TavanaPage() {
  return <ProjectTemplate project={tavanaProject} />;
}
