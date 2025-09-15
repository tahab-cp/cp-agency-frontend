import Link from "next/link";

const FooterLinkCard = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <h5 className="text-[2.2rem] leading-[3.2rem] font-medium text-white">
        {title}
      </h5>

      <ul className="flex list-inside list-disc flex-col gap-[1.5rem]">
        {links.map((link, index) => (
          <li key={index} className="text-white/70 hover:text-white">
            <Link
              href={link.href}
              className="text-[1.6rem] leading-[2.4rem] font-medium capitalize"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkCard;
