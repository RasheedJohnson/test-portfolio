"use client";

import { Description } from "@radix-ui/react-dialog";
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
} from "react-icons/si";
import aboutMeText from "./aboutme";

const about = {
  title: "About me",
  description: aboutMeText,
};

const page = () => {
  return (
    <div>
      <h1>Resume</h1>
    </div>
  );
};

export default page;
