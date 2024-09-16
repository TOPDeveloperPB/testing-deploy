import Link from "next/link";
import Image from "next/image";
import { Button, Text } from "@/components/core";
import { storyblokEditable } from "@storyblok/react";

export function MakeYourNextMove({ blok }: any) {
  const { title, description, main_button, secondary_button, image } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className="p-[48px_56px] grid gap-6 grid-cols-[1fr_auto] bg-[#F0F7F7] rounded-[24px] items-center"
    >
      <div className="grid gap-[56px]">
        <div className="grid gap-4">
          <Text
            as="h3"
            variant="Heading/Heading-3"
            className="text-da5001"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Text
            variant="Paragraph/Paragraph-1"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="flex gap-4 [&>*]:min-w-[175px] [&>*]:w-fit">
          <Link href={main_button.url}>
            <Button>{main_button.title}</Button>
          </Link>
          <Link href={secondary_button.url}>
            <Button variant="outlined">{secondary_button.title}</Button>
          </Link>
        </div>
      </div>
      <Image
        priority
        src={image.filename}
        width={450}
        height={450}
        alt={image.alt ?? "make your next move image"}
      />
    </div>
  );
}
