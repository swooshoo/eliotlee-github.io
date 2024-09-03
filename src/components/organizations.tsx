import ACM from "@/public/logos/acm.webp";
import Layout from "@/components/global/layout";
import { tile } from "@/types";

const organizations: tile[] = [
  {
    logo: ACM,
    group: "Association for Computing Machinery",
    location: "Riverside, California",
    role: "President & Project Director",
    start: "March 2022",
    end: "Present",
    alt: "ACM Logo",
    description: [
      "Initiate 50+ projects including websites, educational tools for UCR CSE department, clubs with 200+ developers",
      "Lead 8+ weekly career workshops covering resumes, interviews, research, graduate studies, course planning, internships to increase member retention by 30%",
      "Instruct 16+ weekly web development workshops covering React, Next.js, TailwindCSS, and Next Auth",
      "Spearhead 50+ developer team over 12+ month AGILE development process for all-purpose hackathon website",
    ],
  },
];

const Organizations = () => {
  return <Layout title="organizations." data={organizations} />;
};

export default Organizations;
