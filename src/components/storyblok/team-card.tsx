import Image from "next/image";
import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";


interface TeamCards {
    blok: {
      name: string;
      jobTitle: string;
      image?: any;
    };
  }

const TeamCard = ({ blok }: TeamCards) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="rounded-2xl bg-white py-4 px-6 flex flex-col items-center">
        <Image src={blok.image.filename}  alt={blok.image.alt}  width={150} height={150} />
        <h4 className="text-xl font-bold text-center text-secondary my-2.5">{blok.name}</h4>
        <p className="text-lg font-normal text-primary text-center">{blok.jobTitle}</p>
      </div>
    </div>
  );
};

export default TeamCard;
