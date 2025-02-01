import { tile } from "@/types";
import Image from "next/image";

const Tile = ({
  logo,
  link,
  alt,
  group,
  location,
  role,
  start,
  end,
  description,
  even,
}: tile) => {
  return (
    <>
      <div className="flex items-center">
      {even && (
        link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image src={logo} alt={alt} className="w-3/12 p-4" />
          </a>
        ) : (
          <Image src={logo} alt={alt} className="w-3/12 p-4" />
        )
  )}
        <div
          className={`${
            even ? "border-l-2" : "border-r-2"
          } border-website-gray p-4 ml-4`}
        >
          <div className="flex w-full">
            <div className="w-1/2">
              <p className="text-website-gray text-lg">working in </p>
              <p className="font-semibold text-lg">{group}</p>
              <p className="text-website-gray text-lg">in</p>
              <p className="font-semibold text-lg">{location}</p>
            </div>
            <div className="w-1/2">
              <p className="text-website-gray text-lg">working as a </p>
              <p className="font-semibold text-lg">{role}</p>
              <p className="text-website-gray text-lg">from</p>
              <p className="font-semibold text-lg">
                {start}{" "}
                <span className="text-website-gray font-normal text-lg">
                  to
                </span>{" "}
                {end}
              </p>
            </div>
          </div>
          <ul className="list-disc ml-4 my-4">
            {description.map((point, index) => (
              <li key={index} className="text-lg">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {!even && <Image src={logo} alt={alt} className="w-3/12 p-4" />}
      </div>
    </>
  );
};

export default Tile;
