"use client";
import { X } from "lucide-react";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerAccordion from "../common/HamburgerAccordion";
import ContactPopoverBtn from "../common/ContactPopoverBtn";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setIsOpen(false); // auto-close
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`hamburger-menu fixed top-0 z-[100] flex h-screen w-full flex-col transition-all duration-300 ${isOpen ? "left-0" : "left-[200%]"}`}
      >
        <div className="flex items-center justify-between px-[2rem] py-[3rem] md:px-[4rem]">
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="relative overflow-hidden"
          >
            <Image
              src="/images/logo.svg"
              alt="Brand Logo"
              width={170}
              height={66}
              fetchPriority="high"
              className="w-[14rem] md:w-[17rem]"
            />
          </Link>

          <div className="flex items-center gap-[2rem]">
            {/* Contact Cta for Responsive */}
            <ContactPopoverBtn />

            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex size-[4rem] items-center justify-center rounded-full border border-[#ffffff]"
            >
              <X className="size-[2.3rem] text-white" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <nav className="flex flex-col gap-[2rem] py-[2rem] text-white md:py-[4rem]">
            <div className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-[3rem] leading-[4rem] font-semibold uppercase md:text-[4rem] md:leading-[5rem]"
              >
                Home
              </Link>
            </div>

            <div className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-[3rem] leading-[4rem] font-semibold uppercase md:text-[4rem] md:leading-[5rem]"
              >
                About
              </Link>
            </div>

            <div className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]">
              <HamburgerAccordion setIsOpen={setIsOpen} />
            </div>

            <div className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]">
              <Link
                href="/case-studies"
                onClick={() => setIsOpen(false)}
                className="text-[3rem] leading-[4rem] font-semibold uppercase md:text-[4rem] md:leading-[5rem]"
              >
                Case Studies
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
