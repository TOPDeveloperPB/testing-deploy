"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData,
} from "@storyblok/react/rsc";
import Cross from "../../../public/images/pluswhite.svg";

interface NestedBlok {
  _uid: string;
  [key: string]: unknown;
}

interface Blok extends SbBlokData {
  title: string;
  description: [];
  services: [];
  buttons: NestedBlok[];
}

const ProfessionlaServices = ({ blok }: { blok: Blok }) => {
  const [showCard, setShowCard] = useState(null);
  return (
    <div
      className="relative bg-muted my-8 md:my-20 mx-4 md:mx-10"
      {...storyblokEditable(blok)}
    >
      <div className="px-4">
        <h1 className="text-2xl sm:text-4xl md:text-[42px] lg:text-[52px] font-bold text-primary text-center mb-10">
          {" "}
          {blok?.title}
        </h1>
        <div className="flex sm:flex-row  gap-3 items-center justify-center mb-10 md:mb-12 lg:mb-[105px]">
          {blok?.buttons?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>

        <div>
          {blok?.services?.map((nestedBlok, index) => {
            if (showCard === index) {
              return (
                <StoryblokComponent
                  key={index}
                  blok={nestedBlok}
                  onClose={() => setShowCard(null)}
                />
              );
            }
          })}
          {showCard == null && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-3xl lg:max-w-full mx-auto">
              {blok?.services?.map((card: any, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-[24px] shadow-lg group cursor-pointer"
                  //@ts-ignore
                  onClick={() => setShowCard(index)}
                >
                  <div className="vector_bg absolute -top-2 -left-3.5 w-[90px] h-[90px]">
                    <div className="flex items-center justify-center w-12 ml-2 mt-2 h-12 bg-secondary group-hover:bg-primary rounded-full transform -translate-x-3 -translate-y-3 cursor-pointer z-10 transition-all duration-300">
                      <Image src={Cross} alt="Show Details" />
                    </div>
                  </div>
                  <div>
                    <Image
                      src={card.image.filename}
                      alt={card?.title}
                      width={340}
                      height={300}
                      className="object-cover w-full h-72 sm:max-h-[300px] rounded-[24px] transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 py-2 px-4 rounded-full mx-2 bg-gray-200 bg-opacity-75">
                    <p className="text-base font-bold text-primary">
                      {card?.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionlaServices;
