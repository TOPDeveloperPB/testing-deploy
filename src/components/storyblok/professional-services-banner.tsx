import Image from "next/image";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { blockResolver } from "@/lib/block-resolver";

const ProfessionalServicesBanner = ({ blok }: any) => {
  return (
    <div className="bg-muted pb-6 sm:pb-16" {...storyblokEditable(blok)}>
      <div className="max-w-6xl mx-5 lg:mx-auto">
        <section className="flex lg:flex-row flex-col items-start lg:items-center justify-center ">
          <div className="items-start justify-center">
            <div>
              <h1 className="text-[27px] sm:text-3xl md:text-[32px] lg:text-5xl font-bold text-primary mb-3 md:mb-4 lg:mb-6 w-full">
                {blok?.title}
              </h1>

              <div className="text-base font-normal text-popover mb-6 w-full lg:max-w-[630px]">
                {render(blok?.description, {
                  blokResolvers: blockResolver,
                })}
              </div>

              {blok?.button?.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          </div>
          <div className="flex items-center mx-auto justify-center w-full mt-8 md:w-1/2 md:mt-0">
            <Image
              src={blok?.image?.filename}
              alt="Localization Services"
              width={750}
              height={750}
              priority
              className=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfessionalServicesBanner;
