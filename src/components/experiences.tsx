import Mobalytics from "@/public/logos/mobalytics.jpg"
import Apple from "@/public/logos/apple.svg"
import Layout from "@/components/global/layout";
import { tile } from "@/types";

const experiences: tile[] = [
  {
    logo: Mobalytics,
    group: "Gaming Market Research",
    location: "Remote California",
    role: "Data Analytics Intern",
    start: "April 2024",
    end: "June 2024",
    alt: "Mobalytics Logo",
    description: [
      "Conducted comprehensive market research and data analysis on two major e-sports titles, analyzing key performance indicators and in-game decision-making patterns",
      "Generated actionable insights on player behavior, gameplay mechanics, and community dynamics to inform strategic decision-making and potential business expansion opportunities",
      "Participated in weekly standups, presenting in a final capstone presentation towards the cohort and staff leads.",
    ],
  },
  {
    logo: Apple,
    group: "Ad Astra Behavioral Analytics Service Group",
    location: "Remote California",
    role: "iOS Swift Design Intern",
    start: "March 2022",
    end: "September 2022",
    alt: "Apple Logo",
    description: [
      "Fabricated app proposals alongside a 7+ intern team to meet client Ad Astra Behavior Analytic Services’ needs",
      "Attended weekly standups with mentors and client for constructive feedback on prototypes",
      "Presented our prototype in a final capstone presentation to our local client & group leads",
      "Completed a complementary 180 hour online course for iOS Swift.",
    ],
  }
];

const Experiences = () => {
  return <Layout title="experiences." data={experiences} />;
};

export default Experiences;
