"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSec = () => {
  return (
    <section className="relative w-full bg-[#0D1117] flex items-center justify-center px-6 sm:px-8 pt-20 sm:pt-24 md:pt-28">
      <div className="max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 text-center md:text-left">
        {/* Profile Picture */}
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-4 border-green-400 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
          <Image
            src="/MyPic.jpg"
            alt="My Picture"
            fill
            className="object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-pulse"></div>
        </div>

        {/* Intro Text */}
        <div className="flex flex-col items-center md:items-start">
          {/* Terminal / Hacker Style */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-mono text-green-400">
            console.log("Hello World")
            <span className="blinking-cursor">|</span>
          </h1>

          {/* Name */}
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-mono text-green-400">
            &_ Anas
          </h2>

          <p className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-300">
            Web Developer | Future Software Engineer
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="px-5 sm:px-6 py-2 bg-green-500 text-black font-mono rounded hover:bg-green-400 transition-colors flex items-center justify-center"
            >
              <span className="mr-2 text-black">&gt;_</span> Hire Me
            </Link>
            <Link
              href="#projects"
              className="px-5 sm:px-6 py-2 border border-green-500 text-green-400 font-mono rounded hover:bg-green-500 hover:text-black transition-colors flex items-center justify-center"
            >
              <span className="mr-2 text-green-400">&gt;_</span> Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Background Circuit/Glitch */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-bg.svg')] bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSec;
