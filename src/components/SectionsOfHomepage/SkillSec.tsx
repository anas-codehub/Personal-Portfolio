"use client";
import React from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
];

export default function SkillSec() {
  return (
    <section className="py-20 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-mono text-green-400 mb-6">&gt;_ skills</h2>
        <p className="text-gray-400 font-mono max-w-2xl mx-auto mb-12">
          Technologies I use to craft fast, scalable, and modern web
          applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00FF7F" }}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-green-400 bg-[#0D1117] hover:bg-[#0F141B] transition-all duration-300"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-green-400 font-mono">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
