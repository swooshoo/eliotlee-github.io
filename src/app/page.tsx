import Experiences from "@/components/experiences";
import Landing from "@/components/landing";
import Organizations from "@/components/organizations";
import Projects from "@/components/projects";
import Teaching from "@/components/teaching";

const Page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Landing />
      <div className="w-10/12">
        <Projects />
        <Experiences />
        <Organizations />
        <Teaching />
      </div>
    </div>
  );
};

export default Page;
