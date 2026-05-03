"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const animationVariants = [slideInFromLeft(0.3), slideInFromTop, slideInFromRight(0.3)];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-8 md:py-20 px-6 md:px-16"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        My Projects
      </motion.h1>
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants[i % 3]}
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
