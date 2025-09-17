"use client";
import Image from "next/image";
import Link from "next/link";
import LineStroke03 from "@/assets/decorative-elements/line-stroke-03.svg";
import CommonBtn3 from "../common/CommonBtn3";
import SectionLabel2 from "../common/SectionLabel2";
import {
  offerServicesDesignData,
  offerServicesMaintenanceData,
  offerServicesWebData,
} from "@/constants/globals";
import ClickArrowYellowIcon from "@/assets/icons/click-arrow-yellow.svg";
import ClickArrowPinkIcon from "@/assets/icons/click-arrow-pink.svg";
import ClickArrowGreenIcon from "@/assets/icons/click-arrow-green.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const WhatWeOfferSection = () => {
  const labelRef = useRef();
  const gridCardRef1 = useRef();
  const gridCardRef2 = useRef();
  const gridCardRef3 = useRef();
  const gridCardRef4 = useRef();
  const gridCardRef5 = useRef();
  const gridCardRef6 = useRef();
  const gridCardRef7 = useRef();
  const lineRef = useRef(null);

  useEffect(() => {
    const gridCardRefs = [
      gridCardRef1,
      gridCardRef2,
      gridCardRef3,
      gridCardRef4,
      gridCardRef5,
      gridCardRef6,
      gridCardRef7,
    ];

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
    <section className="offer-sec relative py-[5rem] xl:py-[8rem]">
      {/* Decorative stroke line */}
      <div
        ref={lineRef}
        className="pointer-events-none absolute inset-0 z-[1] select-none"
      >
        <LineStroke03 className="absolute top-[345rem] left-1/2 w-full -translate-x-1/2 md:top-[320rem] lg:top-[235rem] xl:top-[180.6rem]" />
      </div>

      {/* <div className="sticky top-[10rem] z-[100] flex justify-end pr-[10rem]">
        <Link
          href="/case-study"
          className="group absolute z-[10] inline-flex size-[16.3rem] items-center justify-center"
        >
          <Image
            src="/images/case-study-btn-img-2(a).png"
            width={163}
            height={163}
            alt="Button  Images"
            className="animation-duration-[20s] group-hover:paused absolute inset-0 animate-spin"
          />

          <Image
            src="/images/case-study-btn-img-2(b).png"
            width={135}
            height={135}
            alt="Button  Images"
            className="absolute top-1/2 left-1/2 -translate-1/2"
          />
        </Link>
      </div> */}

      <div className="relative z-[3] flex flex-col items-center gap-[4rem] px-[3rem] pb-[6rem] md:gap-[7.6rem] xl:px-[0rem] xl:pb-[0rem]">
        <div ref={labelRef} className="rotate-[2deg]">
          <SectionLabel2
            text="What We Offer"
            bgColor="bg-[#FFC300]"
            textColor="text-[#070707]"
          />
        </div>

        <div className="mx-auto flex w-full max-w-[120rem] flex-col gap-[2rem] lg:flex-row lg:gap-[0rem] 2xl:max-w-[130rem]">
          <div
            ref={gridCardRef1}
            className="flex flex-col items-center gap-[3.3rem] lg:items-start"
          >
            <h3 className="relative max-w-[33.3rem] text-center text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem] lg:text-left">
              <span>Website Development</span>

              <div className="absolute right-[-0.5rem] bottom-[-.6rem] inline-flex size-[4rem] items-center justify-center md:right-[-4rem] lg:right-[-.8rem]">
                <ClickArrowYellowIcon />
              </div>
            </h3>

            <div className="md:h-[39.5rem] md:w-[65.5rem]">
              <Image
                src="/images/offer-web-img.png"
                alt="offer web image"
                height={395}
                width={655}
                priority
              />
            </div>
          </div>

          <div
            ref={gridCardRef2}
            className="flex flex-col gap-[4.5rem] xl:ml-[-10rem]"
          >
            <div className="flex flex-col justify-between gap-[5rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row xl:gap-[10rem]">
              {offerServicesWebData.columns.map((col, idx) => (
                <div key={idx} className={`flex flex-col gap-[3.1rem]`}>
                  <div className="overflow-hidden">
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#FFE400]">
                      {col.title}
                    </h5>
                  </div>

                  <ul className="flex flex-col gap-[1.4rem]">
                    {col.links.map((link, idx) => (
                      <li key={idx} className="overflow-hidden">
                        <Link
                          href={link.href}
                          className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white transition-all duration-200"
                        >
                          <div className="size-[1rem] rounded-full border-2 border-[#FFE400]" />{" "}
                          <span className="relative">
                            {link.label}

                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[2rem] xl:flex-row">
              <div className="">
                <CommonBtn3
                  href="/contact"
                  label="Book a Call"
                  bgColor="#3078FF"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] bg-white px-[3rem] py-[5rem] xl:mt-[-6rem] xl:h-[58.3rem] xl:px-[0rem] xl:py-[0rem]">
        <div className="relative mx-auto flex w-full max-w-[120rem] flex-col-reverse gap-[5rem] lg:flex-row lg:gap-[12.9rem] 2xl:max-w-[130rem]">
          <div
            ref={gridCardRef3}
            className="flex flex-col gap-[4.5rem] xl:pt-[10rem]"
          >
            <div className="flex flex-col justify-between gap-[5rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row xl:gap-[10rem]">
              {offerServicesDesignData.columns.map((col, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-[3.1rem] xl:pt-[3.5rem]`}
                >
                  <div className="overflow-hidden">
                    <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#FF37B3]">
                      {col.title}
                    </h5>
                  </div>

                  <ul className="flex flex-col gap-[1.4rem]">
                    {col.links.map((link, idx) => (
                      <li className="overflow-hidden" key={idx}>
                        <Link
                          href={link.href}
                          className="text-text-primary group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium transition-all duration-200"
                        >
                          <div className="size-[1rem] rounded-full border-2 border-[#EE8D00]" />{" "}
                          <span className="relative">
                            {link.label}

                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-[2rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row">
              <div className="">
                <CommonBtn3
                  href="/contact"
                  label="Book a Call"
                  bgColor="#44B276"
                />
              </div>
            </div>
          </div>

          <div
            ref={gridCardRef4}
            className="relative flex flex-col items-center gap-[4rem] lg:items-start lg:gap-[0rem] xl:top-[10.8rem]"
          >
            <h3 className="text-text-primary relative max-w-[30.8rem] text-center text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] md:text-[4.8rem] md:leading-[6rem] lg:text-left">
              <span>Design and Branding</span>

              <div className="absolute right-[2rem] bottom-[-.4rem] inline-flex size-[4rem] items-center justify-center md:right-[0.5rem] lg:right-[5.3rem]">
                <ClickArrowPinkIcon />
              </div>
            </h3>

            <div className="pointer-events-none relative select-none md:w-[44.248rem] lg:h-[55.18rem]">
              <Image
                src="/images/offer-design-img-01.png"
                alt="offer design image"
                height={551.8}
                width={442.48}
                priority
              />

              <Image
                src="/images/offer-design-img-02.png"
                alt="offer design image"
                height={203.3}
                width={200.88}
                priority
                className="absolute right-[0rem] bottom-[0rem] md:right-[-5.194rem] md:bottom-[13.405rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[120rem] flex-col px-[3rem] pt-[5rem] lg:flex-row xl:px-[0rem] xl:pt-[10rem] 2xl:max-w-[133rem]">
        <div
          ref={gridCardRef5}
          className="flex flex-col items-center lg:items-start"
        >
          <h3 className="relative max-w-[30.8rem] text-center text-[3.5rem] leading-[5rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem] lg:text-left">
            <span>Maintenance and Growth</span>

            <div className="absolute right-[4rem] bottom-[-0.5rem] inline-flex size-[4rem] items-center justify-center md:right-[-3rem] md:bottom-[-1rem] lg:right-[-1.8rem] lg:bottom-[1.6rem]">
              <ClickArrowGreenIcon />
            </div>
          </h3>

          <div className="pointer-events-none relative select-none md:top-[-5rem] lg:h-[49.819rem] lg:w-[57.12rem]">
            <Image
              src="/images/offer-maintenance-img.png"
              alt="offer maintenance image"
              height={498.19}
              width={571.2}
              priority
            />
          </div>
        </div>

        <div ref={gridCardRef6} className="flex flex-col gap-[4.5rem]">
          <div className="flex flex-col justify-between gap-[5rem] md:flex-row lg:flex-col lg:justify-start xl:flex-row xl:gap-[10rem]">
            {offerServicesMaintenanceData.columns.map((col, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-[3.1rem] xl:pt-[2.1rem]`}
              >
                <div className="overflow-hidden">
                  <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-[#81F2B4]">
                    {col.title}
                  </h5>
                </div>

                <ul className="flex flex-col gap-[1.4rem]">
                  {col.links.map((link, idx) => (
                    <li className="overflow-hidden" key={idx}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-[1.2rem] text-[2.2rem] leading-[3.2rem] font-medium text-white"
                      >
                        <div className="size-[1rem] rounded-full border-2 border-[#FFE400]" />{" "}
                        <span className="relative">
                          {link.label}

                          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[2rem] xl:flex-row">
            <div className="">
              <CommonBtn3
                href="/contact"
                label="Book a Call"
                bgColor="#EE8D00"
              />
            </div>

            {/* <Link
              href="/case-study"
              className="group relative z-[10] inline-flex size-[16.3rem] items-center justify-center xl:absolute xl:right-[10rem] xl:bottom-[25rem]"
            >
              <Image
                src="/images/case-study-btn-img-2(a).png"
                width={163}
                height={163}
                alt="Button  Images"
                className="animation-duration-[20s] group-hover:paused absolute inset-0 animate-spin"
              />

              <Image
                src="/images/case-study-btn-dark-img-2(b).png"
                width={135}
                height={135}
                alt="Button  Images"
                className="absolute top-1/2 left-1/2 -translate-1/2"
              />
            </Link> */}
          </div>
        </div>
      </div>

      <div ref={gridCardRef7} className="px-[3rem] xl:px-[0rem]">
        <div className="offer-cta-card mx-auto mt-[4rem] flex max-w-[120rem] rounded-[2rem] xl:mt-[-9rem]">
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
