import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tavana | The Woolgatherers",
  description:
    "Brand building and identity development for Tavana architecture and real estate.",
};

const tavanaProject: ProjectData = {
  logo: "/images/detailed_page/Tavana/tavana 1.png",
  title: "TAVANA",
  industry: "Architecture & Real Estate",
  tags: ["Brand Building", "Brand Identity"],
  heroImage: "/images/detailed_page/Tavana/tavana 1.png",
  overview:
    "Developed a cohesive brand building strategy and custom brand identity for Tavana, mirroring their architectural sophistication and structural elegance across modern real estate layouts.",
  gallery: [
    "/images/detailed_page/Tavana/tavana 1.png",
    "/images/detailed_page/Tavana/tavana 3.png",
    "/images/detailed_page/Tavana/tavana 4.png",
    "/images/detailed_page/Tavana/tavana 5.png",
    "/images/detailed_page/Tavana/tavana 6.png",
    "/images/detailed_page/Tavana/tavana 1.png",
    /* "/images/detailed_page/Tavana/tavana 3.png",
    "/images/detailed_page/Tavana/tavana 4.png",
    "/images/detailed_page/Tavana/tavana 5.png", */
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

export default function TavanaPage() {
  return <ProjectTemplate project={tavanaProject} />;
}
