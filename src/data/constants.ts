export enum SkillNames {
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  GITHUB = "github",
  GIT = "git",
  TYPESCRIPT = "ts",
  LINUX = "linux",
  VERCEL = "vercel",
  CANVA = "canva",
  PRETTIER = "prettier",
  HTML = "html",
  CSS = "css",
  NPM = "npm",
  JS = "js",
  MYSQL = "sql",
  BOOTSTRAP = "bootstrap",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.REACT]: {
    id: 1,
    name: "react",
    label: "React",
    shortDescription: "React: The magic wand that makes your UI *so* interactive! ⚡✨",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 2,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Next.js: The drama queen of frameworks, serving SSR like no one else 👑📜",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 3,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Tailwind: Utility-first classes that’ll style your code like a *boss* 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 4,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Node.js: Where JavaScript goes rogue and runs your backend like a champ 🔙🔛",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 5,
    name: "express",
    label: "Express",
    shortDescription: "Express: The lightning-fast Node.js framework that says 'Let’s get this bread' 🏃‍♂️💨",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 6,
    name: "github",
    label: "GitHub",
       shortDescription: "GitHub: Where code meets magic (aka pull requests). 🐙✨",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.GIT]: {
    id: 7,
    name: "git",
    label: "Git",
    shortDescription: "Git: The personal bodyguard of your code. Keeps it safe, organized, and drama-free 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.TYPESCRIPT]: {
    id: 8,
    name: "ts",
    label: "TypeScript",
    shortDescription: "TypeScript: JavaScript, but with a PhD in safety. Ain’t no errors on my watch! 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
   [SkillNames.LINUX]: {
    id: 9,
    name: "linux",
    label: "Linux",
    shortDescription: "Linux: The beast of computing. Welcome to the command line jungle 🐧💻",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 10,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Vercel: Where you deploy, and suddenly everything is *smooth* like butter 🧈🚀",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.CANVA]: {
    id: 11,
    name: "canva",
    label: "Canva",
    shortDescription: "Canva: Design like a pro, even if you’re *definitely* not one 🎨✨",
    color: "#00c4cc",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 12,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Prettier: Making your code look like a work of art. 🎨🔥",
    color: "#f7b93e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.HTML]: {
    id: 13,
    name: "html",
    label: "HTML",
    shortDescription: "HTML: The foundation of the web. It’s like the walls of your house, but cooler 🏠✨",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 14,
    name: "css",
    label: "CSS",
    shortDescription: "CSS: The flair, the style, the sass. Making the web pretty since forever 👗🎨",
    color: "#264de4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.NPM]: {
    id: 15,
    name: "npm",
    label: "NPM",
    shortDescription: "NPM: The plug for all your dependencies. Plugging in like a boss 🔌📦",
    color: "#cb3837",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.JS]: {
    id: 16,
    name: "js",
    label: "JavaScript",
    shortDescription: "JS: The party starter of the web. 🎉⚡️",
    color: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 17,
    name: "sql",
    label: "SQL",
    shortDescription: "SQL: The language that talks to your database. 'SELECT * FROM life' 😎💾",
    color: "#00758f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 18,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "Bootstrap: Quick styling, no hustle. 💅🚀",
    color: "#7952b3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
};


export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
