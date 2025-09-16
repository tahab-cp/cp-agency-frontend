"use client";
import LineStroke08 from "@/assets/decorative-elements/line-stroke-08.svg";
import SectionLabel2 from "../common/SectionLabel2";
import OurStatsSlider from "../common/OurStatsSlider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const OurStatsSection = () => {
  const labelRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3", // Rotate 3 degrees back and forth
      duration: 0.15, // Very short duration for quick wobble
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Best ease for wobble effects
      repeatDelay: 0.5, // Small pause between wobbles
    });

    gsap.fromTo(
      gsap.utils.toArray(cardRef.current.children),
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1, // 👈 Faster stagger
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:pt-[8.5rem] xl:pb-[9.732rem]">
      <div className="absolute inset-0 z-[0]">
        <LineStroke08 className="absolute top-[14.2rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[120rem] flex-col items-center gap-[4.4rem] 2xl:max-w-[130rem]">
        <div ref={labelRef} className="rotate-[2deg]">
          <SectionLabel2 text="Our Stats" bgColor="bg-[#FF8630]" />
        </div>

        <div ref={cardRef} className="hidden grid-cols-4 gap-[2rem] lg:grid">
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
