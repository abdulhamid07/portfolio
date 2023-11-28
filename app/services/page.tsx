"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../constants";
import ServiceSlider from "@/components/service-slider";
import Circles from "@/components/circles";
import Bulb from "@/components/blub";

const ServicesPage = () => {
  return (
    <>
      <div className="h-full bg-primary/30 py-36 flex items-center">
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
                className="h2 xl:mt-8"
              >
                My services <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn({ direction: "up", delay: 0.4 })}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-justify"
              >
                Offering a range of professional services tailored to meet your
                needs, my expertise encompasses web and mobile development. With
                a commitment to quality and client satisfaction, I aim to
                deliver impactful solutions that elevate your industry.
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
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default ServicesPage;
