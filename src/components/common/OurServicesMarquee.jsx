"use client";

import { ourServicesCardData } from "@/constants/servicesPage";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const OurServiesMarquee = () => {
  return (
    <>
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction="right"
      >
        {ourServicesCardData.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="group relative mx-[.735rem] inline-block h-[22rem] w-[30rem] overflow-hidden rounded-[2rem] md:h-[32.6rem] md:w-[47rem]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={470}
              height={326}
              priority
              className="size-full transition-all duration-300 group-hover:scale-[1.05]"
            />
          </Link>
        ))}
      </Marquee>
    </>
  );
};

export default OurServiesMarquee;
