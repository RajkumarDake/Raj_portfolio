"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center px-6 md:px-20 mt-24 md:mt-52 mb-10 w-full z-[20] gap-8 md:gap-0"
    >
      {/* IMAGE — right on desktop (slight left shift), top on mobile */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="shrink-0 flex justify-start items-center order-1 md:order-last md:w-[38%]"
      >
        <div className="relative w-[180px] h-[180px] md:w-[420px] md:h-[420px]">
          <div className="absolute inset-[-20px] md:inset-[-40px] rounded-full bg-gradient-to-r from-purple-600/50 to-cyan-500/50 blur-3xl" />
          <div className="absolute inset-[-10px] md:inset-[-20px] rounded-full bg-gradient-to-r from-purple-500/40 to-cyan-500/40 blur-2xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#030014]">
              <Image
                src="/profile.jpeg"
                alt="Rajkumar Dake"
                width={420}
                height={420}
                className="w-full h-full object-cover object-top md:scale-110"
                draggable={false}
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full pointer-events-none shadow-[0_0_50px_15px_rgba(112,66,248,0.7),0_0_100px_30px_rgba(112,66,248,0.4),0_0_160px_50px_rgba(0,210,255,0.25)]" />
        </div>
      </motion.div>

      {/* TEXT — right on desktop, bottom on mobile */}
      <div className="md:w-[62%] min-w-0 flex flex-col gap-4 justify-center text-center md:text-start order-2 md:order-first md:pl-40">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 shrink-0" />
          <h1 className="Welcome-text text-[11px] md:text-[13px]">
            Software Engineer · NIT Jamshedpur · InfoEdge
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              LLM-powered
            </span>
            <br />
            AI systems
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 max-w-[600px] mx-auto md:mx-0"
        >
          Software Engineer at InfoEdge India Ltd, building AI infrastructure
          for the 99acres platform — MCP servers, agentic pipelines, RAG
          systems, and LLM-driven automation. B.Tech CSE, NIT Jamshedpur
          (CGPA: 8.02). Codeforces Specialist · CodeChef 4★ · 2000+ problems.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-3 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="py-2 px-5 md:px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm md:text-base"
          >
            View Projects
          </a>
          <a
            href="mailto:rajkumardakey831@gmail.com"
            className="py-2 px-5 md:px-6 border border-[#7042f88b] text-center text-gray-300 cursor-pointer rounded-lg hover:border-purple-500 transition text-sm md:text-base"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
