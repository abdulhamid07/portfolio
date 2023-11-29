"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { BsArrowRight } from "react-icons/bs";

import { Pagination } from "swiper";
import Image from "next/image";
import { slideType } from "@/app/work/page";
import { useDetailWork } from "@/hooks/use-detail-work";

interface WorkSliderProps {
  works: slideType;
}
const WorkSlider = ({ works }: WorkSliderProps) => {
  const { onOpen } = useDetailWork();
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
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={index}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={work.imageUrl}
                    alt="image"
                    width={500}
                    height={300}
                    blurDataURL={work.imageUrl}
                  />

                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  {/* title */}
                  <div
                    onClick={() => onOpen(work)}
                    className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        Detail
                      </div>

                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
