"use client";
import Image from "next/image";
import LineStroke03 from "@/assets/decorative-elements/line-stroke-03.svg";
import CommonBtn3 from "../common/CommonBtn3";
import SectionLabel2 from "../common/SectionLabel2";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const WhatWeOfferSection = () => {
  const labelRef = useRef();
  const gridCardRef1 = useRef();
  const gridCardRef2 = useRef();
  const lineRef = useRef(null);
  const cursorRef = useRef(null);

  // State to track which card is being hovered and cursor color
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorColor, setCursorColor] = useState("#FFC300"); // Default color

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
            start: "top 50%",
            end: "bottom 20%",
            scrub: true,
            markers: false,
          },
        },
      );
    }

    // Wobble/shake animation
    gsap.to(labelRef.current, {
      rotation: "+=3",
      duration: 0.15,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      repeatDelay: 0.5,
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
            delay: index * 0.1,
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

    const cursor = cursorRef.current;

    // Initial cursor position
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Move the custom cursor
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animate cursor position with GSAP
    const updateCursor = () => {
      // Calculate new position with a slight delay for smoothness
      cursorX = gsap.utils.interpolate(cursorX, mouseX, 0.1);
      cursorY = gsap.utils.interpolate(cursorY, mouseY, 0.1);

      // Apply the new position
      gsap.set(cursor, {
        x: cursorX - cursor.offsetWidth / 2,
        y: cursorY - cursor.offsetHeight / 2,
      });

      requestAnimationFrame(updateCursor);
    };

    // Set up event listeners
    window.addEventListener("mousemove", moveCursor);

    // Start the animation loop
    updateCursor();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Handle mouse enter for custom cursor
  const handleMouseEnter = (cardIndex, color) => {
    setHoveredCard(cardIndex);
    setCursorColor(color);

    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      width: "100px",
      height: "100px",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(".cursor-text", {
      opacity: 1,
      delay: 0.1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  // Handle mouse leave for custom cursor
  const handleMouseLeave = () => {
    setHoveredCard(null);

    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
      width: "20px",
      height: "20px",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(".cursor-text", {
      opacity: 0,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  return (
    <section className="offer-sec relative cursor-none pt-[5rem] pb-[5rem] xl:pt-[8rem] xl:pb-[23.5rem]">
      {/* Custom Cursor with dynamic background color */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden items-center justify-center rounded-full opacity-0 xl:flex"
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: cursorColor,
        }}
      >
        <span className="cursor-text text-center text-[1.2rem] leading-tight font-medium text-black opacity-0">
          View Case
          <br />
          Study
        </span>
      </div>

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
          className="mx-auto grid w-full max-w-[132rem] grid-cols-1 justify-items-center gap-x-[6rem] gap-y-[20rem] lg:grid-cols-2 xl:grid-cols-3 xl:justify-items-normal"
        >
          {/* Card 1 with yellow cursor */}
          <Link
            href="/case-studies"
            className="offer-grid-card group flex h-[36.4rem] flex-col items-center gap-[1.2rem] text-center transition-all duration-300 hover:!border-[#ffc300] hover:!bg-[#ffc300] xl:text-left"
            onMouseEnter={() => handleMouseEnter(0, "#FFC300")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col gap-[1.4rem] px-[2rem] pt-[3.8rem] xl:px-[0rem] xl:pl-[5.2rem]">
              <h3 className="relative w-full max-w-[33.3rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white transition-all duration-300 group-hover:text-black">
                <span>Website Development</span>
              </h3>

              <p className="max-w-[33.3rem] text-[1.8rem] leading-[2.6rem] font-normal text-white transition-all duration-300 group-hover:text-black">
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

          {/* Card 2 with blue cursor */}
          <Link
            href="/case-studies"
            className="offer-grid-card group flex h-[36.4rem] flex-col items-center gap-[1.2rem] text-center transition-all duration-300 hover:!border-[#44B276] hover:!bg-[#44B276] xl:text-left"
            onMouseEnter={() => handleMouseEnter(1, "#44B276")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col gap-[1.4rem] px-[2rem] pt-[3.8rem] xl:px-[0rem] xl:pl-[5.2rem]">
              <h3 className="relative w-full max-w-[33.3rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white transition-all duration-300 group-hover:text-black">
                <span>
                  Design and <br /> Branding
                </span>
              </h3>

              <p className="max-w-[33.3rem] text-[1.8rem] leading-[2.6rem] font-normal text-white transition-all duration-300 group-hover:text-black">
                Lorem ipsum amet, consectetur adipiscing elit. Integer mollis,
                libero eget volutpat porta
              </p>
            </div>

            <div className="pointer-events-none relative z-[10]">
              <Image
                src="/images/offer-design-img.png"
                alt="offer web image"
                width={324}
                height={337}
                priority
              />
            </div>
          </Link>

          {/* Card 3 with red cursor */}
          <Link
            href="/case-studies"
            className="offer-grid-card group flex h-[36.4rem] flex-col items-center gap-[1.2rem] text-center transition-all duration-300 hover:!border-[#FF37B3] hover:!bg-[#FF37B3] lg:col-span-2 xl:col-span-1 xl:text-left"
            onMouseEnter={() => handleMouseEnter(2, "#FF37B3")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col gap-[1.4rem] px-[2rem] pt-[3.8rem] xl:px-[0rem] xl:pl-[5.2rem]">
              <h3 className="relative w-full max-w-[33.3rem] text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-white transition-all duration-300 group-hover:text-black">
                <span>
                  Maintenance <br /> and Growth
                </span>
              </h3>

              <p className="max-w-[33.3rem] text-[1.8rem] leading-[2.6rem] font-normal text-white transition-all duration-300 group-hover:text-black">
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
              Need bold design or reliable code or both? You're in the right
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
