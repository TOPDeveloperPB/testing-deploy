import Link from "next/link";
import { Button, Text } from "@/components/core";
import { storyblokEditable } from "@storyblok/react";

export function PartnershipButtons({blok}: any) {
  const { main_button, secondary_button } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className="grid grid-cols-[repeat(2,_350px)] justify-center gap-6"
    >
      <Link href={main_button.url}>
        <Button variant="filledBlack">
          <Text variant="Heading/Heading-6" className="text-ffffff">
            {main_button.title}
          </Text>
        </Button>
      </Link>
      <Link href={secondary_button.url}>
        <Button variant="outlinedBlack">
          <Text variant="Heading/Heading-6">{secondary_button.title}</Text>
        </Button>
      </Link>
    </div>
  );
}
