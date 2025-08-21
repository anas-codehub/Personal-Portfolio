"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Subtle typing sound effect URL (you can replace with your own)
const typingSound = "/typing-sound.mp3";

const AboutSection = () => {
  const lines = [
    "I am Talat Mahmud Anas, a passionate Web Developer and aspiring Software Engineer.",
    "With a keen interest in computer science, I specialize in building modern, responsive, and scalable web applications.",
    "I love turning complex problems into clean, efficient code, creating seamless user experiences, and learning the latest technologies.",
    "Throughout my journey, I have explored web development frameworks like Next.js and React, along with backend technologies and databases.",
    "I am constantly experimenting with new tools, programming languages, and creative solutions to real-world challenges.",
    "Beyond coding, I enjoy collaborating on projects that impact users positively, sharing knowledge with peers, and growing in the tech community.",
    "My goal is to contribute to cutting-edge software solutions while expanding my skills across full-stack development, game development, and software engineering.",
    "I believe in writing clean code, building scalable applications, and constantly learning through hands-on projects and challenges.",
    "Every project I work on reflects my dedication, creativity, and problem-solving mindset.",
    "I am committed to pushing boundaries, exploring new horizons in technology, and shaping the future of digital experiences.",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + lines[lineIndex][charIndex]);

        // Play typing sound
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }

        if (charIndex + 1 < lines[lineIndex].length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setDisplayedText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      }, 20); // Typing speed (ms)

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <div className="relative w-full bg-[#0D1117] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Typing audio */}
      <audio ref={audioRef} src={typingSound} />

      <section className="relative z-10 max-w-3xl px-6 py-24 flex flex-col items-start">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-mono text-green-400 mb-6"
        >
          &gt;_ about me
        </motion.h2>

        <pre className="font-mono text-gray-300 whitespace-pre-wrap text-lg md:text-xl">
          {displayedText}
          {lineIndex < lines.length && (
            <span className="text-green-400 animate-pulse">|</span>
          )}
        </pre>
      </section>
    </div>
  );
};

export default AboutSection;
