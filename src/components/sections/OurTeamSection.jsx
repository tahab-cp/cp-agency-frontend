"use client";

import SectionDescription from "../common/SectionDescription";
import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";
import TeamCardMarquee from "../common/TeamCardMarquee";

const OurTeamSection = () => {
  return (
    <section className="py-[5rem] xl:pt-[6.4rem] xl:pb-[9.8rem]">
      <div className="flex flex-col items-center gap-[2rem] px-[3rem] text-center xl:px-[0rem]">
        <div className="rotate-[2deg]">
          <div className="">
            <SectionLabel2
              text="Our Team"
              bgColor="bg-[#81f2b4]"
              textColor="text-text-primary"
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="max-w-[60.3rem]">
            <SectionTitle label="We're a Team of People Who Care" />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="max-w-[83.6rem]">
            <SectionDescription label="All of the people who work for us, have been working with us for a minimum of 2 years, with 50% of our team being the same since we were founded." />
          </div>
        </div>
      </div>

      <div className="mt-[5rem]">
        <TeamCardMarquee />
      </div>
    </section>
  );
};

export default OurTeamSection;
