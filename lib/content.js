import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaEraser,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiMongodb,
  SiSqlite,
  SiC,
  SiJavascript,
  SiMongoose,
  SiPython,
  SiVite,
  SiFramer,
  SiDaisyui,
  SiBlender,
  SiPytest,
  SiFirebase,
} from "react-icons/si";
import aboutMeText from "./aboutme";
import { FiFramer } from "react-icons/fi";

// Education
const education = {
  icon: "",
  title: "My Education",
  description:
    "Alongside the projects I've developed, remaining committed to acquiring professional certificates has both maintained a keen interest in learning and provided me with opportunities to prove my skillset",
  items: [
    {
      institution: "edX, IBM",
      degree: "IBM Applied AI",
      duration: "March 2021",
    },
    {
      institution: "edX, Dartmouth and Télécom ParisTech",
      degree: "Professional C Programming with Linux",
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
    {
      institution: "DeepLearning.ai",
      degree: "Machine Learning Specialisation",
      duration: "In Progress",
    },
  ],
};

// Skills Data
const skills = {
  icon: "",
  title: "My Skills",
  description:
    "Here you'll find languages, tools and frameworks with which I've familiarised myself during the last 6+ years",
  languages: [
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
      icon: <SiC />,
      name: "c programming",
    },
  ],
  tools: [
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
      icon: <SiPytest />,
      name: "Pytest",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiVite />,
      name: "Vite",
    },
    {
      icon: <SiFramer />,
      name: "Framer",
    },
    {
      icon: <SiDaisyui />,
      name: "Daisy UI",
    },
    {
      icon: <SiBlender />,
      name: "Blender",
    },
  ],
  databases: [
    {
      icon: <FaEraser />,
      name: "Eraser IO",
    },
    {
      icon: <SiSqlite />,
      name: "SQLite3",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiMongoose />,
      name: "mongoose",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
  ],
};

// Projects
const projects = [
  {
    num: "01",
    category: "Desktop App (Python)",
    title: "Personal Accounts Manager",
    description:
      "Accounts management desktop app intended to be run from encrypted storage devices. The app enables users to store and easily access personal account details, including passwords",
    stack: [
      { name: "Python", icon: <FaPython /> },
      { name: "SQLite3", icon: <SiSqlite /> },
    ],
    image: "/account_manager.png",
    live: "",
    github: "https://github.com/RasheedJohnson/acc-man",
  },
  {
    num: "02",
    category: "front-end",
    title: "Psych Study database (V1)",
    description:
      "A collection of definitions, questions, and answers from the 13th edition of the Psychology bachelor’s textbook. It was developed to assist German and English speaking students new to the field, enabling them to study anywhere at their convenience.",
    stack: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    image: "/psych_base.png",
    live: "https://psych-base.vercel.app/",
    github: "https://github.com/RasheedJohnson/psych_base",
  },
  {
    num: "03",
    category: "full-stack (In development)",
    title: "Education Database",
    description:
      "Database of information from various books in different fields to help students study for exams and add to the database.",
    stack: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
    image: "/404.png",
    live: "",
    github: "https://github.com/RasheedJohnson/edu-base",
  },
  // {
  //   num: "04",
  //   category: "full-stack",
  //   title: "veterinarian Pet Database",
  //   description:
  //     "Magni quae nesciunt nemo officia nihil, adipisci excepturi, esse est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iste odit dicta... Incidunt id maiores laboriosam aut voluptate magnam voluptatem.",
  //   stack: [
  //     { name: "JavaScript", icon: <SiJavascript /> },
  //     { name: "MongoDB", icon: <SiMongodb /> },
  //     { name: "TailwindCSS", icon: <SiTailwindcss /> },
  //     { name: "Next.js", icon: <SiNextdotjs /> },
  //     { name: "Node.js", icon: <FaNodeJs /> },
  //     { name: "Mongoose", icon: <SiMongoose /> },
  //   ],
  //   image: "",
  //   live: "",
  //   github: "",
  // },
  // {
  //   num: "05",
  //   category: "Linux Security (C)",
  //   title: "Anonymous Tor Tunnel",
  //   description:
  //     "Magni quae nesciunt nemo officia nihil, adipisci excepturi, esse est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iste odit dicta... Incidunt id maiores laboriosam aut voluptate magnam voluptatem.",
  //   stack: [{ name: "C", icon: <SiC /> }],
  //   image: "",
  //   live: "",
  //   github: "",
  // },
  // {
  //   num: "06",
  //   category: "Full-Stack Django App",
  //   title: "Dev Process Manager",
  //   description:
  //     "Magni quae nesciunt nemo officia nihil, adipisci excepturi, esse est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi iste odit dicta... Incidunt id maiores laboriosam aut voluptate magnam voluptatem.",
  //   stack: [
  //     { name: "JavaScript", icon: <SiJavascript /> },
  //     { name: "Python", icon: <SiPython /> },
  //     { name: "Django", icon: <SiDjango /> },
  //   ],
  //   image: "",
  //   live: "",
  //   github: "",
  // },
];

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

module.exports = {
  education,
  skills,
  projects,
  about,
};
