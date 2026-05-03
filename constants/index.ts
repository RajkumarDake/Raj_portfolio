import {
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Row 1 — widest (8)
export const SKILL_DATA = [
  { skill_name: "Python", image: "python.svg", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "FastAPI", image: "fastapi.svg", width: 80, height: 80 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/RajkumarDake",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/rajkumar-dake",
  },
] as const;

// Row 2 — medium (6)
export const FRONTEND_SKILL = [
  { skill_name: "React Native", image: "reactnative.png", width: 70, height: 70 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "PyTorch", image: "pytorch.svg", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "Git", image: "git.svg", width: 80, height: 80 },
] as const;

// Row 3 — narrowest (4)
export const BACKEND_SKILL = [
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "GitHub", image: "github.svg", width: 80, height: 80 },
  { skill_name: "Linux", image: "linux.svg", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [] as const;

export const OTHER_SKILL = [] as const;

export const PROJECTS = [
  {
    title: "LLM Agent Platform",
    description:
      "Tool-augmented LLM agent capable of executing tasks like document search and API queries using LangChain and OpenAI APIs. Includes a RAG pipeline with FAISS vector search and embeddings for context-aware responses.",
    image: "/projects/project-1.png",
    link: "https://github.com/RajkumarDake",
  },
  {
    title: "Multi-Agent Log Intelligence",
    description:
      "Multi-agent system built with LangGraph to analyze distributed logs. Agents handle anomaly detection, root cause analysis, and incident summarization across distributed systems.",
    image: "/projects/project-2.png",
    link: "https://github.com/RajkumarDake",
  },
  {
    title: "MCP Server — 99acres AI Tools",
    description:
      "Model Context Protocol server exposing AI tools for the 99acres platform: project search, property comparison, location autocomplete, sales assistant workflows, and automated ticket classification.",
    image: "/projects/project-3.png",
    link: "https://github.com/RajkumarDake",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/RajkumarDake",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/rajkumar-dake",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
    ],
  },
  {
    title: "Navigate",
    data: [
      { name: "About Me", icon: null, link: "#about-me" },
      { name: "Experience", icon: null, link: "#experience" },
      { name: "Skills", icon: null, link: "#skills" },
      { name: "Projects", icon: null, link: "#projects" },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "rajkumardakey831@gmail.com",
        icon: null,
        link: "mailto:rajkumardakey831@gmail.com",
      },
      {
        name: "+91 7569009619",
        icon: null,
        link: "tel:+917569009619",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Experience", link: "#experience" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

export const LINKS = {
  resume: "/resume",
};
