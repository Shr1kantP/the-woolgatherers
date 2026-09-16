import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Motion Design | The Woolgatherers",
  description:
    "Curated motion graphics, brand films, and animations for diverse brands.",
};

const motionProject: ProjectData = {
  logo: "/images/guests/image 42.webp", // Using a placeholder/available brand logo
  title: "MOTION DESIGN",
  industry: "Cross-Industry",
  tags: ["Motion Graphics", "Brand Films", "Animation"],
  heroImage: "/images/detailed_page/santhi/santhi_motion.mp4",
  overview:
    "A curated body of motion work created for brands across textiles, FMCG, food, and lifestyle. Combining animation, typography, transitions, and storytelling to elevate presentations, corporate films, product launches, and digital campaigns.",
  gallery: [
    "/images/detailed_page/santhi/santhi_motion.mp4",
    "/images/detailed_page/santhi/santhi_motion_2.mp4",
    "/images/detailed_page/vahdam/vahdam_vid_1.mp4",
    "/images/detailed_page/peps/peps_vid_2.mp4",
  ],
  galleryLayout: "motion-four",
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/kumbaya/kumbayah-packaging-main.webp",
      title: "KUMABAYA",
      industry: "Food & Beverage (Kombucha)",
      tags: ["Packaging", "Content Production", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/peps/peps-post-5.jpg",
      title: "PEPS",
      industry: "Mattress & Sleep Products",
      tags: ["Content Marketing", "Social Media"],
    },
    {
      thumbnail: "/images/detailed_page/wingreens/wingreens-3.jpg",
      title: "WINGREENS",
      industry: "Food & Beverage",
      tags: ["Content Production"],
    },
  ],
};

export default function MotionPage() {
  return <ProjectTemplate project={motionProject} />;
}
