"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopBtn from "@/components/common/BackToTopBtn";
import StickyHeader from "@/components/layout/StickyHeader";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

// Register the plugin globally
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

<Script src="https://app.cal.com/embed/embed.js" strategy="afterInteractive" />;

export default function SiteLayout({ children }) {
  const lenisRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // or "auto"
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
        <Header />
        <StickyHeader />
        {children}
        <Footer />
        <BackToTopBtn />
      </body>
    </html>
  );
}
