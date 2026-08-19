import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kumbaya | The Woolgatherers",
  description:
    "Packaging design, content production, and social media styling for Kumbaya Kombucha.",
};

const kumbayaProject: ProjectData = {
  logo: "/images/Guests/Ellipse 45.png",
  title: "KUMBAYA",
  industry: "Food & Beverage (Kombucha)",
  tags: ["Packaging", "Content Production", "Social Media"],
  heroImage: "/images/detailed_page/Kumbaya/DSCF9683.jpg",
  overview:
    "Created eye-catching packaging design, styling, and premium content assets for Kumbaya's refreshing range of Kombucha, elevating their presence across social media channels and retail shelves.",
  gallery: [
    "/images/detailed_page/Kumbaya/kumbayah packaging main.png",
    "/images/detailed_page/Kumbaya/kumbayah packaging.png",
    "/images/detailed_page/Kumbaya/DSCF9683.jpg",
    "/images/detailed_page/Kumbaya/kumbaya social.png",
    "/images/detailed_page/Kumbaya/kumbaya social 2.jpg",
    "/images/detailed_page/Kumbaya/kumbaya social 3.jpg",
    "/images/detailed_page/Kumbaya/DSCF9683.jpg",
    "/images/detailed_page/Kumbaya/kumbayah packaging.png",
    "/images/detailed_page/Kumbaya/kumbaya social 2.jpg",
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg",
      title: "MTR FOODS",
      industry: "Food & Beverage",
      tags: ["Photography & Video Production"],
    },
    {
      thumbnail: "/images/detailed_page/Peps/Peps Dream makers playlist.jpg",
      title: "PEPS",
      industry: "Mattress & Sleep Products",
      tags: ["Content Marketing", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/Wingreens/wingreens 3.jpg",
      title: "WINGREENS",
      industry: "Food & Beverage (Snacks)",
      tags: ["Brand Building", "Brand Identity"],
    },
  ],
};

export default function KumbayaPage() {
  return <ProjectTemplate project={kumbayaProject} />;
}
