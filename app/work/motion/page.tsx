import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion Design | The Woolgatherers",
  description:
    "Curated motion graphics, brand films, and animations for diverse brands.",
};

const motionProject: ProjectData = {
  logo: "/images/Guests/image 42.png", // Using a placeholder/available brand logo
  title: "MOTION DESIGN",
  industry: "Cross-Industry",
  tags: ["Motion Graphics", "Brand Films", "Animation"],
  heroImage: "/images/detailed_page/MTR/MTR 2.jpg",
  overview:
    "A curated body of motion work created for brands across textiles, FMCG, food, and lifestyle. Combining animation, typography, transitions, and storytelling to elevate presentations, corporate films, product launches, and digital campaigns.",
  gallery: [
    "/images/detailed_page/MTR/MTR 2.jpg",
    "/images/detailed_page/MTR/MTR 3.jpg",
    "/images/detailed_page/MTR/MTR 4.jpg",
    "/images/detailed_page/MTR/MTR 6.jpg",
    "/images/detailed_page/MTR/MTR 7.jpg",
    "/images/detailed_page/MTR/MTR 8.jpg",
    "/images/detailed_page/MTR/MTR 9.jpg",
    "/images/detailed_page/MTR/MTR 10.jpg",
    "/images/detailed_page/MTR/MTR 2.jpg",
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
      thumbnail: "/images/detailed_page/Wingreens/wingreens 3.jpg",
      title: "WINGREENS",
      industry: "Food & Beverage (Snacks)",
      tags: ["Brand Building", "Brand Identity"],
    },
  ],
};

export default function MotionPage() {
  return <ProjectTemplate project={motionProject} />;
}
