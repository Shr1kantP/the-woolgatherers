import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tavana | The Woolgatherers",
  description:
    "Developed the brand strategy and visual identity for a contemporary real estate company.",
};

const tavanaProject: ProjectData = {
  logo: "/images/detailed_page/tavana/tavana-1.webp",
  title: "TAVANAM",
  industry: "Real Estate",
  tags: ["Brand Building", "Identity"],
  heroImage: "/images/detailed_page/tavana/tavana-1.webp",
  overview:
    "Developed the brand strategy and visual identity for a contemporary real estate company. From defining the brand's positioning to crafting a cohesive visual system, the project established a modern, credible, and distinctive presence across every touchpoint.",
  gallery: [
    "/images/detailed_page/tavana/tavana-3.webp",
    "/images/detailed_page/tavana/tavana-4.webp",
    "/images/detailed_page/tavana/tavana-5.webp",
    "/images/detailed_page/tavana/tavana-6.webp",
    "/images/detailed_page/tavana/tavana-1.webp",
    /* "/images/detailed_page/tavana/tavana-3.webp",
    "/images/detailed_page/tavana/tavana-4.webp",
    "/images/detailed_page/tavana/tavana-5.webp", */
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/kumbaya/kumbayah-packaging-main.webp",
      title: "KUMABAYA",
      industry: "Food & Beverage (Kombucha)",
      tags: ["Packaging", "Content Production", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/peps/peps-dream-makers-playlist.jpg",
      title: "PEPS",
      industry: "Mattress & Sleep Products",
      tags: ["Content Marketing", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/mtr/mtr-couple-dining-1.jpg",
      title: "MTR FOODS",
      industry: "Food & Beverage",
      tags: ["Photography & Video Production"],
    },
  ],
};

export default function TavanaPage() {
  return <ProjectTemplate project={tavanaProject} />;
}
