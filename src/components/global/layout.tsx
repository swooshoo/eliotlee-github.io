import { tile } from "@/types";
import Tile from "./tile";

interface props {
  title: string;
  data: tile[];
}

const Layout = ({ title, data }: props) => {
  return (
    <div>
      <h3 className="text-3xl font-bold my-8">{title}</h3>
      <div className="flex flex-col gap-8">
        {data.map(
          (
            { logo, alt, group, location, role, start, end, description },
            index
          ) => (
            <Tile
              even={index % 2 === 0}
              key={index}
              logo={logo}
              alt={alt}
              group={group}
              location={location}
              role={role}
              start={start}
              end={end}
              description={description}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Layout;
