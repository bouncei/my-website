import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { title } from "process";
import { deserialize } from "v8";

const data = {
  home: {
    name: "Joshua Inyang",
    description:
      "I Fix, Optimize & Build #Software as a Full-stack #Mobile, #Web & #Blockchain Engineer                - Powered by #AI", // # -> for css style, _ -> create space, __ -> creates dash
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
        title: "Sales Parrot",
        description:
          "Sales Parrot is an intuitive, AI-powered platform that empowers sales professionals—to scale lead generation and outreach with ease. Simply describe your ideal customer, and Sales Parrot discovers, targets, and engages them on your behalf.",
        image: "/projects-imgs/salesparrot.png",
        previewLink: "https://salesparrot.com",
      },
      {
        id: 2,
        title: "Music Yarn",
        description:
          "Yarn is a music application designed to revolutionize fan engagement and simplify artist discovery. \n\n By integrating hierarchical forum-style discussions and robust artist profiles, Yarn connects fans not only with their favorite artists & songs but also with one another, fostering a vibrant community.",
        image: "/projects-imgs/yarn.png",
        previewLink:
          "https://play.google.com/store/apps/details?id=com.thehouseofsounds.yarnapp&hl=en",
      },

      {
        id: 9,
        title: "KeenVPN - Modern VPN Service Platform",
        description:
          "KeenVPN is a secure virtual private network that protects your privacy online while helping you earn extra income.",
        image: "/projects-imgs/keenvpn.png",
        previewLink: "https://vpnkeen.com",
      },
      {
        id: 3,
        title: "Kith & Kin",
        description:
          "Kith & Kin is a beautifully designed web application that brings to life the rich legacy of the Mosuro family. Built as a heritage storytelling platform, the site combines elegant visual presentation with intuitive navigation to help users explore family history, view member profiles, and stay informed about upcoming gatherings.",
        image: "/projects-imgs/kith-kin.png",
        previewLink: "https://www.mosuro.com.ng/family-tree",
      },
      {
        id: 4,
        title: "LSE Properties",
        description:
          "LSE Properties is a modern real estate platform showcasing luxury properties in Nigeria. \n\n Built with Next.js with a sleek UI, it features detailed property listings, virtual tours, and seamless inquiry system for potential buyers and renters to connect with agents.",
        image: "/projects-imgs/lse.png",
        previewLink: "https://www.propertiesbylse.com",
      },
      {
        id: 5,
        title: "Troc2Work",
        description:
          "TrocToWork is a user-friendly B2B platform that facilitates the connection between companies that have goods or skills to share. \n\n With TrocToWork, the exchange of goods and services can strengthen ties in the community. By creating this platform, the goal was to contribute to the life of professional community, and to have a positive impact to consumers",
        image: "/projects-imgs/ttw.png",
        previewLink: "https://troc-to-work.fr",
      },

      {
        id: 7,
        title: "Coingecko Listing Bot",
        description:
          "A telegram bot for providing price signals for the latest crypto coins listed in Coingecko.",
        image: "/projects-imgs/coingecko.png",
        previewLink: "https://t.me/CG_fastest_alerts",
      },
      {
        id: 8,
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
