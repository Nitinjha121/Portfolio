import { ProjectCategory } from "@/enum";
import {
  BlueMarble_Image_Url,
  EdisonOS_Image_Url,
  FleetShip_Image_Url,
  ForteFit_Image_Url,
  Ignite_Image_Url,
  IMDB_Image_Url,
  Music_Player_Image_Url,
  TeachEdison_Image_Url,
  Unsplash_Image_Url,
} from "./urls";

export const PROJECT_CARD_TECH_LENGTH = 4;

export const projects = [
  {
    name: "FleetShip",
    description:
      "FleetShip is a logistics company that helps manage fleets efficiently.",
    technologies: [
      "React",
      "Bootstrap",
      "Typescript",
      "SingleSPA",
      "MicroFrontend",
      "Node.js",
      "Loopback",
      "Microservices",
      "Serverless",
      "AWS",
      "Jest",
    ],
    liveUrl: "https://www.fleetship.com/",
    image: FleetShip_Image_Url,
    featured: true,
    category: ProjectCategory.Work,
  },
  {
    name: "Comviva BlueMarble",
    description:
      "Comviva BlueMarble is a digital business solution for integrated BSS (Business Support Systems).",
    technologies: [
      "React",
      "MUI",
      "Typescript",
      "Node.js",
      "Microservices",
      "Loopback",
      "Keycloak",
      "Redis",
    ],
    liveUrl:
      "https://www.comviva.com/products-solutions/digitech/bluemarble-integrated-bss/",
    image: BlueMarble_Image_Url,
    featured: true,
    category: ProjectCategory.Work,
  },
  {
    name: "Forte.Fit",
    description: "Forte.Fit is a multi-tenant fitness platform.",
    technologies: [
      "React Native",
      "CSS",
      "Typescript",
      "Node.js",
      "Microservices",
      "Serverless",
      "AWS",
      "Redis",
    ],
    liveUrl: "https://www.forte.fit/",
    image: ForteFit_Image_Url,
    featured: true,
    category: ProjectCategory.Work,
  },
  {
    name: "TeachEdison",
    description: "This is the company marketing site of TeachEdison",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.teachedison.com/",
    image: TeachEdison_Image_Url,
    featured: true,
    category: ProjectCategory.Work,
  },

  {
    name: "EdisonOS",
    description:
      "This is the company SaaS product Edison, a multi-tenant LMS platform.",
    technologies: [
      "React",
      "Next.js",
      "SASS",
      "Tailwind Css",
      "Typescript",
      "Django",
      "Node.js",
      "Recoil",
      "Jest",
    ],
    liveUrl: "https://www.edisonos.com/",
    image: EdisonOS_Image_Url,
    featured: true,
    category: ProjectCategory.Work,
  },

  //Personal Projects

  {
    image: Unsplash_Image_Url,
    name: "Unsplash Clone",
    description: "Unsplash Clone Project.",
    technologies: ["Next.js", "Auth0", "Typescript"],
    liveUrl: "https://unsplash-clon.vercel.app/",
    githubLink: "https://github.com/Nitinjha121/unsplash-clone",
    category: ProjectCategory.Personal,
  },
  {
    image: IMDB_Image_Url,
    name: "IMDB Clone",
    description: "IMDB Clone Project.",
    technologies: ["React", "Framer Motion", "SAAS", "Typescript"],
    liveUrl: "https://imdb-clone12.netlify.app/",
    githubLink: "https://github.com/Nitinjha121/imdb-clone",
    category: ProjectCategory.Personal,
  },
  {
    image: Music_Player_Image_Url,
    name: "Music Player",
    description: "Basic Web Music Player.",
    technologies: ["React", "Framer Motion", "JavaScript"],
    liveUrl: "https://musicplayer121.netlify.app/",
    githubLink: "https://github.com/Nitinjha121/music-player",
    category: ProjectCategory.Personal,
  },
  {
    image: Ignite_Image_Url,
    name: "Ignite",
    description: "A game preview site.",
    technologies: ["React", "Framer Motion", "JavaScript"],
    liveUrl: "https://ignite12.netlify.app/",
    githubLink: "https://github.com/Nitinjha121/ignite",
    category: ProjectCategory.Personal,
  },
];
