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

// About Data
const about = {
  title: "About me",
  description: aboutMeText,
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
      degree: "CS50 Python (CS50’s Introduction to Programming with Python)",
      duration: "August 2024",
    },
    {
      institution: "CS50, Harvard",
      degree: "CS50x (CS50’s Introduction to Computer Science)",
      duration: "In Progress",
    },
  ],
};

// Skills Data
const Skills = {
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
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const page = () => {
  return (
    <div>
      <h1>Resume</h1>
    </div>
  );
};

export default page;
