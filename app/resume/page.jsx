"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiExpress,
  SiMongodb,
  SiSqlite,
  SiC,
} from "react-icons/si";
import aboutMeText from "./aboutme";

// About Data
const about = {
  title: "About me",
  descriptionOne:
    "I'm Rasheed, a software developer from Cape Town, South Africa. My passion for programming began shortly after high school. While working as a freelance portrait painter during the day, I spent most of my nights tinkering with electronics and familiarising myself with microcontrollers and C programming. Once it became clear that I could develop the skills required to solve (or work toward solving) real world problems, I began improving my skills.",
  descriptionTwo:
    "This sparked a deeper interest in the field. Thereafter, I found myself refining my craft with regular practice, incorporating various frameworks, languages and tools. I quickly transitioned from Bootstrap to Tailwindcss, enabling me to fine-tune designs. That was followed by a shift from Express within standard MERN stack development to Next.js for its developer experience and community. It was a journey toward finding a reliable and stable tech stack. During this journey, I've developed various personal projects, apps and tools to improve my daily life as well as the lives of those around me. These projects range from a terminology database for a psychology course to an account manager built with Python, SQLite3, and CustomTkinter. The largest project, currently still in developement, attempts to offer solutions to a variety of problems and inconveniences in health care. This is also the project I am currently most focused on.",
  descriptionThree:
    "I haven't stopped learning since the beginning of this journey, and still remain focused on constantly improving, be it through completing effective online courses or practicing by building using newly acquired skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rasheed Johnson",
    },
    {
      fieldName: "Phone",
      fieldValue: "-",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ years",
    },
    {
      fieldName: "Email",
      fieldValue: "rasheedjohnson@tutanota.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Afrikaans",
    },
  ],
};

// Education Data
const education = {
  icon: "",
  title: "My Education",
  description:
    "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "edX, IBM",
      degree: "IBM Applied AI",
      duration: "March 2021",
    },
    {
      institution: "edX, Dartmouth and Télécom ParisTech",
      degree: "C Programming with Linux",
      duration: "November 2021",
    },
    {
      institution: "CS50, Harvard",
      degree: "CS50 Python",
      duration: "August 2024",
    },
    {
      institution: "CS50, Harvard",
      degree: "CS50x (CS50’s Intro to CS)",
      duration: "In Progress",
    },
  ],
};

// Skills Data
const skills = {
  icon: "",
  title: "My Skills",
  description:
    "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiSqlite />,
      name: "SQLite3",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiC />,
      name: "c programming",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-green-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-green-300"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-green-400 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <ScrollArea className="h-[730px] shadow-xl shadow-black/20 p-6 rounded-lg">
                <div className="fex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold mb-10">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8">
                    {about.descriptionOne}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8">
                    {about.descriptionTwo}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8">
                    {about.descriptionThree}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
