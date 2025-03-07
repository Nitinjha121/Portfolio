import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
  SiJest,
  SiJenkins,
  SiKeycloak,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiPython,
  SiSass,
  SiDjango,
  SiExpress,
  SiGit,
  SiFlutter,
  SiDart,
  SiCplusplus,
  SiGo,
  SiPostgresql,
  SiRedux,
  SiServerless,
  SiRecoil,
  SiLoopback,
  SiPuppeteer,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SkillCategory } from "../enum";

export const skills = [
  // Featured Skills
  {
    name: "React",
    icon: <SiReact className="h-6 w-6" />,
    description: "Building modern web applications with React ecosystem",
    category: SkillCategory.Frontend,
    featured: true,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="h-6 w-6" />,
    description: "Server-side JavaScript runtime for scalable applications",
    category: SkillCategory.Backend,
    featured: true,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-6 w-6" />,
    description: "Static typing for large-scale JavaScript applications",
    category: SkillCategory.Languages,
    featured: true,
  },

  {
    name: "AWS",
    icon: <FaAws className="h-6 w-6" />,
    description: "Cloud infrastructure and serverless architecture",
    category: SkillCategory.DevOps,
    featured: true,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-6 w-6" />,
    description: "React framework for production-grade applications",
    category: SkillCategory.Frontend,
    featured: true,
  },
  {
    name: "LoopBack", // Added LoopBack here
    icon: <SiLoopback className="h-6 w-6" />, // Node.js icon can be used for LoopBack
    description:
      "Powerful Node.js framework for building APIs and microservices",
    category: SkillCategory.Backend,
  },
  // Frontend Skills
  {
    name: "HTML5",
    icon: <SiHtml5 className="h-6 w-6" />,
    description: "Fundamental markup language for web development",
    category: SkillCategory.Frontend,
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="h-6 w-6" />,
    description: "Styling and layout for web applications",
    category: SkillCategory.Frontend,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="h-6 w-6" />,
    description: "Core programming language for web development",
    category: SkillCategory.Frontend,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-6 w-6" />,
    description: "Utility-first CSS framework",
    category: SkillCategory.Frontend,
  },
  {
    name: "Sass",
    icon: <SiSass className="h-6 w-6" />,
    description: "Advanced CSS preprocessor",
    category: SkillCategory.Frontend,
  },
  {
    name: "React Native",
    icon: <SiReact className="h-6 w-6" />,
    description: "Mobile app development with React",
    category: SkillCategory.Frontend,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="h-6 w-6" />,
    description: "Cross-platform UI development framework",
    category: SkillCategory.Frontend,
  },
  // Backend Skills
  {
    name: "Express.js",
    icon: <SiExpress className="h-6 w-6" />,
    description: "Fast, unopinionated web framework for Node.js",
    category: SkillCategory.Backend,
  },
  {
    name: "Django",
    icon: <SiDjango className="h-6 w-6" />,
    description: "High-level Python web framework",
    category: SkillCategory.Backend,
  },
  {
    name: "Python",
    icon: <SiPython className="h-6 w-6" />,
    description: "Versatile programming language",
    category: SkillCategory.Backend,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="h-6 w-6" />,
    description: "NoSQL database for modern applications",
    category: SkillCategory.Backend,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="h-6 w-6" />,
    description: "Advanced open source database",
    category: SkillCategory.Backend,
  },
  {
    name: "Redis",
    icon: <SiRedis className="h-6 w-6" />,
    description: "In-memory data structure store and cache",
    category: SkillCategory.Backend,
  },
  {
    name: "Puppeteer",
    icon: <SiPuppeteer className="h-6 w-6" />, // You'll need to import or create this icon
    description: "Node library for browser automation and web scraping",
    category: SkillCategory.Backend, // This can be changed depending on where you prefer to place it
  },
  // DevOps Skills
  {
    name: "Jenkins",
    icon: <SiJenkins className="h-6 w-6" />,
    description: "Continuous Integration and Deployment",
    category: SkillCategory.DevOps,
  },
  {
    name: "Git",
    icon: <SiGit className="h-6 w-6" />,
    description: "Version control system",
    category: SkillCategory.DevOps,
  },
  {
    name: "Serverless",
    icon: <SiServerless className="h-6 w-6" />,
    description: "Serverless architecture and development",
    category: SkillCategory.Backend,
    featured: true,
  },
  {
    name: "Keycloak",
    icon: <SiKeycloak className="h-6 w-6" />,
    description: "Identity and access management",
    category: SkillCategory.DevOps,
  },
  // Languages
  {
    name: "Dart",
    icon: <SiDart className="h-6 w-6" />,
    description: "Programming language for Flutter",
    category: SkillCategory.Languages,
  },
  {
    name: "C++",
    icon: <SiCplusplus className="h-6 w-6" />,
    description: "Systems programming language",
    category: SkillCategory.Languages,
  },
  {
    name: "GoLang",
    icon: <SiGo className="h-6 w-6" />,
    description: "Efficient and scalable programming language",
    category: SkillCategory.Languages,
  },
  // State Management
  {
    name: "Redux",
    icon: <SiRedux className="h-6 w-6" />,
    description: "State management for JavaScript apps",
    category: SkillCategory.Frontend,
  },
  {
    name: "Recoil",
    icon: <SiRecoil className="h-6 w-6" />,
    description: "State management library for React",
    category: SkillCategory.Frontend,
  },
  // Testing
  {
    name: "Jest",
    icon: <SiJest className="h-6 w-6" />,
    description: "JavaScript testing framework",
    category: SkillCategory.Frontend,
  },
  // AI/ML
  {
    name: "LangChain",
    icon: <SiPython className="h-6 w-6" />, // Using Python icon as placeholder
    description: "Framework for developing LLM applications",
    category: SkillCategory.AI_ML,
  },
];
