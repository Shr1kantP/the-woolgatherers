import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
import { blob } from "@/app/lib/blob";

export const metadata: Metadata = {
  title: "MTR Foods | The Woolgatherers",
  description:
    "Produced photography and video assets for MTR's international portfolio, supporting product launches across the North American and UK markets with content tailored for global audiences.",
};

const mtrProject: ProjectData = {
  logo: blob("/images/Guests/mtr.webp"),
  title: "MTR FOODS",
  industry: "Food & Beverage",
  tags: ["Photography & Video Production"],
  heroImage: blob("/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg"),
  overview:
    "Produced photography and video assets for MTR's international portfolio, supporting product launches across the North American and UK markets with content tailored for global audiences.",
  gallery: [
    blob("/images/detailed_page/MTR/MTR 2.jpg"),
    blob("/images/detailed_page/MTR/MTR 3.jpg"),
    blob("/images/detailed_page/MTR/MTR 4.jpg"),
    blob("/images/detailed_page/MTR/MTR5 .jpg"),
    blob("/images/detailed_page/MTR/MTR 6.jpg"),
    blob("/images/detailed_page/MTR/MTR 7.jpg"),
    blob("/images/detailed_page/MTR/MTR 8.jpg"),
    blob("/images/detailed_page/MTR/MTR 9.jpg"),
    blob("/images/detailed_page/MTR/MTR 10.jpg"),
  ],
  relatedProjects: [
    {
      thumbnail: blob("/images/detailed_page/Cureveda/cureveda_1.jpg"),
      title: "CUREVEDA",
      industry: "Health & Wellness",
      tags: ["Content Production", "UGC Content"],
    },
    {
      thumbnail: blob("/images/detailed_page/Vahdam/vahdam_1.jpg"),
      title: "VAHDAM",
      industry: "Food & Beverage",
      tags: ["Content Production", "UGC Content"],
    },
    {
      thumbnail: blob("/images/detailed_page/Kumbaya/kumbayah packaging main.webp"),
      title: "KUMABAYA",
      industry: "Food & Beverage (Kombucha)",
      tags: ["Packaging", "Content Production", "Social Media"],
    },
    {
      thumbnail: blob("/images/detailed_page/Peps/Peps Dream makers playlist.jpg"),
      title: "PEPS",
      industry: "Mattress & Sleep Products",
      tags: ["Content Marketing", "Social Media"],
    },
    {
      thumbnail: blob("/images/detailed_page/Wingreens/wingreens 3.jpg"),
      title: "WINGREENS",
      industry: "Food & Beverage",
      tags: ["Content Production"],
    },
  ],
};

export default function MTRFoodsPage() {
  return <ProjectTemplate project={mtrProject} />;
}
