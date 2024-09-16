import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


interface ProjectCardProps {
    blok: {
      title: string;
      description: string;
      date: string;
      image?: any;
      slug?: any;
      tags: string[];
      button?: any[];
    };
  }

const ProjectCard = ({ blok }: ProjectCardProps) => {
  return (
    <Card className="bg-[#fff5f0] p-3 md:p-4" {...storyblokEditable(blok)}>
      <CardHeader className="relative mb-5">
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          width={300}
          height={300}
          className="rounded-2xl w-full min-h-[200px]"
        />
        <div className="absolute top-2 right-0 bg-gray-700 text-white text-xs font-normal px-3 bg-opacity-80 py-2 rounded-full mx-2">
          {blok.date}
        </div>
        <div className="flex justify-between absolute bottom-0 gap-2 m-2">
          {blok.tags.map((item, index) => (
            <Badge
              key={index}
              className="text-xs py-2 px-3 font-normal text-primary bg-white rounded-xl"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="w-full md:max-w-72 text-primary font-bold text-base mb-5">
          {blok.title}
        </p>
      </CardContent>
      {blok?.button?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Card>
  );
};

export default ProjectCard;
