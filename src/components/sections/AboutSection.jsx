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
        duration: 1,
        ease: "power2.inOut",
        onComplete: () =>
          gsap.set(flagRefs.current[current], { display: "none" }),
      })
        .set(flagRefs.current[next], { display: "inline" })
        .fromTo(
          flagRefs.current[next],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
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
          className="mb-[2rem] max-w-[99rem] text-center text-[2rem] leading-[3rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[3.4rem] md:leading-[4.8rem] xl:text-left"
        >
          <span className="text-[#EE8D00]">Creative Pixels</span> is an
          independent web design and development agency based in{" "}
          <span className="text-[#FF37B3]">Manchester</span> — crafting digital
          experiences since 2014. We care deeply about our clients, build
          long-term partnerships, bring over a decade of industry expertise, and
          take pride in <span className="text-[#3078FF]">award-winning</span>,
          pixel-perfect work.
          <div
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
          </div>
        </h5>

        <div ref={btnRef} className="opacity-0">
          <CommonBtn3 href="/about" label="About CreativePixels" />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-[5rem] flex max-w-[120rem] flex-col gap-[1.8rem] px-[3rem] lg:mt-[10rem] xl:flex-row xl:px-[0rem] 2xl:max-w-[135rem]">
        <div
          ref={gridCardRef1}
          className="about-card-gradient relative -translate-y-8 transform overflow-hidden px-[2rem] py-[3rem] opacity-0 xl:w-[55%] 2xl:w-[60%]"
        >
          <div className="absolute top-[-11.9rem] left-[-10.5rem] z-[0] size-[30rem] bg-[#1534B699] blur-[100px]" />
          <div className="absolute right-0 bottom-[-26.656rem] z-[0] size-[30rem] bg-[#DFDFDF99] blur-[100px]" />

          <div className="relative z-[1] flex flex-col items-center gap-[2rem] xl:items-start">
            <button
              onClick={handleTogglePlay}
              className="inline-flex h-[4.4rem] cursor-pointer items-center justify-center gap-[1.2rem] rounded-[.8rem] border-[0.5px] border-dashed border-white px-[2rem] py-[.6rem] text-[1.6rem] leading-[2.4rem] font-medium text-white"
            >
              <Image
                src="/images/about-play-btn-img.svg"
                alt="Avatar"
                width={58}
                height={32}
              />

              <span>Hear From Founder</span>
            </button>

            <div className="relative h-[20rem] w-full overflow-hidden rounded-[2rem] md:h-[50rem] xl:h-[40rem]">
              <button
                onClick={handleToggleMute}
                className="absolute top-[1rem] right-[1rem] z-[10] flex size-[3rem] items-center justify-center rounded-[1rem] bg-black/80 text-white"
              >
                <span>
                  {isMuted ? (
                    <VolumeOff className="size-[1.6rem]" />
                  ) : (
                    <Volume2 className="size-[1.6rem]" />
                  )}
                </span>
              </button>

              <video
                onClick={() => {
                  handleToggleMute();
                }}
                ref={videoRef}
                muted
                autoPlay
                loop
                playsInline
                className="size-full object-cover"
              >
                <source src="/videos/about-video.mp4" type="video/mp4" />
                Your browser does not support the video.
              </video>
            </div>
          </div>
        </div>

        <div
          ref={gridCardRef2}
          className="grid grid-cols-1 gap-[2rem] md:grid-cols-2 xl:w-[45%] 2xl:w-[40%]"
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

              <h4 className="text-center text-[2.8rem] leading-[3.8rem] font-semibold tracking-[-0.02em] md:text-[2.5rem] md:leading-[3.5rem] xl:text-left">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
