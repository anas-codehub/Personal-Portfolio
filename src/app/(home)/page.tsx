"use client";

import React from "react";

import HeroSec from "@/components/SectionsOfHomepage/HeroSec";
import AboutSec from "@/components/SectionsOfHomepage/AboutSec";
import ProjectsSection from "@/components/SectionsOfHomepage/ProjectsSec";
import SkillSec from "@/components/SectionsOfHomepage/SkillSec";
import Achievements from "@/components/SectionsOfHomepage/AchievementSec";
import ContactSection from "@/components/SectionsOfHomepage/ContactSec";
import Footer from "@/components/SectionsOfHomepage/Footer";

const Home = () => {
  return (
    <>
      <HeroSec />
      <AboutSec />
      <ProjectsSection />
      <SkillSec />
      <Achievements />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
