"use client";

// Import content
import { education, skills, projects, about } from "@/lib/content";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="work">Work</TabsTrigger>
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
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[195px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 xl:gap-[30px]">
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
              <ScrollArea className="h-[830px] shadow-xl shadow-black/20 rounded-lg">
                <div className="fex flex-col gap-[30px]">
                  <h3 className="text-4xl text-green-400 font-bold sticky top-0 backdrop-blur-md bg-primary/80 shadow-xl py-4">
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 my-8 p-5">
                    {about.descriptionOne}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8 p-5">
                    {about.descriptionTwo}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8 p-5">
                    {about.descriptionThree}
                  </p>
                  <div className=" w-[300px] xl:w-[400px] border-b-[1px] border-green-800 mx-auto xl:ml-5 my-14 " />
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 mb-8">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex flex-col justify-center xl:justify-start gap-1 pl-5"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-lg">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </ScrollArea>
            </TabsContent>

            {/* Work */}
            <TabsContent value="work" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">My Projects</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  Projects I've worked on recently. The following includes those
                  still in development.
                </p>
                <section className="h-full">
                  <ul className="grid grid-cols-1 mb-7 gap-[30px]">
                    {projects.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-min py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="flex flex-col lg:flex-row md:ml-0 items-center md:justify-start gap-8">
                            <div className="flex flex-col justify-between h-[200px]">
                              {/* Category */}
                              <span className="text-green-300">
                                {item.category}
                              </span>

                              {/* Title */}
                              <h3 className="text-xl max-w-[260px] min-h-[60px] mx-auto lg:ml-0">
                                {item.title}
                              </h3>

                              {/* Tech Stack */}
                              <ul className="flex gap-4 max-w-[380px] flex-wrap">
                                {item.stack.map((stackItem, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="text-sm text-green-400"
                                    >
                                      <div className="text-4xl group-hover:text-green-400 transition-all duration-300">
                                        {stackItem.icon}
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                              <div></div>
                            </div>

                            {/* Image */}
                            <div className="h-[200px] w-[390px] w-md:w-[450px] xl:w-[360px] relative flex justify-center items-center rounded-lg">
                              {/* Image */}
                              <Image
                                src={item.image}
                                fill
                                className="object-contain"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-4">
                            <Link href={item.live}>
                              <BsArrowUpRight className="text-white text-3xl group-hover:text-green-300" />
                            </Link>
                            <Link href={item.github}>
                              <BsGithub className="text-white text-3xl group-hover:text-green-300" />
                            </Link>
                          </div>
                          <p className="text-white/60">{item.description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
