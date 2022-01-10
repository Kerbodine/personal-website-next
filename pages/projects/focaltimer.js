import { SiGithub } from "react-icons/si";
import { BiGlobe } from "react-icons/bi";
import Image from "next/image";
import LinkButton from "../../components/LinkButton";

export default function FocalTimer() {
  return (
    <div>
      <header className="mb-4">
        <div className="flex items-center gap-4">
          <div className="border-2 border-gray-300 rounded-xl w-16 h-16 overflow-hidden relative">
            <Image
              src="/focaltimer-logo.png"
              alt="focaltimer logo"
              layout="fill"
            ></Image>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold">
              FocalTimer
            </h1>
            <p className="text-lg md:text-xl leading-6 text-gray-500 font-normal">
              To-do list and notes app for students
            </p>
          </div>
        </div>
      </header>
      <div className="flex gap-4">
        <LinkButton
          link="https://github.com/Kerbodine/pp-react-app"
          icon={<SiGithub />}
        />
        <LinkButton
          link="https://focaltimer.netlify.app/reminders"
          icon={<BiGlobe />}
        />
      </div>
    </div>
  );
}
