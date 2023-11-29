"use client";

import Bulb from "@/components/blub";
import Circles from "@/components/circles";
import WorkSlider from "@/components/work-slider";
import { motion } from "framer-motion";
import { fadeIn } from "../constants";
import { slideType } from "@/app/work/page";

interface WorkClientProps {
  works: slideType;
}
const WorkClient = ({ works }: WorkClientProps) => {
  return (
    <div className="h-full bg-primary/30 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn({ direction: "up", delay: 0.2 })}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn({ direction: "up", delay: 0.4 })}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 xl:text-justify text-center"
            >
              Explore my current work to discover a showcase of my diverse and
              impactful.
              <span className="hidden xl:flex">
                From innovative designs to robust code implementations, each
                project reflects my commitment to excellence and creativity.
              </span>
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn({ direction: "down", delay: 0.6 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider works={works} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default WorkClient;
