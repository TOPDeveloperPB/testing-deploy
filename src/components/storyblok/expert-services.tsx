import Image from "next/image";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const ExpertServices = ({ blok }: any) => {
  return (
    <div
      className="bg-muted pb-14 sm:pb-16 md:pb-24"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-6xl mx-5 lg:mx-auto">
        <div>
          <div className="flex lg:flex-row flex-col justify-start gap-8 items-center bg-white rounded-[32px] w-full py-3 px-4">
            <div className="">
              <Image
                src={blok?.image?.filename}
                alt={""}
                width={450}
                height={450}
                sizes=""
                className="object-cover bg-[#C2BCB8] rounded-xl md:rounded-[32px] md:w-[448px]"
              />
            </div>
            <div className=" ml-0 md:ml-0 max-w-xl text-start items-start">
              <h2 className="text-sm sm:text-base font-normal text-popover mb-3">
                {blok?.headline}
              </h2>
              <h1 className="text-primary text-[23px] sm:text-[28px] lg:text-[32px] lg:leading-10 font-bold mb-1 leading-8 md:max-w-[400px]">
                {blok?.title}
              </h1>
              <p className="text-base font-normal text-popover mb-6 sm:mb-8 md:mb-7">
                {blok?.description}
              </p>
              {blok?.button?.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertServices;
