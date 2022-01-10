import { SiDribbble, SiGithub } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import LinkTag from "../components/LinkTag";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold">
        Hi 👋! I&apos;m Michael Tong,
        <br />
        <div className="text-xl md:text-2xl leading-6 text-gray-500 font-normal">
          a full stack developer and designer from Hong Kong 🌆.
        </div>
      </h1>
      <div className="flex gap-2 mt-8 flex-wrap">
        <LinkTag
          icon={<SiGithub />}
          title="Github"
          link="https://github.com/Kerbodine"
        />
        <LinkTag
          icon={<SiDribbble />}
          title="Dribbble"
          link="https://dribbble.com/Kerbodine"
        />
        <LinkTag
          icon={<FiMail />}
          title="Email"
          link="mailto:contact.michaeltong@gmail.com"
        />
      </div>
      <hr className="border-none w-full h-0.5 bg-gray-200 my-8" />
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Projects:</h2>
        <div className="grid gap-2 md:gap-8 grid-cols-1 md:grid-cols-2 -mx-4">
          <Project
            title="FocalTimer"
            icon="📝"
            color="bg-red-100"
            description="To-do list and notes app for students"
            link="/projects/focaltimer"
          />
          <Project
            title="Bauhaus Pattern Generator"
            icon="🖼️"
            color="bg-green-100"
            description="Bauhaus style svg patterns generated with Turtle"
            link="/projects/bauhaus-pattern-generator"
          />
          <Project
            title="Docs to Markdown"
            icon="📋"
            color="bg-indigo-100"
            description="Simple API to convert google docs into markdown"
            link="#"
          />
          <Project
            title="Python Blooket Cafe"
            icon="☕"
            color="bg-yellow-100"
            description="Blooket Cafe clone built with Pygame"
            link="https://github.com/Kerbodine/Blooket-Cafe-Clone"
          />
          <Project
            title="Project 5"
            icon="🎆"
            color="bg-purple-100"
            description="Coming soon..."
            link="#"
          />
          <Project
            title="Project 6"
            icon="📘"
            color="bg-blue-100"
            description="Coming soon..."
            link="#"
          />
        </div>
      </div>
    </>
  );
}
