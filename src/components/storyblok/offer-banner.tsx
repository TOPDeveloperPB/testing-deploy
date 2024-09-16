import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";


interface OfferBannerProps {
  blok: {
    title: any;
    description: any;
    button?: any;
    image: {
      filename: string;
      alt: string;
    };
  };
}

export default function OfferBanner({ blok }: OfferBannerProps) {
  return (
    <div className="bg-muted pb-12 sm:pb-28 max-w-6xl mx-auto" {...storyblokEditable(blok)}>
      <div className="px-2">
        <div className="flex items-center justify-center">
          <div className="flex lg:flex-row flex-col items-center px-4 sm:px-16 pt-6 md:pt-12 pb-7 sm:pb-9 md:pb-16 w-full bg-[#f0f7f7] rounded-xl lg:rounded-[32px] ">
            <div className="w-full lg:max-w-xl mb-8 md:mb-0">
              <div className="text-[19px] sm:text-[22px] lg:text-[32px] font-bold text-primary mb-2 md:mb-4">
                {render(blok?.title)}
              </div>
              <div className="text-[15px] lg:text-lg font-normal text-popover mb-9 sm:mb-12">
                {render(blok?.description)}
              </div>
              {blok?.button?.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
            <div className="">
              <Image
                src={blok?.image?.filename}
                alt={blok?.image?.alt}
                width={450}
                height={450}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
