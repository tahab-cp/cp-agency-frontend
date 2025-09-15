"use client";
import SectionDescription from "../common/SectionDescription";
import Image from "next/image";
import LineStroke07 from "@/assets/decorative-elements/line-stroke-07.svg";
import SectionLabel2 from "../common/SectionLabel2";
import CommonBtn3 from "../common/CommonBtn3";
import { whoWeAreCardData } from "@/constants/aboutPage";

const WhoWeAreSection = () => {
  return (
    <section className="relative px-[3rem] pt-[20rem] pb-[5rem] xl:px-[0rem] xl:pb-[9rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke07 className="absolute top-[14.8rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto max-w-[120rem] 2xl:max-w-[141.6rem]">
        <div className="flex flex-col items-center gap-[2.1rem] text-center">
          <div className="rotate-[-2deg]">
            <div className="">
              <SectionLabel2 text="Who We Are" />
            </div>
          </div>

          <h1 className="text-text-primary max-w-[100rem] overflow-hidden text-[3rem] leading-[4rem] font-bold tracking-[-0.03em] md:text-[5rem] md:leading-[6rem] lg:text-[7rem] lg:leading-[8.4rem]">
            <div className="">
              About Creative Pixels Creative Agency based in Manchester
            </div>
          </h1>

          <div className="overflow-hidden">
            <div className="">
              <SectionDescription label="You end up hearing about agencies which do care, but don't. Let us change that for you today." />
            </div>
          </div>
        </div>

        <div className="my-[5rem] flex flex-col gap-[1.2rem] xl:mt-[8rem] xl:mb-[10.5rem] xl:flex-row">
          {whoWeAreCardData.slice(0, 1).map((item, idx) => (
            <div
              key={idx}
              className="relative h-[23rem] w-full overflow-hidden rounded-[2rem] md:h-[50rem] lg:h-[70rem] xl:h-[58.8rem] xl:w-[69.2rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={692}
                height={588}
                className="size-full object-center"
              />
            </div>
          ))}

          <div className="flex flex-row gap-[1.2rem] xl:flex-col">
            {whoWeAreCardData.slice(1, 3).map((item, idx) => (
              <div
                key={idx}
                className="relative h-[15rem] w-1/2 overflow-hidden rounded-[2rem] md:h-[30rem] lg:h-[40rem] xl:h-[28.8rem] xl:w-[35.6rem]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={356}
                  height={288}
                  className="size-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {whoWeAreCardData.slice(3, 4).map((item, idx) => (
            <div
              key={idx}
              className="relative h-[23rem] w-full overflow-hidden rounded-[2rem] md:h-[50rem] lg:h-[70rem] xl:h-[58.8rem] xl:w-[34.4rem]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={344}
                height={588}
                className="size-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-[4rem] text-center">
          <h5 className="max-w-[103.2rem] overflow-hidden text-[2rem] leading-[3.5rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[4rem] lg:text-[3.4rem] lg:leading-[4.8rem]">
            <div className="">
              At Creative Pixels, we don&apos;t just build websites—we create
              digital experiences that drive growth and make a lasting impact.
              As a Manchester-based agency, we specialize in WordPress
              development, e-commerce solutions, and creative branding. We’re
              here to make your digital journey successful.
            </div>
          </h5>

          <div className="">
            <CommonBtn3 href="/" label="Work With Us" bgColor="#FF37B3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
