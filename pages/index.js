import { SiBehance, SiDribbble, SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import LinkTag from "../components/LinkTag";
import Project from "../components/Project";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const contacts = [
    {
      icon: <SiGithub />,
      link: "https://github.com/Kerbodine",
    },
    {
      icon: <SiDribbble />,
      link: "https://dribbble.com/Kerbodine",
    },
    {
      icon: <SiBehance />,
      link: "https://www.behance.net/kerbodine",
    },
    {
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/michaelytong/",
    },
  ];

  const projects = [
    {
      title: "FocalTimer",
      icon: "📝",
      color: "bg-orange-100",
      description: "To-do list and notes app for students",
      link: "https://focaltimer.netlify.app/reminders",
    },
    {
      title: "QBE CubeSat Dashboard",
      icon: "🛰️",
      color: "bg-blue-100",
      description:
        "HKU Business Engineering Science & Technology CubeSat project",
      link: "https://qbe-cubesat.netlify.app/",
    },
    {
      title: "Apogee Academy",
      icon: "🚀",
      color: "bg-indigo-100",
      description: "Youth run online learning community for SDG education",
      link: "https://apogee-academy.vercel.app/",
    },
    {
      title: "TEDxVSA Website",
      icon: "🎥",
      color: "bg-red-100",
      description: "Official TEDx event website for VSA",
      link: "https://www.tedxvictoriashanghaiacademy.com",
    },
    {
      title: "FocalTasks",
      icon: "✅",
      color: "bg-green-100",
      description: "Dead simple new tab todo-list for Chrome.",
      link: "https://chrome.google.com/webstore/detail/focaltasks/iplpkldbkjpngjdepcddfpibdajnohmp",
    },
    {
      title: "Bauhaus Pattern Generator",
      icon: "🎨",
      color: "bg-amber-100",
      description: "Bauhaus style SVG generator in the browser",
      link: "https://bauhaus-pattern.netlify.app/",
    },
    {
      title: "Voice Teleprompter",
      icon: "🎙️",
      color: "bg-gray-100",
      description: "Teleprompter powered by speech to text API",
      link: "https://teleprompter-beta.netlify.app/",
    },
  ];

  return (
    <>
      <Script async src="https://cdn.splitbee.io/sb.js" />
      <header className="text-3xl md:text-4xl text-gray-800 font-semibold">
        <h1 className="tracking-tight	leading-8 mb-2">
          Hi 👋! I&apos;m Michael Tong,
        </h1>
        <div className="text-xl md:text-2xl leading-6 text-gray-500 font-normal">
          a full stack developer and designer from Hong Kong 🌆.
        </div>
      </header>
      <div className="flex gap-2 mt-4 flex-wrap">
        <Link href="/contact" passHref>
          <div className="link-tag bg-gray-600 hover:bg-gray-700 border-transparent text-white">
            <FiMail />
            <p className="text-sm">Contact</p>
          </div>
        </Link>
        {contacts.map((contact, index) => (
          <LinkTag key={index} {...contact} />
        ))}
      </div>
      {/* <hr className="border-none w-full h-0.5 bg-gray-200 my-4" /> */}
      <div className="mt-6 relative w-full hover:-translate-y-0.5 transition-transform hidden sm:block">
        <Image
          src="/focaltimer.svg"
          alt="focaltimer"
          width="928"
          height="256"
        />
        <div className="absolute sm:top-5 sm:left-6 md:top-8 md:left-9 lg:top-10 lg:left-12">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-600">
            Introducing <span className="text-[#4483FD]">FocalTimer</span>
          </h2>
          <p className="text-gray-500 font-semibold tracking-tight">
            Your all in one productivity suite
          </p>
        </div>
        <button className="text-sm md:text-base absolute sm:left-6 sm:bottom-6 md:left-9 md:bottom-9 lg:bottom-12 lg:left-12 px-4 py-1.5 bg-[#4483FD] text-white font-semibold rounded-full">
          Learn More →
        </button>
      </div>
      <div className="block sm:hidden mt-6 relative w-full">
        <Image
          src="/focaltimer-sm.svg"
          alt="focaltimer"
          width="480px"
          height="400px"
        />
        <div className="absolute top-5 left-6 xs:left-8 xs:top-7">
          <h2 className="text-xl font-bold tracking-tight text-gray-600">
            Introducing <span className="text-[#4483FD]">FocalTimer</span>
          </h2>
          <p className="text-gray-500 font-semibold tracking-tight">
            Your all in one productivity suite
          </p>
        </div>
        <button className="text-sm absolute left-6 bottom-7 xs:left-8 xs:bottom-9 px-4 py-1.5 bg-[#4483FD] text-white font-semibold rounded-full">
          Learn More →
        </button>
      </div>
      {/* <hr className="border-none w-full h-0.5 bg-gray-200 my-4" /> */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold text-gray-500 mt-4 mb-2">
          Projects:
        </h2>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 -mx-4">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
