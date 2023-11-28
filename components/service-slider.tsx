import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxArrowTopRight,
  RxDesktop,
  RxMobile,
  RxPencil2,
  RxReader
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description: "Create website using PHP or Javacript framework",
  },
  {
    icon: <RxMobile />,
    title: "Mobile Development",
    description: "Create android app using React Native and other framework",
  },
  {
    icon: <RxReader />,
    title: "Thesis Program",
    description: "Create programs such as websites and mobile apps",
  },
  {
    icon: <RxPencil2 />,
    title: "Thesis Manuscript",
    description: "Create a thesis, the format follows that of each client",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{service.icon}</div>

            {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{service.title}</div>
              <p className="max-w-[350px] leading-normal">
                {service.description}
              </p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
