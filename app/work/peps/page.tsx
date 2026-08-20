import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PEPS | The Woolgatherers",
  description:
    "Content marketing and social media campaigns for PEPS mattresses and sleep products.",
};

const pepsProject: ProjectData = {
  logo: "/images/detailed_page/Peps/peps post.png", // Using the logo/post image as logo
  title: "PEPS",
  industry: "Mattress & Sleep Products",
  tags: ["Content Marketing", "Social Media"],
  heroImage: "/images/detailed_page/Peps/Peps Dream makers playlist.jpg",
  overview:
    "Crafted engaging content marketing campaigns and styled social media presence for PEPS, bringing the concept of premium sleep and dream-making to life with stunning visuals.",
  gallery: [
    "/images/detailed_page/Peps/peps post 2.jpg",
    "/images/detailed_page/Peps/peps post 3.jpg",
    "/images/detailed_page/Peps/peps post 4.1.jpg",
    "/images/detailed_page/Peps/peps post 4.jpg",
    "/images/detailed_page/Peps/peps post 5.jpg",
    "/images/detailed_page/Peps/peps post.png",
    "/images/detailed_page/Peps/peps post 2.jpg",
    "/images/detailed_page/Peps/peps post 3.jpg",
    "/images/detailed_page/Peps/peps post 4.jpg",
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/Kumbaya/DSCF9683.jpg",
      title: "KUMBAYA",
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
      industry: "Food & Beverage (Snacks)",
      tags: ["Brand Building", "Brand Identity"],
    },
  ],
};

export default function PepsPage() {
  return <ProjectTemplate project={pepsProject} />;
}
