"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { aboutTestimonialsCardData } from "@/constants/aboutPage";
import RatingStar from "@/assets/icons/rating-star.svg";

const TestimonialsMarquee = () => {
  return (
    <>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="right"
        className="overflow-hidden"
      >
        {aboutTestimonialsCardData.map((item, idx) => (
          <div key={idx} className="testimonials-card mx-[1.65rem] w-[27.6rem]">
            {/* Rating Stars */}
            <div className="relative h-[2.042rem] w-[11.379rem]">
              <RatingStar />
            </div>

            {/* Review Text */}
            <p className="mt-[1.958rem] mb-[4.042rem] text-[1.8rem] leading-[2.6rem] font-normal text-white/50">
              {item.review}
            </p>

            {/* Author Info */}
            <div className="flex flex-col gap-[1.2rem]">
              <div className="relative size-[5.6rem] overflow-hidden rounded-full">
                <Image
                  src={item.authorImage}
                  alt={item.authorName}
                  width={56}
                  height={56}
                />
              </div>

              <div className="flex flex-col">
                <h5 className="text-[1.8rem] leading-[2.6rem] font-normal text-[#f6f6f6]">
                  {item.authorName}
                </h5>
                <h6 className="text-[1.6rem] leading-[2.4rem] font-medium text-[#f6f6f6]/50">
                  {item.authorRole}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default TestimonialsMarquee;
