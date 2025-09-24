"use client";
import SectionDescription from "../common/SectionDescription";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import TextMarquee from "../common/TextMarquee";
import CtaSection2 from "../common/CtaSection2";
import LineStroke14 from "@/assets/decorative-elements/line-stroke-14.svg";
import SectionLabel2 from "../common/SectionLabel2";
import ArrowRightDarkIcon from "@/assets/icons/arrow-right-dark.svg";
import PhoneYellowIcon from "@/assets/icons/phone-yellow-icon.svg";
import LocationPinkIcon from "@/assets/icons/location-pink-icon.svg";
import BreifcaseRedIcon from "@/assets/icons/breifcase-red-icon.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import RightArrowIcon from "@/assets/icons/right-arrow-icon.svg";

const ContactUsSection = () => {
  const labelRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const gridCardRef = useRef();

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

    const tl = gsap.timeline();

    tl.to(headingRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.2,
    })

      .to(descRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })

      .fromTo(
        gsap.utils.toArray(gridCardRef.current.children),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
        },
      );
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="relative overflow-hidden px-[3rem] pt-[18rem] pb-[5rem] md:pt-[20.6rem] xl:px-[0rem] xl:pb-[10rem]">
      {/* Decorative stroke line */}
      <div className="absolute inset-0 z-[0]">
        <LineStroke14 className="absolute top-[15.4rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[120.3rem] flex-col items-center xl:items-start">
        <div className="text-center xl:text-left">
          <div ref={labelRef} className="inline-flex rotate-[2deg]">
            <SectionLabel2 text="Contact Us" />
          </div>

          <h2
            ref={headingRef}
            className="my-[1rem] text-[3rem] leading-[5rem] font-semibold tracking-[-0.03em] opacity-0 md:my-[2rem] md:text-[7rem] md:leading-[8.4rem] md:font-bold"
          >
            Get in Touch with us!
          </h2>

          <div ref={descRef} className="opacity-0">
            <SectionDescription label="Reach out to us to discuss business opportunities or simply to say hello. " />
          </div>
        </div>

        {/* <div
          ref={gridCardRef}
          className="mt-[4rem] grid w-full grid-cols-1 gap-[3.3rem] md:grid-cols-2 xl:grid-cols-3"
        >
          <div className="contact-us-card">
            <h3 className="flex items-center gap-[1rem] text-[2.8rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#FFC300] md:text-[3.4rem] md:leading-[4.8rem]">
              <div className="relative size-[1.8rem]">
                <PhoneYellowIcon />
              </div>
              <span>Contact</span>
            </h3>

            <ul className="mt-[1.7rem] flex flex-col gap-[.5rem]">
              <li className="flex items-center justify-between">
                <div className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  <span>Phone:</span>{" "}
                  <Link href="" className="hover:underline">
                    0161 820 2667
                  </Link>
                </div>

                <ArrowRightDarkIcon className="size-[1.4rem] opacity-40" />
              </li>

              <li className="flex items-center justify-between">
                <div className="text-text-primary/70 inline-flex items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  <span>Email:</span>{" "}
                  <Link href="" className="hover:underline">
                    hello@cp.agency
                  </Link>
                </div>

                <ArrowRightDarkIcon className="size-[1.4rem] opacity-40" />
              </li>
            </ul>
          </div>

          <div className="contact-us-card">
            <h3 className="flex items-center gap-[1rem] text-[2.8rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#FF37B3] md:text-[3.4rem] md:leading-[4.8rem]">
              <div className="relative h-[2.041rem] w-[1.6rem]">
                <LocationPinkIcon />
              </div>
              <span>Location</span>
            </h3>

            <ul className="mt-[1.7rem] flex flex-col gap-[.5rem]">
              <li className="flex items-start justify-between">
                <p className="text-text-primary/70 inline-flex max-w-[25rem] items-center gap-[.4rem] text-[1.6rem] leading-[2.4rem] font-normal md:text-[1.8rem] md:leading-[2.6rem]">
                  Location: UseSpace, Paddock Street, Manchester, M12 6PN
                </p>

                <ArrowRightDarkIcon className="size-[1.4rem] opacity-40" />
              </li>
            </ul>
          </div>

          <div className="contact-us-card">
            <h3 className="flex items-center gap-[1rem] text-[2.8rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#F14A58] md:text-[3.4rem] md:leading-[4.8rem]">
              <div className="relative h-[2rem] w-[2.4rem]">
                <BreifcaseRedIcon />
              </div>
              <span>Quick Call</span>
            </h3>

            <div className="mt-[1.7rem] flex flex-col gap-[.5rem]">
              <button
                data-cal-namespace="15min"
                data-cal-link="hassan-iqbal-mznzu9/15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="common-btn-1-parent inline-flex cursor-pointer items-center"
              >
                <div
                  className={`common-btn-1 overflow-hidden bg-black whitespace-nowrap`}
                >
                  <div className="gradient-layer" />

                  <div className="fill-layer" />

                  <span className="relative z-10">Book a Call</span>
                </div>

                <i className="relative z-[0] mx-[-.3rem]">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.475586 0C1.85901 2.39049 4.44175 4 7.40234 4C10.3629 4 12.9457 2.39049 14.3291 0H16.4023V18H14.3291C12.9457 15.6095 10.3629 14 7.40234 14C4.44175 14 1.85901 15.6095 0.475586 18H0.402344V0H0.475586Z"
                      fill="#FF37B3"
                    />
                  </svg>
                </i>

                <div className={`common-btn-arrow-1 overflow-hidden bg-black`}>
                  <div className="gradient-layer" />

                  <div className="fill-layer" />

                  <i className="relative z-10">
                    <RightArrowIcon className="fill-white" />
                  </i>
                </div>
              </button>
            </div>
          </div>
        </div> */}

        <div className="mt-[4rem] grid w-full grid-cols-1 items-center gap-[2rem] text-center md:grid-cols-2 lg:text-left xl:grid-cols-3">
          <div className="contact-us-card flex flex-col">
            <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
              GIVE US A CALL
            </h6>

            <Link
              href="tel:01618202667"
              className="text-[3rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
            >
              0161 820 2667
            </Link>
          </div>

          <div className="contact-us-card flex flex-col">
            <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
              EMAIL US
            </h6>

            <Link
              href="mailto:hello@cp.agency"
              className="text-[3rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]"
            >
              hello@cp.agency
            </Link>
          </div>

          <div className="contact-us-card flex flex-col">
            <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
              LOCATION
            </h6>

            <Link
              href=""
              className="text-[3rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
            >
              Manchester, M12 6PN
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-[3] mx-auto mt-[5rem] flex max-w-[122.3rem] flex-col gap-[3rem] md:gap-[4.8rem] lg:mt-[8.1rem]">
        <div className="text-center xl:text-left">
          <SectionTitle label="Ready to Start Working With Us?" />
        </div>

        <div className="relative">
          <button
            data-cal-namespace="15min"
            data-cal-link="hassan-iqbal-mznzu9/15min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className="group absolute top-[-14.7rem] right-[-5rem] z-[10] hidden size-[21rem] cursor-pointer items-center justify-center xl:inline-flex 2xl:right-[-12.8rem]"
          >
            <Image
              src="/images/talk-expert-btn-img-2(a).svg"
              width={162}
              height={162}
              alt="Button  Images"
              className="absolute top-1/2 left-1/2 -translate-1/2"
            />

            <Image
              src="/images/talk-expert-btn-img-2(b).png"
              width={210}
              height={210}
              alt="Button  Images"
              className="animation-duration-[20s] group-hover:paused absolute inset-0 animate-spin"
            />
          </button>

          <ContactForm />
        </div>
      </div>

      <div className="relative z-[3] mt-[7.8rem] mb-[6.7rem]">
        <TextMarquee />
      </div>

      <div className="relative z-[3] mx-auto max-w-[120.3rem]">
        <CtaSection2 />
      </div>
    </section>
  );
};

export default ContactUsSection;
