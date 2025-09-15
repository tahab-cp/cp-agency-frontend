"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

const NavigationLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-text-primary inline-flex h-[4.6rem] min-w-[7.6rem] items-center justify-center rounded-[6rem] px-[1.6rem] py-[1.1rem] text-[1.6rem] leading-[2.4rem] font-medium transition-all duration-300 hover:bg-white ${isActive ? "text-text-primary bg-white" : "bg-white/15 text-white"} `}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
