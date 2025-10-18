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
import SkillBlock from "@/components/SkillBlock";

const About = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-2 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-2 xl:gap-5">
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
                          className="bg-[#232329] h-[240px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
                {/* Languages */}
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-2xl font-bold">Languages</h3>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.languages.map((skill, index) => {
                    return (
                      <li key={index}>
                        <SkillBlock icon={skill.icon} name={skill.name} />
                      </li>
                    );
                  })}
                </ul>

                {/* Tools */}
                <div className="flex flex-col mt-6 gap-[30px] text-center xl:text-left">
                  <h3 className="text-2xl font-bold">Tools and Frameworks</h3>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.tools.map((tool, index) => {
                    return (
                      <li key={index}>
                        <SkillBlock icon={tool.icon} name={tool.name} />
                      </li>
                    );
                  })}
                </ul>

                {/* Databases */}
                <div className="flex flex-col mt-6 gap-[30px] text-center xl:text-left">
                  <h3 className="text-2xl font-bold">
                    Databases and Database Design
                  </h3>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.databases.map((tool, index) => {
                    return (
                      <li key={index}>
                        <SkillBlock icon={tool.icon} name={tool.name} />
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
              <ScrollArea className="h-[830px] rounded-lg">
                <div className="fex flex-col gap-[30px]">
                  <h3 className="text-4xl  font-bold sticky top-0 bg-primary/95 backdrop-blur-lg py-4">
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 my-8 p-5">
                    Based in Cape Town, South Africa, my journey into software
                    development began not with a conventional start, but at the
                    compelling interest in tinkering with microcontrollers and C
                    programming. This hands-on curiosity quickly crystallized
                    into a clear desire to solve tangible, real-world problems.
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8 p-5">
                    This pursuit left me with the ambition to learn more and
                    continuously refine my newly developed skills. I
                    transitioned from frameworks like Bootstrap to TailwindCSS,
                    and shifted from traditional MERN and PERN stack development
                    to the stability of Next.js, seeking a robust and reliable
                    tech stack. Along the way, I've built diverse personal
                    projects—from specialized databases to custom account
                    managers—but my core focus remains.
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8 p-5">
                    My largest and most ambitious project currently addresses
                    significant inefficiencies within the healthcare systems of
                    developing countries such as South Africa. This initiative
                    is driven by the conviction that reliable, affordable
                    technology (which currently exists) can profoundly impact
                    patients and medical professionals alike.
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
