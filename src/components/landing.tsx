import HeroImage from "@/public/landing.jpg";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { File, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="w-screen h-screen flex justify-end items-center">
      <Image
        src={HeroImage}
        className="h-screen w-screen object-cover -z-[10]"
        fill={true}
        alt="Eliot Lee"
      />
      <div className="h-screen w-screen bg-black/30 absolute top-0 left-0 -z-[10]" />

      <div className="w-2/5 mr-8">
        <h1 className="text-3xl text-white font-semibold text-right my-8">
          Eliot Lee
        </h1>
        <p className="text-xl text-white">
        Eliot Lee is a final-year Mathematics B.S. student at UC Riverside, graduating in 2025. He is a data-driven problem solver with a passion for data analytics, product development, and machine learning. 
        Through internships at Mobalytics and leadership roles at UCR and Rose Hack, he has worked on game analytics, market research, and student engagement.
        </p>

        <p className="text-xl text-white">
        Outside the classroom, Eliot builds data-powered applications for emergency response, gaming insights, and financial tools, 
        leveraging Streamlit, SQL, and cloud platforms. He is currently seeking a new grad role in product development where 
        he can continue to grow to build impactful, data-driven solutions.
        </p>

        <div className="flex text-white my-8 justify-between w-1/2">
          <Link
            href="https://www.instagram.com/eliotlee_/"
            target="_blank"
            className="hover:opacity-70"
          >
            <SiInstagram size={36} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/swooshoo/"
            target="_blank"
            className="hover:opacity-70"
          >
            <SiLinkedin size={36} />
          </Link>
          <Link
            href="https://github.com/swooshoo"
            target="_blank"
            className="hover:opacity-70"
          >
            <SiGithub size={36} />
          </Link>
          <Link
            href="/files/Eliot_Lee_Resume.pdf"
            target="_blank"
            className="hover:opacity-70"
          >
            <File size={36} />
          </Link>
          <Link
            href="mailto:eliotlee1415@gmail.com"
            target="_blank"
            className="hover:opacity-70"
          >
            <Mail size={36} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
