import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cureveda | The Woolgatherers",
  description:
    "Content production and brand communication for Cureveda's wellness range.",
};

const curevedaProject: ProjectData = {
  logo: "/images/Guests/cureveda.png",
  title: "CUREVEDA",
  industry: "Wellness & Personal Care",
  tags: ["Content Production", "Brand Communication"],
  heroImage: "/images/detailed_page/Cureveda/cureveda_1.jpg",
  overview:
    "Created a warm, tactile visual story for Cureveda's wellness products, combining product imagery and motion-led content to communicate everyday rituals of care and natural living.",
  gallery: [
    "/images/detailed_page/Cureveda/cureveda_1.jpg",
    "/images/detailed_page/Cureveda/cureveda_vid.mp4",
    "/images/detailed_page/Cureveda/cureveda_2.jpg",
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/Vahdam/vahdam_1.jpg",
      title: "VAHDAM",
      industry: "Food & Beverage (Tea)",
      tags: ["Content Production", "Brand Communication"],
    },
    {
      thumbnail: "/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg",
      title: "MTR FOODS",
      industry: "Food & Beverage",
      tags: ["Photography & Video Production"],
    },
    {
      thumbnail: "/images/detailed_page/Wingreens/wingreens 3.jpg",
      title: "WINGREENS",
      industry: "Food & Beverage (Snacks)",
      tags: ["Brand Building", "Brand Identity"],
    },
  ],
};

export default function CurevedaPage() {
  return <ProjectTemplate project={curevedaProject} />;
}
