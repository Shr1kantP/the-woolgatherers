import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Santhi Textiles | The Woolgatherers",
  description:
    "Brand communication, corporate films, and motion design for Santhi Textiles.",
};

const santhiProject: ProjectData = {
  logo: "/images/detailed_page/Wingreens/wingreens 3.jpg", // Using main thumbnail/logo placeholder
  title: "SANTHI TEXTILES",
  industry: "Textiles & Fabrics",
  tags: ["Brand Communication", "Corporate Films", "Motion Design"],
  heroImage: "/images/detailed_page/Wingreens/wingreens 3.jpg",
  overview:
    "Directed custom corporate films, motion design, and brand communication strategies for Santhi Textiles, highlighting their craftsmanship, heritage, and manufacturing prowess in the global fabric markets.",
  gallery: [
    "/images/detailed_page/Wingreens/wingreens 3.jpg",
    "/images/detailed_page/Wingreens/wingreens 4.jpg",
    "/images/detailed_page/Wingreens/wingreen 4.jpg",
    "/images/detailed_page/MTR/MTR 2.jpg",
    "/images/detailed_page/MTR/MTR 3.jpg",
    "/images/detailed_page/MTR/MTR 4.jpg",
    "/images/detailed_page/Wingreens/wingreens 3.jpg",
    "/images/detailed_page/Wingreens/wingreens 4.jpg",
    "/images/detailed_page/Wingreens/wingreen 4.jpg",
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

export default function SanthiPage() {
  return <ProjectTemplate project={santhiProject} />;
}
