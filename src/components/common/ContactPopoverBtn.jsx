import Link from "next/link";
import PhoneFillIcon from "@/assets/icons/phone-fill.svg";
import MeetIcon from "@/assets/icons/meet-icon.svg";
import { getCalApi } from "@calcom/embed-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect } from "react";

const ContactPopoverBtn = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <i className="header-cta-btn relative inline-flex size-[4.6rem] cursor-pointer items-center justify-center rounded-full bg-[#32284A]">
          <PhoneFillIcon />

          <div className="outline-text-primary absolute top-[.2rem] right-[.2rem] size-[.8rem] animate-pulse rounded-full bg-[#7EE972] outline-[3.5px]" />
        </i>
      </PopoverTrigger>
      <PopoverContent className="w-[20rem] pt-[1rem]">
        <div className="relative rounded-[2rem] bg-gradient-to-r from-[#ffe400] to-[#ff37b3] p-[2px]">
          <div className="flex flex-col overflow-hidden rounded-[2rem] bg-[#070707]">
            <Link
              href="tel:01618202667"
              className="flex items-center gap-[1rem] p-[1.6rem] text-[1.8rem] leading-[2.6rem] text-white"
            >
              <PhoneFillIcon />
              <span>Call Now</span>
            </Link>

            <hr className="h-[1px] w-full border-0 bg-white/20" />

            <button
              data-cal-namespace="15min"
              data-cal-link="hassan-iqbal-mznzu9/15min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="flex cursor-pointer items-center gap-[1rem] p-[1.6rem] text-[1.8rem] leading-[2.6rem] text-white"
            >
              <MeetIcon />
              <span>Schedule a call</span>
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactPopoverBtn;
