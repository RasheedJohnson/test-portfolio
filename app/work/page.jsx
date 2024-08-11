"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import {
  BsArrowUpRight,
  BsChevronBarRight,
  BsChevronLeft,
  BsChevronRight,
  BsGithub,
} from "react-icons/bs";
import { ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

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
  SiC,
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPython,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";

import Link from "next/link";
import Image from "next/image";
import { FiFramer } from "react-icons/fi";

// Projects
const projects = [
  {
    num: "01",
    category: "Desktop App (Python)",
    title: "Personal Accounts Manager",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iste odit dicta magni quae nesciunt nemo officia nihil, adipisci excepturi, esse est. Incidunt id maiores laboriosam aut voluptate magnam voluptatem.",
    stack: [
      { name: "Python", icon: <FaPython /> },
      { name: "SQLite3", icon: <SiSqlite /> },
    ],
    image: "/acc_man.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "full-stack",
    title: "Psychology Study Base",
    description:
      "Magni quae nesciunt nemo officia nihil, adipisci excepturi, esse est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iste odit dicta... Incidunt id maiores laboriosam aut voluptate magnam voluptatem.",
    stack: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Framer-motion", icon: <FiFramer /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "full-stack",
    title: "veterinarian Pet Database",
    description:
      "Magni quae nesciunt nemo officia nihil, adipisci excepturi, esse est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iste odit dicta... Incidunt id maiores laboriosam aut voluptate magnam voluptatem.",
    stack: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Linux Security (C)",
    title: "Anonymous Tor Tunnel",
    description:
      "Magni quae nesciunt nemo officia nihil, adipisci excepturi, esse est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iste odit dicta... Incidunt id maiores laboriosam aut voluptate magnam voluptatem.",
    stack: [{ name: "C", icon: <SiC /> }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Full-Stack Django App",
    title: "Dev Process Manager",
    description:
      "Magni quae nesciunt nemo officia nihil, adipisci excepturi, esse est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iste odit dicta... Incidunt id maiores laboriosam aut voluptate magnam voluptatem.",
    stack: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Django", icon: <SiDjango /> },
    ],
    image: "",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [projectNum, setProjectNum] = useState(0);

  const handleNext = () => {
    if (projectNum == projects.length - 1) {
      setProjectNum(0);
    } else setProjectNum((prevNum) => prevNum + 1);
  };
  const handleBack = () => {
    if (projectNum == 0) {
      setProjectNum(projects.length - 1);
    } else setProjectNum((prevNum) => prevNum - 1);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline flex flex-row justify-between">
                <div
                  className="text-green-300 flex justify-center items-center hover:bg-white/5 transition-all ease-in-out duration-300 rounded-full p-5"
                  onClick={handleBack}
                >
                  <BsChevronLeft />
                </div>
                <div>{projects[projectNum].num}</div>
                <div
                  className=" text-green-300 flex justify-center items-center hover:bg-white/5 transition-all ease-in-out duration-300 rounded-full p-5"
                  onClick={handleNext}
                >
                  <BsChevronRight />
                </div>
              </div>

              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-300 transition-all duration-500 capitalize">
                {projects[projectNum].title}
              </h2>

              {/* Project description */}
              <p className="text-white/60">
                {projects[projectNum].description}
              </p>

              {/* Stack */}
              <ul className="flex gap-4">
                {projects[projectNum].stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-green-400">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-14 h-14 bg-[#232329] rounded-xl flex justify-center items-center">
                            <div className="text-4xl group-hover:text-green-400 transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize text-sm">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex flex-row gap-4">
                {/* Live Project Button */}
                <Link href={projects[projectNum].live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-green-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Project Button */}
                <Link href={projects[projectNum].github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsGithub className="text-white text-3xl group-hover:text-green-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <div className="h-64 relative flex justify-center items-center bg-pink-50/20">
              {/* Overlay */}
              <div></div>
              {/* Image */}
              <div>
                <Image
                  src={projects[projectNum].image}
                  fill
                  className="object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
