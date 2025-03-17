import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

const data = {
  home: {
    name: "Joshua Inyang",
    description:
      "I Fix, Optimize & Build #Software as a Full-stack #Mobile & #Web Engineer                - Powered by #AI", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "http://github.com/bouncei",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/joshua-inyang-2753841b7",
        icon: Linkedin,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/bouncey__/",
        icon: Instagram,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Music Yarn",
        description:
          "Yarn is a music application designed to revolutionize fan engagement and simplify artist discovery. \n\n By integrating hierarchical forum-style discussions and robust artist profiles, Yarn connects fans not only with their favorite artists & songs but also with one another, fostering a vibrant community.",
        image: "/projects-imgs/yarn.png",
        previewLink: "https://musicyarns.com",
      },
      {
        id: 2,
        title: "Fusion AI",
        description:
          "The ultimate AI-powered platform for all your creative needs. \n\n Whether it's generating stunning images, writing code, producing videos, composing music, or engaging in meaningful conversations, FusionAI has got you covered.",
        image: "/projects-imgs/fusionAI.png",
        previewLink: "https://fusion-ai-iota.vercel.app",
      },
      {
        id: 3,
        title: "Troc2Work",
        description:
          "TrocToWork is a user-friendly platform that facilitates the connection between companies that have goods or skills to share. \n\n With TrocToWork, the exchange of goods and services can strengthen ties in the community. By creating this platform, the goal was to contribute to the life of professional community, and to have a positive impact to consumers",
        image: "/projects-imgs/ttw.png",
        previewLink: "https://troc-to-work.fr",
      },
      {
        id: 4,
        title: "Coingecko Listing Bot",
        description:
          "A telegram bot for providing price signals for the latest crypto coins listed in Coingecko.",
        image: "/projects-imgs/coingecko.png",
        previewLink: "https://t.me/CG_fastest_alerts",
      },
      {
        id: 5,
        title: "Next.js 15 Supabase Starter Template",
        description:
          "A modern, production-ready Next.js 15 template with Zustand, Supabase, TailwindCSS, ShadCN, \n\n and Framer Motion for smooth development. Open for collaboration!",
        image: "/projects-imgs/nextjs15-supabase-template.png",
        previewLink: "https://nextjs15-supabase-template.vercel.app",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },

      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 12,
        name: "figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 13,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 15,
        name: "mongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
      {
        id: 16,
        name: "supabase",
        src: "/skills/supabase.svg",
        link: "https://en.wikipedia.org/wiki/supabase",
      },
      {
        id: 17,
        name: "expo",
        src: "/skills/expo.svg",
        link: "https://en.wikipedia.org/wiki/expo",
      },
      {
        id: 18,
        name: "android",
        src: "/skills/android.svg",
        link: "https://en.wikipedia.org/wiki/android",
      },
      {
        id: 19,
        name: "flutter",
        src: "/skills/flutter.svg",
        link: "https://en.wikipedia.org/wiki/flutter",
      },
      {
        id: 20,
        name: "python",
        src: "/skills/python.svg",
        link: "https://en.wikipedia.org/wiki/python",
      },
      {
        id: 21,
        name: "redis",
        src: "/skills/redis.svg",
        link: "https://en.wikipedia.org/wiki/redis",
      },
    ],
  },
  contact: {
    email: "joshuainyang255@gmail.com",
  },
};

export default data;
