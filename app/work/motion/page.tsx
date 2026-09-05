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
  heroImage: "/images/detailed_page/Santhi/santhi_motion.mp4",
  overview:
    "A curated body of motion work created for brands across textiles, FMCG, food, and lifestyle. Combining animation, typography, transitions, and storytelling to elevate presentations, corporate films, product launches, and digital campaigns.",
  gallery: [
    "/images/detailed_page/Santhi/santhi_motion.mp4",
    "/images/detailed_page/Santhi/santhi_motion_2.mp4",
    "/images/detailed_page/Vahdam/vahdam_vid_1.mp4",
    "/images/detailed_page/Peps/peps_vid_2.mp4",
  ],
  galleryLayout: "motion-four",
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/Kumbaya/DSCF9683.jpg",
      title: "KUMBAYA",
      industry: "Food & Beverage (Kombucha)",
      tags: ["Packaging", "Content Production", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/Peps/Peps post 5.jpg",
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
