import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MTR Foods | The Woolgatherers",
  description:
    "Photography and video production for MTR Foods' international portfolio across North American and UK markets.",
};

const mtrProject: ProjectData = {
  logo: "/images/Guests/mtr.png",
  title: "MTR FOODS",
  industry: "Food & Beverage",
  tags: ["Photography & Video Production"],
  heroImage: "/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg",
  overview:
    "Produced photography and video assets for MTR's international portfolio, supporting product launches across the North American and UK markets with content tailored for global audiences.",
  gallery: [
    "/images/detailed_page/MTR/MTR 2.jpg",
    "/images/detailed_page/MTR/MTR 3.jpg",
    "/images/detailed_page/MTR/MTR 4.jpg",
    "/images/detailed_page/MTR/MTR5 .jpg",
    "/images/detailed_page/MTR/MTR 6.jpg",
    "/images/detailed_page/MTR/MTR 7.jpg",
    "/images/detailed_page/MTR/MTR 8.jpg",
    "/images/detailed_page/MTR/MTR 9.jpg",
    "/images/detailed_page/MTR/MTR 10.jpg",
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/Cureveda/cureveda_1.jpg",
      title: "CUREVEDA",
      industry: "Wellness & Personal Care",
      tags: ["Content Production", "Brand Communication"],
    },
    {
      thumbnail: "/images/detailed_page/Vahdam/vahdam_1.jpg",
      title: "VAHDAM",
      industry: "Food & Beverage (Tea)",
      tags: ["Content Production", "Brand Communication"],
    },
    {
      thumbnail: "/images/detailed_page/Kumbaya/DSCF9683.jpg",
      title: "KUMABAYA",
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

export default function MTRFoodsPage() {
  return <ProjectTemplate project={mtrProject} />;
}
