import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


import CBT_IT from "../components/assets/photos/projects_photos/CBT_IT.png";
import ICIT from "../components/assets/photos/projects_photos/ICIT.png";
import iScape from "../components/assets/photos/projects_photos/iScape.png";
import Mercari from "../components/assets/photos/projects_photos/Mercari.png";
import Snapfood from "../components/assets/photos/projects_photos/Snapfood.png";
import Hypnotherapy from "../components/assets/photos/projects_photos/Hypnotherapy.jpg";
import CTIP from "../components/assets/photos/projects_photos/CTIP.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-end Developer",
    location: "Miami, FL",
    description:
      "I graduated after 6 years of studying. I immediately found a job as a front-end developer in a local company.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "Full-Stack Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years, but i decided to move forward , and started to learn Back-end and React-Native. After 2 years i found a job as a Full-Stack Developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CTIP",
    description:
    "Produced dynamic web pages based on the design file from Figma \n- Built application programming interfaces (APIs)",
    tags: ["Amazon Web Services", "Node.js", "Tailwind", "CSS", "TypeScript", "Next.js",],
    imageUrl: CTIP,
    link: "https://www.ctipractices.com/",
  },
  {
    title: "Clear Minds",
    description:
    "Clear Minds is the perfect Hybrid app for beginners who starting their hypnotherapy journey. It has friendly user interface, and nice functional side.",
    tags: ["Hybrid App", "TypeScript", "JavaScript", "React Native", "Node.js"],
    imageUrl: Hypnotherapy,
    link: "https://clearmindshypnotherapy.com/",
  },

  {
    title: "CBT/IT Training Website",
    description:
    "An enjoyable IT Educational project where I served as a Senior Front-End developer.",
    tags: ["React", "TypeScript", "Next.js", "AWS", "Next.js"],
    imageUrl: CBT_IT,
    link: "https://www.cbtnuggets.com/",
  },
  {
    title: "Snapfood",
    description:
    "I've worked with RESTful architecture, React Native, Firebase for backend, and TypeScript/JavaScript.",
    tags: ["React", "TypeScript", "Hybrid App Development", "React Native", "Firebase"],
    imageUrl: Snapfood,
    link: "https://bit.ly/Snapfoodd",
  },

  {
    title: "Mercari",
    description:
    "Mercari is a huge project where I was developing an online marketplace platform as a part of a big team.",
    tags: ["HTML5", "JavaScript", "MongoDB", "CSS", "Next.js", "Bootstrap", "ExpressJS"],
    imageUrl: Mercari,
    link: "https://www.mercari.com/",
  },
  {
    title: "iScape",
    description:
    "My biggest and most significant project.\n 400k+ Downloads on Appstore and Google Play.",
    tags: ["Hybrid App Development", "React", "React Native", "Twilio", "AWS", "Firebase", "Node.js"],
    imageUrl: iScape,
    link: "https://www.iscapeit.com",
  },
  {
    title: "ICIT",
    description:
      "Made visual design, animations,feedback system and tailor-made email alerts.",
    tags: ["HTML5", "React", "CSS", "JavaScript", "Bootstrap", "Express"],
    imageUrl: ICIT,
    link: "https://landing-pages.icit-corp.com/",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "SaaS",
  "BootStrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Nest.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Redux-toolkit",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "SQL",
  "Framer Motion",
  "Rest-full API",
  "API integration",
  "Charts",
  "AWS",
  "Firebase",
] as const;
