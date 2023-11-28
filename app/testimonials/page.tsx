"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../constants";
import TestimonialSlider from "@/components/testimonial-slider";
const TestimonialsPage = () => {
  return (
    <>
      <div className="h-full bg-primary/30 py-32 text-center">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <motion.h2
            variants={fadeIn({ direction: "up", delay: 0.2 })}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-8 xl:mb-0"
          >
            What clients <span className="text-accent">say.</span>
          </motion.h2>

          {/* slider */}
          <motion.div
            variants={fadeIn({ direction: "up", delay: 0.4 })}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
