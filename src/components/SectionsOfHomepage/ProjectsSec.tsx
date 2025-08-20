"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-featured online store built with Next.js and Django.",
    tech: ["Next.js", "Django", "Tailwind CSS"],
    github: "https://github.com/anas-codehub/full-stack-ecommerce-app.git",
    live: "https://evilim.com/",
  },
  {
    title: "E-commerce Website",
    description: "A full-featured online store built with Next.js and Django.",
    tech: ["Next.js", "Django", "Tailwind CSS"],
    github: "https://github.com/Parvez74181/martege-frontend.git",
    live: "https://martege.com/",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my projects and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "A Landing Page",
    description:
      "A sleek, responsive landing page built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/anas-codehub/pizza-app-landing-page-code.git",
    live: "https://pizza-app-landing-page-code.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full bg-[#0D1117] flex flex-col items-center justify-center px-8 py-16 md:py-24">
      <h2 className="text-4xl font-mono text-green-400 mb-12">
        &gt;_ projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FF7F" }}
            className="flex flex-col justify-between border border-green-400 rounded-lg p-6 bg-[#0D1117] hover:bg-[#0F141B] transition-all duration-300"
          >
            <div className="mb-4">
              <h3 className="text-xl font-mono text-green-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 font-mono mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 border border-green-400 text-green-400 font-mono rounded text-xs hover:bg-green-500 hover:text-black transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 font-mono border border-green-400 px-3 py-1 rounded hover:bg-green-500 hover:text-black transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 font-mono border border-green-400 px-3 py-1 rounded hover:bg-green-500 hover:text-black transition-colors"
              >
                <ExternalLink size={16} /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
