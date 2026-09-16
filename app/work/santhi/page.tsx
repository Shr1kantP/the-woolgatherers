import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Santhi Textiles | The Woolgatherers",
  description:
    "Brand communication, corporate films, and motion design for one of South India's largest textile manufacturers.",
};

const santhiProject: ProjectData = {
  logo: "/images/guests/sathi.webp",
  title: "SANTHI TEXTILES",
  industry: "Textile Manufacturing",
  tags: ["Brand Communication", "Corporate Films", "Motion Design"],
  heroImage: "/images/detailed_page/santhi/santhi_motion.mp4",
  galleryLayout: "santhi-horizontal",
  overview:
    "Creative partner for one of South India's largest textile manufacturers. Across multiple projects, we've developed corporate films, motion graphics, presentations, and strategic brand communication for collections created for global brands including Gap, Old Navy, Tommy Hilfiger, Banana Republic, and Marks & Spencer.",
  gallery: [
    "/images/detailed_page/santhi/santhi_1.jpg",
    "/images/detailed_page/santhi/santhi_2.jpg",
    "/images/detailed_page/santhi/santhi_motion_2.mp4",
    "/images/detailed_page/santhi/santhi_3.jpg",
    "/images/detailed_page/santhi/santhi_4.jpg",
    "/images/detailed_page/santhi/santhi_5.jpg",
    "/images/detailed_page/santhi/santhi_6.jpg",
   /*  "/images/detailed_page/santhi/santhi_motion.mp4", */
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/kumbaya/kumbayah-packaging-main.webp",
      title: "KUMABAYA",
      industry: "Food & Beverage (Kombucha)",
      tags: ["Packaging", "Content Production", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/peps/peps-dream-makers-playlist.jpg",
      title: "PEPS",
      industry: "Mattress & Sleep Products",
      tags: ["Content Marketing", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/mtr/mtr-couple-dining-1.jpg",
      title: "MTR FOODS",
      industry: "Food & Beverage",
      tags: ["Photography & Video Production"],
    },
  ],
};

export default function SanthiPage() {
  return <ProjectTemplate project={santhiProject} />;
}
