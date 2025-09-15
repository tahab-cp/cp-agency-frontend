import Image from "next/image";
import Link from "next/link";

const CaseStudiesGrid = ({
  image,
  title,
  description,
  tags,
  technologies,
  className = "",
  slug,
}) => {
  return (
    <div
      className={`case-studies-grid grid w-full grid-cols-1 items-center gap-[4.3rem] lg:grid-cols-2 ${className}`}
    >
      {/* Left Image */}
      <Link
        href={`/case-studies/${slug}`}
        className="relative w-full md:h-[44rem]"
      >
        <Image
          src={image}
          alt="Case Study Image"
          height={440}
          width={555}
          priority
          className="size-full"
        />
      </Link>

      {/* Right Content */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        {/* Tags */}
        <ul className="flex flex-wrap gap-[1rem]">
          {tags.map((tag) => (
            <li
              key={tag.id}
              className={`bg-text-primary inline-flex h-[4rem] items-center justify-center gap-[.8rem] rounded-[.4rem] px-[1.2rem] py-[.8rem] text-[1.6rem] leading-[2.4rem] font-medium text-white uppercase`}
            >
              <span>{tag.name}</span>
            </li>
          ))}
        </ul>

        {/* Title */}
        <h3 className="text-text-primary my-[1.8rem] text-[3rem] leading-[4rem] font-semibold tracking-[-0.02em] md:text-[3.4rem] md:leading-[4.8rem]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-primary text-[1.8rem] leading-[2.6rem] font-normal">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-[2rem] flex w-full flex-col gap-[2rem]">
          <span className="text-text-primary/60 text-[1.6rem] leading-[2.4rem] font-medium uppercase">
            TECHNOLOGY USED
          </span>

          <ul className="flex w-full flex-wrap items-center justify-center gap-[3.3rem] border-y border-[#424242]/50 py-[1.8rem] md:flex-row lg:justify-start">
            {technologies.map((tech) => (
              <li key={tech.id}>
                {tech.logo && (
                  <img src={tech.logo} alt={tech.name} className="h-[2.2rem]" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesGrid;
