"use client";

import Avatar from "@/components/avatar";
import ParticlesContainer from "@/components/particles-container";
import ProjectsBtn from "@/components/projects-btn";

import { motion } from "framer-motion";

import { fadeIn } from "../constants";

export const revalidate = 0;
const HomePage = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full py-32 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn({ direction: "down", delay: 0.2 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Codes <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn({ direction: "down", delay: 0.3 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:text-justify text-center"
          >
            Transforming lines of code into vibrant digital realities is where
            my passion and expertise converge
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn({ direction: "down", delay: 0.4 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
        {/* <div className="w-[1200px] h-full absolute right-0 bottom-0">
        </div> */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}
          <ParticlesContainer />
          <motion.div
            variants={fadeIn({ direction: "down", delay: 0.5 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
