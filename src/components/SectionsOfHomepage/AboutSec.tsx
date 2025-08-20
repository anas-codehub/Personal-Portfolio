"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = ["React", "Next.js", "Tailwind", "JavaScript", "Python"];

const AboutSection = () => {
  // Typing effect logic
  const lines = [
    "> I am Anas, a passionate Web Developer and Future Software Engineer.",
    "> I specialize in building modern and responsive web applications using React, Next.js, and Tailwind CSS.",
    "> Always learning new technologies and building projects that solve real-world problems.",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + lines[lineIndex][charIndex]);
        if (charIndex + 1 < lines[lineIndex].length) {
          setCharIndex((prev) => prev + 1);
        } else {
          // Finished current line
          setDisplayedText((prev) => prev + "\n"); // move to next line
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <section className="w-full bg-[#0D1117] relative px-8 py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Optional subtle background grid */}
      <div className="absolute inset-0 bg-[url('/circuit-bg.svg')] bg-no-repeat bg-center bg-cover opacity-5 pointer-events-none"></div>

      <div className="relative max-w-4xl flex flex-col gap-6 z-10">
        {/* Terminal-style title */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-mono text-green-400 mb-4"
        >
          &gt;_ about me
        </motion.h2>

        {/* Terminal-style typing bio */}
        <pre className="font-mono text-gray-300 whitespace-pre-wrap">
          {displayedText}
          {lineIndex < lines.length && (
            <span className="text-green-400 animate-pulse">|</span>
          )}
        </pre>

        {/* Floating skill badges */}
        <div className="mt-6 flex flex-wrap gap-4 relative">
          {skills.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 0 }}
              animate={{ y: [-3, 3, -3] }}
              transition={{
                repeat: Infinity,
                duration: 2 + idx * 0.2,
                ease: "easeInOut",
              }}
              className="px-3 py-1 border border-green-400 text-green-400 font-mono rounded hover:bg-green-500 hover:text-black cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
