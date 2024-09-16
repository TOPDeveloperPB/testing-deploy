import {
  IStoryBlokLink,
  IStoryBlokAsset,
  IStoryBlokComponent,
  IStoryBlokComponentString,
} from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/core";
import { storyblokEditable } from "@storyblok/react";

interface ITranslationValueSB extends IStoryBlokComponent {
  link: IStoryBlokLink;
  name: string;
  image: IStoryBlokAsset;
  component: "Translation Value";
  description: IStoryBlokComponentString[];
}

export function ExploreOurUniqueApproachToLanguageTranslation({ blok }: any) {
  const { title, description, translation_values } = blok;

  return (
    <div {...storyblokEditable(blok)} className="grid gap-6">
      <div className="grid gap-4">
        <Text
          as="h2"
          variant="Heading/Heading-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Text
          variant="Paragraph/Paragraph-1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        {(translation_values as ITranslationValueSB[]).map(
          ({ name, image, description, link }) => {
            return (
              <Link
                key={name}
                href={link.url}
                className="bg-f6f6f6 p-6 grid gap-4 content-start rounded-[24px] transition-all hover:opacity-95"
              >
                <Image
                  width={0}
                  height={0}
                  src={image.filename}
                  alt={image.alt || `${name} image`}
                  className="w-full h-[230px] rounded-[16px] object-cover"
                />
                <Text
                  as="h3"
                  variant="Heading/Heading-3"
                  className="text-da5001"
                >
                  {name}
                </Text>
                {description.map(({ value }) => (
                  <Text
                    key={value}
                    variant="Paragraph/Paragraph-2"
                    className="text-7e7e7e"
                    dangerouslySetInnerHTML={{ __html: value }}
                  />
                ))}
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
