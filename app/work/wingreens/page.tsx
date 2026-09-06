import ProjectTemplate from "../../components/ProjectTemplate";
import type { ProjectData } from "../../components/ProjectTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wingreens | The Woolgatherers",
  description:
    "Produced a comprehensive library of photo and video content for Wingreens seasonal campaigns, with a focus on holiday gifting.",
};

const wingreensProject: ProjectData = {
  logo: "/images/Guests/wingreens.png",
  title: "WINGREENS",
  industry: "Food & Beverage",
  tags: ["Content Production"],
  heroImage: "/images/detailed_page/Wingreens/wingreens 3.jpg",
  overview:
    "Produced a comprehensive library of photo and video content for seasonal campaigns, with a focus on holiday gifting. The shoots showcased curated gift bundles and festive collections through warm, lifestyle-led visuals designed for digital campaigns, social media, and e-commerce.",
  gallery: [
    "/images/detailed_page/Wingreens/wingreens 3.jpg",
    "/images/detailed_page/Wingreens/wingreens 4.jpg",
    "/images/detailed_page/Wingreens/wingreen 4.jpg",
    "/images/detailed_page/Wingreens/wingreens gluten.png",
    "/images/detailed_page/Wingreens/wingreens.png",
    "/images/detailed_page/Wingreens/wingrrens.jpg",
  ],
  relatedProjects: [
    {
      thumbnail: "/images/detailed_page/Cureveda/cureveda_1.jpg",
      title: "CUREVEDA",
      industry: "Health & Wellness",
      tags: ["Content Production", "UGC Content"],
    },
    {
      thumbnail: "/images/detailed_page/Vahdam/vahdam_1.jpg",
      title: "VAHDAM",
      industry: "Food & Beverage",
      tags: ["Content Production", "UGC Content"],
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
      thumbnail: "/images/detailed_page/MTR/MTR COUPLE DINING 1.jpg",
      title: "MTR FOODS",
      industry: "Food & Beverage",
      tags: ["Photography & Video Production"],
    },
  ],
};

export default function WingreensPage() {
  return <ProjectTemplate project={wingreensProject} />;
}
