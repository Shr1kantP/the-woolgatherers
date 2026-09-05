import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wingreens | The Woolgatherers",
  description:
    "Brand building and packaging design for Wingreens Food & Beverage portfolio.",
};

const wingreensProject: ProjectData = {
  logo: "/images/Guests/wingreens.png",
  title: "WINGREENS",
  industry: "Food & Beverage (Snacks)",
  tags: ["Brand Building", "Brand Identity"],
  heroImage: "/images/detailed_page/Wingreens/wingreens 3.jpg",
  overview:
    "Evolved and unified Wingreens' brand presence, designing vibrant packaging, marketing material, and digital campaigns that reflect their passion for healthy, flavorful food and snacks.",
  gallery: [
    "/images/detailed_page/Wingreens/wingreens 3.jpg",
    "/images/detailed_page/Wingreens/wingreens 4.jpg",
    "/images/detailed_page/Wingreens/wingreen 4.jpg",
    "/images/detailed_page/Wingreens/wingreens gluten.png",
    "/images/detailed_page/Wingreens/wingreens.png",
    "/images/detailed_page/Wingreens/wingrrens.jpg",
    "/images/detailed_page/Wingreens/wingreens 3.jpg",
    "/images/detailed_page/Wingreens/wingreens 4.jpg",
    "/images/detailed_page/Wingreens/wingreens.png",
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/Kumbaya/DSCF9683.jpg",
      title: "KUMBAYA",
      industry: "Food & Beverage (Kombucha)",
      tags: ["Packaging", "Content Production", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/Peps/Peps Dream makers playlist.jpg",
      title: "PEPS",
      industry: "Mattress & Sleep Products",
      tags: ["Content Marketing", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg",
      title: "MTR FOODS",
      industry: "Food & Beverage",
      tags: ["Photography & Video Production"],
    },
  ],
};

export default function WingreensPage() {
  return <ProjectTemplate project={wingreensProject} />;
}
