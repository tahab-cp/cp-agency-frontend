"use client";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import TestimonialsMarquee from "../common/TestimonialsMarquee";
import SectionLabel2 from "../common/SectionLabel2";

const AboutTestimonialsSection = () => {
  return (
    <section className="py-[5rem] lg:py-[10rem]">
      <div className="flex flex-col items-center gap-[2rem] px-[3rem] text-center xl:px-[0rem]">
        <div className="rotate-[-2deg]">
          <div className="">
            <SectionLabel2 text="Testimonials" bgColor="bg-[#F14A58]" />
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
          <div className="max-w-[77.9rem]">
            <SectionDescription
              label="Here’s what our clients have to say after partnering with Creative Pixels — real experiences, real results, and real stories behind the pixels."
              textColor="text-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-[5rem]">
        <TestimonialsMarquee />
      </div>
    </section>
  );
};

export default AboutTestimonialsSection;
