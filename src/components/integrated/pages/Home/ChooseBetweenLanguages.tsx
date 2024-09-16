import Link from "next/link";
import {
  Spanish,
  Portuguese,
  French,
  German,
  Russian,
  Chinese,
  Arabic,
  Italian,
  Japanese,
  Korean,
} from "@/public/icons/flags";
import { ArrowIcon } from "@/public/icons";
import { Button, Text } from "@/components/core";
import { IStoryBlokComponentString } from "@/types";
import { storyblokEditable } from "@storyblok/react";

const languagesFlagsMap = new Map([
  ["Spanish", <Spanish key="Spanish" />],
  ["Portuguese", <Portuguese key="Portuguese" />],
  ["French", <French key="French" />],
  ["German", <German key="German" />],
  ["Russian", <Russian key="Russian" />],
  ["Chinese", <Chinese key="Chinese" />],
  ["Arabic", <Arabic key="Arabic" />],
  ["Italian", <Italian key="Italian" />],
  ["Japanese", <Japanese key="Japanese" />],
  ["Korean", <Korean key="Korean" />],
]);

export function ChooseBetweenLanguages({ blok }: any) {
  const { title, description, link, languages_title, languages } = blok;

  return (
    <div {...storyblokEditable(blok)} className="grid gap-6 grid-cols-2">
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
        <Link href={link.url}>
          <Button
            variant="ghost"
            className="justify-start transition-all hover:gap-4"
          >
            {link.title} <ArrowIcon stroke="#DA5001" />
          </Button>
        </Link>
      </div>
      <div className="bg-f0f7f7 rounded-[24px] grid gap-8 p-8">
        <Text
          variant="Heading/Heading-4"
          className="text-121212"
          dangerouslySetInnerHTML={{ __html: languages_title }}
        />
        <div className="grid gap-[24px_48px] grid-cols-2">
          {(languages as IStoryBlokComponentString[]).map(({ value }) => (
            <div key={value} className="flex gap-2 items-center ">
              {languagesFlagsMap.get(value)}
              <Text variant="Paragraph/Paragraph-1" className="text-121212">
                {value}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
