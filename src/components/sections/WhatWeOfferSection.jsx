"use client";
import Image from "next/image";
import LineStroke03 from "@/assets/decorative-elements/line-stroke-03.svg";
import CommonBtn3 from "../common/CommonBtn3";
import SectionLabel2 from "../common/SectionLabel2";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const WhatWeOfferSection = () => {
  const labelRef = useRef();
  const gridCardRef1 = useRef();
  const gridCardRef2 = useRef();
  const lineRef = useRef(null);

  useEffect(() => {
    const gridCardRefs = [gridCardRef1, gridCardRef2];

    const line = lineRef.current.querySelector("path");

    if (line) {
      gsap.fromTo(
        line,
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 50%", // when line enters viewport
            end: "bottom 20%", // when line leaves viewport
            scrub: true, // tie progress to scroll
            markers: false, // set to true for debugging
          },
        },
      );
    }

    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3", // Rotate 3 degrees back and forth
      duration: 0.15, // Very short duration for quick wobble
      yoyo: true, // Go back and forth
      repeat: -1, // Infinite repeat
      ease: "sine.inOut", // Best ease for wobble effects
      repeatDelay: 0.5, // Small pause between wobbles
    });

    gridCardRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          gsap.utils.toArray(ref.current.children),
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: index * 0.1, // Stagger the start of each grid animation
            clearProps: "all",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });
  }, []);

  return (
    <section className="offer-sec relative pt-[5rem] pb-[5rem] xl:pt-[8rem] xl:pb-[23.5rem]">
      {/* Decorative stroke line */}
      <div
        ref={lineRef}
        className="pointer-events-none absolute inset-0 z-[1] select-none"
      >
        <LineStroke03 className="absolute bottom-[2rem] left-1/2 w-full -translate-x-1/2 xl:bottom-[6.3rem]" />
      </div>

      <div className="relative z-[3] flex flex-col items-center gap-[4rem] px-[3rem] md:gap-[7.6rem] xl:px-[0rem]">
        <div ref={labelRef} className="rotate-[2deg]">
          <SectionLabel2
            text="What We Offer"
            bgColor="bg-[#FFC300]"
            textColor="text-[#070707]"
          />
        </div>

        <div
          ref={gridCardRef1}
          className="mx-auto grid w-full max-w-[132rem] grid-cols-1 justify-items-center gap-x-[7.7rem] gap-y-[20rem] lg:grid-cols-2 xl:grid-cols-3 xl:justify-items-normal"
        >
          <Link
            href="/case-studies"
            className="offer-grid-card flex h-[36.4rem] flex-col items-center gap-[1.2rem] text-center xl:text-left"
          >
            <div className="flex flex-col gap-[1.4rem] px-[2rem] pt-[3.8rem] xl:px-[0rem] xl:pl-[5.2rem]">
              <h3 className="relative w-full max-w-[33.3rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white">
                <span>Website Development</span>
              </h3>

              <p className="max-w-[33.3rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
                Lorem ipsum amet, consectetur adipiscing elit. Integer mollis,
                libero eget volutpat porta
              </p>
            </div>

            <div className="pointer-events-none relative z-[10]">
              <Image
                src="/images/offer-web-img.png"
                alt="offer web image"
                width={363}
                height={316}
                priority
              />
            </div>
          </Link>

          <Link
            href="/case-studies"
            className="offer-grid-card flex h-[36.4rem] flex-col items-center gap-[1.2rem] text-center xl:text-left"
          >
            <div className="flex flex-col gap-[1.4rem] px-[2rem] pt-[3.8rem] xl:px-[0rem] xl:pl-[5.2rem]">
              <h3 className="relative w-full max-w-[33.3rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white">
                <span>
                  Design and <br /> Branding
                </span>
              </h3>

              <p className="max-w-[33.3rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
                Lorem ipsum amet, consectetur adipiscing elit. Integer mollis,
                libero eget volutpat porta
              </p>
            </div>

            <div className="pointer-events-none relative z-[10]">
              <Image
                src="/images/offer-design-img.png"
                alt="offer web image"
                width={258}
                height={290}
                priority
              />
            </div>
          </Link>

          <Link
            href="/case-studies"
            className="offer-grid-card flex h-[36.4rem] flex-col items-center gap-[1.2rem] text-center lg:col-span-2 xl:col-span-1 xl:text-left"
          >
            <div className="flex flex-col gap-[1.4rem] px-[2rem] pt-[3.8rem] xl:px-[0rem] xl:pl-[5.2rem]">
              <h3 className="relative w-full max-w-[33.3rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white">
                <span>
                  Maintenance <br /> and Growth
                </span>
              </h3>

              <p className="max-w-[33.3rem] text-[1.8rem] leading-[2.6rem] font-normal text-white">
                Lorem ipsum amet, consectetur adipiscing elit. Integer mollis,
                libero eget volutpat porta
              </p>
            </div>

            <div className="pointer-events-none relative z-[10]">
              <Image
                src="/images/offer-maintenance-img.png"
                alt="offer web image"
                width={209}
                height={241}
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      <div
        ref={gridCardRef2}
        className="mt-[15rem] px-[3rem] md:mt-[22.8rem] xl:px-[0rem]"
      >
        <div className="offer-cta-card mx-auto flex max-w-[120rem] rounded-[2rem]">
          <div className="flex flex-col items-center justify-center gap-[2.2rem] text-center md:flex-row md:text-left">
            <p className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] text-white">
              Need bold design or reliable code or both? You’re in the right
              place.
            </p>

            <div className="min-w-max">
              <CommonBtn3
                href="/contact"
                label="Book a Call"
                bgColor="#EE8D00"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
