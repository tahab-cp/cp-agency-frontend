"use client";
import CaseStudiesGrid from "../common/CaseStudiesGrid";
import SectionDescription from "../common/SectionDescription";
import SectionTitle from "../common/SectionTitle";
import SectionLabel2 from "../common/SectionLabel2";
import { caseStudiesCardData } from "@/constants/globals";
import CaseStudiesSlider from "../common/CaseStudiesSlider";

const CaseStudiesSection = ({ caseStudies }) => {
  return (
    <section className="relative pt-[5rem] xl:pt-[10rem]">
      <div className="relative mx-auto max-w-[120rem] px-[3rem] xl:px-[0rem]">
        <div className="top-[6rem] flex flex-col items-center gap-[2rem] text-center xl:sticky">
          <div className="rotate-[-2deg]">
            <div className="">
              <SectionLabel2 text="Case Studies" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="case-studies-title">
              <SectionTitle label="Pixel-Perfect Projects by Creative Pixels" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="case-studies-desc max-w-[76.5rem]">
              <SectionDescription label="Based in Manchester, we craft bespoke websites and branding that are as smart as they are stunning." />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-20 hidden flex-col gap-[4rem] xl:flex">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="sticky top-[35rem] xl:top-[28rem]" // 👈 adjust this to your header height
              style={{ zIndex: idx + 1 }}
            >
              <CaseStudiesGrid
                key={idx}
                className={idx % 2 === 1 ? "case-studies-grid-reverse" : ""}
                image={cs.image}
                title={cs.title}
                description={cs.description}
                slug={cs.slug}
                tags={cs.tags}
                technologies={cs.technologies}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Cards */}
      <div className="mt-10 block w-full overflow-hidden lg:mt-20 xl:hidden">
        {/* <CaseStudiesMarquee /> */}
        <CaseStudiesSlider caseStudies={caseStudies} />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
