"use client";
import Image from "next/image";
import CommonBtn3 from "../common/CommonBtn3";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { aboutCardData } from "@/constants/homePage";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import CLetter2 from "@/assets/decorative-elements/c-letter-2";
import { Flip } from "gsap/Flip";

// Register plugins
gsap.registerPlugin(Flip);

const AboutSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const descRef = useRef();
  const btnRef = useRef();
  const gridCardRef1 = useRef();
  const gridCardRef2 = useRef();
  const flagContainerRef = useRef(null);
  const flagRefs = useRef([]);
  const flags = ["🇬🇧", "🇦🇺", "🇺🇸"];

  useEffect(() => {
    const splitDesc = new SplitText(descRef.current, {
      type: "lines",
    });

    gsap.fromTo(
      splitDesc.lines,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.to(btnRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(gridCardRef1.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: gridCardRef1.current,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo(
      gsap.utils.toArray(gridCardRef2.current.children),
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: gridCardRef2.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      },
    );

    // Set initial state
    gsap.set(flagRefs.current, { y: 20, opacity: 0, display: "none" });
    gsap.set(flagRefs.current[0], { y: 0, opacity: 1, display: "inline" });

    let current = 0;

    const cycleFlags = () => {
      const next = (current + 1) % flags.length;

      const tl = gsap.timeline({
        onComplete: () => {
          current = next;
          cycleFlags(); // keep cycling
        },
      });

      tl.to(flagRefs.current[current], {
        y: -20,
        opacity: 0,
        duration: 1.3,
        ease: "power2.inOut",
        onComplete: () =>
          gsap.set(flagRefs.current[current], { display: "none" }),
      })
        .set(flagRefs.current[next], { display: "inline" })
        .fromTo(
          flagRefs.current[next],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.3, ease: "power2.inOut" },
          "<0.2",
        );
    };

    cycleFlags();
  }, []);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative py-[5rem] xl:py-[10rem]">
      {/* Bg Element */}
      <div className="absolute inset-0 z-[0] hidden overflow-hidden xl:block">
        <CLetter2 className="absolute top-[3.1rem] right-[-18.341rem] h-[60.3rem] w-[56rem]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[120rem] flex-col items-center px-[3rem] xl:items-start xl:px-[0rem]">
        <h5
          ref={descRef}
          className="mb-[2rem] max-w-[99rem] text-center text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[3.4rem] md:leading-[4.8rem] xl:text-left [&>*:nth-child(2)]:mb-[2rem]"
        >
          <div>
            We believe every website and brand should work harder for the people
            behind it.{" "}
          </div>
          <div>
            Since 2014, Creative Pixels has delivered WordPress web design,
            creative branding, and ongoing support for businesses in the UK, US,
            and Australia building digital experiences that are easy to use,
            simple to manage, and designed for lasting growth.
          </div>
          {/* <div
            ref={flagContainerRef}
            className="mt-[2rem] flex items-center justify-center gap-[1rem] overflow-hidden xl:justify-start"
          >
            We work with clients in
            {flags.map((flag, index) => (
              <span
                key={index}
                ref={(el) => (flagRefs.current[index] = el)}
                className="inline-block min-w-[2.5rem]"
              >
                {flag}
              </span>
            ))}
          </div> */}
        </h5>

        <div ref={btnRef} className="opacity-0">
          <CommonBtn3 href="/about" label="About CreativePixels" />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-[5rem] flex max-w-[120rem] flex-col gap-[1.8rem] px-[3rem] lg:mt-[10rem] xl:flex-row xl:px-[0rem] 2xl:max-w-[136rem]">
        <div
          ref={gridCardRef1}
          className="relative -translate-y-8 transform overflow-hidden opacity-0 xl:w-[62.9rem]"
        >
          <div className="relative z-[1] flex flex-col justify-between gap-[2rem]">
            <h3 className="absolute top-[1rem] left-1/2 z-[10] w-full -translate-x-1/2 text-center text-[2.5rem] leading-[3rem] font-semibold tracking-[-0.02em] text-white md:top-[5rem] md:text-[3.4rem] md:leading-[4rem] xl:left-[4rem] xl:-translate-x-0 xl:text-left">
              We create <br /> exceptional websites
            </h3>

            <Image
              src="/images/about-main-img.png"
              width={629}
              height={611}
              alt="Image"
              className="size-full object-cover"
            />
          </div>
        </div>

        <div
          ref={gridCardRef2}
          className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 xl:w-[70.5rem]"
        >
          {aboutCardData.map((item, idx) => (
            <div
              key={idx}
              className="about-card flex flex-col items-center justify-between gap-[2rem] transition-colors duration-300 xl:items-start"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = item.hoverColor)
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              <item.icon />

              <h4 className="max-w-[22rem] text-center text-[2.8rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[2.5rem] md:leading-[3.5rem] xl:text-left">
                {item.title}
              </h4>

              <p className="text-center xl:text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
