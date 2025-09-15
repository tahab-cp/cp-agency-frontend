"use client";
import Image from "next/image";
import Link from "next/link";
import NavigationLink from "../common/NavigationLink";
import NavigationDropdown from "../common/NavigationDropdown";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";
import CommonBtn1 from "../common/CommonBtn1";
import { useState } from "react";
import { Menu } from "lucide-react";
import ContactPopoverBtn from "../common/ContactPopoverBtn";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`absolute top-0 left-0 z-[100] flex w-full items-center rounded-br-[2rem] rounded-bl-[2rem] px-[2rem] py-[3rem] md:px-[4rem] xl:px-[0rem] ${pathname === "/" ? "" : "header-gradient-bg"}`}
    >
      <div className="relative mx-auto flex w-full max-w-[120.329rem] items-center justify-between">
        <div className="overflow-hidden">
          <Link href="/" className="relative flex">
            <Image
              src="/images/logo.svg"
              alt="Brand Logo"
              width={170}
              height={66}
              fetchPriority="high"
              className="w-[14rem] md:w-[17rem]"
            />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-[2rem] xl:gap-[9.2rem]">
          <nav className="hidden items-center justify-center gap-[1rem] xl:flex">
            <div className="overflow-hidden">
              <div className="">
                <NavigationLink href="/">Home</NavigationLink>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="">
                <NavigationLink href="/about">About CP</NavigationLink>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="">
                <NavigationDropdown />
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="">
                <NavigationLink href="/case-studies">
                  Case Studies
                </NavigationLink>
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-[1rem] overflow-hidden xl:flex">
            <ContactPopoverBtn />

            <div className="">
              <CommonBtn1 />
            </div>
          </div>

          {/* Contact Cta for Responsive */}
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

export default Header;
