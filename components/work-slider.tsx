"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { slideType } from "@/app/work/page";
import { Pagination } from "swiper";
import CardWork from "./card-work";
import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";

interface WorkSliderProps {
  works: slideType;
}
const WorkSlider = ({ works }: WorkSliderProps) => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {works.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((work, index) => (
              <CardWork key={index} work={work} />
            ))}
            {index === works.slides.length - 1 && (
              <div
                onClick={() =>
                  window.open(
                    "https://abdulhamid07.github.io/portfolio.html",
                    "_blank"
                  )
                }
                className="group relative rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-tl text-white border-0"
              >
                <Button
                  variant="link"
                  className="text-white no-underline"
                  onClick={() =>
                    window.open(
                      "https://abdulhamid07.github.io/portfolio.html",
                      "_blank"
                    )
                  }
                >
                  <span className="font-light tracking-widest">
                    See Other Projects
                  </span>
                </Button>
                <div className="text-xl translate-x-[500%] group-hover:translate-x-0 transition-all duration-300 delay-200">
                  <BsArrowRight />
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
