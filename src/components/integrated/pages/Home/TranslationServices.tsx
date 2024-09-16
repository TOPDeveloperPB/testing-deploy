import Link from "next/link";
import Image from "next/image";
import { Button, Text } from "@/components/core";
import { CheckCircleIcon } from "@/public/icons";
import { storyblokEditable } from "@storyblok/react";
import { IStoryBlokComponentString, IStoryBlokLink } from "@/types";

interface ITranslationServiceSB {
  per: string;
  link: IStoryBlokLink;
  price: string;
  style: string;
  title: string;
  format: string;
  options: IStoryBlokComponentString[];
  component: string;
  description: string;
  available_formats: IStoryBlokComponentString[];
}

export function TranslationServices({ blok }: any) {
  const { title, description, image, translation_services } = blok;

  return (
    <div {...storyblokEditable(blok)} className="grid gap-6 grid-cols-3">
      <div className="relative grid gap-4 p-6 content-start rounded-[24px] overflow-hidden">
        <Image
          src={image.filename}
          alt={image.alt || `${title} image`}
          width={0}
          height={0}
          className="w-full h-full absolute inset-0 z-[-1] object-cover"
        />
        <Text
          variant="Heading/Heading-3"
          className="text-ffffff"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Text
          variant="Paragraph/Paragraph-2"
          className="text-ffffff"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      {(translation_services as ITranslationServiceSB[]).map(
        ({
          title,
          description,
          price,
          per,
          style,
          format,
          available_formats,
          options,
          link,
        }) => (
          <div
            key={title}
            className="grid p-6 gap-4 grid-rows-[1fr_auto] bg-ffffff rounded-[24px]"
          >
            <div className="grid gap-4 content-start">
              <div className="grid gap-2 pb-4 border-b border-dadada">
                <Text variant="Heading/Heading-4" className="text-da5001">
                  {title}
                </Text>
                <div className="flex items-end">
                  <Text variant="Heading/Heading-3">${price}</Text>
                  <Text variant="Paragraph/Paragraph-2" className="text-7e7e7e">
                    /{per}
                  </Text>
                </div>
                <Text variant="Paragraph/Paragraph-2" className="text-7e7e7e">
                  {description}
                </Text>
              </div>
              <div className="grid gap-4 pb-4 border-b border-dadada">
                <div className="grid grid-flow-col justify-between items-center">
                  <Text variant="Paragraph/Paragraph-2" className="text-7e7e7e">
                    Translation Style
                  </Text>
                  <Text variant="Paragraph/Paragraph-2">{style}</Text>
                </div>
                <div className="grid grid-flow-col justify-between items-center">
                  <Text variant="Paragraph/Paragraph-2" className="text-7e7e7e">
                    Delivery Format
                  </Text>
                  <div className="flex gap-2 items-center">
                    <Text variant="Paragraph/Paragraph-2">{format}</Text>
                    <div className="group relative cursor-help">
                      <Text className="bg-[#F0F7F7] text-589999 px-2 rounded-full text-center">
                        +{available_formats.length}
                      </Text>
                      <div className="group-hover:grid hidden gap-2 grid-cols-3 shadow-[6px_6px_30px_rgba(181,_181,_181,_0.25)] absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-ffffff w-[calc(80px*3)] p-4 rounded-[12px] after:absolute after:left-1/2 after:-translate-y-[8px] after:bg-ffffff after:-z-10 after:rotate-45 after:w-[16px] after:aspect-square after:-translate-x-1/2">
                        {available_formats.map(({ value }) => (
                          <Text
                            variant="Paragraph/Paragraph-2"
                            key={value}
                            className="bg-f6f6f6 rounded-[2px] text-center"
                          >
                            {value}
                          </Text>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                {options.map(({ value }) => (
                  <div key={value} className="flex gap-2 items-center">
                    <CheckCircleIcon />
                    <Text variant="Paragraph/Paragraph-2">{value}</Text>
                  </div>
                ))}
              </div>
            </div>
            <Link href={link.url}>
              <Button>{link.title}</Button>
            </Link>
          </div>
        )
      )}
    </div>
  );
}
