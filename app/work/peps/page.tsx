import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PEPS | The Woolgatherers",
  description:
    "Content marketing and social media campaigns for PEPS mattresses and sleep products.",
};

const pepsProject: ProjectData = {
  logo: "/images/Guests/peps.png",
  title: "PEPS",
  industry: "Mattress & Sleep Products",
  tags: ["Content Marketing", "Social Media"],
  heroImage: "/images/detailed_page/Peps/peps post 5.jpg",
  overview:
    "Developed and managed social media content that helped distinguish the brand within a highly competitive category. The strategy balanced product communication with culture-first storytelling, introducing recurring content formats such as weekly playlists and other engagement-driven series that extended the brand beyond conventional product marketing.",
  gallery: [
    "/images/detailed_page/Peps/peps post 2.jpg",
    "/images/detailed_page/Peps/peps post 3.jpg",
    "/images/detailed_page/Peps/peps post 4.1.jpg",
    "/images/detailed_page/Peps/peps_vid_1.mp4",
    "/images/detailed_page/Peps/peps post.png",
    "/images/detailed_page/Peps/peps post 4.jpg",
    "/images/detailed_page/Peps/peps_vid_2.mp4",
    "/images/detailed_page/Peps/peps post 3.jpg",
    "/images/detailed_page/Peps/peps post 5.jpg",
  ],
  galleryLayout: "masonry" as any,
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/Kumbaya/kumbayah packaging main.png",
      title: "KUMABAYA",
      industry: "Food & Beverage (Kombucha)",
      tags: ["Packaging", "Content Production", "Social Media"],
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
      industry: "Food & Beverage",
      tags: ["Content Production"],
    },
  ],
};

export default function PepsPage() {
  return <ProjectTemplate project={pepsProject} />;
}
