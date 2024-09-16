import Link from "next/link";
import Image from "next/image";
import { Button, Text } from "@/components/core";
import { storyblokEditable } from "@storyblok/react";

export function DidYouKnow({ blok }: any) {
  const { title, description, link, image } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className="relative px-16 py-[72px] grid rounded-[40px] overflow-hidden"
    >
      <Image
        src={image.filename}
        alt={image.alt || `${title} image`}
        width={0}
        height={0}
        className="w-full h-full absolute inset-0 z-[-1] object-cover"
      />
      <div className="grid gap-[42px] max-w-[464px]">
        <div className="grid gap-4">
          <Text
            as="h3"
            variant="Heading/Heading-3"
            className="text-ffffff"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Text
            variant="Paragraph/Paragraph-1"
            className="text-ffffff [&>span]:text-da5001"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Link href={link.url}>
          <Button className="w-[143px]">{link.title}</Button>
        </Link>
      </div>
    </div>
  );
}
