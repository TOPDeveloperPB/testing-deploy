import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const NewsInsights = ({ blok }: any) => {
  return (
    <div
      className="bg-muted pb-8 sm:pb-16 lg:pb-28"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center mb-7 lg:mb-[40px] px-4">
          <h1 className="text-[27px] md:text-[32px] lg:text-5xl text-primary font-bold mb-2 sm:mb-0">
            {blok?.title}
          </h1>
          {blok?.button?.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-4 lg:gap-8 w-full">
          {blok?.news?.map((nestedBlok: any) => (
            <div
              className="bg-white p-3 lg:p-[19px] rounded-xl sm:rounded-3xl w-full"
              key={nestedBlok._uid}
            >
              <StoryblokComponent blok={nestedBlok} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;
