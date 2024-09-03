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
        alt="Divyank Shah"
      />
      <div className="h-screen w-screen bg-black/30 absolute top-0 left-0 -z-[10]" />

      <div className="w-2/5 mr-8">
        <h1 className="text-3xl text-white font-semibold text-right my-8">
          Divyank Shah
        </h1>
        <p className="text-xl text-white">
          Divyank Shah is currently a final year Computer Science MS student at
          UC Riverside expected to graduate in March 2025. He is an aspiring
          software engineer with interests and full stack applications and
          devops where he explored these fields via his internships with Cisco
          (Summer 2024) and Comcast (Summer 2022 & Summer 2023).
        </p>

        <p className="text-xl text-white">
          Outside the classroom, Divyank is involved with various organizations
          and hackathons providing more students the opportunity to break into
          web development and leading various web development projects to mentor
          students.
        </p>

        <div className="flex text-white my-8 justify-between w-1/2">
          <Link
            href="https://www.instagram.com/divyank.shah/"
            target="_blank"
            className="hover:opacity-70"
          >
            <SiInstagram size={36} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/divyank-shah/"
            target="_blank"
            className="hover:opacity-70"
          >
            <SiLinkedin size={36} />
          </Link>
          <Link
            href="https://github.com/shahdivyank"
            target="_blank"
            className="hover:opacity-70"
          >
            <SiGithub size={36} />
          </Link>
          <Link
            href="/files/Divyank_Shah_Resume.pdf"
            target="_blank"
            className="hover:opacity-70"
          >
            <File size={36} />
          </Link>
          <Link
            href="mailto:shahdivyank25@gmail.com"
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
