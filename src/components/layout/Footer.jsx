import Image from "next/image";
import Link from "next/link";
import FooterLinkCard from "../common/FooterLinkCard";
import LogoPopup from "../common/LogoPopup";
import LineStroke06 from "@/assets/decorative-elements/line-stroke-06.svg";
import CLetter from "@/assets/decorative-elements/c-letter.svg";
import PLetter from "@/assets/decorative-elements/p-letter.svg";
import FooterAccordion from "../common/FooterAccordion";
import ClientLogoSlider from "../common/ClientLogoSlider";
import {
  footerLinksCardData,
  logoPopupsData,
  socialLinks,
} from "@/constants/globals";

const Footer = () => {
  return (
    <footer className="footer relative w-full px-[2rem] pt-[5rem] pb-[2.764rem] xl:px-[0rem] xl:pt-[6.2rem]">
      {/* Decorative stroke line */}
      <div className="pointer-events-none absolute inset-0 z-[1] select-none">
        <LineStroke06 className="absolute top-[-19.3rem] left-1/2 w-full -translate-x-1/2" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[0] overflow-hidden select-none">
        <CLetter className="absolute bottom-[3rem] left-[-3rem] w-[8.4rem]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[0] hidden overflow-hidden select-none xl:block">
        <PLetter className="absolute top-[43.5rem] right-[-3rem]" />
      </div>

      <div className="overflow-hidden">
        <div className="relative z-[3] mx-auto flex max-w-[120rem] flex-col items-center justify-between gap-[4rem] rounded-[1.6rem] border-[2px] border-white bg-white/20 px-[4.5rem] pt-[2.3rem] pb-[3rem] backdrop-blur-[30px] lg:flex-row lg:gap-[0rem]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link
              href="tel:01618202667"
              className="text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]"
            >
              0161 820 2667
            </Link>

            <h5 className="text-[2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-white md:max-w-[32.4rem] md:text-[2.6rem] md:leading-[3.2rem]">
              UseSpace, Paddock Street, Manchester, M12 6PN
            </h5>
          </div>

          <div className="flex flex-col items-center gap-[.658rem] text-center lg:items-end lg:text-right">
            <Link
              href="mailto:hello@cp.agency"
              className="text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] text-white md:text-[4.8rem] md:leading-[6rem]"
            >
              hello@cp.agency
            </Link>

            <div className="flex items-center justify-end gap-[.7rem]">
              {socialLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="inline-flex size-[4.5rem] items-center justify-center rounded-[1.6rem] bg-white/15 md:size-[5rem]"
                >
                  <item.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-[3] mx-auto mt-[5.7rem] hidden max-w-[118.4rem] justify-between xl:flex">
          <div className="flex flex-col gap-[8.7rem]">
            {footerLinksCardData
              .filter(
                (item) => item.title === "Design" || item.title === "Links",
              )
              .map((item, idx) => (
                <FooterLinkCard
                  key={idx}
                  title={item.title}
                  links={item.links}
                />
              ))}
          </div>

          <div className="flex flex-col gap-[8.7rem]">
            {footerLinksCardData
              .filter(
                (item) => item.title === "Branding" || item.title === "Others",
              )
              .map((item, idx) => (
                <FooterLinkCard
                  key={idx}
                  title={item.title}
                  links={item.links}
                />
              ))}
          </div>

          <div className="flex flex-col gap-[8.7rem]">
            {footerLinksCardData
              .filter((item) => item.title === "Website Development")
              .map((item, idx) => (
                <FooterLinkCard
                  key={idx}
                  title={item.title}
                  links={item.links}
                />
              ))}
          </div>

          <div className="flex flex-col gap-[8.7rem]">
            {footerLinksCardData
              .filter(
                (item) =>
                  item.title === "Maintenance & Growth" ||
                  item.title === "Legal",
              )
              .map((item, idx) => (
                <FooterLinkCard
                  key={idx}
                  title={item.title}
                  links={item.links}
                />
              ))}
          </div>
        </div>

        <div className="relative z-[3] mx-auto mt-[5.7rem] flex max-w-[118.4rem] flex-col gap-[2rem] xl:hidden">
          {footerLinksCardData.map((item, idx) => (
            <div key={idx} className="border-b border-white pb-[2rem]">
              <FooterAccordion
                title={item.title}
                value={item.title}
                links={item.links}
              />
            </div>
          ))}
        </div>

        <ul className="relative z-[3] mx-auto mt-[5.7rem] mb-[4.6rem] hidden max-w-[120rem] grid-cols-1 items-center justify-items-center gap-[4rem] rounded-[1.6rem] bg-white/15 px-[2.4rem] py-[2rem] md:grid-cols-3 xl:grid xl:grid-cols-7">
          {logoPopupsData.map((item, idx) => (
            <li key={idx}>
              <LogoPopup
                logo={item.logo}
                popupImage={item.popupImage}
                title={item.title}
                href={item.href}
                logoWidth={item.logoWidth}
                logoHeight={item.logoHeight}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Logos */}
        <div className="relative z-[3] my-[4rem] block w-full xl:hidden">
          <ClientLogoSlider />
        </div>

        <div className="relative z-[3] mx-auto flex max-w-[120rem] flex-col items-center justify-between gap-[2rem] text-center lg:flex-row lg:gap-[0rem] lg:text-left">
          <p className="max-w-[32rem] text-[1.8rem] leading-[2.6rem] font-normal text-white/70 md:max-w-fit">
            Copyright © 2025 Creativepixels Inc. All rights reserved.
          </p>

          <ul className="flex items-center justify-end">
            <li>
              <Image
                src="/images/creative-hosting-logo.png"
                width={73.11}
                height={34.03}
                alt=""
              />
            </li>

            <li className="mx-[2rem] h-[3.293rem] w-[0.5px] bg-white" />

            <li>
              <Image
                src="/images/wp-fixed-logo.png"
                width={75.48}
                height={31.7}
                alt=""
              />
            </li>

            <li className="mx-[2rem] h-[3.293rem] w-[0.5px] bg-white" />

            <li>
              <Image
                src="/images/monthly-designs-logo.png"
                width={137.95}
                height={23.91}
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
