import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";

interface NewsCardProps {
  blok: {
    title: string;
    description: string;
    date: string;
    image?: any;
    slug?:any;
  };
}

export default function NewsCard({ blok }: NewsCardProps) {
  return (
    <Card {...storyblokEditable(blok)}>
      <CardContent className="group cursor-pointer">
        {blok?.image?.filename && (
          <Image
            src={blok?.image?.filename}
            alt={blok?.image?.alt}
            width={330}
            height={220}
            className="rounded-2xl w-full md:w-[330px] h-ful md:h-[200px] mb-4"
          />
        )}
        <div className="w-full md:max-w-80 mx-auto">
          <Link href={blok?.slug?.cached_url || "/"}>
          <h2 className="text-base text-primary group-hover:text-secondary font-bold mb-2">
            {blok?.title}
          </h2>
          </Link>
          <div className="text-sm font-normal text-popover mb-4">
            {render(blok?.description)}
          </div>
          <p className="text-xs font-normal text-popover">{blok?.date}</p>
        </div>
      </CardContent>
    </Card>
  );
}
