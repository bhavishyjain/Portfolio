import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiRedux,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiMui,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  apexcharts: {
    title: "ApexCharts",
    bg: "black",
    fg: "white",
    icon: (
      <>
        {/* Light theme version (black icon) */}
        <img
          src="https://apexcharts.com/media/apexcharts-logo.png"
          alt="ApexCharts"
          className="h-6 w-6 block dark:hidden"
          style={{
            filter: "brightness(0) saturate(100%)",
          }}
        />
        {/* Dark theme version (white icon) */}
        <img
          src="https://apexcharts.com/media/apexcharts-logo.png"
          alt="ApexCharts"
          className="h-6 w-6 hidden dark:block"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg)",
          }}
        />
      </>
    ),
  },

  mui: {
    title: "MUI",
    bg: "black",
    fg: "white",
    icon: <SiMui />,
  },

  redux: {
    title: "Redux",
    bg: "black",
    fg: "white",
    icon: <SiRedux />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { // 01. Whatsify Partner Dashboard
    id: "whatsifypartnerdashboard",
    category: "Dashboard",
    title: "Whatsify Partner Dashboard",
    src: "/assets/projects-screenshots/whatsifypartnerdashboard/1.png",
    screenshots: ["landing.png", "referrals.png", "payouts.png"],
    live: "https://partner.whatsify.me/",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.mui, PROJECT_SKILLS.redux, PROJECT_SKILLS.apexcharts],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A responsive affiliate dashboard built with React, Tailwind CSS, MUI, and Redux. Includes RazorpayX payout integration, referral tracking, and earnings visualization using ApexCharts.
          </TypographyP>
          <SlideShow images={[
            `${BASE_PATH}/whatsifypartnerdashboard/1.png`,
            `${BASE_PATH}/whatsifypartnerdashboard/2.png`,
            `${BASE_PATH}/whatsifypartnerdashboard/3.png`,
            `${BASE_PATH}/whatsifypartnerdashboard/5.png`,
            `${BASE_PATH}/whatsifypartnerdashboard/4.png`,
          ]} />
        </div>
      );
    },
  },

  { // 02. Weather App Project
    id: "weatherapp",
    category: "Web Development",
    title: "Weather App",
    src: "/assets/projects-screenshots/weatherapp/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://bhavishyjain.github.io/weather-app/",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A clean and functional weather app that fetches real-time weather information using an open API.
            Displays temperature, humidity, and other essential data with a user-friendly interface.
          </TypographyP>
          <SlideShow images={[
            `${BASE_PATH}/weatherapp/1.png`,
            `${BASE_PATH}/weatherapp/2.png`,
            `${BASE_PATH}/weatherapp/3.png`,
          ]} />
        </div>
      );
    },
  },

  { // 03. Food Web Project
    id: "foodweb",
    category: "Web Development",
    title: "Food Web",
    src: "/assets/projects-screenshots/foodweb/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://bhavishyjain.github.io/food-web/",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An engaging food ordering website where users can browse dishes, view categories, and place mock orders.
            Designed with smooth UI elements and responsive layouts for a delightful experience.
          </TypographyP>
          <SlideShow images={[
            `${BASE_PATH}/foodweb/1.png`,
            `${BASE_PATH}/foodweb/2.png`,
            `${BASE_PATH}/foodweb/3.png`,
            `${BASE_PATH}/foodweb/4.png`,
          ]} />
        </div>
      );
    },
  },

  { // 04. Personal Portfolio Project
    id: "personalportfolio",
    category: "Portfolio",
    title: "My Personal Portfolio",
    src: "/assets/projects-screenshots/personalportfolio/1.png",
    screenshots: ["landing.png", "about.png", "projects.png"],
    live: "https://bhavishyjain.vercel.app/",
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my personal portfolio! Showcasing my latest projects, skills, and experiences.
            Built with modern frontend technologies and a clean, minimal design to provide a smooth browsing experience.
          </TypographyP>
          <SlideShow images={[
            `${BASE_PATH}/personalportfolio/1.png`,
            `${BASE_PATH}/personalportfolio/2.png`,
            `${BASE_PATH}/personalportfolio/3.png`,
            `${BASE_PATH}/personalportfolio/4.png`,
          ]} />
        </div>
      );
    },
  },
];
export default projects;
