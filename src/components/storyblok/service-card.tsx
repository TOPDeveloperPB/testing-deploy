import {
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react/rsc";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Check from "../../../public/images/checkgreen.svg";
import Cross from "../../../public/images/closemodal.svg";
import { Key } from "react";

export default function ServiceCard({ blok, onClose }: any) {
  return (
    <div className="bg-muted" {...storyblokEditable(blok)}>
      <div className="py-8">
        <Tabs defaultValue="v-0">
          <div className="flex lg:flex-row flex-col items-center gap-2 relative">
            <div className="relative">
              <div className="relative">
                <Image
                  src={blok?.image?.filename}
                  alt="Localization Services"
                  width={340}
                  height={340}
                  priority
                  className="h-[250px] mb-4 max-w-full lg:max-w-[340px] rounded-3xl"
                />
              </div>
              <div className="vector_bg absolute -top-2 -left-2.5 w-[90px] h-[90px]">
              <div
                onClick={onClose}
              className="flex items-center justify-center w-12 ml-2 mt-2 h-12 bg-black group-hover:bg-primary rounded-full transform -translate-x-3 -translate-y-3 cursor-pointer z-10 transition-all duration-300">
              
                <Image src={Cross} alt="Close" />
              </div>
              </div>
              <div className="absolute top-52 left-0 right-0 py-1 px-4 rounded-full mx-5 bg-gray-200 bg-opacity-75 z-20">
                <p className="text-base font-bold text-primary text-center">
                  {blok?.title}
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="overflow-x-auto whitespace-nowrap">
                <TabsList className="flex flex-row justify-start ml-0 gap-3">
                  {blok?.tabs?.map((item: any, index: Key) => {
                    return (
                      <TabsTrigger
                      key={index}
                      value={`v-${index}`}
                      className="text-base font-bold rounded-t-[24px] px-10 py-2 ml-0 bg-[#F6F6F6] text-[#999999] hover:bg-white hover:text-[#121212] data-[state=active]:bg-white data-[state=active]:text-[#121212] transition-colors duration-200"
                    >
                      {item?.tabTitle}
                    </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>
              {blok?.tabs?.map((item: any, index: Key) => {
                return (
                  <TabsContent
                    key={index}
                    value={`v-${index}`}
                    className="bg-white pt-6 px-5 rounded-b-2xl"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div className="space-y-4">
                        <h2 className="text-lg lg:text-xl text-primary font-bold mb-3 max-w-xs">
                          {item?.title}
                        </h2>
                        {item?.button?.map((nestedBlok: any) => (
                          <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok._uid}
                          />
                        ))}
                      </div>
                      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-0">
                        {item?.features.map((service: any, idx: Key) => (
                          <div key={idx} className="">
                            <div className="flex items-start space-x-2 mb-4">
                              <Image src={Check} alt="Check" className="mt-1" />
                              <div>
                                <h3 className="font-bold text-primary text-sm mb-1">
                                  {service.title}
                                </h3>
                                <p className="text-sm font-normal text-popover">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}


