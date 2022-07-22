import Image from "next/image";
import Link from "next/link";

export default function Project({
  icon,
  color,
  title,
  description,
  link,
  image,
}) {
  return (
    <Link href={link} passHref>
      <a
        target="_blank"
        rel="noreferrer"
        className="w-full rounded-2xl flex h-24 p-4 hover:bg-gray-100/75 group cursor-pointer"
        data-splitbee-event="Project"
        data-splitbee-event-destination={`${title}`}
      >
        <div
          className={`${
            image && "border-2 border-gray-200"
          } relative w-16 h-16 rounded-xl ${color} overflow-hidden flex-none text-4xl flex items-center justify-center`}
        >
          {icon ? icon : <Image src={image} alt={title} layout="fill" />}
        </div>
        <div className="ml-4 flex flex-col justify-center">
          <div className="flex items-top">
            <h3 className="text md:text-lg font-semibold text-gray-700 leading-5">
              {title}
            </h3>
          </div>
          <p className="text-sm md:text-base text-gray-500 !leading-4">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}
