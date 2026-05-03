"use client";

import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "InfoEdge India Ltd",
    period: "July 2025 – Present",
    location: "Noida",
    bullets: [
      "Built and deployed an MCP server exposing AI tools for 99acres — project search, property comparison, location autocomplete, and automated ticket classification.",
      "Designed an LLM-driven feedback pipeline that reduced manual review workload by 70% and improved response turnaround time.",
      "Built a distributed task routing system coordinating multiple AI services, reducing end-to-end latency by 35% under concurrent load.",
      "Built an internal AI workflow config platform that cut feature experimentation time by 60%.",
      "Implemented secure REST APIs with RBAC, audit logging, and a real-time analytics dashboard.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "InfoEdge India Ltd",
    period: "Jan 2025 – June 2025",
    location: "Noida",
    bullets: [
      "Built a production conversational AI system handling 2000+ daily interactions with 90% automated query resolution.",
      "Designed and implemented a RAG pipeline with semantic search and document indexing for improved response relevance.",
    ],
  },
];

export const Encryption = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-8 md:py-20 px-4 md:px-10 w-full"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10"
      >
        Experience
      </motion.h1>

      <div className="flex flex-col gap-8 w-full max-w-[900px]">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            variants={i % 2 === 0 ? slideInFromLeft(0.3) : slideInFromRight(0.3)}
            className="relative border border-[#7042f88b] rounded-xl p-6 bg-[#03001480] backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-l-xl" />
            <div className="pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white">{exp.role}</h2>
                  <p className="text-purple-400 font-medium">{exp.company} · {exp.location}</p>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-gray-300 text-sm leading-relaxed">
                    <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
