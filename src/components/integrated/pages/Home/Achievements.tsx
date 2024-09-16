import Image from "next/image";
import { Text } from "@/components/core";
import { storyblokEditable } from "@storyblok/react";
import { IStoryBlokComponentStringWithImage } from "@/types";

export function Achievements({ blok }: any) {
  const { achievements } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-[#FFF5F0] p-8 rounded-[24px] grid grid-cols-4 gap-[21.33px] justify-between items-end"
    >
      {(achievements as IStoryBlokComponentStringWithImage[]).map(
        ({ value, image, _uid }) => (
          <div
            key={_uid}
            className="grid gap-6 justify-items-center content-start"
          >
            <Image
              src={image.filename}
              alt={image.alt || `${value} icon`}
              width={0}
              height={0}
              className="w-full h-full max-h-[64px]"
            />
            <Text
              variant="Paragraph/Paragraph-2"
              className="text-center"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </div>
        )
      )}
    </div>
  );
}
