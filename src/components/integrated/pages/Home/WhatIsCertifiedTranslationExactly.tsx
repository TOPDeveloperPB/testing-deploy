import Link from "next/link";
import Image from "next/image";
import { Button, Text } from "@/components/core";
import { storyblokEditable } from "@storyblok/react";

export function WhatIsCertifiedTranslationExactly({ blok }: any) {
  const { title, description, image, remark, main_button, secondary_button } =
    blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className="px-16 py-10 bg-ffffff rounded-[24px] grid gap-[56px] grid-cols-[1fr_auto] items-center"
    >
      <div className="grid gap-6">
        <Text
          as="h3"
          variant="Heading/Heading-3"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="grid gap-4">
          <Text
            variant="Paragraph/Paragraph-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Text
            variant="Heading/Heading-5"
            dangerouslySetInnerHTML={{ __html: remark }}
          />
        </div>
        <div className="grid grid-flow-col auto-cols-[175px] gap-4">
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
        width={340}
        height={340}
        alt={image.alt ?? "certification"}
      />
    </div>
  );
}
