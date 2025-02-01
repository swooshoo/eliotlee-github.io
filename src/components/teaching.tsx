import UCR from "@/public/logos/ucr.webp";
import ACM from "@/public/logos/acm.webp"
import Teach from "@/public/logos/teach.png"
import Layout from "@/components/global/layout";
import { tile } from "@/types";

const teachings: tile[] = [
  {
    logo: Teach,
    group: "Mathematics",
    location: "Los Angeles, California",
    role: "Private Tutor",
    start: "June 2024",
    end: "Present",
    alt: "Private Tutor",
    description: [
      "Currently tutoring 5 students in geometry, algebra, and precalculus, providing personalized coaching to strengthen problem-solving skills.",
      "Helped students achieve A+ grades (top 10% percentile) in their math classes through targeted lessons and structured practice.",
      "Designed interactive lessons incorporating real-world applications and visual aids, improving conceptual understanding and retention on a student-by-student basis.",
      "Created custom worksheets, quizzes, and review sessions, leading to measurable improvements in test scores and confidence.",
    ],
  },
  {
    logo: ACM,
    group: "ACM Data Science Workshop Series",
    location: "Riverside, California",
    role: "Tableau Workshop Lead",
    start: "Aug 2023",
    end: "Aug 2023",
    alt: "UCR Logo",
    description: [
      "Led a Data Visualization workshop for ACM's Data Science Series",
      "Worked with 10-15 attendees teaching dataset connections, dashboard development, interactive filters, and a mini project",
      "Prepared a walkthrough project for attendees to follow along.",
      "Structured a digestible presentation for even our most novice attendees",
    ],
  },
  {
    logo: UCR,
    group: "CNAS Learning Communities",
    location: "Riverside, California",
    role: "Peer Academic Leader",
    start: "August 2022",
    end: "January 2023",
    alt: "UCR Logo",
    description: [
      "Oversaw staff interactions with approximately 1500 first-year students and collaborated with 24 mentors to assist STEM learning for first-years",
      "Led transition of the program from remote to in-person environment while increasing program enrollment by 20%",
      " Directed 2 weekly discussions to teach work life balance, develop career plans, monitor academic progress, and provide rationale for university policy and procedures",
    ],
  },

];

const Teaching = () => {
  return <Layout title="teaching." data={teachings} />;
};

export default Teaching;
