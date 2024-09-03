import UCR from "@/public/logos/ucr.webp";
import CodeNinjas from "@/public/logos/codeninjas.png";
import CaliforniaRobotics from "@/public/logos/california.png";
import FirstLegoLeague from "@/public/logos/lego.png";
import Layout from "@/components/global/layout";
import { tile } from "@/types";

const teachings: tile[] = [
  {
    logo: UCR,
    group: "Computer Science Department",
    location: "Riverside, California",
    role: "Teaching Assistant",
    start: "March 2024",
    end: "Present",
    alt: "UCR Logo",
    description: [
      "Work with 300+ students teaching lists, stacks, queues, trees, heaps, hashtables, graphs",
      "Take programming and laboratory assignments whiteboard demos encouraging students to think critically about new problems and approaches",
      "Hold weekly office hours to help students debug, review and understand course content",
      "Instruct 16 x 1 hour quiz preparation/review sessions to prepare students for biweekly quizzes",
      "Hold 3 x 3 hour final review sessions to assist students with final preparations",
      "Grade variety of quizzes, finals, programming/laboratory assignments encouraging better code quality",
    ],
  },
  {
    logo: CodeNinjas,
    group: "Code Ninjas Fremont Hub Branch",
    location: "Fremont, California",
    role: "Code Sensei #2",
    start: "June 2021",
    end: "September 2021",
    alt: "Code Ninjas Logo",
    description: [
      "Host summer camps including Roblox Studio, Minecraft Modifications, 3D Printing, Python/Scratch programming",
      "Lead Create, Junior, After School programs and tours for over 30+ students",
      "Improved corporate curriculum by creating 50+ supplementary Javascript practice sets with solutions",
      "Encouraged incorporation of various resources & teaching practices to instructor team to enhance student learning",
      "Initiated Tik Tok account to increase social presence and increase follower count from 0 to 200+ and 8K+ likes",
    ],
  },
  {
    logo: CaliforniaRobotics,
    group: "Youth Education and Development Group",
    location: "Fremont, California",
    role: "Founder / Lead Instructor",
    start: "August 2019",
    end: "September 2021",
    alt: "California Robotics Academy Logo",
    description: [
      "Develop 12+ Python, Java, Arduino, TinkerCad curriculums with example demos and train 20+ instructors",
      "Supervise 28+ weekly camps covering topics in embedded systems, data structures in Python and Java, 3D modeling",
      "Provide 200+ 2nd - 12th graders with a safe and inspiring learning environment with 65+ positive reviews",
      "Organize charity events ($600+ donations to Beirut Red Cross, CA Wildfires, Abode Homeless Shelter)",
      "Schedule, supervise, promote, advertise classes through social media, person-to-person communication",
    ],
  },
  {
    logo: FirstLegoLeague,
    group: "Innovant Bots # 46674 & The Athenians # 45077 teams",
    location: "Fremont, California",
    role: "Student Coach",
    start: "August 2019",
    end: "September 2021",
    alt: "First Lego League Logo",
    description: [
      "Introduce LEGO robotic mechanisms, sensors, programming data structures, odometry",
      "Host 12+ online workshops covering Scratch programming and usage of ultrasonic and IR sensors",
      "Co-host 2 outreach events to educate community about First Lego League and energy sustainability projects",
      "Work alongside 15+ middle schoolers to develop/further their interest in robotics and STEM",
    ],
  },
];

const Teaching = () => {
  return <Layout title="teaching." data={teachings} />;
};

export default Teaching;
