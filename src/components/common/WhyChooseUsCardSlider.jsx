"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const cardData = [
  {
    number: "01",
    title: "Design-Driven Approach",
    desc: "Crafting exceptional digital experiences your premier web design and development partner.",
    bgColor: "bg-[#FFC300]",
  },
  {
    number: "02",
    title: "Tailored Solutions",
    desc: "Every business is unique, and so are our solutions. We customize each project to align with your goals.",
    bgColor: "bg-[#FF8630]",
  },
  {
    number: "03",
    title: "Results You Can Trust",
    desc: "From boosting brand visibility to driving conversions, we are committed to your success.",
    bgColor: "bg-[#F14A58]",
  },
];

const WhyChooseUsCardSlider = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        {cardData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !h-auto !items-center !justify-center"
          >
            <div
              className={`mx-[1rem] flex size-[26.964rem] flex-col justify-center gap-[1.6rem] rounded-[1.557rem] ${item.bgColor} pl-[2.459rem] md:absolute md:rotate-[-9.32deg]`}
            >
              <h5 className="text-[2.2rem] leading-[3.2rem] font-medium">
                {item.number}
              </h5>

              <h3 className="max-w-[20.539rem] text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>

              <p className="max-w-[22.389rem] text-[1.6rem] leading-[2.4rem] font-medium">
                {item.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WhyChooseUsCardSlider;
