import { SiBehance, SiDribbble, SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import LinkTag from "../components/LinkTag";
import Project from "../components/Project";
import Link from "next/link";
import Head from "next/head";

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
      link: "https://apogee-academy.vercel.app/",
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
      title: "Bauhaus Pattern Generator",
      icon: "🎨",
      color: "bg-amber-100",
      description: "Bauhaus style SVG generator in the browser",
      link: "https://bauhaus-pattern.netlify.app/",
    },
    {
      title: "Worldle Clone",
      icon: "🧩",
      color: "bg-green-100",
      description: "Worldle remade with React and Tailwind",
      link: "https://react-wordle.netlify.app/",
    },
    {
      title: "Half-life Calculator",
      icon: "🔮",
      color: "bg-fuchsia-100",
      description: "Calculator for solving nuclear decay questions",
      link: "https://decay-calc.netlify.app/",
    },
  ];

  return (
    <>
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
      <hr className="border-none w-full h-0.5 bg-gray-200 my-4" />
      <div>
        <h2 className="text-lg md:text-xl font-semibold text-gray-500 mt-6 mb-2">
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
