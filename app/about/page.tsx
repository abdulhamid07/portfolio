"use client";
import { FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { SiCodeigniter, SiNextdotjs, SiTypescript } from "react-icons/si";

import Avatar from "@/components/avatar";
import Circles from "@/components/circles";
import { motion } from "framer-motion";
import { useState } from "react";
import { TbBrandReactNative } from "react-icons/tb";
import { fadeIn } from "../../constants";

import CountUp from "react-countup";
export const revalidate = 0;
type infoType = { title: string; stage?: string; icons?: any };
const AboutPage = () => {
  const [index, setIndex] = useState(0);
  // Mendapatkan tahun saat ini
  const yearNow = new Date().getFullYear();

  // Tahun awal
  const yearStart = 2017;

  // Menghitung jumlah tahun
  const yearTotal = yearNow - yearStart;
  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Frontend Development",
          icons: [
            <FaJs key={1} />,
            <FaReact key={2} />,
            <SiNextdotjs key={3} />,
            <SiTypescript key={4} />,
            <TbBrandReactNative key={5} />,
          ],
        },
        {
          title: "Backend Development",
          icons: [
            <FaPhp key={1} />,
            <FaLaravel key={2} />,
            <SiCodeigniter key={3} />,
          ],
        },
      ],
    },
    {
      title: "experience",
      info: [
        {
          title: "Programmer - PT Pelangi Indodata",
          stage: "( 2019 - Present )",
        },
        {
          title: "Freelance Web Developer",
          stage: "( 2017 - 2019 )",
        },
        {
          title: "Intern - Global Intermedia",
          stage: "( Jul 2014 - Sept 2014 )",
        },
      ],
    },
    {
      title: "education",
      info: [
        {
          title: "STMIK AKAKOM (UTDI) - S1 Informatics Engineering",
          stage: "( 2015 - 2019 )",
        },
        {
          title: "SMK Muh. 1 Bantul - Software Engineering",
          stage: "( 2012 - 2015 )",
        },
      ],
    },
  ];
  return (
    <>
      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
        <Circles />
        <motion.div
          variants={fadeIn({ direction: "right", delay: 0.2 })}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute -bottom-12 -left-[370px]"
        >
          <Avatar />
        </motion.div>
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn({ direction: "right", delay: 0.2 })}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Frontend <span className="text-accent">developer</span>
            </motion.h2>
            <motion.p
              variants={fadeIn({ direction: "right", delay: 0.4 })}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-justify"
            >
              A tech enthusiast who has studied the programming profession.
              Started working on projects since 2017 which are website-based and
              have mastered several stacks until now. Likes to explore
              technology and dares to trial and error something that has not
              been tried, especially programming languages.
            </motion.p>

            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.6 })}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={yearTotal} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>

                {/* clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={63} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied clients
                  </div>
                </div>

                {/* projects */}
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={76} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished projects
                  </div>
                </div>
                {/* awards */}
                {/* <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Winning awards
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>

          {/* info */}
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.4 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="py-4 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
              {aboutData[index].info.map((item: infoType, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon: any, itemIndex: number) => (
                      <div key={itemIndex} className="text-2xl text-white">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
