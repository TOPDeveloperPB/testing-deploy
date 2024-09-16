import { Key } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const StatisticsBanner = ({ blok }: any) => {
  return (
    <div
      className="bg-muted pb-12 sm:pb-16 md:pb-24 "
      {...storyblokEditable(blok)}
    >
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center lg:flex-row flex-col mx-auto w-full gap-0 md:gap-5 lg:gap-10 p-4 md:p-8 bg-white rounded-xl md:rounded-3xl">
          <div className="flex flex-col items-start">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-primary ">
              {blok?.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full">
            {blok?.stats?.map((item: any, index: Key) => (
              <div
                key={index}
                className="p-6 bg-destructive rounded-xl md:rounded-3xl"
              >
                <h3 className="text-[25px] sm:text-[26px] lg:text-[32px] font-bold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-normal text-primary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBanner;
