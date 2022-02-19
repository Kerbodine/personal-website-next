import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Project({ icon, color, title, description, link }) {
  return (
    <Link href={link} passHref>
      <div className="w-full rounded-md flex p-4 hover:bg-gray-50 group cursor-pointer">
        <div
          className={`w-16 h-16 rounded-md ${color} flex-none text-4xl flex items-center justify-center`}
        >
          {icon}
        </div>
        <div className="ml-4 flex flex-col justify-center">
          <div className="flex items-top">
            <h3 className="text-lg font-semibold text-gray-700 leading-5 mb-1">
              {title}
            </h3>
            <FiArrowUpRight className="ml-1 hidden group-hover:block flex-none" />
          </div>
          <p className="text-gray-500 leading-5">{description}</p>
        </div>
      </div>
    </Link>
  );
}
