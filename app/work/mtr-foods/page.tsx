import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "MTR Foods | The Woolgatherers",
  description:
    "Produced photography and video assets for MTR's international portfolio, supporting product launches across the North American and UK markets with content tailored for global audiences.",
};

const mtrProject: ProjectData = {
  logo: "/images/guests/mtr.webp",
  title: "MTR FOODS",
  industry: "Food & Beverage",
  tags: ["Photography & Video Production"],
  heroImage: "/images/detailed_page/mtr/mtr-couple-dining-1.jpg",
  overview:
    "Produced photography and video assets for MTR's international portfolio, supporting product launches across the North American and UK markets with content tailored for global audiences.",
  gallery: [
    "/images/detailed_page/mtr/mtr-2.jpg",
    "/images/detailed_page/mtr/mtr-3.jpg",
    "/images/detailed_page/mtr/mtr-4.jpg",
    "/images/detailed_page/mtr/mtr5-.jpg",
    "/images/detailed_page/mtr/mtr-6.jpg",
    "/images/detailed_page/mtr/mtr-7.jpg",
    "/images/detailed_page/mtr/mtr-8.jpg",
    "/images/detailed_page/mtr/mtr-9.jpg",
    "/images/detailed_page/mtr/mtr-10.jpg",
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/cureveda/cureveda_1.jpg",
      title: "CUREVEDA",
      industry: "Health & Wellness",
      tags: ["Content Production", "UGC Content"],
    },
    {
      thumbnail: "/images/detailed_page/vahdam/vahdam_1.jpg",
      title: "VAHDAM",
      industry: "Food & Beverage",
      tags: ["Content Production", "UGC Content"],
    },
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
      thumbnail: "/images/detailed_page/wingreens/wingreens-3.jpg",
      title: "WINGREENS",
      industry: "Food & Beverage",
      tags: ["Content Production"],
    },
  ],
};

export default function MTRFoodsPage() {
  return <ProjectTemplate project={mtrProject} />;
}
