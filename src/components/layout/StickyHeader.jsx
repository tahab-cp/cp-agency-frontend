"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationLink from "../common/NavigationLink";
import NavigationDropdown from "../common/NavigationDropdown";
import CommonBtn1 from "../common/CommonBtn1";
import HamburgerMenu from "./HamburgerMenu";
import { Menu } from "lucide-react";
import ContactPopoverBtn from "../common/ContactPopoverBtn";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 z-[999] w-full p-[1rem] transition-all duration-300 md:p-[2rem] ${isVisible ? "top-[0%]" : "top-[-100%]"}`}
    >
      <div className="shadow-01 relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between rounded-full bg-black/30 px-[2rem] py-[1rem] backdrop-blur-[10px]">
        <Link href="/" className="relative">
          <Image
            src="/images/logo.svg"
            alt="Brand Logo"
            width={170}
            height={66}
            fetchPriority="high"
            className="h-[6.6rem] w-[14rem] md:w-[17rem]"
          />
        </Link>

        <div className="flex items-center justify-end gap-[2rem] xl:gap-[9.2rem]">
          <nav className="hidden items-center justify-center gap-[1rem] xl:flex">
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/about">About CP</NavigationLink>
            <NavigationDropdown />
            <NavigationLink href="/case-studies">Case Studies</NavigationLink>
          </nav>

          <div className="hidden items-center gap-[1rem] overflow-hidden xl:flex">
            {/* <i className="header-cta-btn-animate relative inline-flex size-[4.6rem] items-center justify-center rounded-full bg-[#32284A]">
              <Image
                src="/images/icons/phone-fill.svg"
                alt="Phone Fill Icon"
                width={16}
                height={16}
              />
              <div className="outline-text-primary absolute top-[.2rem] right-[.2rem] size-[.8rem] rounded-full bg-[#7EE972] outline-[3.5px]" />
            </i> */}
            <ContactPopoverBtn />

            {/* CTA Button */}
            <CommonBtn1 />
          </div>

          {/* Contact Cta for Responsive */}
          {/* <Link href="/contact" className="xl:hidden">
            <i className="relative inline-flex size-[4.6rem] items-center justify-center rounded-full bg-[#32284A]">
              <Image
                src="/images/icons/phone-fill.svg"
                alt="Phone Fill Icon"
                width={16}
                height={16}
              />

              <div className="outline-text-primary absolute top-[.2rem] right-[.2rem] size-[.8rem] animate-pulse rounded-full bg-[#7EE972] outline-[3.5px]" />
            </i>
          </Link> */}
          <div className="xl:hidden">
            <ContactPopoverBtn />
          </div>

          {/* Hamburger Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex size-[4rem] items-center justify-center rounded-full border border-white"
            >
              <Menu className="size-[2.3rem] text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="xl:hidden">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default StickyHeader;
