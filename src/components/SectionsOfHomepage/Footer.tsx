"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0D1117] py-12 px-6 flex flex-col items-center">
      {/* Animated Hacker Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-green-400 font-mono text-sm md:text-base tracking-widest"
      >
        {"< />"} Crafted by Talat Mahmud Anas {"|"} © 2025 {"|"} Built with
        Next.js
      </motion.p>

      {/* Neon Glowing Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 1 }}
        className="h-[2px] bg-green-400 mt-4 rounded-full shadow-[0_0_10px_#22c55e]"
      ></motion.div>

      {/* Hacker Animation Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-green-400 font-mono text-xs mt-2 tracking-widest"
      >
        _initPortfolio(); _deploy(); _hackTheWeb();
      </motion.p>
    </footer>
  );
};

export default Footer;
