"use client";
import CaseStudiesSlider from "../common/CaseStudiesSlider";
import SectionDescription from "../common/SectionDescription";
import SectionLabel2 from "../common/SectionLabel2";
import SectionTitle from "../common/SectionTitle";

const CaseStudiesSection02 = ({ caseStudies }) => {
  return (
    <section>
      <div className="relative z-[3] flex flex-col items-center gap-[2rem] px-[2rem] text-center xl:px-[0rem]">
        <div className="rotate-[-2deg]">
          <div className="">
            <SectionLabel2
              text="Case Studies"
              bgColor="bg-[#3078FF]"
              textColor="text-text-primary"
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="">
            <SectionTitle label="Pixel-Perfect Projects by Creative Pixels" />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="max-w-[76.5rem]">
            <SectionDescription label="Based in Manchester, we craft bespoke websites and branding that are as smart as they are stunning." />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="relative z-[3] mx-auto mt-[2rem] max-w-[122.3rem] px-[2rem] md:mt-[5rem] xl:px-[0rem]">
          <CaseStudiesSlider caseStudies={caseStudies} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection02;
