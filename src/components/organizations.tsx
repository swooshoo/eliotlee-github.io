import ACM from "@/public/logos/acm.webp";
import Layout from "@/components/global/layout";
import { tile } from "@/types";

const organizations: tile[] = [
  {
    logo: ACM,
    group: "Association for Computing Machinery",
    location: "Riverside, California",
    role: "Vice President",
    start: "Feb 2023",
    end: "Feb 2024",
    alt: "ACM Logo",
    description: [
      "Implemented an ACM Intern program to streamline and train next year's ACM Board Members",
      "Managed 15+ weekly workshops towards soft skills, on-campus tech events, and hackathon preparation",
      "Spearheaded Data Science Workshop series, increasing the number of data science majors in ACM by 50%",
    ],
  },
];

const Organizations = () => {
  return <Layout title="organizations." data={organizations} />;
};

export default Organizations;
