import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAHDAM | The Woolgatherers",
  description:
    "Content production and UGC content for VAHDAM's global tea portfolio.",
};

const vahdamProject: ProjectData = {
  logo: "/images/Guests/vahdam.png",
  title: "VAHDAM",
  industry: "Food & Beverage",
  tags: ["Content Production", "UGC Content"],
  heroImage: "/images/detailed_page/Vahdam/vahdam_1.jpg",
  overview:
    "Partnered with one of India's leading premium tea brands with a strong presence across North America and global markets. Over 5+ years, we've produced content across multiple product launches, seasonal campaigns, and evergreen marketing initiatives, creating photography, video, and UGC assets that consistently elevated the brand across digital platforms.",
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
      industry: "Health & Wellness",
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

export default function VahdamPage() {
  return <ProjectTemplate project={vahdamProject} />;
}
