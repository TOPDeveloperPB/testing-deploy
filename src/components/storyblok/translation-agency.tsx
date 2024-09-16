import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Certificate from "./../../../public/images/certificate.svg";
import Document from "./../../../public/images/sm1.svg";
import Website from "./../../../public/images/sm2.svg";
import Technical from "./../../../public/images/sm3.svg";
import Medical from "./../../../public/images/sm4.svg";
import Legal from "./../../../public/images/sm5.svg";
import Spanish from "./../../../public/images/fl1.svg";
import French from "./../../../public/images/fl2.svg";
import German from "./../../../public/images/fl3.svg";
import Chinese from "./../../../public/images/fl4.svg";
import Japanese from "./../../../public/images/fl5.svg";
import Arabic from "./../../../public/images/fl6.svg";
import Russian from "./../../../public/images/fl7.svg";
import Portuguese from "./../../../public/images/fl8.svg";
import Italian from "./../../../public/images/fl9.svg";
import bulb from "./../../../public/images/bulb.svg";
import { render } from "storyblok-rich-text-react-renderer";
import { Key } from "react";
const cardData = [
  { src: Document, alt: "Document", text: "Document translation" },
  { src: Website, alt: "Website", text: "Website Localization" },
  { src: Technical, alt: "Technical", text: "Technical Translation" },
  { src: Medical, alt: "Medical", text: "Medical Translation" },
  { src: Legal, alt: "Legal", text: "Legal Translation" },
];
const languageData = [
  { src: Spanish, alt: "Spanish", text: "Spanish" },
  { src: French, alt: "", text: "French" },
  { src: German, alt: "", text: "German" },
  { src: Chinese, alt: "", text: " Chinese" },
  { src: Japanese, alt: "", text: "Japanese" },
  { src: Arabic, alt: "", text: "Arabic" },
  { src: Russian, alt: "", text: "Russian" },
  { src: Portuguese, alt: "", text: "Portuguese" },
  { src: Italian, alt: "", text: "Italian" },
  { alt: "", text: "+120" },
];

const TranslationAgency = ({ blok }: any) => {
  return (
    <div className=" bg-muted pb-[72px] sm:pb-24" {...storyblokEditable(blok)}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex  items-center justify-center w-full mb-14">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
            <div>
              <h3 className="text-[32px] lg:text-5xl lg:leading-[70px] font-bold text-primary mb-4 md:mb-7 leading-10">
                {blok?.title}
              </h3>
              <div className="text-base font-normal text-popover max-w-[700px]">
                {render(blok?.description)}
              </div>
            </div>
            <div>
              <Image
                src={blok?.image?.filename}
                alt={blok?.image?.alt}
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
        {blok?.features?.map((item: any, index: Key) => {
          return (
            <Card className="p-6 max-w-6xl mx-auto bg-white" key={index}>
              <CardHeader className="flex items-start">
                {item?.image?.filename && (
                  <Image
                    src={item.image.filename}
                    alt={item.image.alt}
                    width={40}
                    height={40}
                    className="w-14 h-14 bg-[#FFF7ED] p-2 rounded-xl mb-4 lg:mb-6"
                  />
                )}
                <div className="mb-4">
                  <CardTitle className="text-xl font-bold">
                    {item?.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-normal text-popover">
                  {render(item.description)}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
        {blok?.services?.map((item: any, index: Key) => {
          return (
            <Card key={index} className="p-6 max-w-6xl mx-auto bg-white">
              <CardHeader className="flex items-start">
                <div className="mb-2">
                  <CardTitle className="text-base font-bold">
                    {item?.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-normal text-popover mb-4">
                  {render(item.description)}
                </CardDescription>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 mb-4">
                  {item?.features?.map((card: any, index: Key) => (
                    <Card
                      key={index}
                      className="bg-[#fff7f2] p-4 hover:border-2 border-2 border-[#fff7f2] hover:border-secondary transition-all duration-300 cursor-pointer"
                    >
                      {card.image.filename && (
                        <Image
                          src={card.image.filename}
                          alt={card.image.alt}
                          className="mb-3"
                          width={40}
                          height={40}
                        />
                      )}
                      <p className="font-normal text-sm text-primary">
                        {card.title}
                      </p>
                    </Card>
                  ))}
                </div>
                <CardDescription className="text-base font-normal text-popover mb-0 sm:mb-4">
                  {render(item.bottomDescription)}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
        {blok?.languageCoverage?.map((item: any, index: Key) => {
          return (
            <Card className="p-6 max-w-6xl mx-auto bg-white" key={index}>
              <CardHeader className="flex items-start">
                {item?.image?.filename && (
                  <Image
                    src={item?.image.filename}
                    alt={item?.image.alt}
                    width={40}
                    height={40}
                    className="w-14 h-14 bg-[#FFF7ED] p-2 rounded-xl mb-4 lg:mb-6"
                  />
                )}
                <div className="mb-4">
                  <CardTitle className="text-xl font-bold">
                    {item?.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-normal text-popover">
                  {render(item.description)}
                </CardDescription>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 mb-4">
                  {item?.features?.map((card: any, index: Key) => (
                    <Card
                      key={index}
                      className="bg-[#fff7f2] p-4 hover:border-2 border-2 border-[#fff7f2] hover:border-secondary transition-all duration-300 cursor-pointer"
                    >
                      {card.image.filename && (
                        <Image
                          src={card.image.filename}
                          alt={card.image.alt}
                          className="mb-3"
                          width={40}
                          height={40}
                        />
                      )}
                      <p className="font-normal text-sm text-primary">
                        {card.title}
                      </p>
                    </Card>
                  ))}
                </div>
                <CardDescription className="text-base font-normal text-popover mb-0 sm:mb-4">
                  {render(item.bottomDescription)}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TranslationAgency;