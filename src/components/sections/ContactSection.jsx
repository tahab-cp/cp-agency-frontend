"use client";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";
import CtaSection2 from "../common/CtaSection2";
import TextMarquee from "../common/TextMarquee";

const ContactSection = () => {
  return (
    <section className="relative py-[5rem] xl:py-[10rem]">
      <div className="relative z-[3] mx-auto flex max-w-[112.3rem] flex-col items-center px-[3rem] xl:px-[0rem]">
        <div className="overflow-hidden">
          <div className="text-center">
            <SectionTitle label="Ready to Start Working With Us?" />
          </div>
        </div>

        <div className="w-full">
          <div className="contact-details-bg mt-[4.5rem] mb-[3.7rem] flex w-full flex-col items-center justify-between gap-[4rem] px-[4rem] py-[3.5rem] text-center lg:flex-row lg:gap-[0rem] lg:text-left">
            <div className="flex flex-col">
              <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
                GIVE US A CALL
              </h6>

              <Link
                href="tel:01618202667"
                className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FFC300]"
              >
                0161 820 2667
              </Link>
            </div>

            <div className="flex flex-col">
              <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
                EMAIL US
              </h6>

              <Link
                href="mailto:hello@cp.agency"
                className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#FF37B3]"
              >
                hello@cp.agency
              </Link>
            </div>

            <div className="flex flex-col">
              <h6 className="text-[2.6rem] leading-[3.2rem] font-semibold tracking-[-0.02em] uppercase">
                LOCATION
              </h6>

              <Link
                href=""
                className="text-[3.4rem] leading-[4.8rem] font-semibold tracking-[-0.02em] text-[#3078FF]"
              >
                Manchester, M12 6PN
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          <ContactForm />
        </div>
      </div>

      <div className="relative z-[3] mt-[4rem] mb-[6.7rem]">
        <TextMarquee />
      </div>

      <div className="relative z-[3] mx-auto max-w-[120.3rem] px-[3rem] xl:px-[0rem]">
        <div className="">
          <CtaSection2 />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
