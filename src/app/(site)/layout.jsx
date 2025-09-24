"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopBtn from "@/components/common/BackToTopBtn";
import StickyHeader from "@/components/layout/StickyHeader";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

<Script src="https://app.cal.com/embed/embed.js" strategy="afterInteractive" />;

export default function SiteLayout({ children }) {
  const lenisRef = useRef();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile breakpoint
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280); // breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lenis animation frame loop (Safari-safe)
  useEffect(() => {
    if (!isMobile) {
      let frame;
      const raf = (time) => {
        lenisRef.current?.lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      return () => cancelAnimationFrame(frame);
    }
  }, [isMobile]);

  // Reset scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        {/* Only enable Lenis on non-mobile */}
        {!isMobile && (
          <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
        )}
        <Header />
        <StickyHeader />
        {children}
        <Footer />
        <BackToTopBtn />
      </body>
    </html>
  );
}
