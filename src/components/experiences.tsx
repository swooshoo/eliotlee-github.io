import Cisco from "@/public/logos/cisco.png";
import Comcast from "@/public/logos/comcast.webp";
import ZyberTech from "@/public/logos/zybertech.png";
import Layout from "@/components/global/layout";
import { tile } from "@/types";

const experiences: tile[] = [
  {
    logo: ZyberTech,
    group: "Mass Scale Infrastructure Group",
    location: "Remote California",
    role: "Software Engineer II",
    start: "April 2024",
    end: "Present",
    alt: "ZyberTech Logo",
    description: [
      "Architect Android based React Native Expo self-ordering kiosk app for Farmer Boys Kiosk Pilot in August 2024",
      "Rewrote file based API cache to reduce Point of Sale (POS) requests by 80% with 24 hour cache retention policy",
      "Integrate Worldpay TriPOS Payment API with custom Kotlin wrapper to provide P2PE PCI certified payments",
      "Implement 18+ screens to handle member and guest user flows to personalize ordering experience",
    ],
  },
  {
    logo: Cisco,
    group: "Mass Scale Infrastructure Group",
    location: "San Jose, California",
    role: "Software Engineering Intern",
    start: "July 2024",
    end: "Present",
    alt: "Cisco Logo",
    description: [
      "Construct FireX Auto Triaging system to infer failure reason on testlogs reducing developer intervention by 20%",
      "Utilize Facebook AI Similarity Search (FAISS) to index FireX logs and semantically search across 3000+ documents",
      "Embed testlogs with Hugging Face’s all-MiniLM-L6-v2 & integrate with LangChain to build FAISS IndexFlatL2",
      "Undertake Next.js + Typescript + Shadcn labeling dashboard to display MongoDB data points via aggregation pipeline",
      "Extend FireX testing plugins to automatically parse and push XML testcase logs to MongoDB",
    ],
  },
  {
    logo: Comcast,
    group: "Smart Network Platform",
    location: "Philadelphia, Pennsylvania",
    role: "Software Engineering Intern",
    start: "June 2023",
    end: "September 2023",
    alt: "Comcast Logo",
    description: [
      "Upgrade Foresight web app to use Node.js 18 from v12 to increase performance and reduce security vulnerabilities",
      "Merge Express.js API with Foresight web app to reduce running containers by 50% & increase performance by 25%",
      "Refine project name input data validation API to prevent name duplication and provide useful error messages",
      "Enhance SNP Storybook webcomponents to resolve 10+ Mend alerts to maintain quarterly security compliance",
      "Design and develop Slack based VM telemetry system with 4 panel Grafana dashboard pulling from InfluxDB",
    ],
  },
  {
    logo: Comcast,
    group: "Next Generatation Area Network (NGAN)",
    location: "Remote California",
    role: "Software Engineering Intern",
    start: "June 2022",
    end: "Feburary 2023",
    alt: "Comcast Logo",
    description: [
      "Fabricate 5+ Concourse pipelines to check linting, formatting, whitesourcing, testing",
      "Compute event-triggered TTR to enhance accuracy for 1000+ daily alerts & visualize with React dashboard",
      "Migrate & mock unit-test auto-remediation platform from Stackstorm to AWS Step Functions",
      "Standardize 50+ Python auto-remediation scripts to fit security requirements and AWS Step Function compatibility",
      "Write & automate 320+ unit tests via PyTest and Concourse to ensure 15+ APIs’ robustness with 95% code coverage",
    ],
  },
];

const Experiences = () => {
  return <Layout title="experiences." data={experiences} />;
};

export default Experiences;
