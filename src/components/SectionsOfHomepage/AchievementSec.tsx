"use client";
import { motion } from "framer-motion";
import React from "react";
import { Trophy, Medal, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-400" size={40} />,
      title: "Programming Contest",
      description: "Ranked in top 10 at College Coding Contest 2025.",
    },
    {
      icon: <Medal className="text-green-400" size={40} />,
      title: "Hackathon Winner",
      description: "Built a real-time web app in a 24-hour hackathon.",
    },
    {
      icon: <Award className="text-blue-400" size={40} />,
      title: "Certification",
      description: "Completed JavaScript & React Developer Certification.",
    },
  ];

  return (
    <div className="bg-[#0D1117]">
      <section
        id="achievements"
        className=" w-full max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-400 font-mono">
          &gt;_ Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #22c55e" }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-lg border border-green-400 bg-[#0D1117] hover:bg-[#0F141B] flex flex-col items-center text-center"
            >
              {achievement.icon}
              <h3 className="text-xl font-semibold mt-4 text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
