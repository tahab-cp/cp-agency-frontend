"use client";

import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import TestimonialsCard from "../common/TestimonialsCard";
import LineStroke05 from "@/assets/decorative-elements/line-stroke-05.svg";
import SectionLabel2 from "../common/SectionLabel2";
import TestimonialsMarquee from "../common/TestimonialsMarquee";
import { testimonialsCardData } from "@/constants/globals";

const TestimonialSection = () => {
  return (
    <section className="testimonials-sec relative z-[1] py-[5rem] xl:py-[8rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke05 className="absolute top-[118.4rem] left-1/2 w-full -translate-x-1/2 opacity-90" />
      </div>

      <div className="mx-auto max-w-[120.3rem] px-[3rem] xl:px-[0rem]">
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <div className="rotate-[2deg]">
            <div className="">
              <SectionLabel2 text="Testimonials" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="">
              <SectionTitle
                label="Built with Pixels. Backed by People."
                textColor="text-white "
              />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="max-w-[95.8rem]">
              <SectionDescription
                label="Here’s what our clients have to say after partnering with Creative Pixels — real experiences, real results, and real stories behind the pixels."
                textColor="text-white"
              />
            </div>
          </div>
        </div>

        <div className="mt-[5rem] hidden grid-cols-1 gap-[3.3rem] lg:grid-cols-3 xl:grid">
          <div className="grid gap-[3.3rem]">
            {testimonialsCardData.slice(0, 3).map((item, idx) => (
              <div className="testimonials-cards" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsCardData.slice(3, 5).map((item, idx) => (
              <div className="testimonials-cards" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>

          <div className="grid gap-[3.3rem]">
            {testimonialsCardData.slice(5, 7).map((item, idx) => (
              <div className="testimonials-cards" key={idx}>
                <TestimonialsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 block xl:hidden">
        <TestimonialsMarquee />
      </div>
    </section>
  );
};

export default TestimonialSection;
