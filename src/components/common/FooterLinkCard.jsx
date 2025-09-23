import Link from "next/link";

const FooterLinkCard = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-white">
        {title}
      </h5>

      <ul className="flex flex-col gap-[1.5rem]">
        {links.map((link, index) => (
          <li key={index} className="text-white">
            <Link
              href={link.href}
              className="group text-[1.6rem] leading-[2.4rem] font-medium capitalize"
            >
              <span className="relative">
                {link.label}
                <span className="absolute bottom-[-2px] left-0 h-[2px] w-0 bg-gradient-to-r from-[#ffe400] to-[#ff37b3] transition-all duration-200 group-hover:w-full" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkCard;
