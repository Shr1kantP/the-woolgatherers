import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";
import { blob } from "@/app/lib/blob";

export const metadata: Metadata = {
  title: "Kumbaya | The Woolgatherers",
  description:
    "Packaging, content production, and social media for one of Kerala's leading kombucha brands.",
};

const kumbayaProject: ProjectData = {
  logo: blob("/images/Guests/kumbayah.webp"),
  title: "KUMBAYAH",
  industry: "Food & Beverage (Kombucha)",
  tags: ["Packaging", "Content Production", "Social Media"],
  heroImage: blob("/images/detailed_page/Kumbaya/kumbayah packaging main.webp"),
  overview:
    "Partnered with one of Kerala's leading kombucha brands to build a cohesive visual presence across multiple touchpoints. The project included packaging design, photography and video production, and ongoing social media management, creating a consistent brand experience from shelf to screen.",
  gallery: [
    blob("/images/detailed_page/Kumbaya/kumbayah packaging.webp"),
    blob("/images/detailed_page/Kumbaya/kumbaya-label-1.jpg"),
    blob("/images/detailed_page/Kumbaya/kumbaya social.webp"),
    blob("/images/detailed_page/Kumbaya/kumbaya social 2.jpg"),
    blob("/images/detailed_page/Kumbaya/kumbaya-festive-2.jpg"),
    blob("/images/detailed_page/Kumbaya/kumbaya social 3.jpg"),
    blob("/images/detailed_page/Kumbaya/kumbaya-label-4.jpg"),
    blob("/images/detailed_page/Kumbaya/kumbayah-vid.mp4"),
   /*  blob("/images/detailed_page/Kumbaya/kumbayah packaging.webp"),
    blob("/images/detailed_page/Kumbaya/kumbaya social 2.jpg"), */
  ],
  relatedProjects: [
    {
      thumbnail: blob("/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg"),
      title: "MTR FOODS",
      industry: "Food & Beverage",
      tags: ["Photography & Video Production"],
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

export default function KumbayaPage() {
  return <ProjectTemplate project={kumbayaProject} />;
}
