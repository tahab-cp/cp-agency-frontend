"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopBtn from "@/components/common/BackToTopBtn";
import StickyHeader from "@/components/layout/StickyHeader";

gsap.registerPlugin(ScrollTrigger, SplitText);

<Script src="https://app.cal.com/embed/embed.js" strategy="afterInteractive" />;

export default function SiteLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StickyHeader />
        {children}
        <Footer />
        <BackToTopBtn />
      </body>
    </html>
  );
}
