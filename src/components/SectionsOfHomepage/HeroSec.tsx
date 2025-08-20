"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSec = () => {
  return (
    <section className="relative w-full  bg-[#0D1117] flex items-center justify-center px-8  pt-24 md:pt-28">
      <div className="max-w-7xl flex flex-col md:flex-row items-center gap-12">
        {/* Profile Picture */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-green-400 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
          <Image
            src="/MyPic.jpg"
            alt="My Picture"
            fill
            className="object-cover rounded-full"
          />
          {/* Neon Pulse Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-pulse"></div>
        </div>

        {/* Intro Text */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-6xl font-mono text-green-400">
            &_ Anas
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-300">
            Web Developer | Future Software Engineer
          </p>

          {/* CTA Buttons using Link with >_ prefix */}
          <div className="mt-6 flex gap-4">
            <Link
              href="#contact"
              className="px-6 py-2 bg-green-500 text-black font-mono rounded hover:bg-green-400 transition-colors flex items-center"
            >
              <span className="mr-2 text-black">&gt;_</span> Hire Me
            </Link>
            <Link
              href="#projects"
              className="px-6 py-2 border border-green-500 text-green-400 font-mono rounded hover:bg-green-500 hover:text-black transition-colors flex items-center"
            >
              <span className="mr-2 text-green-400">&gt;_</span> Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Optional Background Circuit/Glitch */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-bg.svg')] bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSec;
