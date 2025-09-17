import AboutTestimonialsSection from "@/components/sections/AboutTestimonialsSection";
import CaseStudiesSection02 from "@/components/sections/CaseStudiesSection02";
import ContactSection from "@/components/sections/ContactSection";
import OurStatsSection from "@/components/sections/OurStatsSection";
import OurTeamSection from "@/components/sections/OurTeamSection";
import PitchDeckSection from "@/components/sections/PitchDeckSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import LineStroke09 from "@/assets/decorative-elements/line-stroke-09.svg";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

export const dynamic = "force-dynamic"; // 👈 Add this at the top

const AboutPage = async () => {
  const response = await fetchAPI("/api/case-studies", {
    populate: {
      hero_image: true,
      tags: true,
      technologies: { populate: ["logo"] },
    },
    sort: ["publishedAt:desc"],
  });

  const caseStudies = (response.data || []).map((item) => {
    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: item.excerpt, // use `excerpt` since JSON has no "description"
      image: getStrapiMedia(item.hero_image),
      tags: (item.tags || []).map((tag) => ({
        id: tag.id,
        name: tag.name,
      })),
      technologies: (item.technologies || []).map((tech) => ({
        id: tech.id,
        name: tech.name,
        logo: getStrapiMedia(tech.logo),
      })),
    };
  });

  return (
    <>
      <WhoWeAreSection />
      <WhyChooseUsSection />
      <PitchDeckSection />
      <div className="dark-gradient-bg">
        <OurStatsSection />
        <AboutTestimonialsSection />
      </div>
      <OurTeamSection />
      <div className="relative">
        <div className="absolute inset-0 z-[0]">
          <LineStroke09 className="absolute top-[20rem] left-[-23.8rem] w-full xl:top-[10.6rem]" />
        </div>

        <CaseStudiesSection02 caseStudies={caseStudies} />
      </div>
      <ContactSection />
    </>
  );
};

export default AboutPage;
