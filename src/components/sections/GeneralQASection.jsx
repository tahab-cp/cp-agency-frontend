import SectionDescription from "../common/SectionDescription";
import FaqTab from "../common/FaqTab";
import TextMarquee from "../common/TextMarquee";
import CtaSection2 from "../common/CtaSection2";
import SectionLabel2 from "../common/SectionLabel2";
import LineStroke18 from "@/assets/decorative-elements/line-stroke-18.svg";

const GeneralQASection = () => {
  return (
    <section className="relative pt-[20.6rem] pb-[5rem] xl:pb-[10rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke18 className="absolute top-[43.6rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[121.3rem] flex-col items-center gap-[2rem] px-[3rem] text-center xl:items-start xl:px-[0rem] xl:text-left">
        <div className="inline-flex rotate-[2deg]">
          <SectionLabel2 text="General Question & Answers" />
        </div>

        <h2 className="text-[4rem] leading-[5rem] font-bold tracking-[-0.03em] md:text-[7rem] md:leading-[8.4rem]">
          Answers to all your questions!
        </h2>

        <SectionDescription label="Reach out to us to discuss business opportunities or simply to say hello." />
      </div>

      <div className="relative z-[3] mt-[3rem] mb-[5rem] px-[3rem] xl:mb-[10.1rem] xl:px-[0rem]">
        <FaqTab />
      </div>

      <TextMarquee />

      <div className="relative z-[3] mx-auto mt-[5rem] max-w-[120.3rem] xl:mt-[6.7rem]">
        <CtaSection2 />
      </div>
    </section>
  );
};

export default GeneralQASection;
