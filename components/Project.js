import Link from "next/link";

export default function Project({ icon, color, title, description, link }) {
  return (
    <Link href={link} passHref target="_blank">
      <div className="w-full rounded-md flex h-24 p-4 hover:bg-gray-50 group cursor-pointer">
        <div
          className={`w-16 h-16 rounded-md ${color} flex-none text-4xl flex items-center justify-center`}
        >
          {icon}
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
      </div>
    </Link>
  );
}
