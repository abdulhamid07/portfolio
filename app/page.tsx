"use client";

import Avatar from "@/components/avatar";
import ParticlesContainer from "@/components/particles-container";
import ProjectsBtn from "@/components/projects-btn";

import { motion } from "framer-motion";

import { fadeIn } from "../constants";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const revalidate = 0;
const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
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
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:text-justify text-center xl:items-start items-center flex flex-col"
          >
            Transforming lines of code into vibrant digital realities is where
            my passion and expertise converge
            <br />
            <Link
              href={"/CV_Abdul_Hamid.pdf"}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="z-20 mt-2 group relative rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-tl text-white border-0"
              >
                Download Resume
                <div className="xl:block hidden ml-1 text-xl translate-x-[800%] group-hover:translate-x-0 transition-all duration-300 delay-200">
                  <BsArrowRight />
                </div>
              </Button>
            </Link>
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
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
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
