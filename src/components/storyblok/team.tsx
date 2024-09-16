import React from "react";
import { StoryblokComponent, SbBlokData } from "@storyblok/react/rsc";

interface TeamProps {
  blok: {
    title: string
    members: SbBlokData[];
  };
}

const Team = ({ blok }: TeamProps) => {
  return (
    <div className="rounded-[32px] bg-[#F6F6F6] p-10 max-w-6xl mx-auto mb-20">
      <h2 className="text-center text-primary text-3xl md:text-5xl font-bold mt-5 mb-10">{blok.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blok.members?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default Team;
