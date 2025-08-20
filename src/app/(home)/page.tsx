"use client";

import React from "react";

import HeroSec from "@/components/SectionsOfHomepage/HeroSec";
import AboutSec from "@/components/SectionsOfHomepage/AboutSec";
import ProjectsSection from "@/components/SectionsOfHomepage/ProjectsSec";

const Home = () => {
  return (
    <>
      <HeroSec />
      <AboutSec />
      <ProjectsSection />
    </>
  );
};

export default Home;
