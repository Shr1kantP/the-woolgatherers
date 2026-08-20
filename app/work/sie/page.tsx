import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIE | The Woolgatherers",
  description:
    "Brand identity, corporate website design, and marketing collateral for SIE.",
};

const sieProject: ProjectData = {
  logo: "/images/detailed_page/SIE/SIE LOGO 1.JPG",
  title: "SIE",
  industry: "Corporate & Consulting",
  tags: ["Brand Building", "Web Design", "Visual Identity"],
  heroImage: "/images/detailed_page/SIE/SIE WEBSITE 1.png",
  overview:
    "Created a comprehensive brand building program for SIE, encompassing logo design, unique patterns, business cards, stationery design, and an extensive custom website design showcasing their modern corporate presence.",
  gallery: [
    "/images/detailed_page/SIE/SIE BUSINESS ACRD 1.JPG",
    "/images/detailed_page/SIE/SIE BUSINESS ACRD.JPG",
    "/images/detailed_page/SIE/SIE MOCK 2.JPG",
    "/images/detailed_page/SIE/SIE MOCK 3.JPG",
    "/images/detailed_page/SIE/SIE MOCK 4.JPG",
    "/images/detailed_page/SIE/SIE PATTERNS.JPG",
    "/images/detailed_page/SIE/SIE WEBSITE 1.png",
    "/images/detailed_page/SIE/SIE WEBSITE 2.png",
    "/images/detailed_page/SIE/SIE WEBSITE 3.png",
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

export default function SiePage() {
  return <ProjectTemplate project={sieProject} />;
}
