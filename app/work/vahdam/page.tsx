import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAHDAM | The Woolgatherers",
  description:
    "Content production and brand communication for VAHDAM's tea portfolio.",
};

const vahdamProject: ProjectData = {
  logo: "/images/Guests/vahdam.png",
  title: "VAHDAM",
  industry: "Food & Beverage (Tea)",
  tags: ["Content Production", "Brand Communication"],
  heroImage: "/images/detailed_page/Vahdam/vahdam_1.jpg",
  overview:
    "Produced a polished visual system for VAHDAM's tea portfolio, bringing together product photography and short-form motion assets to make the brand's modern Indian tea story feel vivid and premium.",
  gallery: [
    "/images/detailed_page/Vahdam/vahdam_1.jpg",
    "/images/detailed_page/Vahdam/vahdam_vid_1.mp4",
    "/images/detailed_page/Vahdam/vadham_2.png",
    "/images/detailed_page/Vahdam/vahdam_vid_2.mp4",
    "/images/detailed_page/Vahdam/vahdam_vid_3.mp4",
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/Cureveda/cureveda_1.jpg",
      title: "CUREVEDA",
      industry: "Wellness & Personal Care",
      tags: ["Content Production", "Brand Communication"],
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
      industry: "Food & Beverage (Snacks)",
      tags: ["Brand Building", "Brand Identity"],
    },
  ],
};

export default function VahdamPage() {
  return <ProjectTemplate project={vahdamProject} />;
}
