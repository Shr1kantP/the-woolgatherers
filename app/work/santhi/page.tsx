import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Santhi Textiles | The Woolgatherers",
  description:
    "Brand communication, corporate films, and motion design for Santhi Textiles.",
};

const santhiProject: ProjectData = {
  logo: "/images/Guests/sathi.png",
  title: "SANTHI TEXTILES",
  industry: "Textiles & Fabrics",
  tags: ["Brand Communication", "Corporate Films", "Motion Design"],
  heroImage: "/images/detailed_page/Santhi/santhi_motion.mp4",
  overview:
    "Directed custom corporate films, motion design, and brand communication strategies for Santhi Textiles, highlighting their craftsmanship, heritage, and manufacturing prowess in the global fabric markets.",
  gallery: [
    "/images/detailed_page/Santhi/santhi_1.JPG",
    "/images/detailed_page/Santhi/santhi_2.JPG",
    "/images/detailed_page/Santhi/santhi_motion_2.mp4",
    "/images/detailed_page/Santhi/santhi_3.JPG",
    "/images/detailed_page/Santhi/santhi_4.JPG",
    "/images/detailed_page/Santhi/santhi_5.jpg",
    "/images/detailed_page/Santhi/santhi_6.jpg",
   /*  "/images/detailed_page/Santhi/santhi_motion.mp4", */
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
