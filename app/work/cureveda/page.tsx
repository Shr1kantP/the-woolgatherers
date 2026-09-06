import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cureveda | The Woolgatherers",
  description:
    "Content production and UGC content for Cureveda, the modern wellness brand by Baidyanath.",
};

const curevedaProject: ProjectData = {
  logo: "/images/Guests/cureveda.png",
  title: "CUREVEDA",
  industry: "Health & Wellness",
  tags: ["Content Production", "UGC Content"],
  heroImage: "/images/detailed_page/cureveda/cureveda_1.jpg",
  overview:
    "Produced photography, video, and UGC content for Cureveda, the modern wellness brand by Baidyanath. The work spanned product launches and performance-driven creatives, building a versatile content library for social media, paid campaigns, and e-commerce.",
  gallery: [
    "/images/detailed_page/cureveda/cureveda_1.jpg",  
    "/images/detailed_page/cureveda/cureveda_vid.mp4",
    "/images/detailed_page/cureveda/cureveda_2.jpg",
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/Vahdam/vahdam_1.jpg",
      title: "VAHDAM",
      industry: "Food & Beverage",
      tags: ["Content Production", "UGC Content"],
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
      industry: "Food & Beverage",
      tags: ["Content Production"],
    },
  ],
};

export default function CurevedaPage() {
  return <ProjectTemplate project={curevedaProject} />;
}
