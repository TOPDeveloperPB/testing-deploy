import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import BackgroundImage from "../ui/background-image";

const ImpactStatistics = ({ blok }: any) => {
  return (
    <div
      className="bg-muted pb-14 sm:pb-16 md:pb-24"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-[1140px] mx-5 lg:mx-auto">
        <BackgroundImage image={blok?.bgImage}>
          <div className="py-5 sm:py-10 lg:py-[86px] px-6 md:pl-16">
            <h1 className="text-2xl sm:text-[28px] md:text-[32px] md:leading-[50px] font-bold text-white mb-4 max-w-[420px]">
              {blok?.title}
            </h1>
            <p className="text-base font-normal text-accent mb-7 sm:mb-10 md:mb-14 max-w-96">
              {blok?.description}
            </p>
            {blok?.button?.map((nestedBlok: any) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </BackgroundImage>
      </div>
    </div>
  );
};
export default ImpactStatistics;
