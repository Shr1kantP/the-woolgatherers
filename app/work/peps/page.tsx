import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
import { blob } from "@/app/lib/blob";

export const metadata: Metadata = {
  title: "PEPS | The Woolgatherers",
  description:
    "Content marketing and social media campaigns for PEPS mattresses and sleep products.",
};

const pepsProject: ProjectData = {
  logo: blob("/images/Guests/peps.webp"),
  title: "PEPS",
  industry: "Mattress & Sleep Products",
  tags: ["Content Marketing", "Social Media"],
  heroImage: blob("/images/detailed_page/Peps/peps post 5.jpg"),
  overview:
    "Developed and managed social media content that helped distinguish the brand within a highly competitive category. The strategy balanced product communication with culture-first storytelling, introducing recurring content formats such as weekly playlists and other engagement-driven series that extended the brand beyond conventional product marketing.",
  gallery: [
    blob("/images/detailed_page/Peps/peps post 2.jpg"),
    blob("/images/detailed_page/Peps/peps post 3.jpg"),
    blob("/images/detailed_page/Peps/peps post 4.1.jpg"),
    blob("/images/detailed_page/Peps/peps_vid_1.mp4"),
    blob("/images/detailed_page/Peps/peps post.webp"),
    blob("/images/detailed_page/Peps/peps post 4.jpg"),
    blob("/images/detailed_page/Peps/peps_vid_2.mp4"),
    blob("/images/detailed_page/Peps/peps post 3.jpg"),
    blob("/images/detailed_page/Peps/peps post 5.jpg"),
  ],
  galleryLayout: "masonry" as any,
  relatedProjects: [
    {
      thumbnail: blob("/images/detailed_page/Kumbaya/kumbayah packaging main.webp"),
      title: "KUMABAYA",
      industry: "Food & Beverage (Kombucha)",
      tags: ["Packaging", "Content Production", "Social Media"],
    },
    {
      thumbnail: blob("/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg"),
      title: "MTR FOODS",
      industry: "Food & Beverage",
      tags: ["Photography & Video Production"],
    },
    {
      thumbnail: blob("/images/detailed_page/Wingreens/wingreens 3.jpg"),
      title: "WINGREENS",
      industry: "Food & Beverage",
      tags: ["Content Production"],
    },
  ],
};

export default function PepsPage() {
  return <ProjectTemplate project={pepsProject} />;
}
