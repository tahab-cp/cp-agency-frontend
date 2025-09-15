"use client";
import LineStroke08 from "@/assets/decorative-elements/line-stroke-08.svg";
import SectionLabel2 from "../common/SectionLabel2";
import OurStatsSlider from "../common/OurStatsSlider";

const OurStatsSection = () => {
  return (
    <section className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:pt-[8.5rem] xl:pb-[9.732rem]">
      <div className="absolute inset-0 z-[0]">
        <LineStroke08 className="absolute top-[14.2rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[120rem] flex-col items-center gap-[4.4rem] 2xl:max-w-[130rem]">
        <div className="rotate-[2deg]">
          <div className="">
            <SectionLabel2 text="Our Stats" bgColor="bg-[#FF8630]" />
          </div>
        </div>

        <div className="hidden grid-cols-4 gap-[2rem] lg:grid">
          <div className="our-stats-card">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              200+
            </h4>

            <h6 className="text-[2rem] font-medium text-[#FFC300]">
              Web Projects
            </h6>
          </div>

          <div className="our-stats-card top-[8rem]">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              15+
            </h4>

            <h6 className="text-[2rem] font-medium text-[#FF37B3]">
              Years of Experience
            </h6>
          </div>

          <div className="our-stats-card">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              150+
            </h4>

            <h6 className="text-[2rem] font-medium text-[#FF8630]">
              Trusted Clients
            </h6>
          </div>

          <div className="our-stats-card top-[8rem]">
            <h4 className="text-[7.6rem] leading-[9rem] font-semibold tracking-[-0.02em] text-white">
              20+
            </h4>

            <h6 className="text-[2rem] font-medium text-[#F14A58]">
              Skillful Team Members
            </h6>
          </div>
        </div>

        <div className="block w-full lg:hidden">
          <OurStatsSlider />
        </div>
      </div>
    </section>
  );
};

export default OurStatsSection;
