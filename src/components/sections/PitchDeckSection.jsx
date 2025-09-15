"use client";
import Image from "next/image";
import PitchDeckInput from "../common/PitchDeckInput";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import SectionLabel2 from "../common/SectionLabel2";
import { pitchDeckLogoData } from "@/constants/aboutPage";
import FilledMailIcon from "@/assets/icons/filled-mail-icon.svg";

const PitchDeckSection = () => {
  return (
    <section className="relative mx-auto flex max-w-[152rem] justify-end overflow-hidden">
      <div className="flex w-full max-w-[128rem] flex-col justify-between lg:flex-row 2xl:max-w-[132.1rem]">
        <div className="flex w-full flex-col items-center px-[3rem] py-[5rem] text-center lg:max-w-[55.6rem] lg:items-start lg:py-[8.9rem] lg:text-left xl:px-[0rem]">
          <div className="rotate-[-2deg]">
            <div className="">
              <SectionLabel2 text="Pitch Deck" bgColor="bg-[#FF37B3]" />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="mt-[1.1rem] lg:max-w-[54rem]">
              <SectionTitle label="Send yourself or a colleague our Pitch Deck." />
            </div>
          </div>

          <div className="mt-[2rem] mb-[2.6rem] overflow-hidden text-[1.8rem] leading-[2.6rem] font-normal text-[#333333] lg:max-w-[51rem]">
            <div className="">
              Want to learn more about us? Our company deck offers an in-depth
              look at our agency, the projects we&apos;ve handled, the solutions
              we provide, and the culture we foster.
            </div>
          </div>

          <form
            action=""
            className="flex w-full flex-col gap-[1rem] md:flex-row"
          >
            <PitchDeckInput placeholder="Full Name" type="text" />

            <PitchDeckInput placeholder="Email Address" type="text" />

            <button
              type="submit"
              className="inline-flex h-[5rem] min-w-[6.2rem] cursor-pointer items-center justify-center rounded-[1.6rem] bg-black/15 md:h-[6.2rem]"
            >
              <FilledMailIcon />
            </button>
          </form>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[3rem] bg-[#EAD9FB] p-[3rem] pr-[4rem] lg:max-w-[48.7rem] lg:items-end lg:gap-[4.3rem] lg:p-[0rem] lg:pr-[6rem]">
          <h5 className="overflow-hidden text-[1.8rem] font-semibold text-[#FF37B3]">
            <div className="">Trusted by:</div>
          </h5>

          <div className="flex flex-wrap items-end justify-center gap-[6rem] md:flex-row lg:flex-col">
            {pitchDeckLogoData.map((item, idx) => (
              <div key={idx} className="">
                <Link href={item.link}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[18rem] bottom-[-0.2rem] hidden size-[45rem] select-none lg:block xl:right-[24.3rem] xl:size-[58rem]">
        <Image
          src="/images/pitch-deck-phone-element.png"
          alt="Pitch Deck Phone Element"
          height={580}
          width={580}
          priority
        />
      </div>
    </section>
  );
};

export default PitchDeckSection;
